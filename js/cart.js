// Cart format + the built-in demo cart.
// A cart is plain JSON: { version, code, palette?, tiles: [null, {top,side,bottom}, ...], maps: [{name,w,h,d,origin,data(base64)}] }
import { MAX_TILES, bytesToB64, emptyTile } from './core.js';

export const CART_VERSION = 1;

export function emptyCart() {
  return {
    version: CART_VERSION,
    code: `// your blocky3D game
function _init() {
  bg(1)
}

function _update() {
}

function _draw() {
  cam_set_pos([4, 6, -6])
  cam_set_lookat([4, 0, 4])
  map(0)
  print('HELLO BLOCKY3D', 4, 4, 7)
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
  }
  if (!Array.isArray(cart.maps)) cart.maps = [];
  if (cart.palette && (!Array.isArray(cart.palette) || cart.palette.length !== 32)) delete cart.palette;
  cart.version = CART_VERSION;
  return cart;
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

const DEMO_CODE = `// blocky3D demo
// arrows or WASD move, X jumps, Z raises / lowers the drawbridge
// map 0 = the level, map 1 = the drawbridge, hinged at its castle end

let px, py, pz, vy, grounded
let raise = 1, raise_target = 1
let gems, score, flash = 0
let guards

function _init() {
  bg(12)
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
  // one red guard; the second is drawn with pal() to make it blue
  guards = [
    { x: 3, z: 6.5, dir: 1, col: 8 },
    { x: 12, z: 2.5, dir: -1, col: 12 },
  ]
}

function respawn() {
  px = 8.5; py = 4; pz = 3.5; vy = 0
}

function _update() {
  // the camera looks down +z, so screen-right is -x
  let s = 0.08
  if (btn(0)) px += s
  if (btn(1)) px -= s
  if (btn(2)) pz += s
  if (btn(3)) pz -= s
  if (btnp(5) && grounded) vy = 0.2
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
  if (btnp(4)) raise_target = 1 - raise_target
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
    }
  }

  // palette animation: only the water uses index 28
  palette[28] = time() % 1 < 0.5 ? 0x065ab5 : 0x1478d4
  if (flash > 0) flash--
}

function hit() {
  respawn()
  flash = 12
}

function _draw() {
  cam_set_pos([px, py + 3.5, pz - 6])
  cam_set_lookat([px, py, pz + 3])

  // flash the world white when hit: remap every color to 7 for these draws
  if (flash > 0) for (let i = 0; i < 32; i++) pal(i, 7)
  map(0)
  map(1)
  pal()

  sphere(px, py, pz, 0.4, 10)

  for (let g of guards) {
    pal(8, g.col)
    cube(g.x, 3.4, g.z, 0.8, 8)
    pal()
  }

  for (let g of gems) {
    if (!g.got) cube(g.x, g.y + sin(time()) * 0.1, g.z, 0.35, 11)
  }

  print('GEMS ' + score + '/' + gems.length, 4, 4, 7)
  print('Z: BRIDGE   X: JUMP', 4, 246, 7)
  if (score == gems.length) print('YOU GOT THEM ALL!', 94, 120, 10)
}
`;

export function demoCart() {
  return {
    version: CART_VERSION,
    code: DEMO_CODE,
    tiles: demoTiles(),
    maps: [
      demoLevel(),
      encodeMap('drawbridge', 3, 1, 4, [1.5, 1, 4], () => 3),
    ],
  };
}
