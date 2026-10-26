// Builds the demos, run by `npm run build` after the runtime bundle:
// 1. writes the castle (generated in code by demoCart) as a cart file, demos/castle.b3d.json, for
//    the IDE's Demos menu;
// 2. exports every demo listed in demos/index.json to standalone_demo/<slug>/, exactly as the IDE's
//    Export button would (index.html + <slug>.js, no other files);
// 3. writes standalone_demo/index.html, one page linking to all of them.
// So a demo added to demos/ and demos/index.json gets its standalone page on the next build.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { demoCart, normalizeCart } from '../js/cart.js';
import { indexHtml, gameJs, gameSlug, checkSyntax } from '../js/export.js';
import { VERSION } from '../js/version.js';

const root = new URL('../', import.meta.url);
const runtime = readFileSync(new URL('runtime/blocky3d.runtime.js', root), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 1. the castle as a cart file
const castle = normalizeCart(demoCart());
castle.name = 'castle';
writeFileSync(new URL('demos/castle.b3d.json', root), JSON.stringify(castle) + '\n');

// 2. every demo in the list, exported
const list = JSON.parse(readFileSync(new URL('demos/index.json', root), 'utf8'));
const out = new URL('standalone_demo/', root);
rmSync(out, { recursive: true, force: true });   // drop folders of demos that were removed or renamed
mkdirSync(out, { recursive: true });
const built = [];
for (const d of list) {
  const cart = normalizeCart(JSON.parse(readFileSync(new URL('demos/' + d.file, root), 'utf8')));
  if (!cart.name) cart.name = d.name;
  checkSyntax(cart.code);
  const slug = gameSlug(cart.name);
  if (built.some((b) => b.slug === slug)) throw new Error(`two demos export to standalone_demo/${slug}/; give one a different cart name`);
  const dir = new URL(slug + '/', out);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL('index.html', dir), indexHtml(d.name, slug + '.js'));
  writeFileSync(new URL(slug + '.js', dir), gameJs(cart, runtime));
  built.push({ ...d, slug });
}

// 3. a page listing them (plain HTML, no scripts or network, so it works from disk too; links name
//    index.html because opening a folder from disk shows a file listing, not its index page)
writeFileSync(new URL('index.html', out), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>blocky3D demos</title>
<style>
  :root { color-scheme: dark; }
  body { margin: 0; background: #0d1222; color: #d6dcf0; font: 16px/1.5 system-ui, sans-serif; }
  main { max-width: 640px; margin: 0 auto; padding: 32px 16px 48px; }
  h1 { margin: 0 0 4px; font-size: 28px; }
  h1 b { color: #ff004d; }
  .sub { margin: 0 0 24px; color: #8a93b2; }
  ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
  li a { display: block; padding: 14px 16px; border: 1px solid #2a3352; border-radius: 10px; background: #151c33; color: inherit; text-decoration: none; }
  li a:hover, li a:focus-visible { border-color: #29adff; }
  .name { font-weight: 600; font-size: 18px; color: #fff; }
  .name::after { content: " ▶"; color: #00e436; font-size: 14px; }
  .about { margin-top: 2px; color: #a9b1cc; font-size: 15px; }
  footer { margin-top: 28px; color: #8a93b2; font-size: 14px; }
  footer a { color: #29adff; }
</style>
</head>
<body>
<main>
  <h1>blocky<b>3D</b> demos</h1>
  <p class="sub">Exported games, exactly as the IDE's Export makes them. Version ${esc(VERSION)}. On a phone or tablet, the touch controls appear around the game.</p>
  <ul>
${built.map((d) => `    <li><a href="${esc(d.slug)}/index.html"><div class="name">${esc(d.name)}</div>${d.about ? `<div class="about">${esc(d.about)}</div>` : ''}</a></li>`).join('\n')}
  </ul>
  <footer>Want to see how they're made? Open the <a href="../index.html">blocky3D IDE</a> and pick one from <b>Demos</b>.</footer>
</main>
</body>
</html>
`);
console.log(`demos/castle.b3d.json; standalone_demo/: index.html + ${built.map((d) => d.slug + '/').join(', ')}`);
