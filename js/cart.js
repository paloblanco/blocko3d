// Cart format + the built-in demo cart.
// A cart is plain JSON: { version, code, palette?, tiles: [null, {top,side,bottom,name?}, ...], maps: [{name,w,h,d,origin,data(base64)}],
//   vox: [{name, pivot, data(base64, 512 bytes: 0 empty, else color + 1)}], sfx: [string or null, ...],
//   sfxNames?: [string or null, ...] (optional sound names), music: [pattern string or null, ...],
//   scale?: {snap, root, type} (Sfx tab snapping),
//   scenes: [{name, maps: [{m, pos, angle, name?}], vox: [{v, pos, yaw}]}] (see normalizeScene) }
import { MAX_TILES, bytesToB64, emptyTile } from './format.js';
import { emptySfx, encodeSfx, encodePattern, emptyPattern } from './audio.js';

export const CART_VERSION = 1;

export function emptyCart() {
  return {
    version: CART_VERSION,
    code: `// your BLOCKO3D game
function _init() {
  bg(1)
}

function _update() {
  if (title) {
    if (btnp(4) || btnp(5)) { title = false; sfx(4) }
    return
  }
  if (!done) ticks++
}

function _draw() {
  cam_set_pos([4, 6, -6])
  cam_set_lookat([4, 0, 4])
  map(0)
  print('Hello, BLOCKO3D!', 4, 4, 7)
}
`,
    tiles: [null, makeTile((r, c) => ((r + c) % 2 ? 6 : 13))],
    maps: [encodeMap('level', 8, 4, 8, [0, 0, 0], (x, y) => (y === 0 ? 1 : 0))],
  };
}

export function normalizeCart(c) {
  const cart = c && typeof c === 'object' ? c : {};
  if (typeof cart.code !== 'string') cart.code = '';
  if (!Array.isArray(cart.tiles)) cart.tiles = [null];
  cart.tiles = cart.tiles.slice(0, MAX_TILES);
  cart.tiles[0] = null;
  for (let i = 1; i < cart.tiles.length; i++) {
    const t = cart.tiles[i];
    if (!t || !Array.isArray(t.top) || !Array.isArray(t.side) || !Array.isArray(t.bottom)) cart.tiles[i] = emptyTile(7);
    else if ('name' in t && (typeof t.name !== 'string' || !t.name)) delete t.name;   // an optional name
  }
  if (!Array.isArray(cart.maps)) cart.maps = [];
  if (!Array.isArray(cart.vox)) cart.vox = [];
  if (!Array.isArray(cart.sfx)) cart.sfx = [];
  cart.sfx = cart.sfx.slice(0, 64).map((x) => (typeof x === 'string' ? x : null));
  // optional sound names, one per sound slot (the sounds themselves are strings)
  if (Array.isArray(cart.sfxNames)) {
    cart.sfxNames = cart.sfxNames.slice(0, 64).map((x) => (typeof x === 'string' && x ? x : null));
    while (cart.sfxNames.length && cart.sfxNames[cart.sfxNames.length - 1] === null) cart.sfxNames.pop();
  }
  if (!Array.isArray(cart.sfxNames) || !cart.sfxNames.length) delete cart.sfxNames;
  if (!Array.isArray(cart.music)) cart.music = [];
  cart.music = cart.music.slice(0, 64).map((x) => (typeof x === 'string' ? x : null));
  cart.vox = cart.vox.slice(0, 64);
  if (Array.isArray(cart.scenes) && cart.scenes.length) cart.scenes = cart.scenes.map(normalizeScene);
  else delete cart.scenes;   // only carts that have scenes carry the field
  if (cart.palette && (!Array.isArray(cart.palette) || cart.palette.length !== 32)) delete cart.palette;
  if (typeof cart.cover !== 'string' || !cart.cover.startsWith('data:image/png;base64,')) delete cart.cover;
  cart.version = CART_VERSION;
  return cart;
}

// A scene: { name, maps: [{ m, pos: [x, y, z], angle: [pitch, yaw, roll], name? }], vox: [{ v, pos, yaw }] }.
const num3 = (a) => (Array.isArray(a) ? [0, 1, 2].map((i) => +a[i] || 0) : [0, 0, 0]);
export function normalizeScene(s) {
  s = s && typeof s === 'object' ? s : {};
  return {
    name: typeof s.name === 'string' ? s.name : '',
    maps: (Array.isArray(s.maps) ? s.maps : []).filter((p) => p && typeof p === 'object').map((p) => {
      const o = { m: Math.max(0, p.m | 0), pos: num3(p.pos), angle: num3(p.angle) };
      if (typeof p.name === 'string' && p.name) o.name = p.name;
      return o;
    }),
    vox: (Array.isArray(s.vox) ? s.vox : []).filter((v) => v && typeof v === 'object')
      .map((v) => ({ v: Math.max(0, v.v | 0), pos: num3(v.pos), yaw: +v.yaw || 0 })),
  };
}

// ---------------------------------------------------------------- helpers

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function face(fn) {
  const px = new Array(64);
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) px[r * 8 + c] = fn(r, c);
  return px;
}

function makeTile(top, side = top, bottom = side) {
  return { top: face(top), side: face(side), bottom: face(bottom) };
}

export function encodeMap(name, w, h, d, origin, fill) {
  const data = new Uint8Array(w * h * d);
  for (let z = 0; z < d; z++) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    data[x + w * (y + h * z)] = fill(x, y, z) | 0;
  }
  return { name, w, h, d, origin, data: bytesToB64(data) };
}

// ---------------------------------------------------------------- demo cart

function demoTiles() {
  const R = rng(7);
  const pick = (arr) => arr[Math.floor(R() * arr.length)];
  const dirt = () => pick([4, 4, 4, 20, 20, 22]);
  const grassTop = () => pick([3, 3, 11, 27, 27, 3]);

  const grass = makeTile(
    grassTop,
    (r, c) => (r < 2 || (r === 2 && R() < 0.5) ? pick([3, 27]) : dirt()),
    dirt,
  );
  const stone = makeTile(() => pick([5, 5, 13, 6, 5]));
  const planks = makeTile((r, c) => (r % 3 === 2 ? 20 : (c === (r < 3 ? 2 : 6) ? 20 : pick([4, 4, 9]))));
  const brickFn = (r, c) => {
    if (r % 4 === 3) return 13;
    const off = Math.floor(r / 4) % 2 ? 4 : 0;
    return (c + off) % 8 === 7 ? 13 : pick([6, 6, 6, 22]);
  };
  const brick = makeTile(brickFn, brickFn, () => 13);
  // water uses palette index 28 only for itself, so the cart can animate palette[28]
  const water = makeTile((r, c) => ((r * 3 + c * 5) % 7 === 0 ? 12 : 28));
  const dirtTile = makeTile(dirt);
  return [null, grass, stone, planks, brick, water, dirtTile];
}

function demoLevel() {
  const W = 16, H = 7, D = 24;
  return encodeMap('level', W, H, D, [0, 0, 0], (x, y, z) => {
    const moat = z >= 10 && z <= 13;
    if (moat) return y === 0 ? 5 : 0;
    if (y <= 1) return y === 0 ? 2 : 6;
    if (y === 2) return 1;
    // stone pillars on the near island
    if ((x === 3 && z === 3 && y <= 4) || (x === 12 && z === 7 && y === 3)) return 2;
    // castle on the far island: walls 3 high, towers 4 high, a gate in the front wall
    if (z >= 15) {
      const edge = z === 15 || z === 23 || x === 0 || x === 15;
      const corner = (x === 0 || x === 15) && (z === 15 || z === 23);
      const gate = z === 15 && x >= 7 && x <= 9;
      if (corner && y <= 6) return y === 6 && (x + z) % 2 ? 0 : 4;
      if (edge && !gate && y <= 5) return 4;
    }
    return 0;
  });
}

const DEMO_CODE = `// BLOCKO3D demo
// arrows or WASD move, X jumps, Z raises / lowers the drawbridge
// Enter pauses (resume, restart, screenshot)
// vox models: 0 hero, 1-2 hero steps, 3-4 guard steps, 5 gem
// sounds: 0 jump, 1 gem, 2 hit, 3 bridge, 4 start, 5 win; 6-10 the song (Music tab, patterns 0-1)
// map 0 = the level, map 1 = the drawbridge, hinged at its castle end

let px, py, pz, vy, grounded
let facing = 0, walk = 0   // hero yaw (turns) and walk-cycle clock
let raise = 1, raise_target = 1
let gems, score, flash = 0
let title = true   // show the title card until a button is pressed
let guards
let ticks = 0, done = false   // run timer (60 ticks a second), stops when all gems are found
let best = null               // best time in seconds, kept with save() / load()

function _init() {
  bg(12)
  let data = load()            // whatever this game saved last time, or null
  if (data) best = data.best
  music(0, 1500)               // the song fades in; browsers start sound on the first key press
  // the bridge's origin is the middle of its castle-side top edge;
  // put that hinge at the castle shore, level with the grass
  map_set_pos(1, [8.5, 3, 14])
  respawn()
  score = 0
  gems = [
    { x: 4.5, y: 3.6, z: 19.5 },
    { x: 11.5, y: 3.6, z: 19.5 },
    { x: 8.5, y: 3.6, z: 21.5 },
  ]
  // two guards in red armor; the second is drawn with pal() to make it blue
  guards = [
    { x: 3, z: 6.5, dir: 1, col: 8 },
    { x: 12, z: 2.5, dir: -1, col: 12 },
  ]
}

function respawn() {
  px = 8.5; py = 4; pz = 3.5; vy = 0
}

function _update() {
  if (title) {
    if (btnp(4) || btnp(5)) { title = false; sfx(4) }
    return
  }
  if (!done) ticks++
  // left stick (or arrows / d-pad): right and down are positive.
  // The camera looks down +z, so pushing right moves toward -x and pushing up toward +z.
  let [sx, sy] = stick(0)
  let s = 0.08
  let dx = -sx * s, dz = -sy * s
  px += dx; pz += dz
  if (abs(dx) + abs(dz) > 0.01) {
    facing = yaw_to(dx, dz)   // the yaw that turns the model's front (+z) toward the movement
    walk += 1
  } else walk = 0
  if (btnp(5) && grounded) { vy = 0.2; sfx(0) }
  vy -= 0.01
  py += vy

  // sphere collision against both maps: push out, a few passes
  grounded = false
  for (let pass = 0; pass < 3; pass++) {
    for (let m = 0; m < 2; m++) {
      let [t, xi, yi, zi, nx, ny, nz, d] = mgetw(m, px, py, pz, 0.4)
      if (t) {
        px += nx * d; py += ny * d; pz += nz * d
        if (ny > 0.5) { grounded = true; if (vy < 0) vy = 0 }
        if (ny < -0.5 && vy > 0) vy = 0
      }
    }
  }
  if (py < 1.5) hit()   // fell in the moat

  // drawbridge: the free end points toward -z, so a negative pitch lifts it
  if (btnp(4)) { raise_target = 1 - raise_target; sfx(3) }
  raise += mid(-0.015, raise_target - raise, 0.015)
  map_set_angle(1, [-0.25 * raise, 0, 0])

  for (let g of guards) {
    g.x += g.dir * 0.05
    if (g.x < 1.5 || g.x > 14.5) g.dir = -g.dir
    if (abs(g.x - px) < 0.8 && abs(g.z - pz) < 0.8 && abs(3.4 - py) < 0.9) hit()
  }

  for (let g of gems) {
    if (!g.got && abs(g.x - px) < 0.7 && abs(g.z - pz) < 0.7 && abs(g.y - py) < 1) {
      g.got = true
      score++
      if (score == gems.length) finish(); else sfx(1)
    }
  }

  // palette animation: only the water uses index 28
  palette[28] = time() % 1 < 0.5 ? 0x065ab5 : 0x1478d4
  if (flash > 0) flash--
}

function hit() {
  respawn()
  flash = 12
  sfx(2)
}

function finish() {
  done = true
  sfx(5)
  let secs = ticks / 60
  if (best == null || secs < best) {
    best = secs
    save({ best: best })       // any JSON value; it's still there next time
  }
}

// seconds -> "12.3s"
function fmt(secs) { return flr(secs * 10) / 10 + 's' }

function _draw() {
  cam_set_pos([px, py + 3.5, pz - 6])
  cam_set_lookat([px, py, pz + 3])

  // black outlines on everything drawn from here on (off by default)
  outline(0)

  // flash the world white when hit: remap every color to 7 for these draws
  if (flash > 0) for (let i = 0; i < 32; i++) pal(i, 7)
  map(0)
  map(1)
  pal()

  // the hero: feet at the bottom of the collision sphere; walk cycle 1, 0, 2, 0
  let frame = walk == 0 ? 0 : [1, 0, 2, 0][flr(walk / 6) % 4]
  vox(frame, px, py - 0.4, pz, 0, facing)

  for (let g of guards) {
    pal(8, g.col)
    vox(3 + flr(time() * 6) % 2, g.x, 3, g.z, 0, g.dir > 0 ? 0.25 : 0.75)
    pal()
  }

  for (let g of gems) {
    if (!g.got) vox(5, g.x, g.y + sin(time()) * 0.1, g.z, 0, time() * 0.5, 0, 0.6)
  }

  // text: color 7 with a black (0) outline so it reads over anything
  print('Gems ' + score + '/' + gems.length, 4, 4, 7, 0)
  if (!title) print(fmt(ticks / 60), 252 - textw(fmt(ticks / 60)), 4, done ? 10 : 7, 0)
  print('Z: bridge   X: jump', 4, 244, 7, 0)
  if (done) {
    printc('You got them all!', 112, 10, 0)
    let msg = best == ticks / 60 ? 'New best time!' : 'Best: ' + fmt(best)
    printc(msg, 126, 7, 0)
  }

  if (title) {
    // title card: a framed panel, big outlined text (scale 4), and a blinking prompt
    rectfill(24, 66, 231, 193, 1)
    rect(24, 66, 231, 193, 7)
    rect(26, 68, 229, 191, 12)
    printc('BLOCKO', 74, 7, 0, 4)            // printc centers the text across the screen
    printc('3D', 122, 10, 0, 3, 2)           // stretched: 3 wide, 2 tall
    if (time() % 1 < 0.6) printc('press O or X', 156, 7)
    let b = best == null ? 'No best time yet' : 'Best time: ' + fmt(best)
    printc(b, 172, 6)
  }
}

`;

// fn(x, y, z) returns a palette color, or -1 for an empty voxel
function makeVox(name, fn, pivot = [4, 0, 4]) {
  const data = new Uint8Array(512);
  for (let z = 0; z < 8; z++) for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const c = fn(x, y, z);
    if (c >= 0) data[x + 8 * (y + 8 * z)] = c + 1;
  }
  return { name, pivot, data: bytesToB64(data) };
}

// A little figure facing +z. stride: 0 standing, 1 left leg forward, -1 right leg forward.
// Colors: hair, skin, shirt, trousers, shoes, plus a helmet for the guard.
function figure(stride, c) {
  return (x, y, z) => {
    const left = x === 2 || x === 3, right = x === 4 || x === 5;
    // legs: two 2x2 columns; a stride moves one leg forward and the other back
    if (y <= 2 && (left || right)) {
      const shift = left ? stride : -stride;
      if (z !== 3 + shift && z !== 4 + shift) return -1;
      return y === 0 ? c.shoes : c.legs;
    }
    // body and arms; arms swing opposite to the legs
    if (y >= 3 && y <= 4) {
      if (x >= 2 && x <= 5 && (z === 3 || z === 4)) return y === 3 ? c.belt : c.shirt;
      if (x === 1 || x === 6) {
        const shift = x === 1 ? -stride : stride;
        if (z !== 3 + shift && z !== 4 + shift) return -1;
        return y === 3 ? c.skin : c.shirt;
      }
      return -1;
    }
    // big chibi head: 6 x 3 x 4, face on the front (+z)
    if (y >= 5 && x >= 1 && x <= 6 && z >= 2 && z <= 5) {
      if (z === 5 && y === 6 && (x === 2 || x === 5)) return 0;   // eyes
      if (c.helmet !== undefined && (y === 7 || z === 2 || x === 1 || x === 6)) return c.helmet;
      if (y === 7 || z === 2 || ((x === 1 || x === 6) && y === 6 && z < 4)) return c.hair;
      return c.skin;
    }
    return -1;
  };
}

function demoVox() {
  const hero = { hair: 4, skin: 15, shirt: 10, belt: 4, legs: 1, shoes: 20 };
  // guards wear red (8); the demo turns one blue with pal(8, 12)
  const guard = { hair: 5, skin: 15, shirt: 8, belt: 5, legs: 5, shoes: 0, helmet: 6 };
  const gem = (x, y, z) => {
    const r = Math.abs(x - 3.5) + Math.abs(z - 3.5) + Math.abs(y - 3) * 1.4;
    if (r > 3.2) return -1;
    if (y >= 3 && x === 3 && z === 3) return 7;   // a glint
    return y >= 3 ? 11 : 3;
  };
  return [
    makeVox('hero', figure(0, hero)),
    makeVox('hero step a', figure(1, hero)),
    makeVox('hero step b', figure(-1, hero)),
    makeVox('guard step a', figure(1, guard)),
    makeVox('guard step b', figure(-1, guard)),
    makeVox('gem', gem, [4, 3, 4]),
  ];
}

// notes: [pitch, wave, volume, effect]; see js/audio.js
function makeSfx(speed, notes, loopStart = 0, loopEnd = 0) {
  const s = emptySfx();
  Object.assign(s, { speed, loopStart, loopEnd });
  notes.forEach(([pitch, wave, vol, fx], i) => { s.notes[i] = { pitch, wave, vol, fx }; });
  return encodeSfx(s);
}

function demoSfx() {
  return [
    makeSfx(3, [[22, 3, 5, 0], [29, 3, 5, 1], [34, 3, 4, 1], [38, 3, 2, 5]]),                       // 0 jump
    makeSfx(4, [[36, 0, 6, 0], [43, 0, 6, 0], [48, 0, 5, 0], [48, 0, 4, 5]]),                       // 1 gem
    makeSfx(5, [[30, 6, 7, 3], [24, 6, 5, 3], [18, 2, 3, 5]]),                                      // 2 hit
    makeSfx(9, [[14, 1, 4, 2], [13, 1, 4, 2], [12, 1, 3, 2], [12, 1, 2, 5]]),                       // 3 bridge creak
    makeSfx(5, [[24, 4, 5, 0], [28, 4, 5, 0], [31, 4, 5, 0], [36, 4, 5, 5]]),                       // 4 start
    makeSfx(7, [[36, 5, 6, 0], [40, 5, 6, 0], [43, 5, 6, 0], [48, 5, 6, 0], [43, 5, 5, 0], [48, 5, 6, 2], [48, 5, 5, 2], [48, 5, 3, 5]]), // 5 win
    ...demoSongSfx(),                                                                                // 6-10 the song
  ];
}

// The demo song, in C minor pentatonic (C Eb F G Bb). Speed 16: 32 notes = two bars of 16ths.
function demoSongSfx() {
  // 8th-note bass: a note, then a softer fading repeat
  const bassLine = [12, 12, 24, 12, 15, 15, 27, 15, 10, 10, 22, 10, 7, 7, 19, 10];
  const bass = bassLine.flatMap((p) => [[p, 0, 5, 0], [p, 0, 3, 5]]);
  // lead: quarter notes, held for 3 sixteenths and released on the 4th
  const lead = (line) => line.flatMap((p) => [[p, 4, 3, 0], [p, 4, 3, 0], [p, 4, 3, 2], [p, 4, 1, 5]]);
  // drums: kick on the beat, snare on 2 and 4, soft hats between
  const drums = Array.from({ length: 32 }, (_, i) =>
    i % 8 === 0 ? [14, 6, 6, 3] : i % 8 === 4 ? [40, 6, 4, 5] : i % 2 === 0 ? [60, 6, 2, 5] : [0, 0, 0, 0]);
  // slow arpeggio pad: each group of 4 notes cycles through a chord
  const pad = [[24, 27, 31, 34], [22, 27, 29, 34]].flatMap((chord) => Array(4).fill(chord.map((p) => [p, 5, 2, 7])).flat());
  return [
    makeSfx(16, bass),                                              // 6 bass
    makeSfx(16, lead([31, 27, 29, 31, 34, 31, 29, 27])),            // 7 lead, first half
    makeSfx(16, lead([36, 34, 31, 34, 31, 29, 27, 24])),            // 8 lead, second half
    makeSfx(16, drums),                                             // 9 drums
    makeSfx(16, pad),                                               // 10 arpeggio pad
  ];
}

// ch: up to 4 sound numbers; flags: loopStart, loopBack, stop
function makePattern(ch, flags = {}) {
  const p = emptyPattern();
  ch.forEach((c, i) => { p.ch[i] = c; });
  return encodePattern(Object.assign(p, flags));
}

function demoMusic() {
  return [
    makePattern([6, 7, 9], { loopStart: true }),
    makePattern([6, 8, 9, 10], { loopBack: true }),
  ];
}

export function demoCart() {
  return {
    version: CART_VERSION,
    code: DEMO_CODE,
    tiles: demoTiles(),
    maps: [
      demoLevel(),
      encodeMap('drawbridge', 3, 1, 4, [1.5, 1, 4], () => 3),
    ],
    vox: demoVox(),
    sfx: demoSfx(),
    music: demoMusic(),
  };
}
