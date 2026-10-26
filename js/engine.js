// blocky3D runtime. createEngine() returns the global API a cart runs against.
import * as THREE from 'three';
import {
  DEFAULT_PALETTE, NCOLORS, TURN, hexColor,
  createAtlas, writeAtlas, createMap, mapGet, mapSet, updateTransform, ensureGeometry,
  createPaletteUniform, syncPaletteUniform, identityRemap, noTransparency,
  createVoxelMaterial, createSolidMaterial, setupRenderer, mapsFromCart, tilesFromCart,
  createSceneTarget, createOutlinePass,
  voxFromCart, ensureVoxGeometry, voxMatrix, createVoxMaterial, MAX_VOX,
} from './core.js';
import { drawText, LINE_H } from './font.js';

export const SCREEN = 256;          // square render target, scaled up with crisp pixels
const STEP = 1000 / 60;             // _update runs at a fixed 60 per second

// Keyboard -> PICO-8 style buttons: 0 left, 1 right, 2 up, 3 down, 4 O, 5 X
const KEYMAP = {
  ArrowLeft: 0, KeyA: 0, ArrowRight: 1, KeyD: 1, ArrowUp: 2, KeyW: 2, ArrowDown: 3, KeyS: 3,
  KeyZ: 4, KeyC: 4, KeyN: 4, Space: 4, KeyX: 5, KeyV: 5, KeyM: 5,
};

const vec = (a, b, c) => (Array.isArray(a) ? [+a[0] || 0, +a[1] || 0, +a[2] || 0] : [+a || 0, +b || 0, +c || 0]);

export function createEngine({ canvas, overlay, cart, onError = console.error, onLog = console.log }) {
  const renderer = setupRenderer(canvas, SCREEN);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(90, 1, 0.05, 2000);
  const target = createSceneTarget(SCREEN);
  const camPos = [0, 6, -10], camLook = [0, 0, 0];
  const ctx = overlay.getContext('2d');
  overlay.width = overlay.height = SCREEN;

  let palette = Array.isArray(cart.palette) && cart.palette.length === NCOLORS ? [...cart.palette] : [...DEFAULT_PALETTE];
  const palU = createPaletteUniform(palette);
  const outlinePass = createOutlinePass(target, palU);
  outlinePass.uniforms.uNear.value = camera.near;
  outlinePass.uniforms.uFar.value = camera.far;
  const atlas = createAtlas();
  writeAtlas(atlas, tilesFromCart(cart));
  const maps = mapsFromCart(cart);
  const voxels = voxFromCart(cart);

  // ---- draw state (PICO-8 style: persists until changed)
  let remap = identityRemap();
  let trans = noTransparency();
  let bgColor = 0;
  let outlineColor = -1;   // -1 = no outline (the default)
  let cursorY = 0;
  let drawId = 0, anyOutline = false;

  // ---- per-frame object pools (immediate mode: everything is re-submitted each _draw)
  const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  const sphereGeo = new THREE.SphereGeometry(1, 12, 8);
  const pools = { map: [], vox: [], cube: [], sphere: [], line: [] };
  const used = { map: 0, vox: 0, cube: 0, sphere: 0, line: 0 };

  function take(kind) {
    const pool = pools[kind];
    let o = pool[used[kind]];
    if (!o) {
      if (kind === 'map') {
        o = new THREE.Mesh(undefined, createVoxelMaterial(atlas, palU));
        o.matrixAutoUpdate = false;
      } else if (kind === 'vox') {
        o = new THREE.Mesh(undefined, createVoxMaterial(palU));
        o.matrixAutoUpdate = false;
      } else if (kind === 'line') {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(6), 3));
        o = new THREE.LineSegments(g, createSolidMaterial(palU));
        o.frustumCulled = false;
      } else {
        o = new THREE.Mesh(kind === 'cube' ? cubeGeo : sphereGeo, createSolidMaterial(palU));
      }
      pool.push(o);
      scene.add(o);
    }
    used[kind]++;
    o.visible = true;
    // bake the current draw palette into this draw
    const u = o.material.uniforms;
    for (let i = 0; i < NCOLORS; i++) { u.uRemap.value[i] = remap[i]; u.uTrans.value[i] = trans[i]; }
    u.uOutline.value = outlineColor < 0 ? -1 : remap[outlineColor];
    u.uId.value = ++drawId;
    if (outlineColor >= 0) anyOutline = true;
    return o;
  }

  function getMap(m) {
    const map = maps[m];
    if (!map) throw new Error(`map ${m} does not exist (there are ${maps.length} maps)`);
    return map;
  }

  // world point -> map-space point
  const _v = new THREE.Vector3();
  function toLocal(map, x, y, z) {
    updateTransform(map);
    return _v.set(x, y, z).applyMatrix4(map._inv);
  }

  // ---- input
  const down = new Array(8).fill(false);
  const prev = new Array(8).fill(false);
  const now = new Array(8).fill(false);

  // ---- timing
  let frames = 0;

  // ================================================================= API
  const api = {
    // --- palette
    get palette() { return palette; },
    set palette(v) { palette = v; },
    pal(a, b) {
      if (a === undefined) { remap = identityRemap(); trans = noTransparency(); return; }
      remap[a & 31] = (b ?? a) & 31;
    },
    palt(i, on = true) {
      if (i === undefined) { trans = noTransparency(); return; }
      trans[i & 31] = on ? 1 : 0;
    },
    bg(c) { bgColor = remap[(c | 0) & 31]; },
    outline(c) { outlineColor = c === undefined || c === null || c === false ? -1 : (c | 0) & 31; },

    // --- camera
    cam_set_pos(x, y, z) { camPos.splice(0, 3, ...vec(x, y, z)); },
    cam_set_lookat(x, y, z) { camLook.splice(0, 3, ...vec(x, y, z)); },
    cam_set_fov(f) { camera.fov = Math.max(0.01, Math.min(0.49, +f || 0.25)) * 360; camera.updateProjectionMatrix(); },

    // --- maps
    map_new(w, h, d, origin = [0, 0, 0]) {
      maps.push(createMap(w | 0, h | 0, d | 0, vec(origin)));
      return maps.length - 1;
    },
    map_set_pos(m, x, y, z) { const map = getMap(m); map.pos = vec(x, y, z); map._xfDirty = true; },
    map_set_angle(m, p, y, r) { const map = getMap(m); map.angle = vec(p, y, r); map._xfDirty = true; },
    map_set_origin(m, x, y, z) {
      // keep the map where it is on screen: only the pivot moves
      const map = getMap(m);
      const o = vec(x, y, z);
      updateTransform(map);
      const d = new THREE.Vector3(o[0] - map.origin[0], o[1] - map.origin[1], o[2] - map.origin[2]).applyMatrix4(map._rot);
      map.pos = [map.pos[0] + d.x, map.pos[1] + d.y, map.pos[2] + d.z];
      map.origin = o;
      map._xfDirty = true;
    },
    map(m) {
      const map = getMap(m);
      ensureGeometry(map);
      updateTransform(map);
      const o = take('map');
      o.geometry = map.geometry;
      o.matrix.copy(map._m);
    },
    mget(m, x, y, z) { return mapGet(getMap(m), Math.floor(x), Math.floor(y), Math.floor(z)); },
    mset(m, x, y, z, t) { mapSet(getMap(m), Math.floor(x), Math.floor(y), Math.floor(z), t | 0); },
    msetw(m, x, y, z, t) {
      const map = getMap(m), p = toLocal(map, x, y, z);
      mapSet(map, Math.floor(p.x), Math.floor(p.y), Math.floor(p.z), t | 0);
    },
    mgetw(m, x, y, z, r) {
      const map = getMap(m), p = toLocal(map, x, y, z);
      if (r === undefined) {
        const xi = Math.floor(p.x), yi = Math.floor(p.y), zi = Math.floor(p.z);
        return [mapGet(map, xi, yi, zi), xi, yi, zi];
      }
      return sphereQuery(map, p.x, p.y, p.z, +r);
    },

    // --- vox models: 8 x 8 x 8 voxels = 1 block, placed by their pivot
    vox(n, x, y, z, pitch = 0, yaw = 0, roll = 0, sx = 1, sy = sx, sz = sx) {
      const i = n | 0;
      if (i < 0 || i >= MAX_VOX) throw new Error(`vox ${n} does not exist (models are 0-${MAX_VOX - 1})`);
      const v = voxels[i];
      if (!v) return;                     // an unused slot draws nothing
      const o = take('vox');
      o.geometry = ensureVoxGeometry(v);
      voxMatrix(v, [+x || 0, +y || 0, +z || 0], [+pitch || 0, +yaw || 0, +roll || 0], [+sx, +sy, +sz], o.matrix);
    },

    // --- primitives (color is a palette index)
    cube(x, y, z, s = 1, c = 7) {
      const o = take('cube');
      o.position.set(x, y, z); o.scale.setScalar(s);
      o.material.uniforms.uColor.value = c & 31;
    },
    sphere(x, y, z, r = 0.5, c = 7) {
      const o = take('sphere');
      o.position.set(x, y, z); o.scale.setScalar(r);
      o.material.uniforms.uColor.value = c & 31;
    },
    line3(x1, y1, z1, x2, y2, z2, c = 7) {
      const o = take('line');
      const a = o.geometry.attributes.position;
      a.array.set([x1, y1, z1, x2, y2, z2]); a.needsUpdate = true;
      o.material.uniforms.uColor.value = c & 31;
    },

    // --- 2D overlay text (screen is 256 x 256; 7 x 10 pixel character cells)
    print(str, x, y, c = 7, outlineColor) {
      if (x === undefined) { x = 0; y = cursorY; }
      const col = (i) => hexColor(palette[remap[i & 31]] ?? 0);
      const oc = outlineColor === undefined || outlineColor === null ? null : col(outlineColor);
      drawText(ctx, str, x | 0, y | 0, col(c), oc);
      cursorY = (y | 0) + LINE_H * (String(str).split('\n').length);
    },
    printh(...args) { onLog(args.map(String).join(' ')); },

    // --- input
    btn(i) { return !!now[i]; },
    btnp(i) { return !!now[i] && !prev[i]; },

    // --- time + math helpers (angles in turns, like PICO-8)
    time() { return frames / 60; },
    t() { return frames / 60; },
    rnd(n = 1) { return Array.isArray(n) ? n[Math.floor(Math.random() * n.length)] : Math.random() * n; },
    flr: Math.floor, ceil: Math.ceil, abs: Math.abs, sqrt: Math.sqrt, min: Math.min, max: Math.max,
    sgn(x) { return x < 0 ? -1 : 1; },
    mid(a, b, c) { return Math.max(Math.min(a, b), Math.min(Math.max(a, b), c)); },
    sin(a) { return Math.sin(a * TURN); },
    cos(a) { return Math.cos(a * TURN); },
    atan2(dx, dy) { return ((Math.atan2(dy, dx) / TURN) + 1) % 1; },
  };

  // Sphere vs voxels in map space. Returns the deepest hit with a world-space push-out.
  function sphereQuery(map, cx, cy, cz, r) {
    let best = null, bestDepth = -1;
    const x0 = Math.floor(cx - r), x1 = Math.floor(cx + r);
    const y0 = Math.floor(cy - r), y1 = Math.floor(cy + r);
    const z0 = Math.floor(cz - r), z1 = Math.floor(cz + r);
    for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const t = mapGet(map, x, y, z);
      if (!t) continue;
      const qx = Math.max(x, Math.min(cx, x + 1)), qy = Math.max(y, Math.min(cy, y + 1)), qz = Math.max(z, Math.min(cz, z + 1));
      let dx = cx - qx, dy = cy - qy, dz = cz - qz;
      const dist = Math.hypot(dx, dy, dz);
      if (dist >= r) continue;
      let depth;
      if (dist > 1e-6) {
        depth = r - dist; dx /= dist; dy /= dist; dz /= dist;
      } else {
        // center is inside the block: push out through the nearest face
        const f = [[cx - x, -1, 0, 0], [x + 1 - cx, 1, 0, 0], [cy - y, 0, -1, 0], [y + 1 - cy, 0, 1, 0], [cz - z, 0, 0, -1], [z + 1 - cz, 0, 0, 1]]
          .reduce((a, b) => (b[0] < a[0] ? b : a));
        depth = r + f[0]; dx = f[1]; dy = f[2]; dz = f[3];
      }
      if (depth > bestDepth) { bestDepth = depth; best = [t, x, y, z, dx, dy, dz, depth]; }
    }
    if (!best) return [0, 0, 0, 0, 0, 0, 0, 0];
    const n = new THREE.Vector3(best[4], best[5], best[6]).applyMatrix4(map._rot);
    best[4] = n.x; best[5] = n.y; best[6] = n.z;
    return best;
  }

  // ================================================================= loop
  let hooks = {}, running = false, raf = 0, last = 0, acc = 0;

  function beginDraw() {
    for (const k in used) used[k] = 0;
    ctx.clearRect(0, 0, SCREEN, SCREEN);
    cursorY = 0;
    drawId = 0;
    anyOutline = false;
  }

  function endDraw() {
    for (const k in pools) for (let i = used[k]; i < pools[k].length; i++) pools[k][i].visible = false;
    syncPaletteUniform(palU, palette);
    camera.position.set(...camPos);
    camera.lookAt(...camLook);
    // 1) scene -> color + draw info + depth
    renderer.setRenderTarget(target);
    renderer.setClearColor(palette[bgColor] ?? 0, 1);
    renderer.clear();
    renderer.render(scene, camera);
    // 2) copy to the screen, painting outlines when any draw asked for one
    renderer.setRenderTarget(null);
    outlinePass.uniforms.uAny.value = anyOutline ? 1 : 0;
    renderer.render(outlinePass.scene, outlinePass.camera);
  }

  function guard(fn) {
    try { fn(); return true; } catch (e) { stop(); onError(e); return false; }
  }

  function tick(t) {
    if (!running) return;
    acc += Math.min(t - last, 100);
    last = t;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      acc -= STEP; steps++;
      for (let i = 0; i < 8; i++) { prev[i] = now[i]; now[i] = down[i]; }
      frames++;
      if (hooks._update && !guard(hooks._update)) return;
    }
    if (steps > 0) {
      beginDraw();
      if (hooks._draw && !guard(hooks._draw)) return;
      endDraw();
    }
    raf = requestAnimationFrame(tick);
  }

  function start(h) {
    hooks = h || {};
    beginDraw(); endDraw();   // show the background right away
    if (hooks._init && !guard(hooks._init)) return false;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(tick);
    return true;
  }

  function stop() { running = false; cancelAnimationFrame(raf); }

  function key(e, isDown) {
    const b = KEYMAP[e.code];
    if (b === undefined) return;
    down[b] = isDown;
    e.preventDefault();
  }

  return { api, start, stop, key, maps, renderer };
}
