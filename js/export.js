// Export a cart as a standalone game: <name>.zip containing index.html and <name>.js.
// <name>.js = the bundled runtime (engine + three.js) + the cart's data + the cart's code,
// so the game needs no network access and no other files.
import { zipFiles } from './zip.js';
import { VERSION } from './version.js';

// Same expression as boot.js's HOOKS_EXPR (export.js runs in the IDE, which doesn't load boot.js).
const HOOKS_EXPR = '({ _init: typeof _init === "function" ? _init : null,' +
  ' _update: typeof _update === "function" ? _update : null,' +
  ' _draw: typeof _draw === "function" ? _draw : null })';

const RUNTIME_URL = new URL('../runtime/blocky3d.runtime.js', import.meta.url);

export function gameSlug(name) {
  const s = String(name || '').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
  return s || 'game';
}

const escHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// The page is just a shell: the runtime builds the screen, touch controls and system buttons
// (see js/shell.js). Add your own <style> here to restyle them.
export function indexHtml(title, jsFile) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>${escHtml(title)}</title>
<style>
  html, body { margin: 0; height: 100%; background: #000; }
</style>
</head>
<body>
<script src="${escHtml(jsFile)}"></script>
</body>
</html>
`;
}

export function gameJs(cart, runtime) {
  const data = { ...cart };
  delete data.code;
  return [
    `// ${String(cart.name || 'game').replace(/[\r\n]+/g, ' ')}, made with blocky3D ${VERSION}`,
    '// ---------------------------------------------------------------- runtime (blocky3D engine + three.js)',
    runtime.trim(),
    '// ---------------------------------------------------------------- cart data',
    'Blocky3D.catchGlobalErrors();',
    `Blocky3D.install(${JSON.stringify(data)});`,
    '// ---------------------------------------------------------------- game code',
    '// (inside a function, so Restart can run it again from the top)',
    'Blocky3D.start(function () {',
    cart.code,
    ';return ' + HOOKS_EXPR + ';',
    '});',
    '',
  ].join('\n');
}

// Throws with a readable message if the code can't even be parsed, since a syntax error
// would stop the whole exported script from loading.
export function checkSyntax(code) {
  try { new Function(code); } catch (e) { throw new Error('Your code has a syntax error: ' + e.message); }
}

// Returns { filename, blob, slug }.
export async function exportGame(cart) {
  checkSyntax(cart.code || '');
  const res = await fetch(RUNTIME_URL);
  if (!res.ok) throw new Error(`Could not load the runtime (${res.status}).`);
  const runtime = await res.text();
  const slug = gameSlug(cart.name);
  const blob = await zipFiles([
    { name: 'index.html', data: indexHtml(cart.name || slug, slug + '.js') },
    { name: slug + '.js', data: gameJs(cart, runtime) },
  ]);
  return { filename: slug + '.zip', blob, slug };
}
