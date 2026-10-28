// Makes the IDE installable and usable offline, run by `npm run build` (last, after the demos):
// 1. icons/ide-192.png and icons/ide-512.png, the blocky3D cube on the IDE's dark blue;
// 2. ide.webmanifest, the app's name, icons and window. Its scope is index.html alone, because the
//    standalone demos live in folders under the IDE's and are apps of their own;
// 3. ide-sw.js, the service worker. It lists every file the IDE uses and keeps a copy of each.
//    Online it always fetches the latest (so a push shows up the next time the IDE opens) and
//    stores it; offline it answers from the copies. The list carries a fingerprint of the files'
//    contents, so any change gives a new ide-sw.js, and the browser re-downloads the whole set.
// Because ide-sw.js carries that fingerprint, run `npm run build` (and commit its output) after ANY
// change to the IDE's files, not just engine changes; otherwise installed IDEs keep the old offline
// copy. CI fails if ide-sw.js is stale. Files the IDE needs that aren't in the list (a new folder,
// say) work online but not offline: add their folder to SOURCES.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { encodePng } from '../js/png.js';

const root = new URL('../', import.meta.url);

// ---------------------------------------------------------------- 1. icons
// The logo from the IDE's top bar: a rounded square tilted by -8°, striped diagonally
// yellow / red / blue, on the IDE's background. Drawn with 3×3 samples per pixel for smooth edges.
const BG = [0x0d, 0x12, 0x22], STRIPES = [[0xff, 0xec, 0x27], [0xff, 0x00, 0x4d], [0x29, 0xad, 0xff]];
function logo(size) {
  const px = new Uint8Array(size * size * 4);
  const side = 0.54, round = 0.16, a = (-8 * Math.PI) / 180, ca = Math.cos(a), sa = Math.sin(a);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const sum = [0, 0, 0];
    for (let sy = 0; sy < 3; sy++) for (let sx = 0; sx < 3; sx++) {
      // the sample in icon units (-0.5..0.5), turned back into the square's own frame
      const X = (x + (sx + 0.5) / 3) / size - 0.5, Y = (y + (sy + 0.5) / 3) / size - 0.5;
      const u = (X * ca + Y * sa) / side, v = (-X * sa + Y * ca) / side;   // -0.5..0.5 inside
      const qx = Math.max(Math.abs(u) - (0.5 - round), 0), qy = Math.max(Math.abs(v) - (0.5 - round), 0);
      const inside = Math.abs(u) <= 0.5 && Math.abs(v) <= 0.5 && Math.hypot(qx, qy) <= round;
      const t = (u + v + 1) / 2;                                              // 0 top-left .. 1 bottom-right
      const c = inside ? STRIPES[t < 1 / 3 ? 0 : t < 2 / 3 ? 1 : 2] : BG;
      for (let k = 0; k < 3; k++) sum[k] += c[k];
    }
    px.set([Math.round(sum[0] / 9), Math.round(sum[1] / 9), Math.round(sum[2] / 9), 255], (y * size + x) * 4);
  }
  return encodePng(size, size, px);
}
mkdirSync(new URL('icons/', root), { recursive: true });
for (const s of [192, 512]) writeFileSync(new URL(`icons/ide-${s}.png`, root), logo(s));

// ---------------------------------------------------------------- 2. manifest
// no "id": the browser then uses start_url, the IDE's full address (an "id" would be read from the
// site's root, so './index.html' would mean /index.html and could clash with another app on the site)
const manifest = {
  name: 'blocky3D',
  short_name: 'blocky3D',
  description: 'A small 3D fantasy console: code, maps, tiles, voxel models, scenes, sound and music in one page.',
  start_url: './index.html',
  scope: './index.html',
  display: 'standalone',
  background_color: '#0d1222',
  theme_color: '#141b30',
  icons: [
    { src: 'icons/ide-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'icons/ide-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'icons/ide-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
};
writeFileSync(new URL('ide.webmanifest', root), JSON.stringify(manifest, null, 2) + '\n');

// ---------------------------------------------------------------- 3. service worker
// Every file in these places, except notes and licenses (the licenses stay in the repo).
const SOURCES = ['index.html', 'player.html', 'webgl-check.html', 'ide.webmanifest', 'icons/', 'css/', 'js/', 'vendor/', 'runtime/', 'demos/'];
const SKIP = /(^|\/)(LICENSE[^/]*|README\.md)$|\.png$(?<!icons\/ide-\d+\.png)/;   // demo cover PNGs are inside the carts
function walk(rel) {
  const full = new URL(rel, root);
  if (!rel.endsWith('/')) return [rel];
  return readdirSync(full).sort().flatMap((n) => (statSync(new URL(n, full)).isDirectory() ? walk(rel + n + '/') : [rel + n]));
}
const files = SOURCES.flatMap(walk).filter((f) => !SKIP.test(f)).sort();
let h = 0x811c9dc5;   // FNV-1a over every file's path and bytes
for (const f of files) for (const b of [...Buffer.from(f + '\0'), ...readFileSync(new URL(f, root))]) h = Math.imul(h ^ b, 0x01000193) >>> 0;
const version = h.toString(16).padStart(8, '0');

const sw = `// blocky3D IDE: keeps the IDE's files on this device, so the IDE works offline and as an
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
console.log(`ide: icons, ide.webmanifest, ide-sw.js (${files.length} files, build ${version})`);
