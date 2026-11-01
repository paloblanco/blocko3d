// A small GIF writer for the pause menu's Capture GIF: palette frames in, an animated GIF out.
// Frames are palette indices (one byte per pixel) into one shared color table of up to 256 colors.
// Each frame after the first stores only the rectangle that changed, with unchanged pixels inside
// it transparent (when the table has room for a transparent index), and frames are left in place
// (disposal 1), so a mostly still screen costs almost nothing.

// GifWriter(w, h, colors): colors is a list of 0xRRGGBB. add(px, delay) adds a frame (px: w*h
// indices, delay in hundredths of a second); finish() returns the file as a Uint8Array.
export class GifWriter {
  constructor(w, h, colors) {
    this.w = w; this.h = h;
    this.out = new Bytes();
    this.prev = null;
    this.pending = null;                 // a frame is written once the next one is known (identical frames merge)
    const n = Math.max(2, colors.length + 1);           // + 1: room for a transparent index
    this.bits = Math.max(1, Math.ceil(Math.log2(Math.min(256, n))));
    this.trans = colors.length < 256 ? colors.length : -1;
    const o = this.out;
    o.str('GIF89a');
    o.u16(w); o.u16(h);
    o.byte(0x80 | ((this.bits - 1) << 4) | (this.bits - 1)); o.byte(0); o.byte(0);
    for (let i = 0; i < (1 << this.bits); i++) {
      const c = colors[i] || 0;
      o.byte((c >> 16) & 255); o.byte((c >> 8) & 255); o.byte(c & 255);
    }
    // loop forever (the NETSCAPE2.0 extension)
    o.byte(0x21); o.byte(0xff); o.byte(11); o.str('NETSCAPE2.0'); o.byte(3); o.byte(1); o.u16(0); o.byte(0);
    this.lzw = new Lzw();
  }

  add(px, delay) {
    const { w, h, prev } = this;
    if (!prev) { this.pending = { x: 0, y: 0, w, h, px: px.slice(), delay, trans: false }; this.prev = px.slice(); return; }
    // the rectangle that changed
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) {
      const row = y * w;
      let first = -1, last = -1;
      for (let x = 0; x < w; x++) if (px[row + x] !== prev[row + x]) { if (first < 0) first = x; last = x; }
      if (first >= 0) { if (first < x0) x0 = first; if (last > x1) x1 = last; if (y < y0) y0 = y; y1 = y; }
    }
    if (x1 < 0) { this.pending.delay += delay; return; }   // nothing changed: the last frame stays longer
    this.flush();
    const fw = x1 - x0 + 1, fh = y1 - y0 + 1, sub = new Uint8Array(fw * fh), t = this.trans;
    for (let y = 0; y < fh; y++) {
      const row = (y0 + y) * w + x0;
      for (let x = 0; x < fw; x++) {
        const v = px[row + x];
        sub[y * fw + x] = t >= 0 && v === prev[row + x] ? t : v;
        prev[row + x] = v;
      }
    }
    this.pending = { x: x0, y: y0, w: fw, h: fh, px: sub, delay, trans: t >= 0 };
  }

  flush() {
    const f = this.pending, o = this.out;
    if (!f) return;
    this.pending = null;
    // graphic control: leave the frame in place, the delay, the transparent index
    o.byte(0x21); o.byte(0xf9); o.byte(4); o.byte((1 << 2) | (f.trans ? 1 : 0));
    o.u16(Math.max(2, Math.min(65535, Math.round(f.delay)))); o.byte(f.trans ? this.trans : 0); o.byte(0);
    o.byte(0x2c); o.u16(f.x); o.u16(f.y); o.u16(f.w); o.u16(f.h); o.byte(0);
    this.lzw.encode(f.px, Math.max(2, this.bits), o);
  }

  finish() {
    this.flush();
    this.out.byte(0x3b);
    return this.out.bytes();
  }
}

// A growing byte buffer.
class Bytes {
  constructor() { this.buf = new Uint8Array(1 << 16); this.n = 0; }
  byte(b) {
    if (this.n === this.buf.length) { const b2 = new Uint8Array(this.buf.length * 2); b2.set(this.buf); this.buf = b2; }
    this.buf[this.n++] = b;
  }
  u16(v) { this.byte(v & 255); this.byte((v >> 8) & 255); }
  str(s) { for (let i = 0; i < s.length; i++) this.byte(s.charCodeAt(i)); }
  bytes() { return this.buf.slice(0, this.n); }
}

// GIF's variable-width LZW. The code table is a flat array indexed by (prefix code << 8 | index),
// with a generation stamp so clearing it costs nothing.
class Lzw {
  constructor() { this.codes = new Int16Array(4096 * 256); this.stamp = new Int32Array(4096 * 256); this.gen = 0; }

  encode(px, minSize, o) {
    const { codes, stamp } = this;
    const clear = 1 << minSize, eoi = clear + 1;
    let size = minSize + 1, next = eoi + 1, gen = ++this.gen;
    let cur = 0, nb = 0;
    const block = new Uint8Array(255);
    let bn = 0;
    o.byte(minSize);
    const put = (b) => { block[bn++] = b; if (bn === 255) { o.byte(255); for (let i = 0; i < 255; i++) o.byte(block[i]); bn = 0; } };
    const emit = (c) => { cur |= c << nb; nb += size; while (nb >= 8) { put(cur & 255); cur >>>= 8; nb -= 8; } };
    emit(clear);
    let prefix = px[0];
    for (let i = 1; i < px.length; i++) {
      const k = px[i], key = (prefix << 8) | k;
      if (stamp[key] === gen) { prefix = codes[key]; continue; }
      emit(prefix);
      if (next === 4096) {                     // table full: start over
        emit(clear);
        gen = ++this.gen; next = eoi + 1; size = minSize + 1;
      } else {
        if (next >= (1 << size)) size++;
        stamp[key] = gen; codes[key] = next++;
      }
      prefix = k;
    }
    emit(prefix);
    emit(eoi);
    if (nb > 0) put(cur & 255);
    if (bn) { o.byte(bn); for (let i = 0; i < bn; i++) o.byte(block[i]); }
    o.byte(0);
  }
}
