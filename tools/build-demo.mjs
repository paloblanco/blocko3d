// Exports the castle demo to standalone_demo/, exactly as the IDE's Export button would
// (index.html + demo.js, no other files), so the exported page can be tried on the static site.
// Run by `npm run build`, after the runtime bundle.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { demoCart, normalizeCart } from '../js/cart.js';
import { indexHtml, gameJs, gameSlug, checkSyntax } from '../js/export.js';

const root = new URL('../', import.meta.url);
const cart = normalizeCart(demoCart());
cart.name = 'demo';
checkSyntax(cart.code);
const slug = gameSlug(cart.name);
const runtime = readFileSync(new URL('runtime/blocky3d.runtime.js', root), 'utf8');
const out = new URL('standalone_demo/', root);
mkdirSync(out, { recursive: true });
writeFileSync(new URL('index.html', out), indexHtml(cart.name, slug + '.js'));
writeFileSync(new URL(slug + '.js', out), gameJs(cart, runtime));
console.log(`standalone_demo/index.html + ${slug}.js`);
