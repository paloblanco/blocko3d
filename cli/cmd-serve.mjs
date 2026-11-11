// b3d serve <game> [--port n] [--open]: play the game in a browser while you edit it in any editor.
// A small web server on this computer only (127.0.0.1). It checks the game every time a file in
// the folder (or the .b3d.json cart) is saved: when the check passes the browser page reloads with
// the new version; when it fails the page shows the errors (and so does the terminal) until the
// next save fixes them. printh output, save() data and game errors are printed in the terminal,
// errors with their file and line. The page runs the same runtime as an export, without the cover
// screen, so the game starts straight away. Nothing is written to the folder except b3d.d.ts
// (editor autocomplete), refreshed when the server starts.
import { createServer } from 'node:http';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { loadGame, isFolder, UserError } from './project.mjs';
import { checkGame } from './check.mjs';
import { report } from './cmd-check.mjs';
import { runtimeText } from './cmd-export.mjs';
import { errorText } from './headless.mjs';
import { writeEditorFiles } from './editor.mjs';

const POLL_MS = 250;
const SKIP_DIRS = new Set(['node_modules', '.git']);

// Every file's path, time and size: changes when anything in the game is saved.
function fingerprint(path) {
  if (!isFolder(path)) { try { const s = statSync(path); return `${s.mtimeMs}:${s.size}`; } catch { return 'missing'; } }
  const parts = [];
  const walk = (dir) => {
    let names;
    try { names = readdirSync(dir).sort(); } catch { return; }
    for (const n of names) {
      if (n.startsWith('.') || SKIP_DIRS.has(n) || n.endsWith('.b3d.json') || n === 'b3d.d.ts') continue;
      const p = join(dir, n);
      let s;
      try { s = statSync(p); } catch { continue; }
      if (s.isDirectory()) walk(p); else parts.push(`${p}:${s.mtimeMs}:${s.size}`);
    }
  };
  walk(path);
  return parts.join('|');
}

const time = () => new Date().toTimeString().slice(0, 8);

const PAGE = (title) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<title>${title.replace(/[<&"]/g, '')} (b3d serve)</title>
<style>
  html, body { margin: 0; height: 100%; background: #000; }
  #b3d-errors { display: none; position: fixed; z-index: 1000; left: 0; right: 0; top: 0; max-height: 60%; overflow: auto; margin: 0;
    padding: 12px 16px; background: #2a0d14; color: #ffccd5; border-bottom: 2px solid #ff004d; font: 13px/1.45 ui-monospace, Menlo, Consolas, monospace; white-space: pre-wrap; }
</style>
</head>
<body>
<pre id="b3d-errors"></pre>
<script src="runtime.js"></script>
<script>
(async () => {
  const banner = document.getElementById('b3d-errors');
  const showProblems = (text) => { banner.textContent = text + '\\n\\nFix it and save: the game reloads by itself.'; banner.style.display = 'block'; };
  const send = (body) => fetch('log', { method: 'POST', body: JSON.stringify(body), keepalive: true }).catch(() => {});
  let version = null;
  const events = new EventSource('events');
  events.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.problems) { showProblems(m.problems); return; }
    if (version !== null && m.version !== version) location.reload();
  };
  const game = await (await fetch('game.json', { cache: 'no-store' })).json();
  if (game.problems) { showProblems(game.problems); return; }
  version = game.version;
  const onError = (err) => {
    Blocko3D.showError(err);
    send({ error: { message: String((err && err.message) || err), stack: String((err && err.stack) || '') } });
  };
  window.addEventListener('error', (e) => onError(e.error || e.message));
  const engine = Blocko3D.install(game.cart, {
    onError,
    onLog: (t) => send({ log: String(t) }),
    onSave: (json) => send({ save: json }),
  });
  window.addEventListener('keydown', () => engine.unlockAudio(), { once: true });
  let fn;
  try { fn = (0, eval)(Blocko3D.cartFunctionSource(game.cart.code) + '\\n//# sourceURL=main.js'); }
  catch (e) { onError(e); return; }
  Blocko3D.start(fn);
})();
</script>
</body>
</html>
`;

export default async function (cmd, { pos, opt }) {
  const path = pos[0];
  if (!path) throw new UserError('usage: b3d serve <game> [--port 8030] [--open]');
  let game = await loadGame(path);   // throws for a missing path
  if (game.kind === 'folder') writeEditorFiles(path);

  let state = { version: 0 }, where = game.where;
  const clients = new Set();
  const broadcast = (msg) => { for (const res of clients) res.write(`data: ${JSON.stringify(msg)}\n\n`); };

  async function rebuild(first) {
    let problems = null;
    try {
      game = await loadGame(path);
      const res = await checkGame(game);
      if (res.errors.length) {
        problems = res.errors.map((e) => `${e.at}: ${e.msg}`).join('\n');
        console.log(`${time()} not reloaded:`);
        report(res, true);
      } else if (res.warnings.length && first) console.log(`${res.warnings.length} warning${res.warnings.length > 1 ? 's' : ''} (b3d check shows them)`);
    } catch (e) {
      problems = (e && e.message) || String(e);
      console.log(`${time()} not reloaded: ${problems}`);
    }
    if (problems) { state = { ...state, problems }; broadcast({ problems }); return; }
    where = game.where;
    state = { version: state.version + 1, cart: game.cart };
    if (!first) console.log(`${time()} reloaded`);
    broadcast({ version: state.version });
  }
  await rebuild(true);

  let runtime;
  try { runtime = runtimeText(); } catch { throw new UserError('runtime/blocko3d.runtime.js is missing; run npm run build in the BLOCKO3D folder'); }

  const server = createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const send = (type, body) => { res.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' }); res.end(body); };
    if (req.method === 'POST' && url.pathname === '/log') {
      let body = '';
      req.on('data', (c) => { body += c; if (body.length > 1e6) req.destroy(); });
      req.on('end', () => {
        try {
          const m = JSON.parse(body);
          if (m.log !== undefined) console.log(m.log);
          else if (m.save !== undefined) console.log(`[save] ${m.save}`);
          else if (m.error) console.log(`${time()} error: ${errorText(m.error, where)}`);
        } catch { /* not ours */ }
        res.writeHead(204); res.end();
      });
      return;
    }
    if (url.pathname === '/' || url.pathname === '/index.html') return send('text/html; charset=utf-8', PAGE(String((state.cart && state.cart.name) || 'game')));
    if (url.pathname === '/runtime.js') return send('text/javascript; charset=utf-8', runtime);
    if (url.pathname === '/game.json') return send('application/json', JSON.stringify(state.problems ? { problems: state.problems } : { version: state.version, cart: state.cart }));
    if (url.pathname === '/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store', connection: 'keep-alive' });
      res.write(`data: ${JSON.stringify(state.problems ? { problems: state.problems } : { version: state.version })}\n\n`);
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;
    }
    res.writeHead(404); res.end();
  });
  // keep the event streams open through proxies and sleepy browsers
  const ping = setInterval(() => { for (const res of clients) res.write(': ping\n\n'); }, 15000);

  // the port asked for, or the next free one
  const want = opt.port === undefined ? 8030 : Number(opt.port);
  if (!Number.isInteger(want) || want < 1 || want > 65535) throw new UserError('--port is a number like 8030');
  const port = await new Promise((resolve, reject) => {
    let p = want;
    const tryPort = () => {
      server.once('error', (e) => {
        if (e.code === 'EADDRINUSE' && opt.port === undefined && p < want + 20) { p++; tryPort(); }
        else reject(new UserError(`port ${p} is ${e.code === 'EADDRINUSE' ? 'in use' : 'unavailable: ' + e.message}; try --port`));
      });
      server.listen(p, '127.0.0.1', () => resolve(p));
    };
    tryPort();
  });
  const link = `http://localhost:${port}/`;
  console.log(`serving "${(state.cart && state.cart.name) || path}" at ${link}\nsave any file and the game reloads; printh and errors show here. Ctrl+C to stop.`);
  if (opt.open) {
    const [c, args] = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', link]] : process.platform === 'darwin' ? ['open', [link]] : ['xdg-open', [link]];
    try { spawn(c, args, { stdio: 'ignore', detached: true }).on('error', () => {}).unref(); } catch { /* open it by hand */ }
  }

  // watch: rebuild once the files have stopped changing (an editor's save can take a few writes)
  let last = fingerprint(path), pending = null, busy = false;
  const watch = setInterval(async () => {
    if (busy) return;
    const now = fingerprint(path);
    if (now !== last) { last = now; pending = now; return; }
    if (pending === null) return;
    pending = null; busy = true;
    try { await rebuild(false); } finally { busy = false; }
  }, POLL_MS);

  await new Promise((resolve) => {
    const stop = () => { clearInterval(watch); clearInterval(ping); for (const res of clients) res.end(); server.close(); resolve(); };
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
  });
  return 0;
}
