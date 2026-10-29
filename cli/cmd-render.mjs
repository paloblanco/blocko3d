// b3d render <game> --map n [--view top|front|side|iso] [--out map.png]
// b3d render <game> --vox n [--out vox.png]     front (from +z), back, both sides, top and a 3/4 view
// b3d render <game> --tiles [--out tiles.png]   every tile's top, side and bottom, numbered
// Options for maps and models: --res 1|2|3 (default 2), --bg n (background palette color),
// --outline n (outline color; off by default).
// Maps and models are drawn by the real engine, headless (a small cart that draws only that one
// asset with a fixed camera, nearly flat: a narrow lens from far away). The tile sheet is plain
// pixels, drawn in Node.
import { writeFileSync } from 'node:fs';
import { loadGame, UserError } from './project.mjs';
import { runCart, screenshotPng } from './headless.mjs';
import { DEFAULT_PALETTE } from '../js/format.js';
import { encodePng } from '../js/png.js';
import { drawText, textWidth } from '../js/font.js';

const FOV = 0.08;   // turns: narrow, so the picture is close to a flat projection

// How far away the camera must be to fit a ball of radius r in a square view.
const distFor = (r) => (r * 1.08) / Math.tan(FOV * Math.PI);

// The camera's direction from the thing it looks at, per view (y is up, the vox front is +z).
const VIEWS = {
  top: [0, 1, 0.0001],     // +x right, +z down (the editors' Top view)
  front: [0, 0, 1],        // from +z: +x right, +y up
  back: [0, 0, -1],
  side: [-1, 0, 0],        // from -x: +z right, +y up (the editors' Side view)
  left: [-1, 0, 0],
  right: [1, 0, 0],
  iso: [-0.62, 0.55, 0.56],
};
const norm = (v) => { const l = Math.hypot(...v); return v.map((x) => x / l); };

function mapCode(n, size, view, bg, oc) {
  const dir = JSON.stringify(norm(VIEWS[view]));
  return `
const M = ${n}, DIR = ${dir}, s = ${JSON.stringify(size)}
function _draw() {
  bg(${bg})
  ${oc >= 0 ? `outline(${oc})` : ''}
  map(M)
  const c = mtow(M, s[0] / 2, s[1] / 2, s[2] / 2)
  const D = ${distFor(1)} * Math.hypot(s[0], s[1], s[2]) / 2
  cam_set_fov(${FOV})
  cam_set_pos(c[0] + DIR[0] * D, c[1] + DIR[1] * D, c[2] + DIR[2] * D)
  cam_set_lookat(c[0], c[1], c[2])
}`;
}

function voxCode(n, bg, oc, pivot, data) {
  const cells = [['front', 'front', 0, 0], ['back', 'back', 1, 0], ['left', 'from -x', 2, 0], ['right', 'from +x', 0, 1], ['top', 'top', 1, 1], ['iso', '3/4', 2, 1]];
  // frame the voxels that are filled (the whole 8 x 8 x 8 box when the model is empty)
  const lo = [8, 8, 8], hi = [0, 0, 0];
  for (let i = 0; i < 512; i++) if (data[i]) {
    const v = [i % 8, (i >> 3) % 8, i >> 6];
    for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], v[k]); hi[k] = Math.max(hi[k], v[k] + 1); }
  }
  if (lo[0] > hi[0]) { lo.fill(0); hi.fill(8); }
  const center = [0, 1, 2].map((k) => ((lo[k] + hi[k]) / 2 - pivot[k]) / 8);   // from the point vox() places
  const radius = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]) / 16;
  return `
const C = ${JSON.stringify(center)}, D = ${distFor(1)} * ${radius}
const CELLS = ${JSON.stringify(cells.map(([v, label, x, y]) => [label, x, y, norm(VIEWS[v])]))}
function _draw() {
  for (const [name, cx, cy, dir] of CELLS) {
    const x0 = cx * 85 + 1, y0 = 22 + cy * 117
    clip(x0, y0, x0 + 82, y0 + 82)
    bg(${bg})
    ${oc >= 0 ? `outline(${oc})` : ''}
    vox(${n}, 0, 0, 0)
    cam_set_fov(${FOV})
    cam_set_pos(C[0] + dir[0] * D, C[1] + dir[1] * D, C[2] + dir[2] * D)
    cam_set_lookat(C[0], C[1], C[2])
    clip()
    print(name, x0, y0 + 85, 6)
  }
}`;
}

function tileSheet(cart) {
  const pal = Array.isArray(cart.palette) && cart.palette.length === 32 ? cart.palette : DEFAULT_PALETTE;
  const tiles = (cart.tiles || []).map((t, i) => (i && t ? [i, t] : null)).filter(Boolean);
  if (!tiles.length) throw new UserError('the cart has no tiles');
  const K = 4, FACE = 8 * K, CELL_W = 3 * FACE + 2 * 3 + 8, CELL_H = FACE + 14 + 8, COLS = Math.min(4, tiles.length);
  const W = COLS * CELL_W + 8, H = Math.ceil(tiles.length / COLS) * CELL_H + 8;
  const px = new Uint8Array(W * H * 4);
  const rgb = (c) => [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  const fill = (x0, y0, w, h, [r, g, b]) => {
    for (let y = Math.max(0, y0); y < Math.min(H, y0 + h); y++) for (let x = Math.max(0, x0); x < Math.min(W, x0 + w); x++) px.set([r, g, b, 255], (y * W + x) * 4);
  };
  fill(0, 0, W, H, [0x14, 0x1b, 0x30]);
  const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  const ctx = { fillStyle: '#000000', fillRect(x, y, w, h) { fill(Math.round(x), Math.round(y), w, h, hex(this.fillStyle)); } };
  tiles.forEach(([n, t], k) => {
    const x0 = 8 + (k % COLS) * CELL_W, y0 = 4 + Math.floor(k / COLS) * CELL_H;
    const label = t.name ? `${n} ${t.name}` : String(n);
    drawText(ctx, label.length > 15 ? label.slice(0, 14) + '~' : label, x0, y0, '#c2c3c7');
    ['top', 'side', 'bottom'].forEach((f, j) => {
      const fx = x0 + j * (FACE + 3), fy = y0 + 13;
      for (let i = 0; i < 64; i++) fill(fx + (i % 8) * K, fy + (i >> 3) * K, K, K, rgb(pal[t[f][i]] ?? 0));
    });
  });
  return { png: encodePng(W, H, px), count: tiles.length, W, H };
}

const int = (v, name, lo, hi) => {
  const n = Number(v);
  if (!Number.isInteger(n) || n < lo || n > hi) throw new UserError(`--${name} is a whole number from ${lo} to ${hi}`);
  return n;
};

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0], { strict: true });
  const cart = game.cart;
  if (opt.tiles) {
    const out = typeof opt.out === 'string' ? opt.out : 'tiles.png';
    const r = tileSheet(cart);
    writeFileSync(out, r.png);
    console.log(`wrote ${out}: ${r.count} tiles (top, side, bottom), ${r.W} x ${r.H}`);
    return 0;
  }
  const res = opt.res === undefined ? 2 : int(opt.res, 'res', 1, 3);
  const bg = opt.bg === undefined ? 1 : int(opt.bg, 'bg', 0, 31);
  const oc = opt.outline === undefined ? -1 : int(opt.outline === true ? 0 : opt.outline, 'outline', 0, 31);
  let code, out, what;
  if (opt.map !== undefined) {
    const n = int(opt.map, 'map', 0, cart.maps.length - 1);
    const view = typeof opt.view === 'string' ? opt.view : 'iso';
    if (!['top', 'front', 'side', 'iso'].includes(view)) throw new UserError('--view is top, front, side or iso');
    code = mapCode(n, [cart.maps[n].w, cart.maps[n].h, cart.maps[n].d], view, bg, oc);
    out = typeof opt.out === 'string' ? opt.out : `map${n}-${view}.png`;
    what = `map ${n} "${cart.maps[n].name}" (${cart.maps[n].w} x ${cart.maps[n].h} x ${cart.maps[n].d}) from ${view === 'iso' ? 'a 3/4 view' : 'the ' + view}`;
  } else if (opt.vox !== undefined) {
    const n = int(opt.vox, 'vox', 0, cart.vox.length - 1);
    code = voxCode(n, bg, oc, cart.vox[n].pivot, Buffer.from(cart.vox[n].data, 'base64'));
    out = typeof opt.out === 'string' ? opt.out : `vox${n}.png`;
    what = `vox ${n} "${cart.vox[n].name}" from six sides`;
  } else throw new UserError('render what? --map n, --vox n or --tiles');
  const r = await runCart({ ...cart, code, scenes: undefined, cover: undefined }, game.where, { frames: 1, input: [], seed: 0, res, drawAll: true });
  try {
    if (r.error) throw new UserError('the render failed: ' + r.error);
    writeFileSync(out, await screenshotPng(r.page));
  } finally { await r.close(); }
  console.log(`wrote ${out}: ${what}`);
  return 0;
}
