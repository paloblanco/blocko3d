// Headless runs for b3d shot / run / render: the real runtime bundle in headless Chromium (through
// Playwright) with software WebGL 2, stepped exactly one 1/60 s update at a time (engine.step), so
// a run gives the same result on any machine. Playwright is only needed by these commands.
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { UserError } from './project.mjs';
import { runtimeText } from './cmd-export.mjs';

const ORIGIN = 'http://b3d.local';   // never reaches the network: every request is answered below

export function loadPlaywright() {
  const tries = [import.meta.url, join(process.cwd(), 'noop.js')];
  try { tries.push(join(execSync('npm root -g', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(), 'noop.js')); } catch { /* no npm */ }
  for (const from of tries) {
    try { return createRequire(from)('playwright'); } catch { /* next */ }
  }
  throw new UserError('this command runs the game in a headless browser and needs Playwright:\n'
    + '  npm install -g playwright\n  npx playwright install chromium');
}

// ---------------------------------------------------------------- input scripts
// "x@120, up:120-300, p1:o@10, right:30-" -> [{ p, b, from, to }]
const NAMES = { left: 0, right: 1, up: 2, down: 3, o: 4, x: 5 };
export function parseInput(text) {
  const out = [];
  for (const raw of String(text || '').split(/[,;]+/).map((s) => s.trim()).filter(Boolean)) {
    const m = /^(?:p([0-3]):)?([a-z]+|\d+)(?:@(\d+)|:(\d+)-(\d*))$/i.exec(raw);
    if (!m) throw new UserError(`input "${raw}": use button@frame (a tap) or button:from-to (held; "from-" holds to the end)`);
    const name = m[2].toLowerCase();
    const b = name in NAMES ? NAMES[name] : /^\d+$/.test(name) ? +name : -1;
    const p = +(m[1] || 0);
    if (b < 0 || b > 21 || (p > 0 && b > 18)) throw new UserError(`input "${raw}": buttons are left right up down o x, or 0-${p ? 18 : 21}`);
    const from = m[3] !== undefined ? +m[3] : +m[4];
    const to = m[3] !== undefined ? from : m[5] === '' ? Infinity : +m[5];
    out.push({ p, b, from, to });
  }
  return out;
}

// ---------------------------------------------------------------- the page
const PAGE = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#000}canvas{display:block}</style></head>
<body><canvas id="gl"></canvas><canvas id="ui" width="256" height="256"></canvas>
<script src="runtime.js"></script>
<script>
// Fake gamepads for players 1-3 (pad 0 stays idle, so the keyboard is player 0).
const STD = { 0: 14, 1: 15, 2: 12, 3: 13, 4: 0, 5: 1, 6: 9, 7: 0, 8: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8, 16: 10, 17: 11, 18: 16 };
let pads = null;
function usePads(n) {
  pads = Array.from({ length: n + 1 }, (_, i) => ({ index: i, id: 'b3d pad ' + i, connected: true, mapping: 'standard', timestamp: 0,
    axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, () => ({ pressed: false, touched: false, value: 0 })) }));
  navigator.getGamepads = () => pads;
}
function seeded(n) {   // Math.random for games that use it directly
  let s = (n >>> 0) ^ 0x9e3779b9;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let x = s; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
}
// a watched value as one line: numbers to 4 decimals, arrays and objects as JSON (cut at 300)
function fmt(v) {
  if (typeof v === 'function') return 'function';
  let s;
  try { s = JSON.stringify(v, (k, x) => (typeof x === 'number' && !Number.isInteger(x) ? +x.toFixed(4) : x)); } catch { s = String(v); }
  if (s === undefined) s = String(v);
  return s.length > 300 ? s.slice(0, 297) + '...' : s;
}
window.B3D = {
  logs: [], error: null, frame: 0, input: [], engine: null, evalIn: null, at: [], watch: [], every: 0,
  setup(cart, opt) {
    if (opt.seed !== null) Math.random = seeded(opt.seed);
    const maxP = Math.max(0, ...opt.input.map((e) => e.p));
    if (maxP > 0) usePads(maxP);
    this.input = opt.input.map((e) => ({ ...e, to: e.to === null ? Infinity : e.to, on: false }));
    const fail = (e) => { if (!this.error) this.error = { message: String((e && e.message) || e), stack: String((e && e.stack) || '') }; };
    try {
      this.engine = Blocko3D.install(cart, { canvas: document.getElementById('gl'), overlay: document.getElementById('ui'), wire: false,
        onError: fail, onLog: (t) => this.logs.push({ f: this.frame, t: String(t) }), onSave: (j) => this.logs.push({ f: this.frame, save: j }) });
    } catch (e) { fail(e); return false; }
    if (opt.res > 1) this.engine.setScale(opt.res);
    if (opt.seed !== null) srand(opt.seed);
    // The game's code inside a function (as in the IDE and exports), whose hooks also carry an eval
    // that runs inside it, so --eval, --at and --watch see the game's own top-level variables.
    // The wrapper adds no lines, so error line numbers still match main.js.
    let fn;
    const src = '(function () {' + cart.code + '\\n;return Object.assign(' + Blocko3D.HOOKS_EXPR
      + ', { __eval: function (__b3d) { return eval(__b3d); } });\\n})\\n//# sourceURL=main.js';
    try { fn = (0, eval)(src); } catch (e) { fail(e); return false; }
    const run = () => { const h = fn(); this.evalIn = h.__eval; return h; };
    this.at = opt.at; this.watch = opt.watch.map((x) => ({ x, last: undefined })); this.every = opt.every;
    this.engine.step(0);   // updates only when B3D.step says so, never on the browser's clock
    if (Blocko3D.start(run) === false || this.error) return false;
    for (const code of opt.evals) if (!this.run(code, '--eval')) return false;   // right after _init
    this.watchAll();
    return true;
  },
  // run test code in the game's scope; a throw stops the run, like a game error
  run(code, label) {
    try { this.evalIn(code); return true; }
    catch (e) { this.error = { message: label + ' "' + code + '": ' + String((e && e.message) || e), stack: '' }; return false; }
  },
  // print each watched expression when its value changes (or every N frames)
  watchAll() {
    if (this.every && this.frame % this.every !== 0) return;
    for (const w of this.watch) {
      let v;
      try { v = fmt(this.evalIn(w.x)); } catch (e) { v = 'error: ' + ((e && e.message) || e); }
      if (!this.every && v === w.last) continue;
      w.last = v;
      this.logs.push({ f: this.frame, watch: w.x, t: v });
    }
  },
  // run the next n frames. Frames count from 1: during frame f, time() * 60 is f. Each frame sets
  // the scripted buttons, then runs one update (and a draw).
  step(n, drawAll, last) {
    for (let i = 0; i < n; i++) {
      this.frame++;
      for (const e of this.input) {
        const on = this.frame >= e.from && this.frame <= e.to;
        if (on === e.on) continue;
        e.on = on;
        if (e.p === 0) this.engine.setButton(e.b, on);
        else { const k = STD[e.b]; pads[e.p].buttons[k].pressed = on; pads[e.p].buttons[k].value = on ? 1 : 0; }
      }
      for (const a of this.at) if (a.f === this.frame && !this.run(a.code, '--at ' + a.f)) return false;
      const ok = this.engine.step(1, drawAll || (last && i === n - 1));
      if (!ok || this.error) return false;
      this.watchAll();
    }
    return true;
  },
  // the screen as the pause menu's Screenshot makes it: the 3D view at its resolution plus the 2D layer
  shot() {
    const gl = document.getElementById('gl'), ui = document.getElementById('ui');
    const out = document.createElement('canvas'); out.width = out.height = gl.width;
    const o = out.getContext('2d'); o.imageSmoothingEnabled = false;
    o.drawImage(gl, 0, 0); o.drawImage(ui, 0, 0, gl.width, gl.height);
    return out.toDataURL('image/png');
  },
  takeLogs() { const l = this.logs; this.logs = []; return l; },
};
</script></body></html>`;

export async function openBrowser() {
  const { chromium } = loadPlaywright();
  let browser;
  try {
    browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  } catch (e) {
    throw new UserError('Chromium would not start: ' + String(e.message).split('\n')[0] + '\n(run: npx playwright install chromium)');
  }
  const ctx = await browser.newContext({ viewport: { width: 800, height: 800 } });
  const runtime = runtimeText();
  await ctx.route(ORIGIN + '/**', (route) => {
    const path = new URL(route.request().url()).pathname;
    if (path === '/runtime.js') return route.fulfill({ status: 200, contentType: 'text/javascript', body: runtime });
    if (path === '/' || path === '/index.html') return route.fulfill({ status: 200, contentType: 'text/html', body: PAGE });
    return route.fulfill({ status: 404, body: '' });
  });
  await ctx.route((url) => !url.href.startsWith(ORIGIN), (route) => route.abort());   // no network
  return { browser, ctx };
}

// Turn a game error into where the user should look (main.js:12, or the cart's code:12).
export function errorText(err, where) {
  const m = /main\.js:(\d+)(?::(\d+))?/.exec(err.stack || '');
  return (m ? where('code:' + m[1]) + ': ' : '') + err.message;
}

// Runs a cart. opts: frames, input (parsed), seed (number or null), res, drawAll, onLog(entry),
// evals (code run after _init), at ([{ f, code }], run at the start of frame f), watch
// (expressions), every (print watches every N frames instead of on change). Returns { ok, frames, error, page, close }.
export async function runCart(cart, where, opts) {
  const { browser, ctx } = await openBrowser();
  const page = await ctx.newPage();
  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e));
  await page.goto(ORIGIN + '/index.html');
  const close = () => browser.close();
  const input = opts.input.map((e) => ({ ...e, to: Number.isFinite(e.to) ? e.to : null }));
  const flush = async () => { for (const l of await page.evaluate(() => B3D.takeLogs())) opts.onLog && opts.onLog(l); };
  let ok = await page.evaluate(([c, o]) => B3D.setup(c, o), [cart, { seed: opts.seed, res: opts.res || 1, input, evals: opts.evals || [], at: opts.at || [], watch: opts.watch || [], every: opts.every || 0 }]);
  await flush();
  let frames = 0;
  const CHUNK = 30;
  while (ok && frames < opts.frames) {
    const n = Math.min(CHUNK, opts.frames - frames);
    ok = await page.evaluate(([n, all, last]) => B3D.step(n, all, last), [n, !!opts.drawAll, frames + n >= opts.frames]);
    frames = await page.evaluate(() => B3D.frame);
    await flush();
  }
  let error = await page.evaluate(() => B3D.error);
  if (!error && pageErrors.length) error = { message: pageErrors[0].message, stack: pageErrors[0].stack || '' };
  return { ok: ok && !error, frames, error: error && errorText(error, where), page, close };
}

export async function screenshotPng(page) {
  const url = await page.evaluate(() => B3D.shot());
  return Buffer.from(url.slice(url.indexOf(',') + 1), 'base64');
}
