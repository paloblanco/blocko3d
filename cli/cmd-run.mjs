// b3d shot <game> [--frames n] [--input "..."] [--seed n] [--res 1|2|3] [--out shot.png] [--log]
// b3d run  <game> [same options]   (prints printh output; --out also saves a screenshot)
// Test options: --eval "code" (after _init), --at f:"code" (start of frame f), --watch "expr"
// (printed as "f<frame> expr = value" when it changes, or every N frames with --every N).
// The game runs headless for n updates (default 60, one second) from _init, with the scripted
// input, then the screen is saved. printh lines go to stdout as they are; the run's summary and
// any error go to stderr. Exit code 1 if the game threw.
import { writeFileSync } from 'node:fs';
import { loadGame, UserError } from './project.mjs';
import { checkGame } from './check.mjs';
import { report } from './cmd-check.mjs';
import { parseInput, runCart, screenshotPng } from './headless.mjs';

export function runOptions(opt) {
  const frames = opt.frames === undefined ? 60 : Number(opt.frames);
  if (!Number.isInteger(frames) || frames < 0) throw new UserError('--frames is a whole number of updates (60 = one second)');
  const res = opt.res === undefined ? 1 : Number(opt.res);
  if (![1, 2, 3].includes(res)) throw new UserError('--res is 1, 2 or 3');
  const seed = opt.seed === undefined ? 0 : Number(opt.seed);
  if (!Number.isFinite(seed)) throw new UserError('--seed is a number');
  const evals = list(opt, 'eval');
  const at = list(opt, 'at').map((a) => {
    const m = /^\s*(\d+)\s*:([\s\S]*)$/.exec(a);
    if (!m || !m[2].trim()) throw new UserError(`--at "${a}": use --at frame:"code", like --at 50:"px = 10"`);
    return { f: +m[1], code: m[2] };
  });
  const watch = list(opt, 'watch');
  const every = opt.every === undefined ? 0 : Number(opt.every);
  if (!Number.isInteger(every) || every < 0) throw new UserError('--every is a whole number of frames');
  return { frames, res, seed, input: parseInput(list(opt, 'input').join(',')), drawAll: !opt['skip-draw'], evals, at, watch, every };
}

// An option that may be given several times, as a list of strings.
function list(opt, k) {
  const v = opt[k];
  if (v === undefined) return [];
  const a = [].concat(v);
  if (a.some((x) => x === true)) throw new UserError(`--${k} needs a value`);
  return a;
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0], { strict: true });
  const res = await checkGame(game);
  if (res.errors.length) { report(res, true); console.error('not run: fix the errors first (b3d check)'); return 1; }
  const o = runOptions(opt);
  const showLogs = cmd === 'run' || opt.log || o.watch.length > 0;
  const t0 = Date.now();
  const r = await runCart(game.cart, game.where, {
    ...o,
    onLog: (l) => {
      if (!showLogs) return;
      if (l.save !== undefined) console.log(`[save] ${l.save}`);
      else if (l.watch !== undefined) console.log(`f${l.f} ${l.watch} = ${l.t}`);
      else console.log(l.t);
    },
  });
  try {
    const out = typeof opt.out === 'string' ? opt.out : cmd === 'shot' ? 'shot.png' : null;
    if (out) writeFileSync(out, await screenshotPng(r.page));
    const secs = ((Date.now() - t0) / 1000).toFixed(1);
    if (r.error) console.error(`error at frame ${r.frames}: ${r.error}`);
    console.error(`${r.error ? 'stopped after' : 'ran'} ${r.frames} frames (${(r.frames / 60).toFixed(2)} s of game time, seed ${o.seed}) in ${secs} s`
      + (out ? `; screen saved to ${out}` : ''));
  } finally { await r.close(); }
  return r.error ? 1 : 0;
}
