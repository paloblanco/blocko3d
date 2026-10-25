// Export a cart as a standalone game: <name>.zip containing index.html and <name>.js.
// <name>.js = the bundled runtime (engine + three.js) + the cart's data + the cart's code,
// so the game needs no network access and no other files.
import { zipFiles } from './zip.js';

const RUNTIME_URL = new URL('../runtime/blocky3d.runtime.js', import.meta.url);

export function gameSlug(name) {
  const s = String(name || '').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
  return s || 'game';
}

const escHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function indexHtml(title, jsFile) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escHtml(title)}</title>
<style>
  html, body { margin: 0; height: 100%; background: #000; overflow: hidden; }
  #screen { position: absolute; inset: 0; margin: auto; aspect-ratio: 1; width: min(100vw, 100vh); }
  #screen canvas { position: absolute; inset: 0; width: 100%; height: 100%; image-rendering: pixelated; display: block; }
</style>
</head>
<body>
<div id="screen">
  <canvas id="gl" width="256" height="256"></canvas>
  <canvas id="ui" width="256" height="256"></canvas>
</div>
<script src="${escHtml(jsFile)}"></script>
<script>
  // keep keyboard focus on the game, including when embedded in an iframe (itch.io, Game Jolt)
  window.focus();
  window.addEventListener('pointerdown', () => window.focus());
</script>
</body>
</html>
`;
}

function gameJs(cart, runtime) {
  const data = { ...cart };
  delete data.code;
  return [
    `// ${String(cart.name || 'game').replace(/[\r\n]+/g, ' ')}, made with blocky3D`,
    '// ---------------------------------------------------------------- runtime (blocky3D engine + three.js)',
    runtime.trim(),
    '// ---------------------------------------------------------------- cart data',
    'Blocky3D.catchGlobalErrors();',
    `Blocky3D.install(${JSON.stringify(data)}, { canvas: document.getElementById('gl'), overlay: document.getElementById('ui') });`,
    '// ---------------------------------------------------------------- game code',
    cart.code,
    '// ---------------------------------------------------------------- start',
    ';Blocky3D.start();',
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
