// b3d pack <folder> [--out cart.b3d.json]   and   b3d unpack <cart.b3d.json> <folder>
// pack writes exactly what the IDE's Save would write for the same game, so a cart saved in the
// IDE, unpacked and packed again comes back byte for byte.
import { writeFileSync, readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { loadGame, isFolder, UserError } from './project.mjs';
import { checkCart } from './check.mjs';
import { report } from './cmd-check.mjs';
import { writeFolder } from './folder.mjs';

export default async function (cmd, { pos, opt }) {
  if (cmd === 'unpack') {
    const [src, dir] = pos;
    if (!src || !dir) throw new UserError('usage: b3d unpack <cart.b3d.json> <folder>');
    if (isFolder(src)) throw new UserError(`${src} is a folder; unpack takes a .b3d.json cart`);
    let cart;
    try { cart = JSON.parse(readFileSync(src, 'utf8')); } catch (e) { throw new UserError(`${src}: not a JSON cart (${e.message})`); }
    const c = writeFolder(cart, dir);
    console.log(`wrote ${dir}/: cart.json, main.js, ${c.tiles.length - 1} tiles, ${c.vox.length} vox, ${c.sfx.filter(Boolean).length} sounds, ${c.maps.length} maps`
      + `${c.music.length ? ', music.txt' : ''}${c.scenes ? ', scenes.json' : ''}${c.cover ? ', cover.png' : ''}`);
    return 0;
  }
  const dir = pos[0];
  if (!dir || !isFolder(dir)) throw new UserError('usage: b3d pack <folder> [--out cart.b3d.json]');
  const game = await loadGame(dir, { strict: true });
  const res = await checkCart(game.raw, game.where);
  report(res);
  if (res.errors.length) { console.log('not packed: fix the errors first'); return 1; }
  const out = typeof opt.out === 'string' ? opt.out : basename(resolve(dir)) + '.b3d.json';
  writeFileSync(out, JSON.stringify(game.cart));
  console.log(`wrote ${out}`);
  return 0;
}
