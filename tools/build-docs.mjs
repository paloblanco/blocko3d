// Writes docs/API.md, the API reference as Markdown, from js/apidocs.js (the IDE's Info tab), plus
// the cart format. Run by `npm run build`; CI checks it's up to date. Edit js/apidocs.js, not the
// Markdown.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { API_SECTIONS } from '../js/apidocs.js';
import { VERSION } from '../js/version.js';

const root = new URL('../', import.meta.url);
const anchor = (t) => t.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-');
const [first, ...sections] = API_SECTIONS;

let md = `# BLOCKO3D ${VERSION} API

<!-- Made by tools/build-docs.mjs from js/apidocs.js (the IDE's Info tab). Don't edit by hand. -->

${first.intro}

Making games outside the IDE (the \`b3d\` command and the project folder): see [MAKING_GAMES.md](../MAKING_GAMES.md).

${sections.map((s) => `- [${s.title}](#${anchor(s.title)})`).join('\n')}
- [Cart format](#cart-format)
`;
for (const s of sections) {
  md += `\n## ${s.title}\n\n`;
  if (s.intro) md += s.intro + '\n\n';
  for (const [sig, desc] of s.items) md += `- **\`${sig}\`**: ${desc}\n`;
  if (s.code) md += '\n```js\n' + s.code + '\n```\n';
}
md += `
## Cart format

A cart (\`.b3d.json\`) is one JSON object, what the IDE's Save writes:

\`\`\`
{ version: 1, name, code,
  tiles: [null, { top, side, bottom, name? }, ...],    // tile 1-63; each face 64 palette indices, row by row
  maps: [{ name, w, h, d, origin: [x, y, z], data }],  // data: base64 of w*h*d tile bytes, index x + w * (y + h * z)
  vox: [{ name, pivot: [x, y, z], data }],             // data: base64 of 512 bytes, x + 8 * (y + 8 * z), 0 = empty, else color + 1
  sfx: [string or null, ...],                          // sounds, 166 hex digits each (below)
  sfxNames?: [string or null, ...],                    // optional sound names, by sound number
  music: [string or null, ...],                        // patterns, 9 hex digits each (below)
  scale: { snap, root, type },                         // the Sfx tab's note snapping (the engine ignores it)
  scenes?: [{ name, maps: [{ m, pos, angle, name? }], vox: [{ v, pos, yaw }] }],
  palette?: [32 colors as 0xRRGGBB numbers],
  cover?: 'data:image/png;base64,...' }                // 256 x 256 cover art
\`\`\`

- A **sound** is \`SS LL EE\` (speed, loop start, loop end, two hex digits each), then 32 notes of \`PP W V E\`: pitch 00-3f (33 = A 440 Hz), wave 0-7 (${['triangle', 'tilted saw', 'saw', 'square', 'pulse', 'organ', 'noise', 'phaser'].join(', ')}), volume 0-7 and effect 0-7 (none, slide, vibrato, drop, fade in, fade out, arp fast, arp slow). Each note lasts speed / 120 seconds. The blank note is \`18000\` (pitch 24, silent).
- A **pattern** is a flags digit (1 = loop start, 2 = loop back, 4 = stop), then two hex digits per channel: a sound 00-3f, or 40 for none.
- \`b3d check\` checks all of this; \`b3d unpack\` turns a cart into readable files.
`;
mkdirSync(new URL('docs/', root), { recursive: true });
writeFileSync(new URL('docs/API.md', root), md);
console.log(`docs: docs/API.md (${sections.length} sections)`);

// ---------------------------------------------------------------- llms.txt
// The guide for AI models at the site's root (paloblanco.github.io/blocko3d/llms.txt), from
// tools/llms.md with the Starter cart's asset list and code filled in, so the example the guide
// shows is always the one in the cart. Every call in the guide's API section is checked against
// the real API, so a renamed function fails the build instead of misleading a model.
const starter = JSON.parse(readFileSync(new URL('demos/starter.b3d.json', root), 'utf8'));
const named = (list) => list.map((x, i) => (x ? `${i} ${x}` : null)).filter(Boolean).join(', ');
const assets = [
  `- **tiles:** ${named(starter.tiles.map((t) => t && t.name))}`,
  `- **vox models:** ${named(starter.vox.map((v) => v.name))}`,
  `- **model colors**, most used first, to recolor with \`pal(color, new_color)\`: ${starter.vox.filter((v, i, all) => all.findIndex((w) => w.name.replace(/ step [ab]$/, '') === v.name.replace(/ step [ab]$/, '')) === i).map((v) => {
    const n = new Map();
    for (const b of Buffer.from(v.data, 'base64')) if (b) n.set(b - 1, (n.get(b - 1) || 0) + 1);
    return `${v.name.replace(/ step [ab]$/, '')} ${[...n].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([c]) => c).join(' ')}`;
  }).join(', ')}`,
  `- **sounds:** ${named(starter.sfxNames.slice(0, 8))} (sounds ${8}-${starter.sfxNames.length - 1} are the song's parts)`,
  `- **music:** \`music(0)\` plays the song (it loops); \`music(-1)\` stops it`,
  `- **maps:** none; make them in code (map_new, map_box)`,
].join('\n');
let guide = readFileSync(new URL('tools/llms.md', root), 'utf8')
  .replace('{{VERSION}}', VERSION).replace('{{STARTER_ASSETS}}', assets).replace('{{STARTER_CODE}}', starter.code.trimEnd());
const api = new Set(API_SECTIONS.flatMap((s) => s.items.flatMap(([sig]) => sig.split(/,\s*|\s*\/\s*/).map((p) => p.trim().split('(')[0]))));
const apiPart = guide.slice(guide.indexOf('## The API you need'), guide.indexOf('## Mistakes to avoid'));
const unknown = [...apiPart.matchAll(/`([a-z_][a-z0-9_]*)\(/g)].map((m) => m[1]).filter((n) => !api.has(n) && !['_init', '_update', '_draw'].includes(n));
if (unknown.length) throw new Error('tools/llms.md names functions the API does not have: ' + [...new Set(unknown)].join(', '));
writeFileSync(new URL('llms.txt', root), guide);
console.log(`docs: llms.txt (${Math.round(guide.length / 1024)} KB)`);
