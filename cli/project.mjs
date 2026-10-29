// Loading a game for the b3d command: a .b3d.json cart, or a project folder (see cli/folder.mjs).
// Either way the result is { kind, cart, raw, where, errors }:
//   cart    the game's cart: the .b3d.json as it is, or for a folder what `b3d pack` writes;
//   raw     what check looks at (the cart before the IDE's quiet clean-up);
//   where   turns a place in the cart ('tiles[3].top[19]', 'code:12') into what the user should
//           open: the cart file, or the folder's file and line;
//   errors  problems reading a folder's files, as { at: 'file:line', msg }.
// Commands other than check refuse a folder with errors (loadGame(path, { strict: true })).
import { readFileSync, statSync, existsSync } from 'node:fs';

export class UserError extends Error {}

export function isFolder(path) {
  try { return statSync(path).isDirectory(); } catch { return false; }
}

export async function loadGame(path, { strict = false } = {}) {
  if (!path) throw new UserError('give a project folder or a .b3d.json cart');
  if (!existsSync(path)) throw new UserError(`${path}: not found`);
  if (isFolder(path)) {
    const { readFolder } = await import('./folder.mjs');
    const g = { kind: 'folder', ...(await readFolder(path)) };
    if (strict && g.errors.length) throw new UserError('the folder has problems (b3d check shows them all):\n' + g.errors.map((e) => `  ${e.at}: ${e.msg}`).join('\n'));
    return g;
  }
  let cart;
  try { cart = JSON.parse(readFileSync(path, 'utf8')); } catch (e) { throw new UserError(`${path}: not a JSON cart (${e.message})`); }
  return { kind: 'cart', cart, raw: cart, errors: [], where: (at) => (at ? `${path}: ${at}` : path) };
}

