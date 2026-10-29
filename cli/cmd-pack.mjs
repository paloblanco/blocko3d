// b3d pack <folder> [--out cart.b3d.json]   and   b3d unpack <cart.b3d.json> <folder> [--no-notes]
// and b3d new <folder> [--name "my game"]: a small working game to start from.
// unpack (and new) also write a short CLAUDE.md for AI agents when the folder has none.
// pack writes exactly what the IDE's Save would write for the same game, so a cart saved in the
// IDE, unpacked and packed again comes back byte for byte.
import { writeFileSync, readFileSync, existsSync, readdirSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { loadGame, isFolder, UserError } from './project.mjs';
import { checkGame } from './check.mjs';
import { report } from './cmd-check.mjs';
import { writeFolder } from './folder.mjs';
import { writeGameNotes, writeStarter } from './newgame.mjs';

export default async function (cmd, { pos, opt }) {
  if (cmd === 'new') {
    const dir = pos[0];
    if (!dir) throw new UserError('usage: b3d new <folder> [--name "my game"]');
    if (existsSync(dir) && readdirSync(dir).length) throw new UserError(`${dir} isn't empty; b3d new starts a game in a new or empty folder`);
    const name = typeof opt.name === 'string' ? opt.name : basename(resolve(dir));
    writeStarter(dir, name);
    console.log(`wrote ${dir}/: a small working game "${name}" (cart.json, main.js, a tile, a sound, a map script, CLAUDE.md). Try: b3d shot ${dir} --input "up:1-40"`);
    return 0;
  }
  if (cmd === 'unpack') {
    const [src, dir] = pos;
    if (!src || !dir) throw new UserError('usage: b3d unpack <cart.b3d.json> <folder>');
    if (isFolder(src)) throw new UserError(`${src} is a folder; unpack takes a .b3d.json cart`);
    let cart;
    try { cart = JSON.parse(readFileSync(src, 'utf8')); } catch (e) { throw new UserError(`${src}: not a JSON cart (${e.message})`); }
    const c = writeFolder(cart, dir);
    const notes = opt['no-notes'] ? false : writeGameNotes(dir, c.name);
    console.log(`wrote ${dir}/: cart.json, main.js, ${c.tiles.length - 1} tiles, ${c.vox.length} vox, ${c.sfx.filter(Boolean).length} sounds, ${c.maps.length} maps`
      + `${c.music.length ? ', music.txt' : ''}${c.scenes ? ', scenes.json' : ''}${c.cover ? ', cover.png' : ''}`
      + `${notes ? ', and CLAUDE.md (notes for AI agents; delete it if unwanted, it is never overwritten)' : ''}`);
    return 0;
  }
  const dir = pos[0];
  if (!dir || !isFolder(dir)) throw new UserError('usage: b3d pack <folder> [--out cart.b3d.json]');
  const game = await loadGame(dir, { strict: true });
  const res = await checkGame(game);
  report(res, true);
  if (res.errors.length) { console.log('not packed: fix the errors first'); return 1; }
  const out = typeof opt.out === 'string' ? opt.out : basename(resolve(dir)) + '.b3d.json';
  writeFileSync(out, JSON.stringify(game.cart));
  console.log(`wrote ${out}`);
  return 0;
}
