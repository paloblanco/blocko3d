// Makes the IDE installable and usable offline, run by `npm run build` (last, after the demos):
// 1. ide.webmanifest, the app's name, icons (the BLOCKO3D cube tile from brand/web/) and window.
//    Its scope is index.html alone, because the standalone demos live in folders under the IDE's
//    and are apps of their own;
// 2. ide-sw.js, the service worker. It lists every file the IDE uses and keeps a copy of each.
//    Online it always fetches the latest (so a push shows up the next time the IDE opens) and
//    stores it; offline it answers from the copies. The list carries a fingerprint of the files'
//    contents, so any change gives a new ide-sw.js, and the browser re-downloads the whole set.
// Because ide-sw.js carries that fingerprint, run `npm run build` (and commit its output) after ANY
// change to the IDE's files, not just engine changes; otherwise installed IDEs keep the old offline
// copy. CI fails if ide-sw.js is stale. Files the IDE needs that aren't in the list (a new folder,
// say) work online but not offline: add their folder to SOURCES.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';

const root = new URL('../', import.meta.url);

// ---------------------------------------------------------------- 1. manifest
// no "id": the browser then uses start_url, the IDE's full address (an "id" would be read from the
// site's root, so './index.html' would mean /index.html and could clash with another app on the site)
const manifest = {
  name: 'BLOCKO3D',
  short_name: 'BLOCKO3D',
  description: 'A small 3D fantasy console: code, maps, tiles, voxel models, scenes, sound and music in one page.',
  start_url: './index.html',
  scope: './index.html',
  display: 'standalone',
  background_color: '#0d1222',
  theme_color: '#141b30',
  icons: [
    { src: 'brand/web/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'brand/web/icon-512.png', sizes: '512x512', type: 'image/png' },
    // the cube sits well inside the tile's middle, so it also works as a maskable (cropped) icon
    { src: 'brand/web/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
};
writeFileSync(new URL('ide.webmanifest', root), JSON.stringify(manifest, null, 2) + '\n');

// ---------------------------------------------------------------- 2. service worker
// Every file in these places, except notes, licenses and demo cover PNGs (those are inside the
// carts), plus the brand files the IDE shows (the rest of brand/ is the logo kit, not needed offline).
const SOURCES = ['index.html', 'player.html', 'webgl-check.html', 'ide.webmanifest', 'css/', 'js/', 'vendor/', 'runtime/', 'demos/',
  'brand/logo/blocko3d-horizontal-on-dark.svg', 'brand/icon/blocko3d-cube.svg', 'brand/web/favicon.ico', 'brand/web/favicon.svg',
  'brand/web/apple-touch-icon.png', 'brand/web/icon-192.png', 'brand/web/icon-512.png'];
const SKIP = /(^|\/)(LICENSE[^/]*|README\.md)$|^demos\/.*\.png$/;
function walk(rel) {
  const full = new URL(rel, root);
  if (!rel.endsWith('/')) return [rel];
  return readdirSync(full).sort().flatMap((n) => (statSync(new URL(n, full)).isDirectory() ? walk(rel + n + '/') : [rel + n]));
}
const files = SOURCES.flatMap(walk).filter((f) => !SKIP.test(f)).sort();
let h = 0x811c9dc5;   // FNV-1a over every file's path and bytes
for (const f of files) for (const b of [...Buffer.from(f + '\0'), ...readFileSync(new URL(f, root))]) h = Math.imul(h ^ b, 0x01000193) >>> 0;
const version = h.toString(16).padStart(8, '0');

const sw = `// BLOCKO3D IDE: keeps the IDE's files on this device, so the IDE works offline and as an
// installed app. Made by tools/build-ide.mjs (npm run build); don't edit it by hand.
// Online, every file is fetched fresh (and the copy updated); offline, the copy answers.
const CACHE = 'b3d-ide-${version}';
const FILES = ${JSON.stringify(files)};
const OURS = new Set(FILES.map((f) => new URL(f, self.registration.scope).href));
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('b3d-ide-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  url.search = ''; url.hash = '';
  if (url.href === self.registration.scope) url.href += 'index.html';   // the bare folder address is the IDE
  if (!OURS.has(url.href)) return;   // anything else (the standalone demos, other sites) is left alone
  // fetch by address (a page load's own request can't be re-sent with other options)
  e.respondWith(fetch(url.href, { cache: 'no-cache' })
    .then((res) => {
      if (res.ok) { const copy = res.clone(); e.waitUntil(caches.open(CACHE).then((c) => c.put(url.href, copy))); }
      return res;
    })
    .catch(() => caches.open(CACHE).then((c) => c.match(url.href)).then((hit) => hit || Response.error())));
});
`;
writeFileSync(new URL('ide-sw.js', root), sw);
console.log(`ide: ide.webmanifest, ide-sw.js (${files.length} files, build ${version})`);
