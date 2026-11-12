// BLOCKO3D core: palette, tile atlas, voxel meshing, shaders and map transforms.
// Shared by the game runtime (player.html) and the IDE previews (index.html).
import * as THREE from 'three';

import {
  DEFAULT_PALETTE, NCOLORS, MAX_TILES, FACES, VOX, MAX_VOX, DEFAULT_PIVOT, hexColor, emptyTile, voxIndex,
  bytesToB64, b64ToBytes,
} from './format.js';
// the format code lives in format.js (no three.js, so Node tools can use it); passed on from here
export * from './format.js';

const ATLAS_W = 8 * 3;                // three 8x8 faces side by side
const ATLAS_H = 8 * MAX_TILES;        // one row of faces per tile

export const TURN = Math.PI * 2;

// ---------------------------------------------------------------- tiles


// Atlas: one byte (palette index) per pixel. Row 0 of a face image is its top row.
export function createAtlas() {
  const data = new Uint8Array(ATLAS_W * ATLAS_H);
  const tex = new THREE.DataTexture(data, ATLAS_W, ATLAS_H, THREE.RedFormat, THREE.UnsignedByteType);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.flipY = false;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}

export function writeAtlas(tex, tiles) {
  const data = tex.image.data;
  data.fill(0);
  for (let t = 1; t < MAX_TILES; t++) {
    const tile = tiles[t];
    if (!tile) continue;
    FACES.forEach((f, fi) => {
      const px = tile[f];
      for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
        // v grows upward in the shader, so image row 0 goes to the highest atlas row
        data[(t * 8 + (7 - r)) * ATLAS_W + fi * 8 + c] = px[r * 8 + c] & 31;
      }
    });
  }
  tex.needsUpdate = true;
}

// ---------------------------------------------------------------- maps

export function createMap(w, h, d, origin = [0, 0, 0], data = null) {
  return {
    w, h, d,
    data: data || new Uint8Array(w * h * d),
    origin: [...origin],
    pos: [0, 0, 0],
    angle: [0, 0, 0],      // [pitch, yaw, roll] in turns
    dirty: true,
    geometry: null,
    _m: new THREE.Matrix4(),
    _inv: new THREE.Matrix4(),
    _rot: new THREE.Matrix4(),
    _xfDirty: true,
  };
}

export const mapIndex = (m, x, y, z) => x + m.w * (y + m.h * z);

export function mapGet(m, x, y, z) {
  if (x < 0 || y < 0 || z < 0 || x >= m.w || y >= m.h || z >= m.d) return 0;
  return m.data[mapIndex(m, x, y, z)];
}

export function mapSet(m, x, y, z, t) {
  if (x < 0 || y < 0 || z < 0 || x >= m.w || y >= m.h || z >= m.d) return;
  m.data[mapIndex(m, x, y, z)] = t & 255;
  m.dirty = true;
}

// Rotation for [pitch, yaw, roll] in turns, applied yaw, then pitch, then roll.
// Conventions: +z is "forward". Positive pitch tips +z up toward +y,
// positive yaw turns +z toward +x, positive roll turns +x toward +y.
const _e = new THREE.Euler();
export function rotationMatrix(angle, out = new THREE.Matrix4()) {
  _e.set(-angle[0] * TURN, angle[1] * TURN, angle[2] * TURN, 'YXZ');
  return out.makeRotationFromEuler(_e);
}

// world = pos + R * (local - origin)
export function updateTransform(m) {
  if (!m._xfDirty) return;
  rotationMatrix(m.angle, m._rot);
  const t1 = new THREE.Matrix4().makeTranslation(-m.origin[0], -m.origin[1], -m.origin[2]);
  const t2 = new THREE.Matrix4().makeTranslation(m.pos[0], m.pos[1], m.pos[2]);
  m._m.copy(t2).multiply(m._rot).multiply(t1);
  m._inv.copy(m._m).invert();
  m._xfDirty = false;
}

// Face definitions: 4 corners (unit cube), CCW from outside, uv per corner, face type.
// Side faces have v pointing up so textures are never upside down. Top and bottom faces are laid
// out like the Map tab's Top view: image columns along +x, the image's top row at the -z edge
// (v = 1 - z), so a tile looks in the 3D view as it does in the editors.
const FACE_DEFS = [
  { n: [0, 1, 0], f: 0, v: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]], uv: [[0, 1], [0, 0], [1, 0], [1, 1]] },
  { n: [0, -1, 0], f: 2, v: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uv: [[0, 1], [1, 1], [1, 0], [0, 0]] },
  { n: [1, 0, 0], f: 1, v: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [-1, 0, 0], f: 1, v: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [0, 0, 1], f: 1, v: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [0, 0, -1], f: 1, v: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
];

// Builds a mesh in map space: one quad per block face that touches empty space.
// Two passes over the blocks: the first counts the open faces, the second writes them straight
// into typed arrays of exactly that size (about 7x faster than growing plain arrays, which
// matters because any mset remeshes the whole map at its next draw).
export function buildMapGeometry(m) {
  const { w, h, d, data } = m, wh = w * h;
  // is face fi of the block at (x, y, z), index i, against empty space (or the map's edge)?
  const open = (x, y, z, i, fi) => {
    switch (fi) {
      case 0: return y === h - 1 || !data[i + w];
      case 1: return y === 0 || !data[i - w];
      case 2: return x === w - 1 || !data[i + 1];
      case 3: return x === 0 || !data[i - 1];
      case 4: return z === d - 1 || !data[i + wh];
      default: return z === 0 || !data[i - wh];
    }
  };
  let quads = 0;
  for (let z = 0, i = 0; z < d; z++) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++, i++) {
    if (!data[i]) continue;
    for (let fi = 0; fi < 6; fi++) if (open(x, y, z, i, fi)) quads++;
  }
  const pos = new Float32Array(quads * 12), uv = new Float32Array(quads * 8), tf = new Float32Array(quads * 12);
  const idx = quads * 4 > 65535 ? new Uint32Array(quads * 6) : new Uint16Array(quads * 6);
  let p = 0, u = 0, f = 0, n = 0, vi = 0;
  for (let z = 0, i = 0; z < d; z++) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++, i++) {
    const t = data[i];
    if (!t) continue;
    for (let fi = 0; fi < 6; fi++) {
      if (!open(x, y, z, i, fi)) continue;
      const fd = FACE_DEFS[fi];
      for (let k = 0; k < 4; k++) {
        const c = fd.v[k];
        pos[p++] = x + c[0]; pos[p++] = y + c[1]; pos[p++] = z + c[2];
        uv[u++] = fd.uv[k][0]; uv[u++] = fd.uv[k][1];
        tf[f++] = t; tf[f++] = fd.f; tf[f++] = fi + 1;   // tile, texture face, direction (1-6, used for outline creases)
      }
      idx[n++] = vi; idx[n++] = vi + 1; idx[n++] = vi + 2; idx[n++] = vi; idx[n++] = vi + 2; idx[n++] = vi + 3;
      vi += 4;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aUV', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('aTF', new THREE.BufferAttribute(tf, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeBoundingSphere();
  return g;
}

export function ensureGeometry(m) {
  if (!m.dirty && m.geometry) return m.geometry;
  if (m.geometry) m.geometry.dispose();
  m.geometry = buildMapGeometry(m);
  m.dirty = false;
  return m.geometry;
}

// ---------------------------------------------------------------- vox models
// A vox model is an 8 x 8 x 8 grid of voxels (x right, y up, z forward). Each byte is 0 for empty
// or palette color + 1, so color 0 (black) stays usable. 8 voxels = 1 block, and the pivot (in
// voxel units, default bottom center) is the point that vox(n, x, y, z) puts at x, y, z.


export function createVox(data = null, pivot = DEFAULT_PIVOT, name = '') {
  return { name, pivot: [...pivot], data: data || new Uint8Array(VOX * VOX * VOX), dirty: true, geometry: null };
}

export function voxGet(v, x, y, z) {
  if (x < 0 || y < 0 || z < 0 || x >= VOX || y >= VOX || z >= VOX) return 0;
  return v.data[voxIndex(x, y, z)];
}

// Mesh in voxel units: one quad per voxel face that touches empty space.
export function buildVoxGeometry(v) {
  const pos = [], col = [], idx = [];
  let vi = 0;
  for (let z = 0; z < VOX; z++) for (let y = 0; y < VOX; y++) for (let x = 0; x < VOX; x++) {
    const c = v.data[voxIndex(x, y, z)];
    if (!c) continue;
    for (let fi = 0; fi < FACE_DEFS.length; fi++) {
      const fd = FACE_DEFS[fi];
      if (voxGet(v, x + fd.n[0], y + fd.n[1], z + fd.n[2])) continue;
      for (let k = 0; k < 4; k++) {
        pos.push(x + fd.v[k][0], y + fd.v[k][1], z + fd.v[k][2]);
        col.push(c - 1, fi + 1);   // palette color, direction (for outline creases)
      }
      idx.push(vi, vi + 1, vi + 2, vi, vi + 2, vi + 3);
      vi += 4;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aCD', new THREE.Float32BufferAttribute(col, 2));
  g.setIndex(new THREE.Uint16BufferAttribute(idx, 1));
  g.computeBoundingSphere();
  return g;
}

export function ensureVoxGeometry(v) {
  if (!v.dirty && v.geometry) return v.geometry;
  if (v.geometry) v.geometry.dispose();
  v.geometry = buildVoxGeometry(v);
  v.dirty = false;
  return v.geometry;
}

// world = pos + R * S * (local - pivot) / 8
const _t1 = new THREE.Matrix4(), _t2 = new THREE.Matrix4(), _r = new THREE.Matrix4(), _sc = new THREE.Matrix4();
export function voxMatrix(v, pos, angle, scale, out) {
  _t1.makeTranslation(-v.pivot[0], -v.pivot[1], -v.pivot[2]);
  _sc.makeScale(scale[0] / VOX, scale[1] / VOX, scale[2] / VOX);
  rotationMatrix(angle, _r);
  _t2.makeTranslation(pos[0], pos[1], pos[2]);
  return out.copy(_t2).multiply(_r).multiply(_sc).multiply(_t1);
}

export function voxFromCart(cart) {
  const out = new Array(MAX_VOX).fill(null);
  (cart.vox || []).forEach((cv, i) => {
    if (!cv || i >= MAX_VOX) return;
    let data = cv.data ? b64ToBytes(cv.data) : null;
    if (!data || data.length !== VOX * VOX * VOX) data = null;
    out[i] = createVox(data, cv.pivot || DEFAULT_PIVOT, cv.name || '');
  });
  return out;
}

// ---------------------------------------------------------------- palette uniforms + shaders

// One shared uniform holds the 32 real colors; every material references it,
// so a palette change updates every map, primitive and texture at once.
export function createPaletteUniform(palette) {
  const u = { value: Array.from({ length: NCOLORS }, () => new THREE.Vector3()) };
  syncPaletteUniform(u, palette);
  return u;
}

export function syncPaletteUniform(u, palette) {
  for (let i = 0; i < NCOLORS; i++) {
    const c = (palette[i] ?? 0) >>> 0;
    u.value[i].set(((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255);
  }
}

export const identityRemap = () => Array.from({ length: NCOLORS }, (_, i) => i);
export const noTransparency = () => new Array(NCOLORS).fill(0);

// 4x4 ordered dither threshold for a screen pixel, 0..1 (fog and the two-color sky)
const BAYER_GLSL = /* glsl */`
  float bayer4(vec2 p) {
    const float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
    ivec2 q = ivec2(mod(p, 4.0));
    return (m[q.x + 4 * q.y] + 0.5) / 16.0;
  }
`;

const PAL_GLSL = /* glsl */`
  uniform vec3 uPalette[32];
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  uniform float uInner;     // 1: outline inner edges too (creases, overlaps); 0: outer outline only
  uniform vec4 uFog;        // fog(): palette index, near, far, on (1) / off (0)
  uniform vec2 uFill;       // fillp(n, c): how much (0 none .. 1 all), palette index
  uniform float uPix;       // render pixels per screen pixel (1, 2 or 3), so the dither stays 256-chunky
  varying vec3 vFogPos;     // this pixel's position from the camera, for its distance
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (uTrans[idx] > 0.5) discard;          // palt applies to the original index
    return uPalette[int(uRemap[idx] + 0.5)];  // then pal() remap, then the real color
  }
  // dir: which way a map face points (1-6), or 0 for primitives. A draw with outline(c, false)
  // writes 7 instead: the outline pass then draws no lines inside it, only around it.
  ${BAYER_GLSL}
  void writePixel(vec3 c, float dir) {
    float oc = uOutline;
    float d = uInner > 0.5 ? dir : 7.0;
    float th = bayer4(floor(gl_FragCoord.xy / uPix));
    // fillp: the fraction n of the pixels (in the dither pattern) take color c; outlines stay
    if (uFill.x > th) c = uPalette[int(uFill.y + 0.5)];
    // fog: from near to far, more and more of the pixels (in a fixed dither pattern) take the fog
    // color. A fogged pixel casts no outline and makes no crease, so far shapes fade out whole.
    if (uFog.w > 0.5) {
      float t = (length(vFogPos) - uFog.y) / max(uFog.z - uFog.y, 0.0001);
      if (t > th) { c = uPalette[int(uFog.x + 0.5)]; oc = -1.0; d = 0.0; }
    }
    outColor = vec4(c, 1.0);
    outInfo = vec4((oc + 1.0) / 255.0, mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, d / 255.0);
  }
`;

const drawUniforms = (paletteUniform) => ({
  uPalette: paletteUniform,
  uRemap: { value: identityRemap() },
  uTrans: { value: noTransparency() },
  uOutline: { value: -1 },
  uId: { value: 1 },
  uInner: { value: 1 },
  uFog: { value: new THREE.Vector4(0, 0, 0, 0) },
  uFill: { value: new THREE.Vector2(0, 0) },
  uPix: { value: 1 },
});

export function createVoxelMaterial(atlas, paletteUniform) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: { uAtlas: { value: atlas }, ...drawUniforms(paletteUniform) },
    vertexShader: /* glsl */`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      varying vec3 vFogPos;
      void main() {
        vUV = aUV; vTF = aTF;
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uAtlas;
      ${PAL_GLSL}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${ATLAS_W.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${ATLAS_H.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`,
  });
}

export function createSolidMaterial(paletteUniform) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: { uColor: { value: 7 }, ...drawUniforms(paletteUniform) },
    vertexShader: /* glsl */`
      varying vec3 vFogPos;
      void main() {
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);   // as before fog, so games without it render the same
      }`,
    fragmentShader: /* glsl */`
      uniform float uColor;
      ${PAL_GLSL}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`,
  });
}

export function createVoxMaterial(paletteUniform) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: drawUniforms(paletteUniform),
    vertexShader: /* glsl */`
      attribute vec2 aCD;
      varying vec2 vCD;
      varying vec3 vFogPos;
      void main() {
        vCD = aCD;
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      ${PAL_GLSL}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`,
  });
}

// ---------------------------------------------------------------- two-color sky
// bg(sky, horizon): a full-screen quad drawn behind everything (first, no depth test or write, so
// the outline pass still sees background there). Each pixel's view ray gives its height above the
// horizon: at or below the horizon it's the horizon color, 45 degrees up and higher the sky color,
// dithered in between. It follows the camera, so the sky stays put when the view tilts.
export function createSkyMesh(paletteUniform) {
  const mat = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: { uPalette: paletteUniform, uSky: { value: new THREE.Vector2(0, 0) }, uPix: { value: 1 } },
    vertexShader: /* glsl */`
      varying vec3 vRay;
      varying vec3 vUp;
      void main() {
        vRay = vec3(position.x / projectionMatrix[0][0], position.y / projectionMatrix[1][1], -1.0);   // view space
        vUp = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;                                         // world up, in view space
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uPalette[32];
      uniform vec2 uSky;    // sky, horizon (palette indices)
      uniform float uPix;   // render pixels per screen pixel
      varying vec3 vRay;
      varying vec3 vUp;
      layout(location = 0) out highp vec4 outColor;
      layout(location = 1) out highp vec4 outInfo;
      ${BAYER_GLSL}
      void main() {
        float t = clamp(dot(normalize(vRay), normalize(vUp)) / 0.7071, 0.0, 1.0);
        int c = t > bayer4(floor(gl_FragCoord.xy / uPix)) ? int(uSky.x + 0.5) : int(uSky.y + 0.5);
        outColor = vec4(uPalette[c], 1.0);
        outInfo = vec4(0.0);   // no outline, no draw
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1e9;   // before every draw
  mesh.visible = false;
  return mesh;
}

// ---------------------------------------------------------------- outlines
// The scene renders into a target with two color outputs (color + per-pixel draw info) and a
// depth texture; pixels still at the cleared depth are background. A full-screen pass then copies the color and, where outlines are on, paints
// 1-pixel outlines: a pixel takes the outline color of a 4-neighbor that belongs to an outlined
// draw and either sits in front of it (a different draw, or the same draw with a depth jump, like
// the rim of a divot) or is part of the same map but faces another way (a crease, like a box's edges).

export function createSceneTarget(size) {
  const rt = new THREE.WebGLRenderTarget(size, size, {
    count: 2,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    generateMipmaps: false,
    depthTexture: new THREE.DepthTexture(size, size),
  });
  return rt;
}

export function createOutlinePass(target, paletteUniform) {
  const mat = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tColor: { value: target.textures[0] },
      tInfo: { value: target.textures[1] },
      tDepth: { value: target.depthTexture },
      uPalette: paletteUniform,
      uNear: { value: 0.05 },
      uFar: { value: 2000 },
      uAny: { value: 0 },
      uMode: { value: 0 },
      uRect: { value: new THREE.Vector4(0, 0, 1e5, 1e5) },   // the view being drawn (clip), in render pixels
    },
    vertexShader: /* glsl */`
      void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      uniform int uAny;
      uniform int uMode;   // 0: paint outlines directly (1x); 1: write the edge mask for growing (2x, 3x)
      uniform vec4 uRect;  // x0, y0, x1, y1 of the view (clip), so lookups never cross into another view
      layout(location = 0) out highp vec4 outColor;

      // depth-buffer value to distance from the camera
      float linZ(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }
      float faceDir(vec4 i) { return floor(i.a * 255.0 + 0.5); }
      float drawId(vec4 i) { return floor(i.g * 255.0 + 0.5) + 256.0 * floor(i.b * 255.0 + 0.5); }

      ivec2 size;
      vec4 iP; float zP, idP, fP; bool drawnP;
      int best; float bestZ, bestId, bestKind;

      // Lookups outside the screen or the view clamp to its edge pixel, which compares as "same
      // surface": no outline along the edge of a view.
      ivec2 clampQ(ivec2 q) { return clamp(q, max(ivec2(0), ivec2(uRect.xy)), min(size - 1, ivec2(uRect.zw))); }

      void check(ivec2 dir) {
        ivec2 q = clampQ(ivec2(gl_FragCoord.xy) + dir);
        float dN = texelFetch(tDepth, q, 0).r;
        if (dN >= 1.0) return;                          // neighbor is background
        vec4 iN = texelFetch(tInfo, q, 0);
        float oc = floor(iN.r * 255.0 + 0.5) - 1.0;
        if (oc < 0.0) return;                           // neighbor has no outline
        float zN = linZ(dN);
        bool edge;
        float kind = 1.0;                               // 1: over something else, 2: depth jump in one draw, 3: crease
        if (!drawnP) {
          edge = true;                                  // background next to an outlined draw
        } else if (drawId(iN) != idP) {
          edge = zN < zP - 0.002 * zP;                  // a different draw, in front of this pixel
        } else if (faceDir(iN) > 6.5) {
          edge = false;                                 // outline(c, false): no lines inside one draw
        } else if (fP > 0.0 && faceDir(iN) > 0.0 && fP != faceDir(iN)) {
          kind = 3.0;
          // Same map, faces pointing different ways: a crease (a box's corner edges, the foot of
          // a pillar). Only the pixel with the larger direction index takes the line, so it stays
          // 1 pixel wide.
          edge = fP > faceDir(iN);
        } else if (zN < zP) {
          kind = 2.0;
          // Same draw: extend the neighbor's surface one more pixel (1/z is linear across a flat
          // face) and check whether this pixel lies well behind it (the rim of a divot).
          ivec2 q2 = clampQ(q + dir);
          float d2 = texelFetch(tDepth, q2, 0).r;
          if (q2 != q && d2 < 1.0 && drawId(texelFetch(tInfo, q2, 0)) == idP) {
            float pred = 2.0 / zN - 1.0 / linZ(d2);
            edge = pred > 0.0 && zP - 1.0 / pred > 0.25 + 0.03 * zP;
          } else {
            edge = zP - zN > 0.5 + 0.05 * zP;
          }
        } else {
          edge = false;
        }
        if (edge && zN < bestZ) { bestZ = zN; best = int(oc); bestId = drawId(iN); bestKind = kind; }
      }

      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy);
        outColor = uMode == 1 ? vec4(0.0) : vec4(texelFetch(tColor, p, 0).rgb, 1.0);
        if (uAny == 0) return;   // no outlined draws this frame: plain copy (or an empty mask)

        size = textureSize(tInfo, 0);
        float dP = texelFetch(tDepth, p, 0).r;
        drawnP = dP < 1.0;      // the depth buffer still holds its cleared value where nothing was drawn
        iP = texelFetch(tInfo, p, 0);
        zP = drawnP ? linZ(dP) : 1e9;
        idP = drawnP ? drawId(iP) : -1.0;
        fP = faceDir(iP);
        best = -1;
        bestZ = 1e9; bestId = 0.0; bestKind = 0.0;
        check(ivec2(1, 0));
        check(ivec2(-1, 0));
        check(ivec2(0, 1));
        check(ivec2(0, -1));
        if (best < 0) return;
        // mask: outline color + 1, the outlined (front) surface's distance, its draw id, the edge kind
        if (uMode == 1) outColor = vec4(float(best) + 1.0, bestZ, bestId, bestKind);
        else outColor = vec4(uPalette[best], 1.0);
      }`,
  });
  return { scene: fullScreen(mat), camera: new THREE.Camera(), uniforms: mat.uniforms };
}

// ---------------------------------------------------------------- outlines at 2x and 3x
// At scale k the 3D view is 256k pixels square. Outlines keep the thickness of one 256-pixel:
// the edge pass writes a 1-pixel edge mask (createOutlinePass, uMode 1), two grow passes widen
// it by k - 1 pixels (across, then down; the nearest outlined surface wins), and a final pass
// paints a pixel only where its edge kind allows, so outlines spread over what's behind an
// object, never into the object itself:
//   1 (over something else): onto the background, or another draw farther away
//   2 (depth jump in one draw): onto the same draw, well behind the outlined surface
//   3 (crease): onto the same draw; creases grow one way only (+x, +y) so they stay k wide

export function createMaskTarget(size) {
  return new THREE.WebGLRenderTarget(size, size, {
    type: THREE.FloatType, format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, generateMipmaps: false, depthBuffer: false,
  });
}

function fullScreen(mat) {
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  quad.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(quad);
  return scene;
}

const FS_VERT = /* glsl */`void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;

export function createGrowPasses(paletteUniform) {
  const grow = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3, depthTest: false, depthWrite: false,
    uniforms: { tMask: { value: null }, uDir: { value: new THREE.Vector2(1, 0) }, uR: { value: 1 }, uRect: { value: new THREE.Vector4(0, 0, 1e5, 1e5) } },
    vertexShader: FS_VERT,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform sampler2D tMask;
      uniform vec2 uDir;
      uniform int uR;
      uniform vec4 uRect;   // the view (clip): growing stops at its edge
      layout(location = 0) out highp vec4 outColor;
      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy), size = textureSize(tMask, 0);
        vec4 best = vec4(0.0);
        for (int d = -2; d <= 2; d++) {
          if (d < -uR || d > uR) continue;
          vec4 m = texelFetch(tMask, clamp(p + ivec2(uDir) * d, max(ivec2(0), ivec2(uRect.xy)), min(size - 1, ivec2(uRect.zw))), 0);
          if (m.r < 0.5) continue;
          if (m.a > 2.5 && d > 0) continue;               // creases only grow toward +x / +y
          if (best.r < 0.5 || m.g < best.g) best = m;     // nearest outlined surface wins
        }
        outColor = best;
      }`,
  });
  const paint = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3, depthTest: false, depthWrite: false,
    uniforms: {
      tColor: { value: null }, tInfo: { value: null }, tDepth: { value: null }, tMask: { value: null },
      uPalette: paletteUniform, uNear: { value: 0.05 }, uFar: { value: 2000 },
    },
    vertexShader: FS_VERT,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform sampler2D tMask;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      layout(location = 0) out highp vec4 outColor;
      float linZ(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }
      float drawId(vec4 i) { return floor(i.g * 255.0 + 0.5) + 256.0 * floor(i.b * 255.0 + 0.5); }
      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy);
        outColor = vec4(texelFetch(tColor, p, 0).rgb, 1.0);
        vec4 m = texelFetch(tMask, p, 0);
        if (m.r < 0.5) return;
        float d = texelFetch(tDepth, p, 0).r;
        bool ok;
        if (d >= 1.0) ok = m.a < 2.5;                     // background: silhouettes only
        else {
          float z = linZ(d), id = drawId(texelFetch(tInfo, p, 0));
          bool same = abs(id - m.b) < 0.5;
          if (m.a > 2.5) ok = same;
          else if (m.a > 1.5) ok = same ? z > m.g + 0.05 + 0.005 * z : z > m.g * 1.002;   // behind the rim
          else ok = !same && z > m.g * 1.002;
        }
        if (ok) outColor = vec4(uPalette[int(m.r - 0.5)], 1.0);
      }`,
  });
  return { growScene: fullScreen(grow), grow: grow.uniforms, paintScene: fullScreen(paint), paint: paint.uniforms, camera: new THREE.Camera() };
}

export function setupRenderer(canvas, size) {
  THREE.ColorManagement.enabled = false;  // palette colors go to the screen untouched
  let r;
  try {
    r = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
  } catch (e) {
    // three.js fails with cryptic messages when the browser won't give a working WebGL 2 context
    // (seen on iPhones: "getShaderPrecisionFormat(...).precision" means the context came back lost).
    const why = typeof WebGL2RenderingContext === 'undefined'
      ? 'This browser has no WebGL 2, which BLOCKO3D needs. Try updating it.'
      : 'This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, ' +
        'restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.';
    throw new Error(why + ' (' + ((e && e.message) || e) + ')');
  }
  r.outputColorSpace = THREE.LinearSRGBColorSpace;
  r.setPixelRatio(1);
  if (size) r.setSize(size, size, false);
  return r;
}

// ---------------------------------------------------------------- cart (de)serialization


export function mapsFromCart(cart) {
  return (cart.maps || []).map((cm) => {
    const data = cm.data ? b64ToBytes(cm.data) : null;
    const m = createMap(cm.w, cm.h, cm.d, cm.origin || [0, 0, 0],
      data && data.length === cm.w * cm.h * cm.d ? data : null);
    m.name = cm.name || '';
    return m;
  });
}

export function tilesFromCart(cart) {
  const tiles = new Array(MAX_TILES).fill(null);
  (cart.tiles || []).forEach((t, i) => { if (i > 0 && i < MAX_TILES && t) tiles[i] = t; });
  return tiles;
}
