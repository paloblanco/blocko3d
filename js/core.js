// blocky3D core: palette, tile atlas, voxel meshing, shaders and map transforms.
// Shared by the game runtime (player.html) and the IDE previews (index.html).
import * as THREE from 'three';

// PICO-8 palette (0-15) + PICO-8 "secret" extended palette (16-31).
export const DEFAULT_PALETTE = [
  0x000000, 0x1d2b53, 0x7e2553, 0x008751, 0xab5236, 0x5f574f, 0xc2c3c7, 0xfff1e8,
  0xff004d, 0xffa300, 0xffec27, 0x00e436, 0x29adff, 0x83769c, 0xff77a8, 0xffccaa,
  0x291814, 0x111d35, 0x422136, 0x125359, 0x742f29, 0x49333b, 0xa28879, 0xf3ef7d,
  0xbe1250, 0xff6c24, 0xa8e72e, 0x00b543, 0x065ab5, 0x754665, 0xff6e59, 0xff9d81,
];

export const NCOLORS = 32;
export const MAX_TILES = 64;          // tile indices 0..63; 0 is always empty
export const FACES = ['top', 'side', 'bottom'];
const ATLAS_W = 8 * 3;                // three 8x8 faces side by side
const ATLAS_H = 8 * MAX_TILES;        // one row of faces per tile

export const hexColor = (n) => '#' + (n >>> 0).toString(16).padStart(6, '0').slice(-6);
export const TURN = Math.PI * 2;

// ---------------------------------------------------------------- tiles

export function emptyTile(c = 0) {
  return { top: new Array(64).fill(c), side: new Array(64).fill(c), bottom: new Array(64).fill(c) };
}

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
  m.data[mapIndex(m, x, y, z)] = t & 63;
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
// Side faces have v pointing up so textures are never upside down.
const FACE_DEFS = [
  { n: [0, 1, 0], f: 0, v: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]], uv: [[0, 0], [0, 1], [1, 1], [1, 0]] },
  { n: [0, -1, 0], f: 2, v: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [1, 0, 0], f: 1, v: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [-1, 0, 0], f: 1, v: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [0, 0, 1], f: 1, v: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  { n: [0, 0, -1], f: 1, v: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
];

// Builds a mesh in map space: one quad per block face that touches empty space.
export function buildMapGeometry(m) {
  const pos = [], uv = [], tf = [], idx = [];
  let vi = 0;
  for (let z = 0; z < m.d; z++) for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) {
    const t = m.data[mapIndex(m, x, y, z)];
    if (!t) continue;
    for (const fd of FACE_DEFS) {
      if (mapGet(m, x + fd.n[0], y + fd.n[1], z + fd.n[2])) continue;
      for (let k = 0; k < 4; k++) {
        pos.push(x + fd.v[k][0], y + fd.v[k][1], z + fd.v[k][2]);
        uv.push(fd.uv[k][0], fd.uv[k][1]);
        tf.push(t, fd.f);
      }
      idx.push(vi, vi + 1, vi + 2, vi, vi + 2, vi + 3);
      vi += 4;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aUV', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('aTF', new THREE.Float32BufferAttribute(tf, 2));
  g.setIndex(vi > 65535 ? new THREE.Uint32BufferAttribute(idx, 1) : new THREE.Uint16BufferAttribute(idx, 1));
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

const PAL_GLSL = /* glsl */`
  uniform vec3 uPalette[32];
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (uTrans[idx] > 0.5) discard;          // palt applies to the original index
    return uPalette[int(uRemap[idx] + 0.5)];  // then pal() remap, then the real color
  }
  void writePixel(vec3 c) {
    outColor = vec4(c, 1.0);
    outInfo = vec4((uOutline + 1.0) / 255.0, mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, 1.0);
  }
`;

const drawUniforms = (paletteUniform) => ({
  uPalette: paletteUniform,
  uRemap: { value: identityRemap() },
  uTrans: { value: noTransparency() },
  uOutline: { value: -1 },
  uId: { value: 1 },
});

export function createVoxelMaterial(atlas, paletteUniform) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: { uAtlas: { value: atlas }, ...drawUniforms(paletteUniform) },
    vertexShader: /* glsl */`
      attribute vec2 aUV;
      attribute vec2 aTF;
      varying vec2 vUV;
      varying vec2 vTF;
      void main() {
        vUV = aUV; vTF = aTF;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uAtlas;
      ${PAL_GLSL}
      varying vec2 vUV;
      varying vec2 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${ATLAS_W.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${ATLAS_H.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx));
      }`,
  });
}

export function createSolidMaterial(paletteUniform) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: { uColor: { value: 7 }, ...drawUniforms(paletteUniform) },
    vertexShader: /* glsl */`
      void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uColor;
      ${PAL_GLSL}
      void main() { writePixel(palColor(int(uColor + 0.5))); }`,
  });
}

// ---------------------------------------------------------------- outlines
// The scene renders into a target with two color outputs (color + per-pixel draw info) and a
// depth texture; pixels still at the cleared depth are background. A full-screen pass then copies the color and, where outlines are on, paints
// 1-pixel outlines: a pixel takes the outline color of a 4-neighbor that belongs to an outlined
// draw and sits in front of it, either a different draw, or the same draw with a depth jump
// (so edges inside a map, like the rim of a divot, are outlined too).

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
      layout(location = 0) out highp vec4 outColor;

      float linZ(ivec2 q) {
        float d = texelFetch(tDepth, q, 0).r;
        return uNear * uFar / (uFar - d * (uFar - uNear));
      }
      // nothing was drawn where the depth buffer still holds its cleared value
      bool drawnAt(ivec2 q) { return texelFetch(tDepth, q, 0).r < 1.0; }
      float drawId(vec4 i) { return floor(i.g * 255.0 + 0.5) + 256.0 * floor(i.b * 255.0 + 0.5); }
      bool inside(ivec2 q, ivec2 size) { return q.x >= 0 && q.y >= 0 && q.x < size.x && q.y < size.y; }

      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy);
        outColor = vec4(texelFetch(tColor, p, 0).rgb, 1.0);
        if (uAny == 0) return;   // no outlined draws this frame: plain copy

        ivec2 size = textureSize(tInfo, 0);
        vec4 iP = texelFetch(tInfo, p, 0);
        bool drawnP = drawnAt(p);
        float zP = drawnP ? linZ(p) : 1e9;
        float idP = drawnP ? drawId(iP) : -1.0;

        int best = -1;
        float bestZ = 1e9;
        for (int k = 0; k < 4; k++) {
          ivec2 dir = k == 0 ? ivec2(1, 0) : k == 1 ? ivec2(-1, 0) : k == 2 ? ivec2(0, 1) : ivec2(0, -1);
          ivec2 q = p + dir;
          if (!inside(q, size)) continue;
          if (!drawnAt(q)) continue;
          vec4 iN = texelFetch(tInfo, q, 0);
          float oc = floor(iN.r * 255.0 + 0.5) - 1.0;
          if (oc < 0.0) continue;                       // neighbor has no outline
          float zN = linZ(q);
          bool edge = false;
          if (!drawnP) {
            edge = true;                                // background next to an outlined draw
          } else if (drawId(iN) != idP) {
            edge = zN < zP - 0.002 * zP;                // a different draw, in front of this pixel
          } else if (zN < zP) {
            // Same draw: extend the neighbor's surface one more pixel (1/z is linear across a
            // flat face) and check whether this pixel lies well behind it.
            ivec2 q2 = q + dir;
            if (inside(q2, size) && drawnAt(q2) && drawId(texelFetch(tInfo, q2, 0)) == idP) {
              float pred = 2.0 / zN - 1.0 / linZ(q2);
              edge = pred > 0.0 && zP - 1.0 / pred > 0.25 + 0.03 * zP;
            } else {
              edge = zP - zN > 0.5 + 0.05 * zP;
            }
          }
          if (edge && zN < bestZ) { bestZ = zN; best = int(oc); }
        }
        if (best >= 0) outColor = vec4(uPalette[best], 1.0);
      }`,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  quad.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(quad);
  return { scene, camera: new THREE.Camera(), uniforms: mat.uniforms };
}

export function setupRenderer(canvas, size) {
  THREE.ColorManagement.enabled = false;  // palette colors go to the screen untouched
  const r = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
  r.outputColorSpace = THREE.LinearSRGBColorSpace;
  r.setPixelRatio(1);
  if (size) r.setSize(size, size, false);
  return r;
}

// ---------------------------------------------------------------- cart (de)serialization

export function bytesToB64(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

export function b64ToBytes(b64) {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

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
