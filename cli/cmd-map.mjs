// b3d map <game> --at x,z [--map n] [--scene s]
// What's in one vertical column of the world, from the top down: runs of the same tile with its
// number and name, the empty gaps, and the heights a character can stand at (the top of a solid
// block with two empty blocks above it). x and z are world coordinates: with --scene, the maps as
// that scene places them (--map n then keeps only map n's placements); without, map n (default 0)
// where the game starts it (position 0, not turned, so its blocks sit at grid - origin).
import { loadGame, UserError } from './project.mjs';
import { placements, column, standHeights } from './space.mjs';

const num = (v) => +v.toFixed(3);

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0], { strict: true });
  const cart = game.cart;
  if (typeof opt.at !== 'string') throw new UserError('usage: b3d map <game> --at x,z [--map n] [--scene s]');
  const xz = opt.at.split(/[,\s]+/).filter(Boolean).map(Number);
  if (xz.length !== 2 || !xz.every(Number.isFinite)) throw new UserError('--at is a world position x,z, like --at 10.5,4.5');
  const [x, z] = xz;
  const scene = opt.scene === undefined ? null : Number(opt.scene);
  const m = opt.map === undefined ? 0 : Number(opt.map);
  if (scene !== null && !(cart.scenes || [])[scene]) throw new UserError(`the cart has no scene ${opt.scene}`);
  if (!cart.maps[m]) throw new UserError(`the cart has no map ${opt.map ?? 0}`);
  const list = placements(cart, scene, m, scene !== null && opt.map !== undefined);
  if (!list.length) throw new UserError(`scene ${scene} doesn't place ${opt.map !== undefined ? 'map ' + m : 'any maps'}`);

  const tileName = (t) => (cart.tiles[t] ? cart.tiles[t].name || '(no name)' : '(empty tile)');
  const where = scene !== null ? `scene ${scene} "${cart.scenes[scene].name || ''}" (${list.length} map${list.length === 1 ? '' : 's'})` : `map ${m} "${cart.maps[m].name}" (not moved)`;
  const col = column(list, x, z);
  const top = col.findIndex((c) => c.t);
  console.log(`${where}, column x ${num(x)}, z ${num(z)}:`);
  if (top < 0) { console.log('  (no blocks here)'); return 0; }

  // runs of the same tile from the same map, top down
  const several = new Set(col.filter((c) => c.p).map((c) => c.p)).size > 1;
  const rows = [];
  for (let i = top; i < col.length; i++) {
    const c = col[i], last = rows[rows.length - 1];
    if (last && last.t === c.t && last.p === c.p) last.lo = c.y;
    else rows.push({ t: c.t, p: c.p, hi: c.y, lo: c.y });
  }
  if (rows.length && rows[rows.length - 1].t === 0) rows.pop();   // nothing below the lowest block
  for (const r of rows) {
    const ys = r.hi === r.lo ? `y ${r.hi}` : `y ${r.lo}-${r.hi}`;
    const what = r.t ? `${r.t} ${tileName(r.t)}` : '(empty)';
    const from = r.t && several ? `   [map ${r.p.m} ${r.p.label}]` : '';
    console.log(`  ${ys.padEnd(10)}${what}${from}`);
  }
  const stand = standHeights(col);
  console.log(`  stand at: ${stand.length ? stand.join(', ') : 'nowhere (no block with two empty blocks above it)'}`);
  if (scene === null) {
    const c = col[top].cell;
    console.log(`  (grid cell x ${c[0]}, z ${c[2]} of map ${m})`);
  }
  return 0;
}
