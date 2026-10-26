// Exports the castle demo to standalone_demo/, exactly as the IDE's Export button would
// (index.html + castle.js, no other files), so the exported page can be tried on the static site,
// and writes it as a cart file, demos/castle.b3d.json, for the IDE's Demos menu.
// Run by `npm run build`, after the runtime bundle.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { demoCart, normalizeCart } from '../js/cart.js';
import { indexHtml, gameJs, gameSlug, checkSyntax } from '../js/export.js';

const root = new URL('../', import.meta.url);
const cart = normalizeCart(demoCart());
cart.name = 'castle';
checkSyntax(cart.code);
const slug = gameSlug(cart.name);
const runtime = readFileSync(new URL('runtime/blocky3d.runtime.js', root), 'utf8');
const out = new URL('standalone_demo/', root);
rmSync(out, { recursive: true, force: true });   // drop files from older builds (e.g. demo.js)
mkdirSync(out, { recursive: true });
writeFileSync(new URL('index.html', out), indexHtml(cart.name, slug + '.js'));
writeFileSync(new URL(slug + '.js', out), gameJs(cart, runtime));
writeFileSync(new URL('demos/castle.b3d.json', root), JSON.stringify(cart) + '\n');
console.log(`standalone_demo/index.html + ${slug}.js, demos/castle.b3d.json`);
