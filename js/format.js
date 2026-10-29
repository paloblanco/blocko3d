// BLOCKO3D formats and limits: the parts of the cart format that need no three.js, so plain Node
// tools (the b3d command, the build) can load them. core.js re-exports all of this for the engine
// and the IDE. The limits here are the one place they're written down: the IDE, the engine and
// `b3d check` all use them.

// PICO-8 palette (0-15) + PICO-8 "secret" extended palette (16-31).
export const DEFAULT_PALETTE = [
  0x000000, 0x1d2b53, 0x7e2553, 0x008751, 0xab5236, 0x5f574f, 0xc2c3c7, 0xfff1e8,
  0xff004d, 0xffa300, 0xffec27, 0x00e436, 0x29adff, 0x83769c, 0xff77a8, 0xffccaa,
  0x291814, 0x111d35, 0x422136, 0x125359, 0x742f29, 0x49333b, 0xa28879, 0xf3ef7d,
  0xbe1250, 0xff6c24, 0xa8e72e, 0x00b543, 0x065ab5, 0x754665, 0xff6e59, 0xff9d81,
];

export const NCOLORS = 32;
export const MAX_TILES = 64;          // tile indices 0..63; 0 is always empty
export const FACES = ['top', 'side', 'bottom'];
export const VOX = 8;                 // a vox model is 8 x 8 x 8 voxels
export const MAX_VOX = 64;
export const DEFAULT_PIVOT = [4, 0, 4];

// Every limit in one place (sounds and music come from js/audio.js, which is plain JS too).
export const LIMITS = {
  colors: NCOLORS,          // palette indices 0-31
  tiles: MAX_TILES - 1,     // tiles 1-63 (0 is empty)
  tileSize: 8,              // each face is 8 x 8 pixels
  vox: MAX_VOX,             // models 0-63
  voxSize: VOX,
  sfx: 64,                  // sounds 0-63
  notes: 32,                // notes per sound
  patterns: 64,             // music patterns 0-63
  mapSide: 128,             // the IDE edits maps up to 128 blocks per side...
  mapBlocks: 512 * 1024,    // ...and up to 524,288 blocks in all
  saveBytes: 64 * 1024,     // save() keeps up to 64 KB of JSON per game
  screen: 256,              // the screen is 256 x 256
};

export const hexColor = (n) => '#' + (n >>> 0).toString(16).padStart(6, '0').slice(-6);

export function emptyTile(c = 0) {
  return { top: new Array(64).fill(c), side: new Array(64).fill(c), bottom: new Array(64).fill(c) };
}

export const voxIndex = (x, y, z) => x + VOX * (y + VOX * z);

export function bytesToB64(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

export function b64ToBytes(b64) {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}
