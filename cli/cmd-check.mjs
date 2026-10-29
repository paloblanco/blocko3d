// b3d check <game>: prints each problem as "where: message", errors first. Exit code 1 on errors.
import { loadGame } from './project.mjs';
import { checkGame } from './check.mjs';

// check lists every warning with its code; the other commands (quiet) list errors and only count
// warnings, so a warning a game lives with doesn't fill every command's output
export function report({ errors, warnings, hidden = 0 }, quiet = false) {
  for (const e of errors) console.log(`${e.at}: error: ${e.msg}`);
  if (quiet) {
    if (warnings.length) console.log(`${warnings.length} warning${warnings.length === 1 ? '' : 's'} (b3d check lists ${warnings.length === 1 ? 'it' : 'them'})`);
    return;
  }
  for (const w of warnings) console.log(`${w.at}: warning${w.code ? ` [${w.code}]` : ''}: ${w.msg}`);
  if (hidden) console.log(`(${hidden} more accepted in cart.json "ok")`);
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0]);
  const res = await checkGame(game);
  report(res);
  const c = game.raw;
  if (!opt.quiet) {
    const n = (a) => (Array.isArray(a) ? a.filter((x) => x != null).length : 0);
    console.log(`${res.errors.length ? 'not ok' : 'ok'}: "${c.name}", ${Math.max(0, n(c.tiles) - (c.tiles && c.tiles[0] != null ? 1 : 0))} tiles, ${n(c.maps)} maps, ${n(c.vox)} vox, ${n(c.sfx)} sounds, ${n(c.music)} patterns`
      + `${c.scenes ? `, ${c.scenes.length} scenes` : ''}; ${res.errors.length} errors, ${res.warnings.length} warnings`);
  }
  return res.errors.length ? 1 : 0;
}
