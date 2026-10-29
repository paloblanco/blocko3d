// b3d shot <game> [--frames n] [--input "..."] [--seed n] [--res 1|2|3] [--out shot.png] [--log]
// b3d run  <game> [same options]   (prints printh output; --out also saves a screenshot)
// The game runs headless for n updates (default 60, one second) from _init, with the scripted
// input, then the screen is saved. printh lines go to stdout as they are; the run's summary and
// any error go to stderr. Exit code 1 if the game threw.
import { writeFileSync } from 'node:fs';
import { loadGame, UserError } from './project.mjs';
import { checkCart } from './check.mjs';
import { report } from './cmd-check.mjs';
import { parseInput, runCart, screenshotPng } from './headless.mjs';

export function runOptions(opt) {
  const frames = opt.frames === undefined ? 60 : Number(opt.frames);
  if (!Number.isInteger(frames) || frames < 0) throw new UserError('--frames is a whole number of updates (60 = one second)');
  const res = opt.res === undefined ? 1 : Number(opt.res);
  if (![1, 2, 3].includes(res)) throw new UserError('--res is 1, 2 or 3');
  const seed = opt.seed === undefined ? 0 : Number(opt.seed);
  if (!Number.isFinite(seed)) throw new UserError('--seed is a number');
  return { frames, res, seed, input: parseInput(opt.input === true ? '' : opt.input), drawAll: !opt['skip-draw'] };
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0], { strict: true });
  const res = await checkCart(game.raw, game.where);
  if (res.errors.length) { report(res); console.error('not run: fix the errors first (b3d check)'); return 1; }
  const o = runOptions(opt);
  const showLogs = cmd === 'run' || opt.log;
  const t0 = Date.now();
  const r = await runCart(game.cart, game.where, {
    ...o,
    onLog: (l) => {
      if (!showLogs) return;
      if (l.save !== undefined) console.log(`[save] ${l.save}`);
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
