// Writes docs/API.md, the API reference as Markdown, from js/apidocs.js (the IDE's Info tab), plus
// the cart format. Run by `npm run build`; CI checks it's up to date. Edit js/apidocs.js, not the
// Markdown.
import { writeFileSync, mkdirSync } from 'node:fs';
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
