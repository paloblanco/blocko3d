// blocky3D runtime. createEngine() returns the global API a cart runs against.
import * as THREE from 'three';
import {
  DEFAULT_PALETTE, NCOLORS, TURN, hexColor,
  createAtlas, writeAtlas, createMap, mapGet, mapSet, updateTransform, ensureGeometry,
  createPaletteUniform, syncPaletteUniform, identityRemap, noTransparency,
  createVoxelMaterial, createSolidMaterial, setupRenderer, mapsFromCart, tilesFromCart,
  createSceneTarget, createOutlinePass, createMaskTarget, createGrowPasses,
  voxFromCart, ensureVoxGeometry, voxMatrix, createVoxMaterial, MAX_VOX,
} from './core.js';
import { drawText, LINE_H, textWidth } from './font.js';
import { SfxPlayer, MAX_SFX, CHANNELS, decodeSfx, decodePattern, MAX_PATTERNS } from './audio.js';

export const SCREEN = 256;          // square render target, scaled up with crisp pixels
const STEP = 1000 / 60;             // _update runs at a fixed 60 per second

// Keyboard -> PICO-8 style buttons: 0 left, 1 right, 2 up, 3 down, 4 O, 5 X
const KEYMAP = {
  ArrowLeft: 0, KeyA: 0, ArrowRight: 1, KeyD: 1, ArrowUp: 2, KeyW: 2, ArrowDown: 3, KeyS: 3,
  KeyZ: 4, KeyC: 4, KeyN: 4, Space: 4, KeyX: 5, KeyV: 5, KeyM: 5,
  Enter: 6, NumpadEnter: 6, KeyP: 6,   // 6 = pause (handled by the engine, like PICO-8)
};

const SAVE_LIMIT = 64 * 1024;   // characters of JSON per game

const slug = (name) => String(name || 'game').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'game';

const vec = (a, b, c) => (Array.isArray(a) ? [+a[0] || 0, +a[1] || 0, +a[2] || 0] : [+a || 0, +b || 0, +c || 0]);

export function createEngine({
  canvas, overlay, cart, onError = console.error, onLog = console.log,
  onRestart = () => location.reload(), onSave = () => {},
}) {
  const renderer = setupRenderer(canvas, SCREEN);
  // Resolution: the 3D view renders at SCREEN * scale (1x, 2x or 3x); text and rectangles stay on
  // the SCREEN-sized overlay. 2x and 3x need float render targets for the outline mask.
  const canHires = renderer.extensions.has('EXT_color_buffer_float');
  const RES_KEY = 'blocky3d.res';   // the player's choice, remembered on this device
  let scale = 1;
  try { scale = canHires ? Math.min(3, Math.max(1, parseInt(localStorage.getItem(RES_KEY), 10) || 1)) : 1; } catch { /* storage blocked */ }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(90, 1, 0.05, 2000);
  let target = createSceneTarget(SCREEN * scale);
  let masks = null;   // two float targets for growing outlines at 2x / 3x
  const camPos = [0, 6, -10], camLook = [0, 0, 0];
  const ctx = overlay.getContext('2d');
  overlay.width = overlay.height = SCREEN;

  let palette = Array.isArray(cart.palette) && cart.palette.length === NCOLORS ? [...cart.palette] : [...DEFAULT_PALETTE];
  const palU = createPaletteUniform(palette);
  const outlinePass = createOutlinePass(target, palU);
  outlinePass.uniforms.uNear.value = camera.near;
  outlinePass.uniforms.uFar.value = camera.far;
  const growPasses = createGrowPasses(palU);
  growPasses.paint.uNear.value = camera.near;
  growPasses.paint.uFar.value = camera.far;

  function setScale(k) {
    scale = canHires ? Math.min(3, Math.max(1, k | 0)) : 1;
    try { localStorage.setItem(RES_KEY, String(scale)); } catch { /* storage blocked */ }
    const size = SCREEN * scale;
    renderer.setSize(size, size, false);
    target.dispose();
    target = createSceneTarget(size);
    if (masks) { masks[0].dispose(); masks[1].dispose(); masks = null; }
    if (scale > 1) masks = [createMaskTarget(size), createMaskTarget(size)];
    const u = outlinePass.uniforms;
    u.tColor.value = target.textures[0]; u.tInfo.value = target.textures[1]; u.tDepth.value = target.depthTexture;
  }
  setScale(scale);
  const atlas = createAtlas();
  writeAtlas(atlas, tilesFromCart(cart));
  const maps = mapsFromCart(cart);
  const sounds = Array.from({ length: MAX_SFX }, (_, i) => (cart.sfx && cart.sfx[i]) || null);
  const decodedSounds = sounds.map((str) => (str ? decodeSfx(str) : null));
  const patterns = Array.from({ length: MAX_PATTERNS }, (_, i) => decodePattern(cart.music && cart.music[i]));
  const audio = new SfxPlayer();
  const saveKey = 'blocky3d.save.' + slug(cart.name);
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
  const sphereGeo = new THREE.SphereGeometry(1, 24, 16);   // round enough to look smooth at 3x
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

  // 2D overlay helpers: palette index -> CSS color (through pal), and sorted whole-pixel corners
  const uiColor = (i) => hexColor(palette[remap[(i | 0) & 31]] ?? 0);
  function rectBounds(x0, y0, x1, y1) {
    x0 = Math.floor(x0); y0 = Math.floor(y0); x1 = Math.floor(x1); y1 = Math.floor(y1);
    return [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)];
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
  // Up to 4 players, PICO-8 style. Player 0 = the keyboard plus the first gamepad; the 2nd, 3rd
  // and 4th connected gamepads are players 1-3. Buttons: 0 left, 1 right, 2 up, 3 down, 4 O, 5 X,
  // 6 pause (handled by the engine).
  const PLAYERS = 4;
  const down = new Array(8).fill(false);                                   // keyboard (player 0)
  const prevP = Array.from({ length: PLAYERS }, () => new Array(8).fill(false));
  const nowP = Array.from({ length: PLAYERS }, () => new Array(8).fill(false));

  // Standard gamepad layout: d-pad 12-15, face buttons 0 A, 1 B, 2 X, 3 Y, 9 Start; left stick axes 0/1.
  const DEAD = 0.5;
  function readPad(pad, out) {
    const b = (i) => !!(pad.buttons[i] && pad.buttons[i].pressed);
    const ax = pad.axes[0] || 0, ay = pad.axes[1] || 0;
    out[0] = b(14) || ax < -DEAD;
    out[1] = b(15) || ax > DEAD;
    out[2] = b(12) || ay < -DEAD;
    out[3] = b(13) || ay > DEAD;
    out[4] = b(0) || b(2);          // O: A or X
    out[5] = b(1) || b(3);          // X: B or Y
    out[6] = b(9);                  // Start: pause
  }

  const padState = Array.from({ length: PLAYERS }, () => new Array(8).fill(false));
  function pollInput() {
    for (const st of padState) st.fill(false);
    let pads = [];
    try { pads = navigator.getGamepads ? [...navigator.getGamepads()] : []; } catch { pads = []; }
    pads.filter((pd) => pd && pd.connected).sort((a, c) => a.index - c.index).slice(0, PLAYERS)
      .forEach((pd, p) => readPad(pd, padState[p]));
    for (let p = 0; p < PLAYERS; p++) {
      for (let i = 0; i < 8; i++) {
        prevP[p][i] = nowP[p][i];
        nowP[p][i] = padState[p][i] || (p === 0 && down[i]);
      }
    }
  }
  const pauseTapped = () => nowP.some((pl, p) => pl[6] && !prevP[p][6]);

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
    // oc: outline color (omit, null or -1 for none); sx, sy: whole-number scale (sy defaults to sx)
    print(str, x, y, c = 7, oc = null, sx = 1, sy = sx) {
      if (x === undefined) { x = 0; y = cursorY; }
      sx = Math.max(1, Math.round(+sx || 1)); sy = Math.max(1, Math.round(+sy || sx));
      const outlined = oc !== undefined && oc !== null && oc !== false && oc >= 0;
      const end = drawText(ctx, str, x | 0, y | 0, uiColor(c), outlined ? uiColor(oc) : null, sx, sy);
      cursorY = (y | 0) + LINE_H * sy * (String(str).split('\n').length);
      return end;
    },
    // 2D rectangles on the same layer as print; both corners included, like PICO-8
    rect(x0, y0, x1, y1, c = 7) {
      const [l, t, r, b] = rectBounds(x0, y0, x1, y1);
      ctx.fillStyle = uiColor(c);
      ctx.fillRect(l, t, r - l + 1, 1);
      ctx.fillRect(l, b, r - l + 1, 1);
      ctx.fillRect(l, t, 1, b - t + 1);
      ctx.fillRect(r, t, 1, b - t + 1);
    },
    rectfill(x0, y0, x1, y1, c = 7) {
      const [l, t, r, b] = rectBounds(x0, y0, x1, y1);
      ctx.fillStyle = uiColor(c);
      ctx.fillRect(l, t, r - l + 1, b - t + 1);
    },
    printh(...args) { onLog(args.map(String).join(' ')); },

    // --- sound: n is a sound number (0-63) or a sound string from the Sfx tab
    // sfx(n) plays on a free channel; sfx(n, ch) on channel ch (0-3);
    // sfx(-1) stops everything, sfx(-1, ch) stops a channel, sfx(-2, ch) lets a loop finish.
    sfx(n, channel = -1, offset = 0, length = 32) {
      if (n === -1) { audio.stop(channel); return; }
      if (n === -2) { audio.release(channel); return; }
      const str = typeof n === 'string' ? n : sounds[n | 0];
      if (typeof n === 'string' && !decodeSfx(n)) throw new Error('sfx: that string is not a sound from the Sfx tab');
      if (!str) return;                  // an empty slot plays nothing
      audio.play(str, channel < CHANNELS ? channel : -1, offset, length);
    },

    // music(n) plays from pattern n of the Music tab; music(-1) stops.
    // fade: milliseconds to fade in (or out, with -1).
    music(n, fade = 0) {
      if (n < 0) { audio.musicStop(fade); return; }
      if ((n | 0) >= MAX_PATTERNS) throw new Error(`music ${n} does not exist (patterns are 0-${MAX_PATTERNS - 1})`);
      audio.music(() => patterns, () => decodedSounds, n | 0, fade);
    },

    // --- persistent data: any JSON value, kept in this browser, per game name
    save(value) {
      try {
        if (value === undefined || value === null) { localStorage.removeItem(saveKey); onSave(null); return true; }
        const json = JSON.stringify(value);
        if (json.length > SAVE_LIMIT) throw new Error(`save: data is too big (${json.length} characters, the limit is ${SAVE_LIMIT})`);
        localStorage.setItem(saveKey, json);
        onSave(json);
        return true;
      } catch (e) {
        if (e.message.startsWith('save:')) throw e;
        return false;                    // storage blocked (private window, etc.)
      }
    },
    load() {
      try { const json = localStorage.getItem(saveKey); return json === null ? null : JSON.parse(json); }
      catch { return null; }
    },

    // --- input
    // p: player 0-3 (0 = keyboard + first gamepad)
    btn(i, p = 0) { const pl = nowP[p | 0]; return !!(pl && pl[i | 0]); },
    btnp(i, p = 0) { const pl = nowP[p | 0]; return !!(pl && pl[i | 0] && !prevP[p | 0][i | 0]); },

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
    const u = outlinePass.uniforms;
    u.uAny.value = anyOutline ? 1 : 0;
    if (scale === 1 || !anyOutline) {
      u.uMode.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(outlinePass.scene, outlinePass.camera);
      return;
    }
    // 2x / 3x: 1-pixel edge mask -> grow across -> grow down -> paint where allowed
    const g = growPasses;
    u.uMode.value = 1;
    renderer.setRenderTarget(masks[0]);
    renderer.render(outlinePass.scene, outlinePass.camera);
    g.grow.uR.value = scale - 1;
    g.grow.tMask.value = masks[0].texture; g.grow.uDir.value.set(1, 0);
    renderer.setRenderTarget(masks[1]);
    renderer.render(g.growScene, g.camera);
    g.grow.tMask.value = masks[1].texture; g.grow.uDir.value.set(0, 1);
    renderer.setRenderTarget(masks[0]);
    renderer.render(g.growScene, g.camera);
    g.paint.tColor.value = target.textures[0]; g.paint.tInfo.value = target.textures[1];
    g.paint.tDepth.value = target.depthTexture; g.paint.tMask.value = masks[0].texture;
    renderer.setRenderTarget(null);
    renderer.render(g.paintScene, g.camera);
  }

  function guard(fn) {
    try { fn(); return true; } catch (e) { stop(); onError(e); return false; }
  }

  // ---- pause menu (Enter or P), drawn on the 2D overlay over the frozen game
  const MENU = canHires ? ['Resume', 'Restart', 'Screenshot', 'Resolution'] : ['Resume', 'Restart', 'Screenshot'];
  let paused = false, menuSel = 0, frozen = null, note = '', noteUntil = 0;

  function setPaused(p) {
    paused = p;
    if (p) {
      frozen = ctx.getImageData(0, 0, SCREEN, SCREEN);   // the game's own overlay, kept for screenshots
      menuSel = 0; note = '';
      audio.suspend();
    } else {
      ctx.putImageData(frozen, 0, 0);
      audio.resume();
    }
  }

  function drawMenu() {
    ctx.putImageData(frozen, 0, 0);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(0, 0, SCREEN, SCREEN);
    const w = 156, h = 26 + MENU.length * 14, x = (SCREEN - w) >> 1, y = (SCREEN - h) >> 1;
    ctx.fillStyle = hexColor(DEFAULT_PALETTE[0]); ctx.fillRect(x, y, w, h);
    ctx.fillStyle = hexColor(DEFAULT_PALETTE[7]);
    ctx.fillRect(x, y, w, 1); ctx.fillRect(x, y + h - 1, w, 1); ctx.fillRect(x, y, 1, h); ctx.fillRect(x + w - 1, y, 1, h);
    drawText(ctx, 'Paused', x + ((w - textWidth('Paused')) >> 1), y + 4, hexColor(DEFAULT_PALETTE[6]));
    MENU.forEach((label, i) => {
      const on = i === menuSel;
      const text = label === 'Resolution' ? `Resolution < ${scale}x >` : label;
      drawText(ctx, (on ? '> ' : '  ') + text, x + 8, y + 20 + i * 14, hexColor(DEFAULT_PALETTE[on ? 10 : 7]));
    });
    if (note && performance.now() < noteUntil) {
      drawText(ctx, note, (SCREEN - textWidth(note)) >> 1, y + h + 6, hexColor(DEFAULT_PALETTE[11]), hexColor(DEFAULT_PALETTE[0]));
    }
  }

  // The game screen without the menu, at the active resolution (256, 512 or 768 square), as a PNG.
  function screenshot() {
    const S = SCREEN * scale;
    const out = document.createElement('canvas');
    out.width = out.height = S;
    const o = out.getContext('2d');
    o.imageSmoothingEnabled = false;
    o.drawImage(canvas, 0, 0, S, S);
    const ui = document.createElement('canvas');
    ui.width = ui.height = SCREEN;
    ui.getContext('2d').putImageData(frozen, 0, 0);
    o.drawImage(ui, 0, 0, S, S);
    const stamp = new Date().toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_');
    const name = `${slug(cart.name)}_${stamp}.png`;
    out.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, 'image/png');
    note = 'Screenshot saved'; noteUntil = performance.now() + 1500;
    onLog('screenshot saved: ' + name);
  }

  function menuUpdate() {
    // any player can drive the pause menu
    const pressed = (i) => nowP.some((pl, p) => pl[i] && !prevP[p][i]);
    if (pressed(2)) menuSel = (menuSel + MENU.length - 1) % MENU.length;
    if (pressed(3)) menuSel = (menuSel + 1) % MENU.length;
    if (MENU[menuSel] === 'Resolution' && (pressed(0) || pressed(1))) changeRes(pressed(1) ? 1 : -1);
    if (pressed(4) || pressed(5) || pressed(6)) {
      const choice = pressed(6) ? 'Resume' : MENU[menuSel];
      if (choice === 'Resume') setPaused(false);
      else if (choice === 'Restart') { stop(); onRestart(); }
      else if (choice === 'Screenshot') screenshot();
      else if (choice === 'Resolution') changeRes(1);
    }
  }

  // Cycle 1x -> 2x -> 3x, and redraw the paused frame at the new resolution.
  function changeRes(step) {
    setScale(((scale - 1 + step + 3) % 3) + 1);
    ctx.clearRect(0, 0, SCREEN, SCREEN);
    beginDraw();
    if (hooks._draw && !guard(hooks._draw)) return;
    endDraw();
    frozen = ctx.getImageData(0, 0, SCREEN, SCREEN);
  }

  function tick(t) {
    if (!running) return;
    acc += Math.min(t - last, 100);
    last = t;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      acc -= STEP; steps++;
      pollInput();
      if (paused) { menuUpdate(); if (!running) return; continue; }
      if (pauseTapped()) { setPaused(true); continue; }
      frames++;
      if (hooks._update && !guard(hooks._update)) return;
    }
    if (steps > 0) {
      if (paused) drawMenu();
      else {
        beginDraw();
        if (hooks._draw && !guard(hooks._draw)) return;
        endDraw();
      }
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

  function stop() { running = false; cancelAnimationFrame(raf); audio.stop(); audio.musicStop(); }

  function key(e, isDown) {
    if (isDown) audio.unlock();   // browsers only allow sound after the player does something
    const b = KEYMAP[e.code];
    if (b === undefined) return;
    down[b] = isDown;
    e.preventDefault();
  }

  return { api, start, stop, key, maps, renderer, unlockAudio: () => audio.unlock(), get paused() { return paused; }, get scale() { return scale; }, setScale };
}
