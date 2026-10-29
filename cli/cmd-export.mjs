// b3d export <game> [--out dir] [--zip]: the standalone game, made exactly as the IDE's Export
// makes it (index.html, <slug>.js and the installable-app files). Refuses a game that fails check.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadGame } from './project.mjs';
import { checkCart } from './check.mjs';
import { report } from './cmd-check.mjs';
import { normalizeCart } from '../js/cart.js';
import { indexHtml, gameJs, gameSlug, appFiles } from '../js/export.js';
import { zipFiles } from '../js/zip.js';

export function runtimeText() {
  return readFileSync(new URL('../runtime/blocko3d.runtime.js', import.meta.url), 'utf8');
}

// The files an export holds, as [{ name, data }] (the IDE's exportGame, without fetch or the zip).
export async function exportFiles(rawCart) {
  const cart = normalizeCart(structuredClone(rawCart));
  const slug = gameSlug(cart.name);
  const js = gameJs(cart, runtimeText());
  return { slug, files: [
    { name: 'index.html', data: indexHtml(cart.name || slug, slug + '.js') },
    { name: slug + '.js', data: js },
    ...await appFiles(cart, slug, js),
  ] };
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0], { strict: true });
  const res = await checkCart(game.raw, game.where);
  if (res.errors.length) { report(res); console.log('not exported: fix the errors first'); return 1; }
  report(res);
  const { slug, files } = await exportFiles(game.cart);
  if (opt.zip) {
    const out = typeof opt.zip === 'string' ? opt.zip : typeof opt.out === 'string' ? opt.out : slug + '.zip';
    const blob = await zipFiles(files);
    writeFileSync(out, Buffer.from(await blob.arrayBuffer()));
    console.log(`wrote ${out} (${files.length} files)`);
  } else {
    const dir = typeof opt.out === 'string' ? opt.out : slug;
    mkdirSync(dir, { recursive: true });
    for (const f of files) writeFileSync(join(dir, f.name), f.data);
    console.log(`wrote ${dir}/: ${files.map((f) => f.name).join(', ')}`);
  }
  return 0;
}
