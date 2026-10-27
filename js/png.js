// Tiny PNG reader and writer for app icons (exports and the demo build), with no dependencies.
// Works the same in the browser and in Node 18+ (both have DecompressionStream).
// The writer does its own simple compression (fixed Huffman codes, runs of one byte), so the same
// pixels always give the same bytes, whatever the browser or Node version. That keeps the committed
// demo icons identical to a fresh build. Pixel art compresses well that way: repeated rows become
// zeros (PNG's "up" filter) and runs of one color become one match.

const SIG = [137, 80, 78, 71, 13, 10, 26, 10];

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
function crc32(bytes) {
  let c = 0xffffffff;
  for (const b of bytes) c = CRC[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// ---------------------------------------------------------------- reading

async function inflate(bytes) {
  const out = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));
  return new Uint8Array(await new Response(out).arrayBuffer());
}

// Decodes an 8-bit, non-interlaced PNG (RGBA, RGB, gray or palette) to { w, h, rgba }, or returns
// null for anything else, so the caller can fall back to another picture.
export async function decodePng(bytes) {
  try {
    if (!SIG.every((v, i) => bytes[i] === v)) return null;
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    let pos = 8, w = 0, h = 0, depth = 0, type = 0, interlace = 0, plte = null, trns = null;
    const idat = [];
    while (pos < bytes.length) {
      const len = dv.getUint32(pos), name = String.fromCharCode(...bytes.subarray(pos + 4, pos + 8));
      const data = bytes.subarray(pos + 8, pos + 8 + len);
      if (name === 'IHDR') { w = dv.getUint32(pos + 8); h = dv.getUint32(pos + 12); depth = data[8]; type = data[9]; interlace = data[12]; }
      else if (name === 'PLTE') plte = data;
      else if (name === 'tRNS') trns = data;
      else if (name === 'IDAT') idat.push(data);
      else if (name === 'IEND') break;
      pos += 12 + len;
    }
    const bpp = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[type];
    if (depth !== 8 || interlace || !bpp || !w || !h) return null;
    const all = new Uint8Array(idat.reduce((n, d) => n + d.length, 0));
    let o = 0; for (const d of idat) { all.set(d, o); o += d.length; }
    const raw = await inflate(all);
    const stride = w * bpp, px = new Uint8Array(stride * h);
    for (let y = 0; y < h; y++) {
      const f = raw[y * (stride + 1)], src = y * (stride + 1) + 1, row = y * stride, up = row - stride;
      for (let x = 0; x < stride; x++) {
        const a = x >= bpp ? px[row + x - bpp] : 0, b = y ? px[up + x] : 0, c = x >= bpp && y ? px[up + x - bpp] : 0;
        let v = raw[src + x];
        if (f === 1) v += a;
        else if (f === 2) v += b;
        else if (f === 3) v += (a + b) >> 1;
        else if (f === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
        px[row + x] = v & 255;
      }
    }
    const rgba = new Uint8Array(w * h * 4);
    for (let i = 0; i < w * h; i++) {
      let r, g, b, al = 255;
      if (type === 6) { r = px[i * 4]; g = px[i * 4 + 1]; b = px[i * 4 + 2]; al = px[i * 4 + 3]; }
      else if (type === 2) { r = px[i * 3]; g = px[i * 3 + 1]; b = px[i * 3 + 2]; }
      else if (type === 0) { r = g = b = px[i]; }
      else if (type === 4) { r = g = b = px[i * 2]; al = px[i * 2 + 1]; }
      else { const k = px[i]; if (!plte) return null; r = plte[k * 3]; g = plte[k * 3 + 1]; b = plte[k * 3 + 2]; if (trns && k < trns.length) al = trns[k]; }
      rgba.set([r, g, b, al], i * 4);
    }
    return { w, h, rgba };
  } catch { return null; }
}

// ---------------------------------------------------------------- writing

// zlib stream with one fixed-Huffman block. Matches are only ever "repeat the previous byte"
// (distance 1), which is all pixel art rows need.
const LEN_BASE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
const LEN_EXTRA = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
function deflateFixed(data) {
  const out = [0x78, 0x01];
  let acc = 0, n = 0;
  const bits = (v, count) => { for (let i = 0; i < count; i++) { acc |= ((v >> i) & 1) << n; if (++n === 8) { out.push(acc); acc = 0; n = 0; } } };
  const code = (v, count) => { for (let i = count - 1; i >= 0; i--) bits((v >> i) & 1, 1); };   // Huffman codes go MSB first
  const sym = (s) => {
    if (s < 144) code(0x30 + s, 8);
    else if (s < 256) code(0x190 + s - 144, 9);
    else if (s < 280) code(s - 256, 7);
    else code(0xc0 + s - 280, 8);
  };
  bits(1, 1); bits(1, 2);                  // last block, fixed Huffman codes
  let i = 0;
  while (i < data.length) {
    sym(data[i]);
    let run = 0;
    while (i + 1 + run < data.length && data[i + 1 + run] === data[i] && run < 258) run++;
    if (run >= 3) {
      let k = LEN_BASE.length - 1; while (LEN_BASE[k] > run) k--;
      sym(257 + k); bits(run - LEN_BASE[k], LEN_EXTRA[k]);
      code(0, 5);                          // distance code 0: one byte back
      i += 1 + run;
    } else i++;
  }
  sym(256);
  if (n) out.push(acc);
  let a = 1, b = 0;
  for (const v of data) { a = (a + v) % 65521; b = (b + a) % 65521; }
  out.push(b >> 8, b & 255, a >> 8, a & 255);
  return new Uint8Array(out);
}

function chunk(name, data) {
  const body = new Uint8Array(4 + data.length);
  for (let i = 0; i < 4; i++) body[i] = name.charCodeAt(i);
  body.set(data, 4);
  const out = new Uint8Array(12 + data.length), dv = new DataView(out.buffer);
  dv.setUint32(0, data.length);
  out.set(body, 4);
  dv.setUint32(8 + data.length, crc32(body));
  return out;
}

// Encodes w×h RGBA pixels as a palette PNG (at most 256 colors; extra colors take the nearest one).
export function encodePng(w, h, rgba) {
  const colors = [], index = new Map(), idx = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const key = (rgba[i * 4] << 16) | (rgba[i * 4 + 1] << 8) | rgba[i * 4 + 2];
    let k = index.get(key);
    if (k === undefined) {
      if (colors.length < 256) { k = colors.length; colors.push(key); }
      else {
        let best = 1e9;
        colors.forEach((c, j) => { const d = Math.abs((c >> 16) - (key >> 16)) + Math.abs(((c >> 8) & 255) - ((key >> 8) & 255)) + Math.abs((c & 255) - (key & 255)); if (d < best) { best = d; k = j; } });
      }
      index.set(key, k);
    }
    idx[i] = k;
  }
  // each row: "up" filter when it repeats the row above (all zeros), else none
  const raw = new Uint8Array(h * (w + 1));
  for (let y = 0; y < h; y++) {
    const row = idx.subarray(y * w, y * w + w), same = y > 0 && row.every((v, x) => v === idx[(y - 1) * w + x]);
    raw[y * (w + 1)] = same ? 2 : 0;
    if (!same) raw.set(row, y * (w + 1) + 1);
  }
  const ihdr = new Uint8Array(13), dv = new DataView(ihdr.buffer);
  dv.setUint32(0, w); dv.setUint32(4, h); ihdr[8] = 8; ihdr[9] = 3;
  const plte = new Uint8Array(colors.length * 3);
  colors.forEach((c, j) => plte.set([c >> 16, (c >> 8) & 255, c & 255], j * 3));
  const parts = [new Uint8Array(SIG), chunk('IHDR', ihdr), chunk('PLTE', plte), chunk('IDAT', deflateFixed(raw)), chunk('IEND', new Uint8Array(0))];
  const out = new Uint8Array(parts.reduce((s, p) => s + p.length, 0));
  let o = 0; for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

// Nearest-neighbour scaling, so pixel art stays crisp.
export function scaleRgba(src, sw, sh, dw, dh) {
  const out = new Uint8Array(dw * dh * 4);
  for (let y = 0; y < dh; y++) {
    const sy = Math.floor(y * sh / dh);
    for (let x = 0; x < dw; x++) {
      const s = (sy * sw + Math.floor(x * sw / dw)) * 4;
      out.set(src.subarray(s, s + 4), (y * dw + x) * 4);
    }
  }
  return out;
}
