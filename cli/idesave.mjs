// What the IDE writes when it opens a cart and you press Save: loadCart() followed by serialize()
// in js/ide.js, without the page. `b3d pack` runs its result through this, so a packed cart is
// byte for byte what the IDE would save, and IDE Save -> unpack -> pack gives the same file back.
// Keep it in step with loadCart/serialize/trimSounds/trimPatterns/sfxNamesOut in js/ide.js
// (the round-trip test opens every demo in the real IDE and compares).
import { normalizeCart } from '../js/cart.js';
import { DEFAULT_PIVOT, VOX, emptyTile, bytesToB64, b64ToBytes } from '../js/format.js';
import { MAX_SFX, MAX_PATTERNS, emptySfx, decodeSfx, encodeSfx, isSilent, emptyPattern, decodePattern, encodePattern, patternEmpty } from '../js/audio.js';
import { SCALES } from './check.mjs';

const bytesOr = (b64, n) => {
  let data = null;
  try { data = b64 ? b64ToBytes(b64) : null; } catch { data = null; }
  return data && data.length === n ? data : new Uint8Array(n);
};

export function ideCart(input, name) {
  const cart = normalizeCart(JSON.parse(JSON.stringify(input)));
  if (name) cart.name = name;
  if (!cart.name) cart.name = 'untitled';
  const maps = cart.maps.map((m) => ({ name: m.name || '', w: m.w, h: m.h, d: m.d, origin: [...(m.origin || [0, 0, 0])], data: bytesOr(m.data, m.w * m.h * m.d) }));
  const vox = (cart.vox || []).map((v) => ({ name: (v && v.name) || '', pivot: [...((v && v.pivot) || DEFAULT_PIVOT)], data: bytesOr(v && v.data, VOX * VOX * VOX) }));
  if (!vox.length) vox.push({ name: '', pivot: [...DEFAULT_PIVOT], data: new Uint8Array(VOX * VOX * VOX) });
  const scenes = cart.scenes || [];
  const sounds = Array.from({ length: MAX_SFX }, (_, i) => decodeSfx((cart.sfx || [])[i]) || emptySfx());
  (cart.sfxNames || []).forEach((n, i) => { if (n && sounds[i]) sounds[i].name = n; });
  const patterns = Array.from({ length: MAX_PATTERNS }, (_, i) => decodePattern((cart.music || [])[i]) || emptyPattern());
  const scale = { snap: false, root: 0, type: 'minor pentatonic', ...(cart.scale || {}) };
  if (!SCALES.includes(scale.type)) scale.type = 'minor pentatonic';
  if (cart.tiles.length < 2) cart.tiles.push(emptyTile(6));

  const trim = (list) => { while (list.length && list[list.length - 1] === null) list.pop(); return list; };
  const sfxNames = trim(sounds.map((s) => s.name || null));
  const out = {
    version: cart.version,
    name: cart.name,
    code: cart.code.replace(/\r\n?/g, '\n'),   // the code editor keeps lines with \n
    tiles: cart.tiles,
    maps: maps.map((m) => ({ name: m.name, w: m.w, h: m.h, d: m.d, origin: m.origin, data: bytesToB64(m.data) })),
    vox: vox.map((v) => ({ name: v.name, pivot: v.pivot, data: bytesToB64(v.data) })),
    sfx: trim(sounds.map((s) => (isSilent(s) && s.loopEnd === 0 && s.speed === 16 ? null : encodeSfx(s)))),
    ...(sfxNames.length ? { sfxNames } : {}),
    music: trim(patterns.map((p) => (patternEmpty(p) && !p.loopStart && !p.loopBack && !p.stop ? null : encodePattern(p)))),
    scale,
  };
  if (scenes.length) out.scenes = scenes;
  if (cart.palette) out.palette = cart.palette;
  if (cart.cover) out.cover = cart.cover;
  return out;
}

// The file the IDE's Save button writes (no indentation, no final newline).
export const ideSaveText = (cart, name) => JSON.stringify(ideCart(cart, name));
