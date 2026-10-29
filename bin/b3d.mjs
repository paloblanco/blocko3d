#!/usr/bin/env node
// b3d: the BLOCKO3D command-line tool. Make, check and export games from a terminal, with any
// editor (or an AI agent), next to the IDE. Run `b3d help` for the commands.
import { UserError } from '../cli/project.mjs';

// A map's .gen.js is an ES module in the user's folder, which usually has no package.json saying
// so; Node then prints a warning on every pack. The module loads fine, so that warning is dropped.
const emitWarning = process.emitWarning;
process.emitWarning = function (w, ...rest) {
  if (/Module type of file:.*\.gen\.js/.test(String((w && w.message) || w))) return;
  return emitWarning.call(this, w, ...rest);
};
import { VERSION } from '../js/version.js';

const HELP = `b3d ${VERSION}: BLOCKO3D from the command line

  b3d check   <game>                       check every limit and format; errors name the file and line
  b3d export  <game> [--out dir] [--zip]   write the standalone game, as the IDE's Export does
  b3d unpack  <cart.b3d.json> <folder>     a cart to a project folder of small text files
  b3d pack    <folder> [--out cart.b3d.json]   a project folder back to a cart for the IDE
  b3d shot    <game> [run options] [--out shot.png]   run headless, save a screenshot
  b3d run     <game> [run options] [--log]            run headless, print printh output
  b3d render  <game> --map n [--view top|front|side|iso] [--out map.png]
  b3d render  <game> --vox n [--out vox.png]       a model from four sides and above
  b3d render  <game> --tiles [--out tiles.png]     every tile's top, side and bottom
  b3d sfx render <game> (--sfx n | --music [n]) [--out sound.wav]

<game> is a project folder or a .b3d.json cart.
run options: --frames n (default 60)  --input "x@120, up:120-300, p1:o@10"  --seed n  --res 1|2|3
  An input entry holds a button from frame a to b (up:a-b) or taps it on one frame (x@a).
  Buttons: left right up down o x (0-5) or a number; p1: to p3: for other players.

The headless commands (shot, run, render --map/--vox) need Playwright: npm install -g playwright
and npx playwright install chromium.`;

const COMMANDS = {
  check: () => import('../cli/cmd-check.mjs'),
  export: () => import('../cli/cmd-export.mjs'),
  pack: () => import('../cli/cmd-pack.mjs'),
  unpack: () => import('../cli/cmd-pack.mjs'),
  shot: () => import('../cli/cmd-run.mjs'),
  run: () => import('../cli/cmd-run.mjs'),
  render: () => import('../cli/cmd-render.mjs'),
  sfx: () => import('../cli/cmd-sfx.mjs'),
};

// --name value, --flag, and plain arguments, in any order
export function parseArgs(argv) {
  const pos = [], opt = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=', 2);
      if (v !== undefined) opt[k] = v;
      else if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) opt[k] = argv[++i];
      else opt[k] = true;
    } else pos.push(a);
  }
  return { pos, opt };
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') { console.log(HELP); return 0; }
  if (cmd === 'version' || cmd === '--version') { console.log(VERSION); return 0; }
  if (!COMMANDS[cmd]) throw new UserError(`unknown command "${cmd}"; try b3d help`);
  const mod = await COMMANDS[cmd]();
  return (await mod.default(cmd, parseArgs(rest))) ?? 0;
}

main().then((code) => { process.exitCode = code; }, (e) => {
  if (e instanceof UserError) console.error('b3d: ' + e.message);
  else console.error(e && e.stack ? e.stack : e);
  process.exitCode = 2;
});
