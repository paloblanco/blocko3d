// Export a cart as a standalone game: <name>.zip containing index.html and <name>.js, which are all
// the game needs, plus four files that make it an installable app (PWA) when it's hosted on an https
// site: manifest.webmanifest, sw.js (keeps the files for offline play) and two icons made from the
// cover art. Opened from disk or embedded elsewhere, those four are simply unused.
// <name>.js = the bundled runtime (engine + three.js) + the cart's data (cover art included) + the cart's code,
// so the game needs no network access and no other files.
import { zipFiles } from './zip.js';
import { VERSION } from './version.js';
import { decodePng, encodePng, scaleRgba } from './png.js';
import { drawTitle } from './font.js';

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
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="theme-color" content="#000000">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-192.png">
<title>${escHtml(title)}</title>
<style>
  html, body { margin: 0; height: 100%; background: #000; }
</style>
</head>
<body>
<script src="${escHtml(jsFile)}"></script>
<script>
  // installable and playable offline when hosted on https (sw.js keeps the files); elsewhere, nothing
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1'))
    navigator.serviceWorker.register('sw.js').catch(() => {});
</script>
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
    '// the page shows the cover and a play button; the game starts on a click, tap or key press',
    `Blocky3D.play(${JSON.stringify(data)},`,
    '// ---------------------------------------------------------------- game code',
    '// (inside a function, so Restart can run it again from the top)',
    'function () {',
    cart.code,
    ';return ' + HOOKS_EXPR + ';',
    '});',
    '',
  ].join('\n');
}

// ---------------------------------------------------------------- installable app (PWA)

// The cover art (or, without one, the game's name on a card) as 256×256 RGBA pixels.
async function coverPixels(cart) {
  if (typeof cart.cover === 'string' && cart.cover.startsWith('data:image/png;base64,')) {
    const b64 = cart.cover.slice(22), bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const img = await decodePng(bytes);
    if (img) return img.w === 256 && img.h === 256 ? img.rgba : scaleRgba(img.rgba, img.w, img.h, 256, 256);
  }
  // the name card, drawn with the engine's font into a plain pixel buffer
  const px = new Uint8Array(256 * 256 * 4);
  const fill = (x0, y0, w, h, [r, g, b]) => {
    for (let y = Math.max(0, y0); y < Math.min(256, y0 + h); y++)
      for (let x = Math.max(0, x0); x < Math.min(256, x0 + w); x++) px.set([r, g, b, 255], (y * 256 + x) * 4);
  };
  fill(0, 0, 256, 256, [0x1d, 0x2b, 0x53]);
  const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  const ctx = { fillStyle: '#000000', fillRect(x, y, w, h) { fill(Math.round(x), Math.round(y), w, h, hex(this.fillStyle)); } };
  drawTitle(ctx, cart.name, '#fff1e8', '#000000');
  return px;
}

// The two icons an installable app needs, as PNG bytes, scaled from the cover with crisp pixels.
export async function appIcons(cart) {
  const px = await coverPixels(cart);
  return { 192: encodePng(192, 192, scaleRgba(px, 256, 256, 192, 192)), 512: encodePng(512, 512, scaleRgba(px, 256, 256, 512, 512)) };
}

export function manifestJson(cart) {
  const name = String(cart.name || 'game');
  return JSON.stringify({
    name, short_name: name.length > 12 ? name.slice(0, 12).trim() : name,
    start_url: './index.html', scope: './', display: 'fullscreen',
    background_color: '#000000', theme_color: '#000000',
    icons: [
      { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }, null, 2) + '\n';
}

// A short fingerprint of a build, so every new export has a new cache name and players get it.
function fingerprint(...parts) {
  let h = 0x811c9dc5;
  for (const p of parts) {
    const s = typeof p === 'string' ? p : Array.from(p, (b) => String.fromCharCode(b)).join('');
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

// The service worker: on install it stores the game's files; after that it answers from storage, so
// the game opens with no connection. A new export has a new cache name, so the browser installs the
// new files the next time the game is opened online, and they're used from the launch after.
export function serviceWorkerJs(jsFile, version) {
  const files = ['./', 'index.html', jsFile, 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
  return `// blocky3D: keeps this game's files on the device so it plays offline (build ${version})
const CACHE = 'b3d-' + self.registration.scope + '-${version}';
const FILES = ${JSON.stringify(files)};
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  const mine = 'b3d-' + self.registration.scope + '-';
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith(mine) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then((c) => c.match(e.request, { ignoreSearch: true }))
    .then((hit) => hit || fetch(e.request)));
});
`;
}

// Everything that goes next to index.html and <slug>.js: [{ name, data }].
export async function appFiles(cart, slug, gameJsText) {
  const icons = await appIcons(cart), manifest = manifestJson(cart);
  const version = fingerprint(gameJsText, manifest, icons[192], icons[512]);
  return [
    { name: 'manifest.webmanifest', data: manifest },
    { name: 'sw.js', data: serviceWorkerJs(slug + '.js', version) },
    { name: 'icon-192.png', data: icons[192] },
    { name: 'icon-512.png', data: icons[512] },
  ];
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
  const js = gameJs(cart, runtime);
  const blob = await zipFiles([
    { name: 'index.html', data: indexHtml(cart.name || slug, slug + '.js') },
    { name: slug + '.js', data: js },
    ...await appFiles(cart, slug, js),
  ]);
  return { filename: slug + '.zip', blob, slug };
}
