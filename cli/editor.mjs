// Editor support for a game folder: b3d.d.ts declares every BLOCKO3D global with its description
// from js/apidocs.js (the Info tab), and jsconfig.json points VS Code (or any editor that reads it)
// at main.js and b3d.d.ts. Then the editor autocompletes the API, shows each function's arguments
// as you type, and its description on hover. b3d new, unpack and serve write them; b3d.d.ts is
// always rewritten (it's generated), jsconfig.json only when the folder has none.
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { API_SECTIONS } from '../js/apidocs.js';
import { VERSION } from '../js/version.js';

const SKIP = new Set(['Game loop', 'Command line (b3d)']);   // the hooks are the game's own; b3d isn't in the game

// "m, [x, y, z], c?" -> ['m', '[x, y, z]', 'c?'], splitting on commas outside brackets
function splitParams(s) {
  const out = [];
  let depth = 0, cur = '';
  for (const ch of s) {
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

// One documented parameter as TypeScript. Everything is `any`: the point is names, counts and docs.
function param(p, i, used) {
  let name, opt = false;
  if (p === '...') return '...args: any[]';
  if (p.endsWith('?')) { opt = true; p = p.slice(0, -1); }
  if (p.startsWith('[')) {
    const inner = p.slice(1, -1).split(/,\s*/);
    name = inner.join('') === 'xyz' ? 'xyz' : inner.join('_');
  } else if (p === 'true' || p === 'false') name = 'on';
  else if (/^-?\d+$/.test(p)) name = 'n';
  else if (/^[a-z_$][\w$]*$/i.test(p)) name = p;
  else name = 'arg' + i;
  while (used.has(name)) name += '_';
  used.add(name);
  return `${name}${opt ? '?' : ''}: any`;
}

const clean = (text) => String(text).replace(/\*\//g, '* /');
const doc = (text) => `/** ${clean(text)} */\n`;

export function dtsText() {
  const out = [
    `// BLOCKO3D ${VERSION}: every global the engine gives a game, for editor autocomplete and hover help.`,
    '// Made by the b3d command from the API reference (b3d api). Don\'t edit: b3d new, unpack and serve rewrite it.',
    '// Arguments are typed `any`; the descriptions say what each one is. Angles are in turns.',
    '',
  ];
  const seen = new Map(), names = new Set();
  for (const s of API_SECTIONS) {
    if (SKIP.has(s.title) || !s.items.length) continue;
    out.push(`// ---- ${s.title}`);
    for (const [sig, desc] of s.items) {
      for (const piece of sig.split(/\s*\/\s*|(?<=\)),\s*/)) {   // "time() / t()", "sin(a), cos(a)"
        const open = piece.indexOf('(');
        const head = open < 0 ? piece : piece.slice(0, open);
        const heads = head.split(/,\s*/).map((x) => x.trim());   // "flr, ceil, ..., mid" before mid's (
        heads.forEach((name, k) => {
          if (!/^[a-z_][\w$]*$/.test(name)) return;   // headings like "Players"
          if (open < 0 && heads.length === 1) {       // a variable, like palette
            if (!names.has(name)) out.push(doc(desc) + `declare var ${name}: any;`);
            names.add(name);
            return;
          }
          const hasArgs = k === heads.length - 1 && open >= 0;
          const used = new Set();
          const params = hasArgs ? splitParams(piece.slice(open + 1, piece.lastIndexOf(')'))).map((p, i) => param(p, i, used)) : ['...args: any[]'];
          const line = `declare function ${name}(${params.join(', ')}): any;`;
          // the same shape again (sfx(n) and sfx(-1)): one declaration, both descriptions
          if (seen.has(line)) {
            const i = seen.get(line);
            if (!out[i].includes(clean(desc))) out[i] = out[i].replace(/ \*\/\n/, `\n * ${clean(sig)}: ${clean(desc)} */\n`);
            return;
          }
          seen.set(line, out.length); names.add(name);
          out.push(doc(desc) + line);
        });
      }
    }
    out.push('');
  }
  return { text: out.join('\n'), names };
}

const JSCONFIG = `{
  "compilerOptions": { "target": "es2020", "checkJs": false },
  "include": ["main.js", "b3d.d.ts"]
}
`;

// Writes b3d.d.ts (always) and jsconfig.json (if missing). Returns the names of the files written.
export function writeEditorFiles(dir) {
  const wrote = ['b3d.d.ts'];
  writeFileSync(join(dir, 'b3d.d.ts'), dtsText().text);
  if (!existsSync(join(dir, 'jsconfig.json'))) { writeFileSync(join(dir, 'jsconfig.json'), JSCONFIG); wrote.push('jsconfig.json'); }
  return wrote;
}
