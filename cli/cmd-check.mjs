// b3d check <game>: prints each problem as "where: message", errors first. Exit code 1 on errors.
import { loadGame } from './project.mjs';
import { checkCart } from './check.mjs';

export function report({ errors, warnings }) {
  for (const e of errors) console.log(`${e.at}: error: ${e.msg}`);
  for (const w of warnings) console.log(`${w.at}: warning: ${w.msg}`);
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0]);
  const res = await checkCart(game.raw, game.where);
  res.errors.unshift(...game.errors);
  report(res);
  const c = game.raw;
  if (!opt.quiet) {
    const n = (a) => (Array.isArray(a) ? a.filter((x) => x != null).length : 0);
    console.log(`${res.errors.length ? 'not ok' : 'ok'}: "${c.name}", ${Math.max(0, n(c.tiles) - (c.tiles && c.tiles[0] != null ? 1 : 0))} tiles, ${n(c.maps)} maps, ${n(c.vox)} vox, ${n(c.sfx)} sounds, ${n(c.music)} patterns`
      + `${c.scenes ? `, ${c.scenes.length} scenes` : ''}; ${res.errors.length} errors, ${res.warnings.length} warnings`);
  }
  return res.errors.length ? 1 : 0;
}
