// b3d check: every limit and format a cart must keep, checked on the raw cart (before
// normalizeCart, which would quietly fix or drop what's wrong). Plain Node, no three.js.
//
// checkCart(cart, where) returns { errors, warnings }, each a list of { at, msg }. `at` is a place in
// the cart such as 'tiles[3].top[19]' (a pixel), 'sfx[2].notes[5]', 'vox[0].data[100]' or 'code:12'; `where(at)` turns it into what the user sees (a file
// and line for a project folder, the cart path itself for a .b3d.json).
import vm from 'node:vm';
import { LIMITS, b64ToBytes } from '../js/format.js';
import { decodeSfx, encodeSfx, decodePattern, encodePattern, isSilent } from '../js/audio.js';
import { decodePng } from '../js/png.js';
import { placements, tileAt, column } from './space.mjs';

export const SCALES = ['minor pentatonic', 'major pentatonic', 'major', 'minor', 'harmonic minor', 'dorian', 'mixolydian', 'blues', 'whole tone'];

const FLOAT = 2;   // a scene marker more than this many blocks above the floor gets a warning
const isInt = (v) => Number.isInteger(v);
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isNum3 = (v) => Array.isArray(v) && v.length === 3 && v.every(isNum);

// The game code's syntax, as the runtime will see it (inside a function, so a top-level `return`
// is fine). Returns null or { line, msg }.
export function codeSyntax(code) {
  try {
    new vm.Script('(function () {' + code + '\n})', { filename: 'code' });
    return null;
  } catch (e) {
    const m = /^code:(\d+)/.exec(String(e.stack || ''));
    return { line: m ? +m[1] : 1, msg: e.message };
  }
}

// A loaded game (cli/project.mjs) checked: the folder's own problems first, then the cart's.
export async function checkGame(game) {
  const res = await checkCart(game.raw, game.where, { ok: game.ok || [] });
  res.errors.unshift(...(game.errors || []));
  res.warnings.unshift(...(game.warnings || []));
  return res;
}

export async function checkCart(cart, where = (at) => at, { ok = [] } = {}) {
  const errors = [], warnings = [];
  const err = (at, msg) => errors.push({ at: where(at), msg });
  // every warning has a short code; a project folder can list codes it accepts in cart.json's "ok"
  const warn = (at, msg, code) => { if (ok.includes(code)) hidden++; else warnings.push({ at: where(at), msg, code }); };
  let hidden = 0;
  if (!cart || typeof cart !== 'object' || Array.isArray(cart)) { err('', 'a cart is a JSON object'); return { errors, warnings }; }

  if (typeof cart.name !== 'string' || !cart.name.trim()) warn('name', 'the cart has no name (exports and save data use it)', 'no-name');

  // ---- code
  if (typeof cart.code !== 'string') err('code', 'code must be a string');
  else {
    const bad = codeSyntax(cart.code);
    if (bad) err('code:' + bad.line, 'syntax error: ' + bad.msg);
    else if (!/\b_draw\b/.test(cart.code)) warn('code', 'no _draw function: nothing will be drawn', 'no-draw');
  }

  // ---- palette
  if (cart.palette !== undefined) {
    if (!Array.isArray(cart.palette) || cart.palette.length !== LIMITS.colors) err('palette', `the palette must be ${LIMITS.colors} colors`);
    else cart.palette.forEach((c, i) => { if (!isInt(c) || c < 0 || c > 0xffffff) err(`palette[${i}]`, 'a color is a number from 0 to 0xffffff'); });
  }

  // ---- tiles
  const tiles = Array.isArray(cart.tiles) ? cart.tiles : null;
  if (!tiles) err('tiles', 'tiles must be a list');
  else {
    if (tiles.length > LIMITS.tiles + 1) err('tiles', `at most ${LIMITS.tiles} tiles (1-${LIMITS.tiles}); this cart has ${tiles.length - 1}`);
    if (tiles[0] != null) warn('tiles[0]', 'tile 0 is always empty; this one is ignored', 'tile-0');
    tiles.forEach((t, i) => {
      if (i === 0 || t == null) return;
      if (typeof t !== 'object') { err(`tiles[${i}]`, 'a tile is { top, side, bottom } or null'); return; }
      for (const f of ['top', 'side', 'bottom']) {
        const px = t[f];
        if (!Array.isArray(px) || px.length !== 64) { err(`tiles[${i}].${f}`, 'each face is 64 palette indices (8 x 8)'); continue; }
        const bad = px.findIndex((c) => !isInt(c) || c < 0 || c >= LIMITS.colors);
        if (bad >= 0) err(`tiles[${i}].${f}[${bad}]`, `pixel x ${bad % 8}, row ${bad >> 3} is ${JSON.stringify(px[bad])}; colors are 0-${LIMITS.colors - 1}`);
      }
      if (t.name !== undefined && typeof t.name !== 'string') err(`tiles[${i}].name`, 'a name is text');
    });
  }
  const tileExists = (n) => tiles && tiles[n] != null && typeof tiles[n] === 'object';

  // ---- maps
  const maps = Array.isArray(cart.maps) ? cart.maps : null;
  if (!maps) err('maps', 'maps must be a list');
  else maps.forEach((m, i) => {
    const at = `maps[${i}]`;
    if (!m || typeof m !== 'object') { err(at, 'a map is { name, w, h, d, origin, data }'); return; }
    const { w, h, d } = m;
    if (![w, h, d].every((v) => isInt(v) && v >= 1)) { err(at + '.size', 'w, h and d must be whole numbers of at least 1'); return; }
    if (Math.max(w, h, d) > LIMITS.mapSide) err(at + '.size', `${w} x ${h} x ${d}: the IDE edits maps up to ${LIMITS.mapSide} blocks per side`);
    if (w * h * d > LIMITS.mapBlocks) warn(at + '.size', `${(w * h * d).toLocaleString('en-US')} blocks: more than the IDE's ${LIMITS.mapBlocks.toLocaleString('en-US')} for new maps (it still runs and opens)`, 'big-map');
    if (m.origin !== undefined && !isNum3(m.origin)) err(at + '.origin', 'origin is [x, y, z]');
    if (typeof m.data !== 'string') { err(at + '.data', 'data is the blocks in base64'); return; }
    let bytes;
    try { bytes = b64ToBytes(m.data); } catch { err(at + '.data', 'data is not valid base64'); return; }
    if (bytes.length !== w * h * d) { err(at + '.data', `${bytes.length} bytes, but ${w} x ${h} x ${d} needs ${w * h * d}`); return; }
    const missing = new Map();
    for (let k = 0; k < bytes.length; k++) {
      const t = bytes[k];
      if (!t) continue;
      if (t > LIMITS.tiles) { const x = k % w, y = Math.floor(k / w) % h, z = Math.floor(k / (w * h)); err(at + '.data', `block ${x},${y},${z} is tile ${t}; tiles are 1-${LIMITS.tiles}`); return; }
      if (!tileExists(t)) missing.set(t, (missing.get(t) || 0) + 1);
    }
    for (const [t, n] of missing) warn(at + '.data', `${n} block${n > 1 ? 's use' : ' uses'} tile ${t}, which is empty (drawn as nothing)`, 'empty-tile');
  });

  // ---- vox
  const vox = Array.isArray(cart.vox) ? cart.vox : cart.vox === undefined ? [] : null;
  if (!vox) err('vox', 'vox must be a list');
  else {
    if (vox.length > LIMITS.vox) err('vox', `at most ${LIMITS.vox} models (0-${LIMITS.vox - 1}); this cart has ${vox.length}`);
    vox.forEach((v, i) => {
      const at = `vox[${i}]`;
      if (!v || typeof v !== 'object') { err(at, 'a model is { name, pivot, data }'); return; }
      if (v.pivot !== undefined && !isNum3(v.pivot)) err(at + '.pivot', 'pivot is [x, y, z] in voxels');
      let bytes;
      try { bytes = b64ToBytes(String(v.data)); } catch { err(at + '.data', 'data is not valid base64'); return; }
      if (bytes.length !== 512) { err(at + '.data', `${bytes.length} bytes; a model is 8 x 8 x 8 = 512`); return; }
      const bad = bytes.findIndex((b) => b > LIMITS.colors);
      if (bad >= 0) err(`${at}.data[${bad}]`, `voxel x ${bad % 8}, y ${(bad >> 3) % 8}, z ${bad >> 6} is ${bytes[bad]}; voxels are 0 (empty) or color + 1, up to ${LIMITS.colors}`);
    });
  }

  // ---- sounds
  const sfx = Array.isArray(cart.sfx) ? cart.sfx : cart.sfx === undefined ? [] : null;
  const soundOk = [];
  if (!sfx) err('sfx', 'sfx must be a list');
  else {
    if (sfx.length > LIMITS.sfx) err('sfx', `at most ${LIMITS.sfx} sounds (0-${LIMITS.sfx - 1}); this cart has ${sfx.length}`);
    sfx.forEach((s, i) => {
      if (s == null) return;
      const at = `sfx[${i}]`;
      const d = typeof s === 'string' ? decodeSfx(s) : null;
      if (!d) { err(at, 'a sound is a string of 166 hex digits (or null)'); return; }
      const str = s.trim().toLowerCase(), back = encodeSfx(d);
      if (back !== str) {
        if (parseInt(str.slice(0, 2), 16) < 1) err(at, 'speed must be at least 1');
        else if (parseInt(str.slice(2, 4), 16) > 32 || parseInt(str.slice(4, 6), 16) > 32) err(at, 'loop start and end are 0-32');
        else {
          const k = Array.from({ length: 32 }, (_, n) => n).find((n) => str.substr(6 + n * 5, 5) !== back.substr(6 + n * 5, 5));
          err(`${at}.notes[${k}]`, `note ${k} is out of range (pitch 0-63, wave, volume and effect 0-7)`);
        }
        return;
      }
      if (d.loopEnd > 0 && d.loopStart >= d.loopEnd) warn(at, `loop ${d.loopStart}-${d.loopEnd} is empty, so the sound doesn't loop`, 'no-loop');
      soundOk[i] = !isSilent(d);
    });
  }
  if (cart.sfxNames !== undefined && (!Array.isArray(cart.sfxNames) || cart.sfxNames.length > LIMITS.sfx || cart.sfxNames.some((n) => n != null && typeof n !== 'string')))
    err('sfxNames', `sfxNames is a list of up to ${LIMITS.sfx} names (text or null)`);

  // ---- music
  const music = Array.isArray(cart.music) ? cart.music : cart.music === undefined ? [] : null;
  if (!music) err('music', 'music must be a list');
  else {
    if (music.length > LIMITS.patterns) err('music', `at most ${LIMITS.patterns} patterns; this cart has ${music.length}`);
    music.forEach((s, i) => {
      if (s == null) return;
      const at = `music[${i}]`;
      const p = typeof s === 'string' && /^[0-9a-f]{9}$/i.test(s.trim()) ? decodePattern(s) : null;
      if (!p || encodePattern(p) !== s.trim().toLowerCase()) { err(at, 'a pattern is 9 hex digits: flags (0-7), then 4 channels of 00-3f, or 40 for empty'); return; }
      p.ch.forEach((c, k) => { if (c < LIMITS.sfx && !soundOk[c]) warn(at, `channel ${k} plays sound ${c}, which is empty or silent`, 'silent-channel'); });
    });
  }

  // ---- scale (Sfx tab settings)
  if (cart.scale !== undefined) {
    const s = cart.scale;
    if (!s || typeof s !== 'object' || typeof s.snap !== 'boolean' || !isInt(s.root) || s.root < 0 || s.root > 11 || !SCALES.includes(s.type))
      err('scale', `scale is { snap: true/false, root: 0-11, type: one of ${SCALES.join(', ')} }`);
  }

  // ---- scenes
  if (cart.scenes !== undefined) {
    if (!Array.isArray(cart.scenes)) err('scenes', 'scenes must be a list');
    else cart.scenes.forEach((s, i) => {
      const at = `scenes[${i}]`;
      if (!s || typeof s !== 'object') { err(at, 'a scene is { name, maps, vox }'); return; }
      (Array.isArray(s.maps) ? s.maps : []).forEach((p, k) => {
        const a = `${at}.maps[${k}]`;
        if (!p || !isInt(p.m) || !maps || p.m < 0 || p.m >= maps.length) err(a, `places map ${p && p.m}, which the cart doesn't have`);
        if (p && (!isNum3(p.pos) || (p.angle !== undefined && !isNum3(p.angle)))) err(a, 'pos is [x, y, z] and angle [pitch, yaw, roll]');
      });
      (Array.isArray(s.vox) ? s.vox : []).forEach((v, k) => {
        const a = `${at}.vox[${k}]`;
        if (!v || !isInt(v.v) || !vox || v.v < 0 || v.v >= vox.length) err(a, `marks vox model ${v && v.v}, which the cart doesn't have`);
        if (v && (!isNum3(v.pos) || (v.yaw !== undefined && !isNum(v.yaw)))) err(a, 'pos is [x, y, z] and yaw a number');
      });
    });
  }

  // ---- scene markers: buried in a block, or floating well above the floor
  if (Array.isArray(cart.scenes) && maps) cart.scenes.forEach((sc, i) => {
    let list;
    try { list = placements(cart, i); } catch { return; }   // broken maps are reported above
    (Array.isArray(sc && sc.vox) ? sc.vox : []).forEach((v, k) => {
      if (!v || !isNum3(v.pos)) return;
      const [x, y, z] = v.pos, at = `scenes[${i}].vox[${k}]`, what = `marker ${k} (vox ${v.v}) at ${x}, ${y}, ${z}`;
      const inside = list.find((p) => tileAt(p, [x, y + 0.01, z]).t);
      if (inside) { warn(at, `${what} is inside a block of map ${inside.m} (tile ${tileAt(inside, [x, y + 0.01, z]).t})`, 'marker-buried'); return; }
      const below = column(list, x, z).find((c) => c.t && c.y + 1 <= y + 0.01);
      if (!below) warn(at, `${what} has no block under it`, 'marker-floating');
      else if (y - (below.y + 1) > FLOAT) warn(at, `${what} floats ${+(y - below.y - 1).toFixed(2)} blocks above the floor (y ${below.y + 1}); b3d map --at ${x},${z} --scene ${i} shows the column`, 'marker-floating');
    });
  });

  // ---- cover
  if (cart.cover !== undefined) {
    const pre = 'data:image/png;base64,';
    if (typeof cart.cover !== 'string' || !cart.cover.startsWith(pre)) err('cover', 'the cover is a PNG data URL (the IDE drops anything else)');
    else {
      let img = null;
      try { img = await decodePng(b64ToBytes(cart.cover.slice(pre.length))); } catch { /* reported below */ }
      if (!img) err('cover', 'the cover PNG could not be read (8-bit, non-interlaced PNGs only)');
      else if (img.w !== LIMITS.screen || img.h !== LIMITS.screen) warn('cover', `the cover is ${img.w} x ${img.h}; it's shown at ${LIMITS.screen} x ${LIMITS.screen}`, 'cover-size');
    }
  }
  return { errors, warnings, hidden };
}
