// The project folder: a game as small text files, for text editors, git and AI agents.
// `b3d unpack` writes it from a cart, `b3d pack` reads it back (always as the IDE would save it).
//
//   cart.json          name, palette (optional), the Sfx tab's scale settings, each map's name, size, origin
//   main.js            the game code
//   cover.png          cover art (optional)
//   scenes.json        the Scene tab's scenes (optional)
//   music.txt          the song: one pattern per line, "3: 8 9 - - start"
//   tiles/01-grass.txt one file per tile (the number is the tile's number), three 8 x 8 faces
//   vox/00-hero.txt    one file per vox model: name, pivot, eight 8 x 8 layers from the bottom
//   sfx/00-jump.txt    one file per sound: name, speed and loop, one note per line (notes left
//                      out at the end are the Sfx tab's blank note, 24 0 0 0)
//   maps/0-land.bin    each map's blocks, raw bytes in the cart's order (x + w * (y + h * z))
//   maps/0-land.gen.js optional: a script that builds the map when packing (unpack never touches it)
//
// The number at the front of a file name is the asset's number; the rest of the name is only for
// people (the real name is inside the file, or in cart.json for maps). In tiles and vox, a color is
// one character, 0-9 then a-v for colors 0-31, and "." is an empty voxel. Blank lines and lines
// starting with # are ignored everywhere except main.js.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { DEFAULT_PIVOT, LIMITS, bytesToB64, b64ToBytes } from '../js/format.js';
import { NOTES, decodeSfx, encodeSfx, emptySfx, isSilent, decodePattern, encodePattern, EMPTY_CH } from '../js/audio.js';
import { ideCart } from './idesave.mjs';

const COLORS = '0123456789abcdefghijklmnopqrstuv';
const FACES = ['top', 'side', 'bottom'];
const ASSET = /^(\d+)(?:-(.*))?\.(txt|bin|gen\.js)$/;

export const fileSlug = (name) => String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
const assetFile = (n, pad, name, ext) => String(n).padStart(pad, '0') + (fileSlug(name) ? '-' + fileSlug(name) : '') + ext;

// ---------------------------------------------------------------- JSON that reads well
// Indented, but short lists of numbers (sizes, positions, colors) stay on one line.
export function prettyJson(v, ind = '') {
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    if (v.every((x) => x === null || typeof x !== 'object')) return '[' + v.map((x) => JSON.stringify(x)).join(', ') + ']';
    const i2 = ind + '  ';
    return '[\n' + v.map((x) => i2 + prettyJson(x, i2)).join(',\n') + '\n' + ind + ']';
  }
  if (v && typeof v === 'object') {
    const keys = Object.keys(v).filter((k) => v[k] !== undefined);
    if (!keys.length) return '{}';
    const flat = keys.every((k) => v[k] === null || typeof v[k] !== 'object' || (Array.isArray(v[k]) && v[k].every((x) => typeof x !== 'object')));
    const parts = keys.map((k) => JSON.stringify(k) + ': ' + prettyJson(v[k], ind + '  '));
    const one = '{ ' + parts.join(', ') + ' }';
    if (flat && one.length + ind.length <= 100) return one;
    const i2 = ind + '  ';
    return '{\n' + keys.map((k) => i2 + JSON.stringify(k) + ': ' + prettyJson(v[k], i2)).join(',\n') + '\n' + ind + '}';
  }
  return JSON.stringify(v);
}

// ---------------------------------------------------------------- writing (unpack)

const grid = (px, w, h, ch) => Array.from({ length: h }, (_, r) => Array.from({ length: w }, (_, c) => ch(px[r * w + c])).join(''));
const colorCh = (c) => COLORS[c] ?? '?';
const voxCh = (b) => (b ? COLORS[b - 1] ?? '?' : '.');
const sameFace = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

function tileText(t) {
  const out = [];
  if (t.name) out.push('name ' + t.name);
  out.push('top', ...grid(t.top, 8, 8, colorCh));
  if (!sameFace(t.side, t.top) || !sameFace(t.bottom, t.side)) out.push('side', ...grid(t.side, 8, 8, colorCh));
  if (!sameFace(t.bottom, t.side)) out.push('bottom', ...grid(t.bottom, 8, 8, colorCh));
  return out.join('\n') + '\n';
}

function voxText(v) {
  const data = b64ToBytes(v.data), out = [];
  if (v.name) out.push('name ' + v.name);
  out.push('pivot ' + (v.pivot || DEFAULT_PIVOT).join(' '));
  out.push('# 8 layers from the bottom (y0) up; each is 8 rows from back (z0) to front (z7), x0-x7 left to right');
  for (let y = 0; y < 8; y++) {
    out.push('y' + y);
    for (let z = 0; z < 8; z++) {
      let row = '';
      for (let x = 0; x < 8; x++) row += voxCh(data[x + 8 * (y + 8 * z)]);
      out.push(row);
    }
  }
  return out.join('\n') + '\n';
}

function sfxText(str, name) {
  const s = (str && decodeSfx(str)) || emptySfx(), out = [];
  if (name) out.push('name ' + name);
  out.push(`speed ${s.speed} loop ${s.loopStart} ${s.loopEnd}`);
  // trailing notes that are the Sfx tab's blank note are left out (pack fills them back in)
  const blank = emptySfx().notes[0];
  let last = NOTES - 1;
  while (last >= 0) { const n = s.notes[last]; if (n.pitch !== blank.pitch || n.wave !== blank.wave || n.vol !== blank.vol || n.fx !== blank.fx) break; last--; }
  if (last >= 0) out.push('# pitch wave volume effect (pitch 33 = A 440 Hz)');
  for (let i = 0; i <= last; i++) { const n = s.notes[i]; out.push(`${n.pitch} ${n.wave} ${n.vol} ${n.fx}`); }
  return out.join('\n') + '\n';
}

function musicText(music) {
  const out = ['# pattern: up to 4 sound numbers (- for none), then any of: start back stop'];
  music.forEach((str, i) => {
    if (str == null) return;
    const p = decodePattern(str);
    if (!p) return;
    const flags = [p.loopStart && 'start', p.loopBack && 'back', p.stop && 'stop'].filter(Boolean);
    out.push(`${i}: ` + [...p.ch.map((c) => (c >= EMPTY_CH ? '-' : String(c))), ...flags].join(' '));
  });
  return out.join('\n') + '\n';
}

// Writes the folder. Old asset files (numbered .txt in tiles/vox/sfx, numbered .bin in maps) are
// removed first, so deleted assets disappear; .gen.js scripts and any other files are kept.
export function writeFolder(input, dir) {
  const cart = ideCart(input, input && input.name);
  mkdirSync(dir, { recursive: true });
  for (const [sub, ext] of [['tiles', '.txt'], ['vox', '.txt'], ['sfx', '.txt'], ['maps', '.bin']]) {
    const d = join(dir, sub);
    if (existsSync(d)) for (const f of readdirSync(d)) if (ASSET.test(f) && f.endsWith(ext) && !f.endsWith('.gen.js')) rmSync(join(d, f));
    mkdirSync(d, { recursive: true });
  }
  for (const f of ['cover.png', 'scenes.json', 'music.txt']) rmSync(join(dir, f), { force: true });

  const meta = { name: cart.name, maps: cart.maps.map((m) => ({ name: m.name, size: [m.w, m.h, m.d], origin: m.origin })), scale: cart.scale };
  if (cart.palette) meta.palette = cart.palette.map((c) => '#' + c.toString(16).padStart(6, '0'));
  writeFileSync(join(dir, 'cart.json'), prettyJson(meta) + '\n');
  writeFileSync(join(dir, 'main.js'), cart.code);
  cart.tiles.forEach((t, i) => { if (i && t) writeFileSync(join(dir, 'tiles', assetFile(i, 2, t.name, '.txt')), tileText(t)); });
  cart.vox.forEach((v, i) => writeFileSync(join(dir, 'vox', assetFile(i, 2, v.name, '.txt')), voxText(v)));
  const names = cart.sfxNames || [];
  for (let i = 0; i < Math.max(cart.sfx.length, names.length); i++)
    if (cart.sfx[i] != null || names[i]) writeFileSync(join(dir, 'sfx', assetFile(i, 2, names[i], '.txt')), sfxText(cart.sfx[i], names[i]));
  cart.maps.forEach((m, i) => writeFileSync(join(dir, 'maps', assetFile(i, 1, m.name, '.bin')), b64ToBytes(m.data)));
  if (cart.music.length) writeFileSync(join(dir, 'music.txt'), musicText(cart.music));
  if (cart.scenes) writeFileSync(join(dir, 'scenes.json'), prettyJson(cart.scenes) + '\n');
  if (cart.cover) writeFileSync(join(dir, 'cover.png'), b64ToBytes(cart.cover.slice('data:image/png;base64,'.length)));
  return cart;
}

// ---------------------------------------------------------------- reading (pack)

// Text lines with their line numbers, skipping blanks and # comments.
function lines(text) {
  return text.split(/\r?\n/).map((s, i) => ({ s: s.trim(), n: i + 1 })).filter((l) => l.s && !l.s.startsWith('#'));
}

// Every numbered asset file in a folder: Map(number -> file name). Two files with one number is an error.
function numbered(dir, sub, ext, errors) {
  const out = new Map(), d = join(dir, sub);
  if (!existsSync(d)) return out;
  for (const f of readdirSync(d).sort()) {
    const m = ASSET.exec(f);
    if (!m || '.' + m[3] !== ext) continue;
    const n = +m[1];
    if (out.has(n)) errors.push({ at: `${sub}/${f}`, msg: `${sub}/${out.get(n)} has the same number (${n}); keep one` });
    else out.set(n, f);
  }
  return out;
}

function readTile(text, file, errors) {
  const t = { name: undefined }, at = {}, faces = {};
  let cur = null;
  const err = (n, msg) => errors.push({ at: `${file}:${n}`, msg });
  for (const l of lines(text)) {
    if (l.s.startsWith('name ') || l.s === 'name') { t.name = l.s.slice(5).trim() || undefined; continue; }
    if (FACES.includes(l.s)) { cur = l.s; faces[cur] = []; at[cur] = l.n; continue; }
    if (!cur) { err(l.n, 'expected "top", "side" or "bottom" before the pixels'); return null; }
    if (faces[cur].length >= 8) { err(l.n, `the ${cur} face already has 8 rows`); return null; }
    if (l.s.length !== 8) { err(l.n, `a row is 8 colors, this one has ${l.s.length}`); return null; }
    const row = [];
    for (let i = 0; i < 8; i++) {
      const c = COLORS.indexOf(l.s[i]);
      if (c < 0) { err(l.n, `"${l.s[i]}" isn't a color; colors are 0-9 then a-v (0-31)`); return null; }
      row.push(c);
    }
    faces[cur].push(row);
  }
  for (const f of FACES) if (faces[f] && faces[f].length !== 8) { err(at[f], `the ${f} face needs 8 rows, it has ${faces[f].length}`); return null; }
  if (!faces.top) { err(1, 'a tile needs at least a "top" face'); return null; }
  const flat = (f) => faces[f].flat();
  const top = flat('top'), side = faces.side ? flat('side') : top, bottom = faces.bottom ? flat('bottom') : side;
  const tile = { top, side: [...side], bottom: [...bottom] };
  if (t.name) tile.name = t.name;
  // where each face's rows are, for check's messages (a copied face points at the one it copies)
  const lineOf = { top: at.top, side: at.side || at.top, bottom: at.bottom || at.side || at.top };
  return { tile, lineOf };
}

function readVox(text, file, errors) {
  const data = new Uint8Array(512), layerAt = [];
  let name = '', pivot = [...DEFAULT_PIVOT], y = -1, z = 0;
  const err = (n, msg) => errors.push({ at: `${file}:${n}`, msg });
  for (const l of lines(text)) {
    if (l.s.startsWith('name ') || l.s === 'name') { name = l.s.slice(5).trim(); continue; }
    if (l.s.startsWith('pivot')) {
      const p = l.s.split(/\s+/).slice(1).map(Number);
      if (p.length !== 3 || !p.every(Number.isFinite)) { err(l.n, 'pivot is three numbers: pivot x y z'); return null; }
      pivot = p; continue;
    }
    const ly = /^y([0-7])$/.exec(l.s);
    if (ly) { y = +ly[1]; z = 0; layerAt[y] = l.n; continue; }
    if (y < 0) { err(l.n, 'expected a layer heading (y0 to y7) before the rows'); return null; }
    if (z >= 8) { err(l.n, `layer y${y} already has 8 rows (z0-z7)`); return null; }
    if (l.s.length !== 8) { err(l.n, `a row is 8 voxels, this one has ${l.s.length}`); return null; }
    for (let x = 0; x < 8; x++) {
      const ch = l.s[x];
      if (ch === '.') continue;
      const c = COLORS.indexOf(ch);
      if (c < 0) { err(l.n, `"${ch}" isn't a color or "."; colors are 0-9 then a-v (0-31)`); return null; }
      data[x + 8 * (y + 8 * z)] = c + 1;
    }
    z++;
  }
  return { v: { name, pivot, data: bytesToB64(data) }, layerAt };
}

function readSfx(text, file, errors) {
  const s = emptySfx(), noteAt = [];
  let name = null, k = 0, header = false;
  const err = (n, msg) => errors.push({ at: `${file}:${n}`, msg });
  for (const l of lines(text)) {
    if (l.s.startsWith('name ') || l.s === 'name') { name = l.s.slice(5).trim() || null; continue; }
    const h = /^speed\s+(\d+)(?:\s+loop\s+(\d+)\s+(\d+))?$/.exec(l.s);
    if (h) {
      s.speed = +h[1]; s.loopStart = +(h[2] || 0); s.loopEnd = +(h[3] || 0); header = true;
      if (s.speed < 1 || s.speed > 255) { err(l.n, 'speed is 1-255'); return null; }
      if (s.loopStart > NOTES || s.loopEnd > NOTES) { err(l.n, `loop start and end are 0-${NOTES}`); return null; }
      continue;
    }
    const v = l.s.split(/\s+/).map(Number);
    if (v.length !== 4 || !v.every(Number.isInteger)) { err(l.n, 'a note is four whole numbers: pitch wave volume effect (or a "speed S loop A B" line)'); return null; }
    if (k >= NOTES) { err(l.n, `a sound has at most ${NOTES} notes`); return null; }
    const [pitch, wave, vol, fx] = v;
    if (pitch < 0 || pitch > 63) { err(l.n, `pitch ${pitch}: pitches are 0-63 (33 = A 440 Hz)`); return null; }
    if ([wave, vol, fx].some((x) => x < 0 || x > 7)) { err(l.n, 'wave, volume and effect are 0-7'); return null; }
    s.notes[k] = { pitch, wave, vol, fx }; noteAt[k] = l.n; k++;
  }
  if (!header && k) errors.push({ at: file, msg: 'no "speed S loop A B" line; using speed 16, no loop' });
  return { str: encodeSfx(s), silent: isSilent(s) && s.loopEnd === 0 && s.speed === 16, name, noteAt };
}

function readMusic(text, file, errors) {
  const music = [], lineOf = [];
  for (const l of lines(text)) {
    const m = /^(\d+)\s*:\s*(.*)$/.exec(l.s);
    const err = (msg) => errors.push({ at: `${file}:${l.n}`, msg });
    if (!m) { err('a pattern line is "n: a b c d flags", like "0: 8 9 - - start"'); continue; }
    const i = +m[1];
    if (i >= LIMITS.patterns) { err(`patterns are 0-${LIMITS.patterns - 1}`); continue; }
    if (music[i] !== undefined) { err(`pattern ${i} is already on line ${lineOf[i]}`); continue; }
    const p = { loopStart: false, loopBack: false, stop: false, ch: [EMPTY_CH, EMPTY_CH, EMPTY_CH, EMPTY_CH] };
    let c = 0, ok = true;
    for (const w of m[2].split(/\s+/).filter(Boolean)) {
      if (w === 'start') p.loopStart = true;
      else if (w === 'back') p.loopBack = true;
      else if (w === 'stop') p.stop = true;
      else if (c >= 4) { err('a pattern has 4 channels'); ok = false; break; }
      else if (w === '-') c++;
      else if (/^\d+$/.test(w) && +w < LIMITS.sfx) p.ch[c++] = +w;
      else { err(`"${w}": a channel is a sound number 0-${LIMITS.sfx - 1} or -, a flag is start, back or stop`); ok = false; break; }
    }
    if (!ok) continue;
    music[i] = encodePattern(p); lineOf[i] = l.n;
  }
  for (let i = 0; i < music.length; i++) if (music[i] === undefined) music[i] = null;
  return { music, lineOf };
}

function readJson(dir, f, errors) {
  try { return JSON.parse(readFileSync(join(dir, f), 'utf8')); } catch (e) { errors.push({ at: f, msg: 'not valid JSON: ' + e.message }); return null; }
}

// A map from its .gen.js: the script's default export is called with the map (w, h, d, data and
// get/set helpers) and fills it in.
async function genMap(dir, f, w, h, d) {
  const data = new Uint8Array(w * h * d);
  const inside = (x, y, z) => x >= 0 && y >= 0 && z >= 0 && x < w && y < h && z < d;
  const map = {
    w, h, d, data,
    get: (x, y, z) => (inside(x, y, z) ? data[x + w * (y + h * z)] : 0),
    set: (x, y, z, t) => { if (inside(x, y, z)) data[x + w * (y + h * z)] = t; },
  };
  const url = pathToFileURL(join(dir, 'maps', f)).href + '?t=' + Date.now();
  const mod = await import(url);
  if (typeof mod.default !== 'function') throw new Error('it must export a function: export default (map) => { map.set(x, y, z, tile) ... }');
  await mod.default(map);
  return data;
}

// Returns { cart, where, errors }. cart is what the IDE would save; errors are problems in the
// files themselves (each { at: 'file:line', msg }); where(at) maps check's cart places to files.
export async function readFolder(dir) {
  const errors = [], rel = (...p) => p.join('/');
  const meta = existsSync(join(dir, 'cart.json')) ? readJson(dir, 'cart.json', errors) || {} : (errors.push({ at: 'cart.json', msg: 'missing: a project folder needs cart.json' }), {});
  const raw = { version: 1, name: typeof meta.name === 'string' ? meta.name : '', code: '', tiles: [null], maps: [], vox: [], sfx: [], music: [] };
  const lineInfo = { tiles: [], vox: [], sfx: [], files: { tiles: [], vox: [], sfx: [], maps: [] } };

  if (existsSync(join(dir, 'main.js'))) raw.code = readFileSync(join(dir, 'main.js'), 'utf8');
  else errors.push({ at: 'main.js', msg: 'missing: the game code goes in main.js' });

  if (meta.palette !== undefined) {
    if (!Array.isArray(meta.palette)) errors.push({ at: 'cart.json', msg: 'palette is a list of 32 colors like "#ff004d"' });
    else raw.palette = meta.palette.map((c) => (typeof c === 'string' && /^#?[0-9a-f]{6}$/i.test(c) ? parseInt(c.replace('#', ''), 16) : c));
  }
  if (meta.scale !== undefined) raw.scale = meta.scale;

  // tiles
  const tileFiles = numbered(dir, 'tiles', '.txt', errors);
  for (const [n, f] of tileFiles) {
    if (n < 1 || n > LIMITS.tiles) { errors.push({ at: rel('tiles', f), msg: `tiles are numbered 1-${LIMITS.tiles}` }); continue; }
    const r = readTile(readFileSync(join(dir, 'tiles', f), 'utf8'), rel('tiles', f), errors);
    if (!r) continue;
    while (raw.tiles.length < n) raw.tiles.push(null);
    raw.tiles[n] = r.tile; lineInfo.tiles[n] = r.lineOf; lineInfo.files.tiles[n] = rel('tiles', f);
  }

  // vox (a gap in the numbers is an empty model, as the Vox tab keeps models in one list)
  const voxFiles = numbered(dir, 'vox', '.txt', errors);
  for (const [n, f] of voxFiles) {
    if (n >= LIMITS.vox) { errors.push({ at: rel('vox', f), msg: `vox models are numbered 0-${LIMITS.vox - 1}` }); continue; }
    const r = readVox(readFileSync(join(dir, 'vox', f), 'utf8'), rel('vox', f), errors);
    if (!r) continue;
    while (raw.vox.length < n) raw.vox.push({ name: '', pivot: [...DEFAULT_PIVOT], data: bytesToB64(new Uint8Array(512)) });
    raw.vox[n] = r.v; lineInfo.vox[n] = r.layerAt; lineInfo.files.vox[n] = rel('vox', f);
  }

  // sounds
  const sfxFiles = numbered(dir, 'sfx', '.txt', errors), names = [];
  for (const [n, f] of sfxFiles) {
    if (n >= LIMITS.sfx) { errors.push({ at: rel('sfx', f), msg: `sounds are numbered 0-${LIMITS.sfx - 1}` }); continue; }
    const r = readSfx(readFileSync(join(dir, 'sfx', f), 'utf8'), rel('sfx', f), errors);
    if (!r) continue;
    while (raw.sfx.length < n) raw.sfx.push(null);
    raw.sfx[n] = r.silent ? null : r.str; names[n] = r.name;
    lineInfo.sfx[n] = r.noteAt; lineInfo.files.sfx[n] = rel('sfx', f);
  }
  if (names.some(Boolean)) raw.sfxNames = Array.from(names, (x) => x || null);

  // music
  let musicLines = [];
  if (existsSync(join(dir, 'music.txt'))) {
    const r = readMusic(readFileSync(join(dir, 'music.txt'), 'utf8'), 'music.txt', errors);
    raw.music = r.music; musicLines = r.lineOf;
  }

  // maps: cart.json lists them (name, size, origin); the blocks come from maps/<n>-*.bin or .gen.js
  const bins = numbered(dir, 'maps', '.bin', errors), gens = numbered(dir, 'maps', '.gen.js', errors);
  const list = Array.isArray(meta.maps) ? meta.maps : [];
  if (meta.maps !== undefined && !Array.isArray(meta.maps)) errors.push({ at: 'cart.json', msg: 'maps is a list of { name, size: [w, h, d], origin: [x, y, z] }' });
  for (const n of new Set([...bins.keys(), ...gens.keys()])) if (n >= list.length) errors.push({ at: rel('maps', bins.get(n) || gens.get(n)), msg: `map ${n} isn't in cart.json's maps list` });
  for (let i = 0; i < list.length; i++) {
    const m = list[i] || {}, size = m.size || [m.w, m.h, m.d];
    const [w, h, d] = Array.isArray(size) ? size : [];
    const map = { name: typeof m.name === 'string' ? m.name : '', w, h, d, origin: m.origin || [0, 0, 0], data: '' };
    raw.maps.push(map);
    if (![w, h, d].every((v) => Number.isInteger(v) && v >= 1)) { errors.push({ at: 'cart.json', msg: `maps[${i}]: size is [w, h, d], whole numbers of at least 1` }); continue; }
    const bin = bins.get(i), gen = gens.get(i);
    let bytes = null;
    if (gen) {
      try { bytes = await genMap(dir, gen, w, h, d); lineInfo.files.maps[i] = rel('maps', gen); }
      catch (e) { errors.push({ at: rel('maps', gen), msg: 'the script failed: ' + (e && e.message) }); continue; }
      if (bin) {
        const b = readFileSync(join(dir, 'maps', bin));
        if (b.length !== bytes.length || !b.equals(Buffer.from(bytes))) {
          errors.push({ at: rel('maps', gen), msg: `maps/${gen} and maps/${bin} disagree (the map was probably edited in the IDE and unpacked). `
            + `Delete maps/${bin} to build the map from the script, or delete maps/${gen} to keep the edited blocks.` });
          continue;
        }
      }
    } else if (bin) {
      bytes = readFileSync(join(dir, 'maps', bin)); lineInfo.files.maps[i] = rel('maps', bin);
      if (bytes.length !== w * h * d) { errors.push({ at: rel('maps', bin), msg: `${bytes.length} bytes, but the size in cart.json (${w} x ${h} x ${d}) needs ${w * h * d}` }); continue; }
    } else { errors.push({ at: 'cart.json', msg: `map ${i} ("${map.name}") has no maps/${i}-*.bin or maps/${i}-*.gen.js` }); continue; }
    map.data = bytesToB64(new Uint8Array(bytes));
  }

  if (existsSync(join(dir, 'scenes.json'))) { const s = readJson(dir, 'scenes.json', errors); if (s) raw.scenes = s; }
  if (existsSync(join(dir, 'cover.png'))) raw.cover = 'data:image/png;base64,' + readFileSync(join(dir, 'cover.png')).toString('base64');

  // check's places in the cart -> the folder's files and lines
  const where = (at) => {
    let m;
    if ((m = /^code:(\d+)/.exec(at))) return `main.js:${m[1]}`;
    if (at === 'code') return 'main.js';
    if ((m = /^tiles\[(\d+)\](?:\.(top|side|bottom)(?:\[(\d+)\])?)?/.exec(at))) {
      const f = lineInfo.files.tiles[+m[1]], li = lineInfo.tiles[+m[1]];
      if (!f) return 'tiles/';
      return m[3] !== undefined && li ? `${f}:${li[m[2]] + 1 + (+m[3] >> 3)}` : f;
    }
    if ((m = /^vox\[(\d+)\](?:\.data\[(\d+)\])?/.exec(at))) {
      const f = lineInfo.files.vox[+m[1]], li = lineInfo.vox[+m[1]], k = +m[2];
      if (!f) return 'vox/';
      return m[2] !== undefined && li && li[(k >> 3) % 8] ? `${f}:${li[(k >> 3) % 8] + 1 + (k >> 6)}` : f;
    }
    if ((m = /^sfx\[(\d+)\](?:\.notes\[(\d+)\])?/.exec(at))) {
      const f = lineInfo.files.sfx[+m[1]], li = lineInfo.sfx[+m[1]];
      if (!f) return 'sfx/';
      return m[2] !== undefined && li && li[+m[2]] ? `${f}:${li[+m[2]]}` : f;
    }
    if ((m = /^music\[(\d+)\]/.exec(at))) return musicLines[+m[1]] ? `music.txt:${musicLines[+m[1]]}` : 'music.txt';
    if ((m = /^maps\[(\d+)\]\.data/.exec(at))) return lineInfo.files.maps[+m[1]] || 'maps/';
    if (/^maps|^name|^palette|^scale/.test(at)) return 'cart.json' + (at.startsWith('maps') ? ` (${at.replace(/\.(size|origin)$/, '')})` : '');
    if (at.startsWith('scenes')) return `scenes.json (${at})`;
    if (at === 'cover') return 'cover.png';
    return at || 'cart.json';
  };
  return { raw, cart: ideCart(raw, raw.name), where: (at) => join(dir, where(at)), errors: errors.map((e) => ({ at: join(dir, e.at), msg: e.msg })) };
}
