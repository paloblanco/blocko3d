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
  onRestart = () => location.reload(), onSave = () => {},   // boot passes a soft restart (see reset)
  onCover = null,   // the IDE passes this: the pause menu gets 'Capture cover' (never in exports)
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
  let outlineInner = true; // false: outline(c, false), only the outer outline, no inner edges
  let cursorY = 0;
  let drawId = 0, anyOutline = false;
  // clip(): a rectangle of the screen (inclusive corners, screen pixels) or null for all of it.
  // Each clip() starts a new view; a view keeps the 3D draws made while it's current and is drawn
  // in its rectangle with the camera, fov and bg as they are when the view ends (the next clip()
  // or the end of _draw). A game that never calls clip() has one full-screen view, as before.
  let clipRect = null, fovDeg = 90;
  let views = [], curView = null, lastViews = [], inDraw = false;
  const FULL = [0, 0, SCREEN - 1, SCREEN - 1];

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
    u.uInner.value = outlineInner ? 1 : 0;
    u.uId.value = ++drawId;
    if (outlineColor >= 0) anyOutline = true;
    o.userData.view = curView ? curView.i : 0;
    if (curView) curView.n++;
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
  // and 4th connected gamepads are players 1-3. Buttons:
  //   0 left, 1 right, 2 up, 3 down, 4 O, 5 X        (keyboard and gamepad)
  //   6 Start / pause (handled by the engine; Enter or P on the keyboard)
  //   7 A, 8 B, 9 X, 10 Y, 11 LB, 12 RB, 13 LT, 14 RT, 15 Select, 16 L3, 17 R3, 18 Home   (gamepad only)
  //   19 mouse left (or a tap), 20 mouse right, 21 mouse middle   (player 0, mouse modes 1 and 2)
  const PLAYERS = 4, NBTN = 22;
  const down = new Array(NBTN).fill(false);                                  // keyboard (player 0)
  const prevP = Array.from({ length: PLAYERS }, () => new Array(NBTN).fill(false));
  const nowP = Array.from({ length: PLAYERS }, () => new Array(NBTN).fill(false));
  const sticks = Array.from({ length: PLAYERS }, () => [[0, 0], [0, 0]]);   // raw left / right sticks

  // Browser "standard" gamepad layout: face buttons 0 A, 1 B, 2 X, 3 Y; 4 LB, 5 RB, 6 LT, 7 RT,
  // 8 Select, 9 Start, 10 L3, 11 R3, 12-15 d-pad up/down/left/right, 16 Home; axes 0/1 left
  // stick, 2/3 right stick.
  const DEAD = 0.5;
  const EXTRA = [[7, 0], [8, 1], [9, 2], [10, 3], [11, 4], [12, 5], [13, 6], [14, 7], [15, 8], [16, 10], [17, 11], [18, 16]];
  function readPad(pad, out, st) {
    const b = (i) => !!(pad.buttons[i] && pad.buttons[i].pressed);
    const ax = (i) => (Number.isFinite(pad.axes[i]) ? pad.axes[i] : 0);
    out[0] = b(14) || ax(0) < -DEAD;
    out[1] = b(15) || ax(0) > DEAD;
    out[2] = b(12) || ax(1) < -DEAD;
    out[3] = b(13) || ax(1) > DEAD;
    out[4] = b(0) || b(2);          // O: A or X
    out[5] = b(1) || b(3);          // X: B or Y
    out[6] = b(9);                  // Start: pause
    for (const [i, j] of EXTRA) out[i] = b(j);
    st[0][0] = ax(0); st[0][1] = ax(1);
    st[1][0] = ax(2); st[1][1] = ax(3);
  }

  const padState = Array.from({ length: PLAYERS }, () => new Array(NBTN).fill(false));
  function pollInput() {
    takeMouse();
    for (const s of padState) s.fill(false);
    for (const st of sticks) { st[0][0] = st[0][1] = st[1][0] = st[1][1] = 0; }
    let pads = [];
    try { pads = navigator.getGamepads ? [...navigator.getGamepads()] : []; } catch { pads = []; }
    pads.filter((pd) => pd && pd.connected).sort((a, c) => a.index - c.index).slice(0, PLAYERS)
      .forEach((pd, p) => readPad(pd, padState[p], sticks[p]));
    // the on-screen analog circle (touch_set_mode(1)) is player 0's left stick when the pad's is centered
    if (Math.hypot(touchStick[0], touchStick[1]) > 0 && Math.hypot(sticks[0][0][0], sticks[0][0][1]) <= STICK_DEAD) {
      sticks[0][0][0] = touchStick[0]; sticks[0][0][1] = touchStick[1];
    }
    for (let p = 0; p < PLAYERS; p++) {
      for (let i = 0; i < NBTN; i++) {
        prevP[p][i] = nowP[p][i];
        nowP[p][i] = padState[p][i] || (p === 0 && (down[i] || held[i] || tapped[i]));
      }
    }
    tapped.fill(false);
  }

  // A stick as [x, y], each -1..1 (right and down are positive). A small round dead zone reads as
  // exactly 0, and the rest is rescaled so the edge of the dead zone is 0. If the left stick is
  // centered, it falls back to the d-pad / arrow keys, so analog code also works on a keyboard.
  const STICK_DEAD = 0.15;
  function readStick(i, p) {
    const pl = nowP[p];
    if (!pl) return [0, 0];
    const [x, y] = sticks[p][i ? 1 : 0];
    const m = Math.hypot(x, y);
    if (m > STICK_DEAD) {
      const k = Math.min(1, (m - STICK_DEAD) / (1 - STICK_DEAD)) / m;
      return [x * k, y * k];
    }
    if (i) return [0, 0];
    const dx = (pl[1] ? 1 : 0) - (pl[0] ? 1 : 0), dy = (pl[3] ? 1 : 0) - (pl[2] ? 1 : 0);
    const n = dx && dy ? Math.SQRT1_2 : 1;   // diagonals have length 1 too
    return [dx * n, dy * n];
  }
  // ---- mouse and touch, by mode: 0 off (default), 1 click (position + buttons), 2 capture
  // (pointer lock: movement for camera control; locks on the next click, and losing it pauses)
  let mouseMode = 0;
  let mx = 0, my = 0;                  // position in screen pixels (0-255 on the screen)
  let dxAcc = 0, dyAcc = 0, wheelAcc = 0;
  let mdx = 0, mdy = 0, mwheel = 0;    // what the game sees, captured once per update
  let touchId = null, tlx = 0, tly = 0;
  let menuHover = -1, menuClick = -1, menuRects = [];
  const MBTN = { 0: 19, 2: 20, 1: 21 };   // DOM mouse button -> engine button
  const tapped = new Array(NBTN).fill(false);   // a click shorter than one update still counts once
  const held = new Array(NBTN).fill(false);     // on-screen touch buttons (player 0)
  const touchStick = [0, 0];                    // the on-screen analog circle, -1..1, right and down positive
  // Which touch control the page shows on the left: 0 d-pad, 1 analog circle, 2 left/right, 3 up/down.
  // The page (js/shell.js) listens through onTouchMode; while paused it always shows the d-pad.
  let touchMode = 0, onTouchMode = null;
  const showTouchMode = () => { if (onTouchMode) onTouchMode(paused ? 0 : touchMode); };
  const press = (b) => { down[b] = tapped[b] = true; };

  const locked = () => document.pointerLockElement === overlay;
  // What the player last pressed with: 'mouse', 'touch' or 'pen'. Resuming only captures the mouse
  // again after a mouse press. On a phone, a capture granted by the Resume tap sends every touch to
  // the game screen, so the d-pad and drag-to-look went dead (a reported bug).
  let lastPointer = 'mouse';
  window.addEventListener('pointerdown', (e) => { lastPointer = e.pointerType || 'mouse'; }, true);
  function toScreen(e) {
    const r = overlay.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * SCREEN, ((e.clientY - r.top) / r.height) * SCREEN];
  }
  function requestLock() {
    try { const pr = overlay.requestPointerLock(); if (pr && pr.catch) pr.catch(() => {}); } catch { /* not allowed now: the next click tries again */ }
  }
  function takeMouse() {   // once per update step
    mdx = dxAcc; mdy = dyAcc; mwheel = wheelAcc;
    dxAcc = dyAcc = wheelAcc = 0;
  }
  function setMouseMode(m) {
    mouseMode = [0, 1, 2].includes(m | 0) ? m | 0 : 0;
    overlay.style.touchAction = mouseMode ? 'none' : '';
    for (const b of [19, 20, 21]) down[b] = false;
    touchId = null;
    if (mouseMode !== 2 && locked()) document.exitPointerLock();
  }
  // which pause menu item is under a screen point, or -1
  const menuItemAt = (x, y) => menuRects.findIndex((r) => x >= r[0] && x < r[0] + r[2] && y >= r[1] && y < r[1] + r[3]);

  overlay.addEventListener('contextmenu', (e) => { if (mouseMode) e.preventDefault(); });
  overlay.addEventListener('mousedown', (e) => {
    if (!mouseMode) return;
    if (!locked()) [mx, my] = toScreen(e);
    if (paused) { const i = menuItemAt(mx, my); if (i >= 0 && e.button === 0) menuClick = i; return; }
    if (mouseMode === 2 && !locked()) { requestLock(); return; }   // the click that captures doesn't count
    if (MBTN[e.button] !== undefined) press(MBTN[e.button]);
  });
  window.addEventListener('mouseup', (e) => { if (MBTN[e.button] !== undefined) down[MBTN[e.button]] = false; });
  window.addEventListener('mousemove', (e) => {
    if (!mouseMode) return;
    if (!locked()) {
      [mx, my] = toScreen(e);
      if (paused) { const i = menuItemAt(mx, my); if (i >= 0) menuHover = i; }
    }
    // in capture mode, a mouse that isn't captured yet doesn't turn anything (moving it to the game
    // to click would spin the view); touch drags still count, they come through pointermove
    if (!paused && (mouseMode !== 2 || locked())) { dxAcc += e.movementX || 0; dyAcc += e.movementY || 0; }
  });
  overlay.addEventListener('wheel', (e) => {
    if (!mouseMode) return;
    e.preventDefault();
    wheelAcc += e.deltaMode === 1 ? e.deltaY / 3 : e.deltaMode === 2 ? e.deltaY : e.deltaY / 100;   // in notches, down positive
  }, { passive: false });

  // Touch: in mode 1 a tap is a left click at that spot; in mode 2 dragging gives movement.
  overlay.addEventListener('pointerdown', (e) => {
    if (!mouseMode || e.pointerType === 'mouse' || touchId !== null) return;
    e.preventDefault();             // no emulated mouse events after this
    touchId = e.pointerId;
    try { overlay.setPointerCapture(e.pointerId); } catch { /* the pointer is already gone */ }
    if (mouseMode === 1 || paused) [mx, my] = toScreen(e);
    tlx = e.clientX; tly = e.clientY;
    if (paused) { const i = menuItemAt(mx, my); if (i >= 0) menuClick = i; return; }
    if (mouseMode === 1) press(19);
  });
  overlay.addEventListener('pointermove', (e) => {
    if (e.pointerId !== touchId) return;
    if (mouseMode === 1) [mx, my] = toScreen(e);
    if (!paused) { dxAcc += e.clientX - tlx; dyAcc += e.clientY - tly; }
    tlx = e.clientX; tly = e.clientY;
  });
  const touchEnd = (e) => { if (e.pointerId === touchId) { touchId = null; down[19] = false; } };
  overlay.addEventListener('pointerup', touchEnd);
  overlay.addEventListener('pointercancel', touchEnd);

  // Losing capture (Esc, switching windows) pauses the game, like most mouse-look games.
  document.addEventListener('pointerlockchange', () => {
    if (!locked() && mouseMode === 2 && running && !paused) setPaused(true);
  });

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
    // outline(c): outlines in color c, inner edges included; outline(c, false): only around the
    // outside of each draw; outline(): none
    outline(c, inner = true) {
      outlineColor = c === undefined || c === null || c === false ? -1 : (c | 0) & 31;
      outlineInner = outlineColor < 0 || inner !== false;
    },

    // --- camera
    cam_set_pos(x, y, z) { camPos.splice(0, 3, ...vec(x, y, z)); },
    cam_set_lookat(x, y, z) { camLook.splice(0, 3, ...vec(x, y, z)); },
    // fov in turns, across the longer side of the view (on the square screen: both ways)
    cam_set_fov(f) { fovDeg = Math.max(0.01, Math.min(0.49, +f || 0.25)) * 360; },
    // clip(x0, y0, x1, y1): only draw inside this rectangle (corners included, screen pixels), 3D
    // and 2D alike; clip() draws everywhere again. Each clip() starts a new 3D view, centered in
    // its rectangle, drawn with the camera as set by the time the view ends.
    clip(x0, y0, x1, y1) {
      if (x0 === undefined) clipRect = null;
      else {
        const [l, t, r, b] = rectBounds(x0, y0, x1, y1);
        clipRect = [Math.max(0, l), Math.max(0, t), Math.min(SCREEN - 1, r), Math.min(SCREEN - 1, b)];
      }
      if (inDraw) { endView(); startView(); }
      apply2dClip();
    },

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
    // first block hit along a ray: [t, xi, yi, zi, nx, ny, nz, d]; n is the face hit as a grid
    // direction, so mset(m, xi + nx, yi + ny, zi + nz, t) places a block on it
    mray(m, ox, oy, oz, dx, dy, dz, maxd = 100) {
      return rayQuery(getMap(m), +ox || 0, +oy || 0, +oz || 0, +dx || 0, +dy || 0, +dz || 0, +maxd || 0);
    },
    // a point in map m's own grid -> where it is in the world now, and back (not rounded to cells,
    // unlike mgetw). Both use the map's current pos, origin and angle, like map() and mgetw().
    mtow(m, x, y, z) {
      const map = getMap(m);
      updateTransform(map);
      _v.set(+x || 0, +y || 0, +z || 0).applyMatrix4(map._m);
      return [_v.x, _v.y, _v.z];
    },
    wtom(m, x, y, z) {
      const p = toLocal(getMap(m), +x || 0, +y || 0, +z || 0);
      return [p.x, p.y, p.z];
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

    // --- mouse and touch: mouse_set_mode(0 off | 1 click | 2 capture)
    mouse_set_mode(m) { setMouseMode(m); },
    mouse_pos() { return [mx, my]; },                 // screen pixels, like print and rect
    mouse_delta() { return [mdx, mdy]; },             // movement since the last update, in pixels
    mouse_wheel() { return mwheel; },                 // scroll since the last update, in notches (down +)
    mouse_locked() { return locked(); },              // is the mouse captured (mode 2)?
    // the ray from the camera through the cursor (the screen center in capture mode):
    // [ox, oy, oz, dx, dy, dz], d of length 1
    // the view under the cursor (with mouse capture: the middle of the first view, like a crosshair)
    mouse_ray() {
      if (mouseMode !== 2) return screenRay(mx, my);
      const r = lastViews.length ? lastViews[0].rect : FULL;
      return screenRay((r[0] + r[2] + 1) / 2, (r[1] + r[3] + 1) / 2);
    },
    // stick(0) = left, stick(1) = right: [x, y], -1..1, right and down positive
    stick(i = 0, p = 0) { return readStick(i | 0, p | 0); },
    btnp(i, p = 0) { const pl = nowP[p | 0]; return !!(pl && pl[i | 0] && !prevP[p | 0][i | 0]); },

    // --- time + math helpers (angles in turns, like PICO-8)
    time() { return frames / 60; },
    // touch_set_mode(n): the touch control on the left of a phone screen. 0 d-pad (default),
    // 1 analog circle (feeds stick(0), and the arrow buttons past halfway), 2 left/right, 3 up/down.
    touch_set_mode(n) { touchMode = [0, 1, 2, 3].includes(n | 0) ? n | 0 : 0; showTouchMode(); },
    // freeze(n, fn): for the next n updates, call fn instead of _update (nothing at all without fn).
    // _draw keeps running, so the picture holds still: hit-stun, a pause before a death, a shake.
    // Calling it again replaces the current freeze; freeze(0) ends it.
    freeze(n, fn) { freezeN = Math.max(0, Math.floor(+n || 0)); freezeFn = typeof fn === 'function' ? fn : null; },
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
  // First solid block along a ray, in map space: [t, xi, yi, zi, nx, ny, nz, d] with the face hit
  // as a grid direction (n) and the distance along the ray (d, in world units, since map transforms
  // don't scale). Steps through the grid one cell at a time (Amanatides & Woo), after clipping the
  // ray to the map's box. A ray starting inside a solid block hits it at d = 0 with n = 0.
  const _ro = new THREE.Vector3(), _rd = new THREE.Vector3();
  function rayQuery(map, ox, oy, oz, dx, dy, dz, maxd) {
    const MISS = [0, 0, 0, 0, 0, 0, 0, 0];
    if (!(dx || dy || dz)) return MISS;
    updateTransform(map);
    const o = _ro.set(ox, oy, oz).applyMatrix4(map._inv);
    const d = _rd.set(dx, dy, dz).transformDirection(map._inv);   // unit length, map space
    const O = [o.x, o.y, o.z], D = [d.x, d.y, d.z], size = [map.w, map.h, map.d];
    let t0 = 0, t1 = maxd, enter = -1;
    for (let a = 0; a < 3; a++) {               // clip to the map's box [0, size]
      if (Math.abs(D[a]) < 1e-12) {
        if (O[a] < 0 || O[a] >= size[a]) return MISS;
        continue;
      }
      let ta = (0 - O[a]) / D[a], tb = (size[a] - O[a]) / D[a];
      if (ta > tb) [ta, tb] = [tb, ta];
      if (ta > t0) { t0 = ta; enter = a; }
      if (tb < t1) t1 = tb;
      if (t0 > t1) return MISS;
    }
    const cell = [0, 0, 0], step = [0, 0, 0], tMax = [0, 0, 0], tDelta = [0, 0, 0], n = [0, 0, 0];
    for (let a = 0; a < 3; a++) {
      const p = O[a] + D[a] * t0;
      cell[a] = Math.min(size[a] - 1, Math.max(0, Math.floor(a === enter ? p + Math.sign(D[a]) * 1e-7 : p)));
      step[a] = Math.sign(D[a]);
      tDelta[a] = step[a] ? Math.abs(1 / D[a]) : Infinity;
      tMax[a] = step[a] > 0 ? (cell[a] + 1 - O[a]) / D[a] : step[a] < 0 ? (cell[a] - O[a]) / D[a] : Infinity;
    }
    if (enter >= 0) n[enter] = -step[enter];  // entered through this face of the box
    let t = t0;
    for (;;) {
      const tile = mapGet(map, cell[0], cell[1], cell[2]);
      if (tile) return [tile, cell[0], cell[1], cell[2], n[0], n[1], n[2], t];
      const a = tMax[0] < tMax[1] ? (tMax[0] < tMax[2] ? 0 : 2) : (tMax[1] < tMax[2] ? 1 : 2);
      t = tMax[a];
      if (t > t1) return MISS;
      cell[a] += step[a];
      if (cell[a] < 0 || cell[a] >= size[a]) return MISS;
      tMax[a] += tDelta[a];
      n[0] = n[1] = n[2] = 0; n[a] = -step[a];
    }
  }

  // The ray from the camera through a screen point (in screen pixels), using the camera as last set.
  const rayCam = new THREE.PerspectiveCamera(90, 1, 0.05, 2000);
  const _rp = new THREE.Vector3();
  function screenRay(sx, sy) {
    // the topmost view drawn last frame that contains the point; before any frame, the camera as set
    let v = null;
    for (let i = lastViews.length - 1; i >= 0 && !v; i--) {
      const r = lastViews[i].rect;
      if (sx >= r[0] && sx < r[2] + 1 && sy >= r[1] && sy < r[3] + 1) v = lastViews[i];
    }
    if (!v) v = { rect: clipRect || FULL, pos: camPos, look: camLook, fov: fovDeg };
    const [x0, y0, x1, y1] = v.rect;
    aimCamera(rayCam, v);
    rayCam.updateMatrixWorld();
    _rp.set(((sx - x0) / (x1 - x0 + 1)) * 2 - 1, 1 - ((sy - y0) / (y1 - y0 + 1)) * 2, 0.5).unproject(rayCam).sub(rayCam.position).normalize();
    return [v.pos[0], v.pos[1], v.pos[2], _rp.x, _rp.y, _rp.z];
  }

  // Point a camera for a view: position, target, and the fov across the longer side of its rectangle.
  function aimCamera(cam, v) {
    const w = v.rect[2] - v.rect[0] + 1, h = v.rect[3] - v.rect[1] + 1;
    cam.position.set(...v.pos);
    cam.lookAt(...v.look);
    cam.aspect = w / h;
    cam.fov = w > h ? 2 * Math.atan(Math.tan(v.fov * Math.PI / 360) * h / w) * 180 / Math.PI : v.fov;
    cam.updateProjectionMatrix();
  }

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
  let freezeN = 0, freezeFn = null;   // see freeze()

  function startView() { curView = { i: views.length, rect: clipRect || FULL, n: 0 }; views.push(curView); }
  function endView() {
    if (!curView) return;
    curView.pos = [...camPos]; curView.look = [...camLook]; curView.fov = fovDeg; curView.bg = bgColor;
  }
  // 2D drawing (print, rect, rectfill) is clipped to the same rectangle
  let clipped2d = false;
  function apply2dClip() {
    if (clipped2d) { ctx.restore(); clipped2d = false; }
    if (!clipRect) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(clipRect[0], clipRect[1], clipRect[2] - clipRect[0] + 1, clipRect[3] - clipRect[1] + 1);
    ctx.clip();
    clipped2d = true;
  }

  function beginDraw() {
    for (const k in used) used[k] = 0;
    if (clipped2d) { ctx.restore(); clipped2d = false; }
    ctx.clearRect(0, 0, SCREEN, SCREEN);
    apply2dClip();
    cursorY = 0;
    drawId = 0;
    anyOutline = false;
    views = [];
    startView();
    inDraw = true;
  }

  // Restrict a render target (or the canvas, for null) to a rectangle in render pixels.
  function setArea(rt, x, y, w, h) {
    if (rt) { rt.viewport.set(x, y, w, h); rt.scissor.set(x, y, w, h); rt.scissorTest = true; }
    else { renderer.setViewport(x, y, w, h); renderer.setScissor(x, y, w, h); renderer.setScissorTest(true); }
  }

  function endDraw() {
    inDraw = false;
    endView();
    for (const k in pools) for (let i = used[k]; i < pools[k].length; i++) pools[k][i].visible = false;
    syncPaletteUniform(palU, palette);
    // the views with 3D in them, in the order they were drawn (a frame with none still shows bg)
    let list = views.filter((v) => v.n > 0);
    if (!list.length) list = [{ i: -1, rect: FULL, pos: [...camPos], look: [...camLook], fov: fovDeg, bg: bgColor }];
    const S = SCREEN * scale;
    if (list.length > 1 || list[0].rect !== FULL) {
      // parts of the screen outside every view show the background
      renderer.setRenderTarget(null);
      setArea(null, 0, 0, S, S);
      renderer.setClearColor(palette[bgColor] ?? 0, 1);
      renderer.clear();
    }
    for (const v of list) drawView(v, list.length > 1);
    // back to the whole screen
    for (const rt of [target, ...(masks || [])]) { rt.viewport.set(0, 0, S, S); rt.scissor.set(0, 0, S, S); rt.scissorTest = false; }
    renderer.setRenderTarget(null);
    renderer.setViewport(0, 0, S, S); renderer.setScissorTest(false);
    lastViews = list.map((v) => ({ rect: v.rect, pos: v.pos, look: v.look, fov: v.fov }));
  }

  function drawView(v, several) {
    const [x0, y0, x1, y1] = v.rect;
    const x = x0 * scale, y = (SCREEN - 1 - y1) * scale, w = (x1 - x0 + 1) * scale, h = (y1 - y0 + 1) * scale;
    if (several) for (const k in pools) for (let i = 0; i < used[k]; i++) pools[k][i].visible = pools[k][i].userData.view === v.i;
    aimCamera(camera, v);
    // 1) scene -> color + draw info + depth, inside this view only
    setArea(target, x, y, w, h);
    renderer.setRenderTarget(target);
    renderer.setClearColor(palette[v.bg] ?? 0, 1);
    renderer.clear();
    renderer.render(scene, camera);
    // 2) copy to the screen, painting outlines when any draw asked for one
    const u = outlinePass.uniforms;
    u.uAny.value = anyOutline ? 1 : 0;
    u.uRect.value.set(x, y, x + w - 1, y + h - 1);
    if (scale === 1 || !anyOutline) {
      u.uMode.value = 0;
      renderer.setRenderTarget(null);
      setArea(null, x, y, w, h);
      renderer.render(outlinePass.scene, outlinePass.camera);
      return;
    }
    // 2x / 3x: 1-pixel edge mask -> grow across -> grow down -> paint where allowed
    const g = growPasses;
    g.grow.uRect.value.set(x, y, x + w - 1, y + h - 1);
    u.uMode.value = 1;
    for (const m of masks) setArea(m, x, y, w, h);
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
    setArea(null, x, y, w, h);
    renderer.render(g.paintScene, g.camera);
  }

  function guard(fn) {
    try { fn(); return true; } catch (e) { stop(); onError(e); return false; }
  }

  // ---- pause menu (Enter or P). It has its own canvas on top of the game's overlay, so pausing
  // never reads pixels back from the overlay: the game's text simply stays as it was (_draw doesn't
  // run while paused). Reading a canvas back can make phone browsers move it off the GPU, and the
  // first time that happened the menu stopped showing.
  const MENU = ['Resume', 'Restart', 'Screenshot'];
  if (onCover) MENU.push('Capture cover');
  if (canHires) MENU.push('Resolution');
  let paused = false, menuSel = 0, note = '', noteUntil = 0, menuAge = 0;
  const menuCanvas = document.createElement('canvas');
  menuCanvas.width = menuCanvas.height = SCREEN;
  menuCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none';
  overlay.after(menuCanvas);
  const mctx = menuCanvas.getContext('2d');

  function setPaused(p) {
    paused = p;
    showTouchMode();
    menuHover = menuClick = -1;
    for (const b of [19, 20, 21]) down[b] = false;
    menuCanvas.style.display = p ? 'block' : 'none';
    if (p) {
      menuSel = 0; note = ''; menuAge = 0;
      audio.suspend();
      if (locked()) document.exitPointerLock();          // pausing frees the mouse
    } else {
      mctx.clearRect(0, 0, SCREEN, SCREEN);
      audio.resume();
      if (mouseMode === 2 && lastPointer === 'mouse') requestLock();   // and resuming captures it again (mouse only)
    }
  }

  function drawMenu() {
    const ctx = mctx;   // everything below draws on the menu's own canvas
    ctx.clearRect(0, 0, SCREEN, SCREEN);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(0, 0, SCREEN, SCREEN);
    const w = 156, h = 26 + MENU.length * 14, x = (SCREEN - w) >> 1, y = (SCREEN - h) >> 1;
    ctx.fillStyle = hexColor(DEFAULT_PALETTE[0]); ctx.fillRect(x, y, w, h);
    ctx.fillStyle = hexColor(DEFAULT_PALETTE[7]);
    ctx.fillRect(x, y, w, 1); ctx.fillRect(x, y + h - 1, w, 1); ctx.fillRect(x, y, 1, h); ctx.fillRect(x + w - 1, y, 1, h);
    drawText(ctx, 'Paused', x + ((w - textWidth('Paused')) >> 1), y + 4, hexColor(DEFAULT_PALETTE[6]));
    menuRects = MENU.map((_, i) => [x + 4, y + 19 + i * 14, w - 8, 14]);
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
    o.drawImage(overlay, 0, 0, S, S);   // the game's text, untouched while paused; the menu is on its own canvas
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

  // The game screen as the cart's cover art: 256 square, the 3D view plus the game's text, no menu.
  function captureCover() {
    const out = document.createElement('canvas');
    out.width = out.height = SCREEN;
    const o = out.getContext('2d');
    o.imageSmoothingEnabled = false;
    o.drawImage(canvas, 0, 0, SCREEN, SCREEN);
    o.drawImage(overlay, 0, 0);
    onCover(out.toDataURL('image/png'));
    note = 'Cover captured'; noteUntil = performance.now() + 1500;
  }

  function menuUpdate() {
    // Any player can drive the pause menu. For a moment after pausing, choosing is ignored, so
    // a doubled press (a pause button reporting one tap twice) can't resume straight away.
    const pressed = (i) => nowP.some((pl, p) => pl[i] && !prevP[p][i]);
    if (++menuAge < 15) return;
    if (menuHover >= 0) { menuSel = menuHover; menuHover = -1; }
    if (menuClick >= 0) {                     // a click or tap on an item chooses it
      menuSel = menuClick; menuClick = -1;
      return menuChoose(MENU[menuSel]);
    }
    if (pressed(2)) menuSel = (menuSel + MENU.length - 1) % MENU.length;
    if (pressed(3)) menuSel = (menuSel + 1) % MENU.length;
    if (MENU[menuSel] === 'Resolution' && (pressed(0) || pressed(1))) changeRes(pressed(1) ? 1 : -1);
    if (pressed(4) || pressed(5) || pressed(6)) {
      menuChoose(pressed(6) ? 'Resume' : MENU[menuSel]);
    }
  }

  function menuChoose(choice) {
    if (choice === 'Resume') setPaused(false);
    else if (choice === 'Restart') { stop(); onRestart(); }
    else if (choice === 'Screenshot') screenshot();
    else if (choice === 'Capture cover') captureCover();
    else if (choice === 'Resolution') changeRes(1);
  }

  // Cycle 1x -> 2x -> 3x, and redraw the paused frame at the new resolution.
  function changeRes(step) {
    setScale(((scale - 1 + step + 3) % 3) + 1);
    ctx.clearRect(0, 0, SCREEN, SCREEN);
    beginDraw();
    if (hooks._draw && !guard(hooks._draw)) return;
    endDraw();
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
      if (freezeN > 0) {                     // frozen: the freeze function (if any) runs instead
        const f = freezeFn;
        freezeN--;
        if (freezeN === 0 && freezeFn === f) freezeFn = null;
        if (f && !guard(f)) return;
      } else if (hooks._update && !guard(hooks._update)) return;
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

  function stop() {
    running = false; cancelAnimationFrame(raf); audio.stop(); audio.musicStop();
    if (locked()) document.exitPointerLock();
  }

  // Put everything the game can change back the way the cart started, so the cart can run again
  // in the same page (Restart). The page, the WebGL context, fullscreen and the player's settings
  // (resolution, mute) stay as they are.
  function reset() {
    stop();
    for (const m of maps) if (m.geometry) m.geometry.dispose();
    maps.splice(0, maps.length, ...mapsFromCart(cart));
    palette = Array.isArray(cart.palette) && cart.palette.length === NCOLORS ? [...cart.palette] : [...DEFAULT_PALETTE];
    remap = identityRemap(); trans = noTransparency();
    bgColor = 0; outlineColor = -1; outlineInner = true; cursorY = 0;
    camPos.splice(0, 3, 0, 6, -10); camLook.splice(0, 3, 0, 0, 0);
    fovDeg = 90; clipRect = null; lastViews = [];
    frames = 0; acc = 0; freezeN = 0; freezeFn = null;
    touchMode = 0; touchStick[0] = touchStick[1] = 0; showTouchMode();
    setMouseMode(0);
    dxAcc = dyAcc = wheelAcc = mdx = mdy = mwheel = 0;
    for (const a of [down, held, tapped]) a.fill(false);
    for (const pl of nowP) pl.fill(false);
    for (const pl of prevP) pl.fill(false);
    paused = false; menuHover = menuClick = -1;
    menuCanvas.style.display = 'none';
    mctx.clearRect(0, 0, SCREEN, SCREEN);
    audio.resume();   // un-hold the sound the pause menu held
    ctx.clearRect(0, 0, SCREEN, SCREEN);
  }

  // On-screen buttons (touch controls, the pause button) press game buttons directly.
  function setStick(x, y) { touchStick[0] = +x || 0; touchStick[1] = +y || 0; }

  function setButton(i, on) {
    held[i] = !!on;
    if (on) tapped[i] = true;
  }

  // Mute is a player setting, kept per device like the resolution.
  let muted = false;
  try { muted = localStorage.getItem('blocky3d.mute') === '1'; } catch { /* storage blocked */ }
  audio.setMuted(muted);
  function setMuted(m) {
    muted = !!m;
    audio.setMuted(muted);
    try { localStorage.setItem('blocky3d.mute', muted ? '1' : '0'); } catch { /* storage blocked */ }
  }

  function key(e, isDown) {
    if (isDown) audio.unlock();   // browsers only allow sound after the player does something
    const b = KEYMAP[e.code];
    if (b === undefined) return;
    down[b] = isDown;
    if (isDown) tapped[b] = true;   // a tap shorter than one update still counts
    e.preventDefault();
  }

  return {
    api, start, stop, reset, key, maps, renderer, unlockAudio: () => audio.unlock(), setButton, setStick, setMuted,
    set onTouchMode(fn) { onTouchMode = fn; showTouchMode(); }, get touchMode() { return paused ? 0 : touchMode; },
    get muted() { return muted; }, get paused() { return paused; }, get scale() { return scale; }, setScale,
  };
}
