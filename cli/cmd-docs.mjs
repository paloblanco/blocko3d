// b3d docs [api]: the guide (MAKING_GAMES.md) or the whole API reference (docs/API.md), shipped
// with the tool, so making a game never needs the engine's source.
// b3d api [query]: one entry or section of the API, from the same text as the IDE's Info tab:
//   b3d api            the sections and every function name
//   b3d api mpush      the entries whose name starts with "mpush"
//   b3d api maps       a whole section (by its title)
//   b3d api ray        anything mentioning "ray", when nothing above matches
import { readFileSync } from 'node:fs';
import { UserError } from './project.mjs';
import { API_SECTIONS } from '../js/apidocs.js';

const name = (sig) => sig.split(/[(\s,]/)[0].toLowerCase();

function printSection(s) {
  console.log(`## ${s.title}\n`);
  if (s.intro) console.log(s.intro + '\n');
  for (const [sig, desc] of s.items) console.log(`${sig}\n  ${desc}\n`);
  if (s.code) console.log(s.code.split('\n').map((l) => '  ' + l).join('\n') + '\n');
}

export default async function (cmd, { pos }) {
  if (cmd === 'docs') {
    const which = pos[0] || 'guide';
    const file = { guide: '../MAKING_GAMES.md', games: '../MAKING_GAMES.md', api: '../docs/API.md', llms: '../llms.txt' }[which];
    if (!file) throw new UserError('b3d docs prints the guide; b3d docs api the whole API reference; b3d docs llms the one-page guide for AI chatbots');
    process.stdout.write(readFileSync(new URL(file, import.meta.url), 'utf8'));
    return 0;
  }
  const sections = API_SECTIONS.slice(1);   // the first is the version banner
  const q = pos.join(' ').trim().toLowerCase();
  if (!q) {
    for (const s of sections) console.log(`${s.title}: ${[...new Set(s.items.map(([sig]) => sig.split('(')[0]))].join(', ')}`);
    console.log('\nb3d api <name> for one function, b3d api <section> for a section, b3d docs api for everything');
    return 0;
  }
  const entries = sections.flatMap((s) => s.items.map(([sig, desc]) => ({ s, sig, desc })));
  let hits = entries.filter((e) => name(e.sig) === q || e.sig.toLowerCase().split(/,\s*/).some((p) => p.split('(')[0].trim() === q));
  if (!hits.length) hits = entries.filter((e) => name(e.sig).startsWith(q));
  if (hits.length) { for (const e of hits) console.log(`${e.sig}   (${e.s.title})\n  ${e.desc}\n`); return 0; }
  const sec = sections.find((s) => s.title.toLowerCase() === q) || sections.find((s) => s.title.toLowerCase().includes(q));
  if (sec) { printSection(sec); return 0; }
  hits = entries.filter((e) => (e.sig + ' ' + e.desc).toLowerCase().includes(q));
  if (hits.length) {
    console.log(`nothing named "${q}"; these mention it:\n`);
    for (const e of hits) console.log(`${e.sig}   (${e.s.title})\n  ${e.desc}\n`);
    return 0;
  }
  console.log(`nothing about "${q}" in the API; b3d api lists everything`);
  return 1;
}
