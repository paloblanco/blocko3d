// World space for the b3d command, without three.js: where a scene (or a lone cart map) puts each
// map's blocks, the same math as the engine (js/core.js rotationMatrix / updateTransform):
//   world = pos + R * (local - origin),  R = yaw, then pitch, then roll (three's Euler 'YXZ' with
//   x = -pitch), angles in turns. Used by `b3d map --at` and check's scene-marker warnings.
import { b64ToBytes } from '../js/format.js';

const TURN = Math.PI * 2;

// R as three rows, exactly three.js's Matrix4.makeRotationFromEuler for order 'YXZ'
export function rotation([pitch = 0, yaw = 0, roll = 0] = []) {
  const x = -pitch * TURN, y = yaw * TURN, z = roll * TURN;
  const a = Math.cos(x), b = Math.sin(x), c = Math.cos(y), d = Math.sin(y), e = Math.cos(z), f = Math.sin(z);
  const ce = c * e, cf = c * f, de = d * e, df = d * f;
  return [
    [ce + df * b, de * b - cf, a * d],
    [a * f, a * e, -b],
    [cf * b - de, df + ce * b, a * c],
  ];
}

// One map as placed in the world: { m, name, w, h, d, data, origin, pos, angle, R, label }.
function placed(cart, m, pos, angle, label) {
  const map = cart.maps[m];
  if (!map) return null;
  return { m, name: map.name || '', w: map.w, h: map.h, d: map.d, data: b64ToBytes(map.data), origin: map.origin || [0, 0, 0], pos, angle, R: rotation(angle), label };
}

// The maps of scene s as placed there, or (s null) cart map m where the game starts it: position
// 0 and no turn, so its world point is its grid point minus its origin. only: keep map m only.
export function placements(cart, s, m = 0, only = false) {
  if (s === null || s === undefined) { const p = placed(cart, m, [0, 0, 0], [0, 0, 0], `map ${m}`); return p ? [p] : []; }
  const scene = (cart.scenes || [])[s];
  if (!scene) return [];
  return (scene.maps || []).map((p, i) => (only && p.m !== m ? null : placed(cart, p.m, p.pos || [0, 0, 0], p.angle || [0, 0, 0], p.name ? `"${p.name}"` : `placement ${i}`))).filter(Boolean);
}

export function toLocal(p, [x, y, z]) {
  const v = [x - p.pos[0], y - p.pos[1], z - p.pos[2]], R = p.R;
  // R is a rotation, so its inverse is its transpose
  return [0, 1, 2].map((k) => R[0][k] * v[0] + R[1][k] * v[1] + R[2][k] * v[2] + p.origin[k]);
}

export function toWorld(p, local) {
  const v = local.map((c, k) => c - p.origin[k]), R = p.R;
  return [0, 1, 2].map((k) => R[k][0] * v[0] + R[k][1] * v[1] + R[k][2] * v[2] + p.pos[k]);
}

// The tile at a world point in one placement (0 outside it), with its grid cell.
export function tileAt(p, world) {
  const [lx, ly, lz] = toLocal(p, world).map((c) => Math.floor(c + 1e-9));
  if (lx < 0 || ly < 0 || lz < 0 || lx >= p.w || ly >= p.h || lz >= p.d) return { t: 0, cell: [lx, ly, lz] };
  return { t: p.data[lx + p.w * (ly + p.h * lz)], cell: [lx, ly, lz] };
}

// The world y range (whole blocks) a placement can cover.
export function yRange(p) {
  let lo = Infinity, hi = -Infinity;
  for (const cx of [0, p.w]) for (const cy of [0, p.h]) for (const cz of [0, p.d]) {
    const y = toWorld(p, [cx, cy, cz])[1];
    lo = Math.min(lo, y); hi = Math.max(hi, y);
  }
  return [Math.floor(lo), Math.ceil(hi) - 1];
}

// The world column at (x, z): for each whole y from the top of the maps down to their bottom,
// the first solid block there { y, t, p } (t 0 when empty). Block y spans y to y + 1.
export function column(list, x, z) {
  if (!list.length) return [];
  let lo = Infinity, hi = -Infinity;
  for (const p of list) { const [a, b] = yRange(p); lo = Math.min(lo, a); hi = Math.max(hi, b); }
  const out = [];
  for (let y = hi; y >= lo; y--) {
    let hit = { y, t: 0, p: null };
    for (const p of list) { const r = tileAt(p, [x, y + 0.5, z]); if (r.t) { hit = { y, t: r.t, p, cell: r.cell }; break; } }
    out.push(hit);
  }
  return out;
}

// Heights a character can stand at in a column: the top of a solid block with two empty blocks
// above it (or the top of the maps), highest first.
export function standHeights(col) {
  const solid = new Map(col.map((c) => [c.y, c.t > 0]));
  return col.filter((c) => c.t > 0 && !solid.get(c.y + 1) && !solid.get(c.y + 2)).map((c) => c.y + 1);
}
