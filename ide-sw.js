// BLOCKO3D IDE: keeps the IDE's files on this device, so the IDE works offline and as an
// installed app. Made by tools/build-ide.mjs (npm run build); don't edit it by hand.
// Online, every file is fetched fresh (and the copy updated); offline, the copy answers.
const CACHE = 'b3d-ide-cd0f5579';
const FILES = ["brand/icon/blocko3d-cube.svg","brand/logo/blocko3d-horizontal-on-dark.svg","brand/web/apple-touch-icon.png","brand/web/favicon.ico","brand/web/favicon.svg","brand/web/icon-192.png","brand/web/icon-512.png","css/ide.css","demos/blockpop.b3d.json","demos/builder.b3d.json","demos/bumper.b3d.json","demos/castle.b3d.json","demos/firstperson.b3d.json","demos/index.json","demos/racing.b3d.json","demos/scrambler.b3d.json","demos/starter.b3d.json","demos/thirdperson.b3d.json","demos/tiltmaze.b3d.json","demos/village.b3d.json","ide.webmanifest","index.html","js/apidocs.js","js/audio.js","js/boot.js","js/cart.js","js/core.js","js/engine.js","js/export.js","js/font.js","js/format.js","js/ide.js","js/png.js","js/preview.js","js/shell.js","js/version.js","js/zip.js","player.html","runtime/blocko3d.runtime.js","vendor/codemirror/codemirror.min.css","vendor/codemirror/codemirror.min.js","vendor/codemirror/javascript.min.js","vendor/fonts/fonts.css","vendor/fonts/ibm-plex-sans-latin-400-normal.woff2","vendor/fonts/ibm-plex-sans-latin-500-normal.woff2","vendor/fonts/ibm-plex-sans-latin-600-normal.woff2","vendor/fonts/jetbrains-mono-latin-400-normal.woff2","vendor/fonts/jetbrains-mono-latin-600-normal.woff2","vendor/three/three.module.min.js","webgl-check.html"];
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
