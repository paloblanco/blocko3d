// blocky3D sound: a small PICO-8-style SFX synth.
//
// A sound (sfx) is 32 notes. Each note has a pitch (0-63, C0 to D#5; 33 is A2 = 440 Hz), a
// waveform (0-7), a volume (0-7, 0 = silent) and an effect (0-7). The sound also has a speed
// (how long each note lasts: speed / 120 seconds) and loop points (notes loopStart up to, not
// including, loopEnd repeat; no loop when loopEnd <= loopStart).
//
// Saved as a 166-character hex string:
//   SS LL EE              speed, loop start, loop end (2 hex digits each)
//   PP W V E  x 32        per note: pitch (2 hex digits), wave, volume, effect (1 each)

export const NOTES = 32;
export const MAX_SFX = 64;
export const CHANNELS = 4;
export const RATE = 22050;
export const WAVES = ['triangle', 'tilted saw', 'saw', 'square', 'pulse', 'organ', 'noise', 'phaser'];
export const EFFECTS = ['none', 'slide', 'vibrato', 'drop', 'fade in', 'fade out', 'arp fast', 'arp slow'];
export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const noteName = (p) => NOTE_NAMES[p % 12] + Math.floor(p / 12);

export function emptySfx() {
  return {
    speed: 16, loopStart: 0, loopEnd: 0,
    notes: Array.from({ length: NOTES }, () => ({ pitch: 24, wave: 0, vol: 0, fx: 0 })),
  };
}

const hex = (n, w) => (n >>> 0).toString(16).padStart(w, '0').slice(-w);

export function encodeSfx(s) {
  let out = hex(s.speed, 2) + hex(s.loopStart, 2) + hex(s.loopEnd, 2);
  for (const n of s.notes) out += hex(n.pitch & 63, 2) + hex(n.wave & 7, 1) + hex(n.vol & 7, 1) + hex(n.fx & 7, 1);
  return out;
}

// Returns null if the string isn't a valid sound.
export function decodeSfx(str) {
  const s = String(str || '').trim().toLowerCase();
  if (!/^[0-9a-f]{166}$/.test(s)) return null;
  const n = (i, w) => parseInt(s.substr(i, w), 16);
  const out = { speed: Math.max(1, n(0, 2)), loopStart: Math.min(NOTES, n(2, 2)), loopEnd: Math.min(NOTES, n(4, 2)), notes: [] };
  for (let i = 0; i < NOTES; i++) {
    const o = 6 + i * 5;
    out.notes.push({ pitch: n(o, 2) & 63, wave: n(o + 2, 1) & 7, vol: n(o + 3, 1) & 7, fx: n(o + 4, 1) & 7 });
  }
  return out;
}

export const EMPTY_SFX = encodeSfx(emptySfx());
export const isSilent = (s) => s.notes.every((n) => n.vol === 0);

const freqOf = (pitch) => 440 * Math.pow(2, (pitch - 33) / 12);
export const noteSeconds = (s) => s.speed / 120;

// One cycle of each waveform; ph is the phase, 0 to 1. Output roughly -1..1.
const tri = (ph) => (ph < 0.5 ? ph * 4 - 1 : 3 - ph * 4);
function wave(w, ph, ph2) {
  switch (w) {
    case 0: return tri(ph);
    case 1: return ph < 0.875 ? (ph / 0.875) * 2 - 1 : 1 - ((ph - 0.875) / 0.125) * 2;   // tilted saw
    case 2: return ph * 2 - 1;                                                          // saw
    case 3: return ph < 0.5 ? 0.7 : -0.7;                                               // square
    case 4: return ph < 0.3 ? 0.7 : -0.7;                                               // pulse
    case 5: return (tri(ph) + tri((ph * 2) % 1) * 0.5) * 0.67;                         // organ
    case 7: return (tri(ph) + tri(ph2)) * 0.5;                                          // phaser
    default: return 0;
  }
}

// Renders notes [from, to) of a sound to Float32 samples at RATE.
export function renderSfx(s, from = 0, to = NOTES) {
  const per = Math.max(1, Math.round(noteSeconds(s) * RATE));
  const count = Math.max(0, to - from);
  const out = new Float32Array(per * count);
  let ph = 0, ph2 = 0, amp = 0, noise = 0, noisePh = 0;
  for (let k = 0; k < count; k++) {
    const i = from + k;
    const n = s.notes[i];
    const prev = s.notes[i - 1] || n;
    const group = s.notes.slice(i - (i % 4), i - (i % 4) + 4);
    for (let j = 0; j < per; j++) {
      const t = j / per;                       // 0..1 through this note
      const secs = (k * per + j) / RATE;       // since the start of the render
      let pitch = n.pitch, vol = n.vol / 7;
      switch (n.fx) {
        case 1: pitch = prev.pitch + (n.pitch - prev.pitch) * t; vol = (prev.vol + (n.vol - prev.vol) * t) / 7; break;
        case 2: pitch += Math.sin(secs * Math.PI * 2 * 7) * 0.5; break;
        case 3: pitch = n.pitch * (1 - t); break;
        case 4: vol *= t; break;
        case 5: vol *= 1 - t; break;
        case 6: case 7: {
          const step = Math.floor(secs * (n.fx === 6 ? 30 : 15)) % 4;
          pitch = group[step].pitch;
          break;
        }
      }
      const f = freqOf(pitch);
      ph = (ph + f / RATE) % 1;
      ph2 = (ph2 + (f * 1.006) / RATE) % 1;
      let v;
      if (n.wave === 6) {
        // noise: a new random level a few times per cycle, so pitch still shapes it
        noisePh += (f * 8) / RATE;
        if (noisePh >= 1) { noisePh %= 1; noise = Math.random() * 2 - 1; }
        v = noise * 0.7;
      } else {
        v = wave(n.wave, ph, ph2);
      }
      amp += (vol - amp) * 0.02;              // smooth volume changes to avoid clicks
      out[k * per + j] = v * amp * 0.35;
    }
  }
  return out;
}

// The notes a sound actually plays: through the loop end when looping, otherwise up to the
// last audible note.
export function playRange(s) {
  if (s.loopEnd > s.loopStart) return [0, s.loopEnd];
  let last = 0;
  s.notes.forEach((n, i) => { if (n.vol > 0) last = i + 1; });
  return [0, last];
}

// ---------------------------------------------------------------- player
// Plays decoded sounds on CHANNELS channels through Web Audio. Rendered buffers are cached by
// their string, so playing the same sound again is cheap.
export class SfxPlayer {
  constructor() {
    this.ctx = null;
    this.channels = Array.from({ length: CHANNELS }, () => null);   // { src, started, sfx, offset }
    this.cache = new Map();
    this.volume = 1;
  }

  // Call from a user gesture (key press, click) so the browser lets audio start.
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.gain = this.ctx.createGain();
      this.gain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  get ready() { return !!this.ctx && this.ctx.state === 'running'; }

  buffer(str, s, from, to) {
    const key = str + '|' + from + '|' + to;
    let b = this.cache.get(key);
    if (!b) {
      const data = renderSfx(s, from, to);
      b = this.ctx.createBuffer(1, Math.max(1, data.length), RATE);
      b.copyToChannel(data, 0);
      this.cache.set(key, b);
      if (this.cache.size > 256) this.cache.delete(this.cache.keys().next().value);
    }
    return b;
  }

  // channel -1 picks a free channel (or the one that started longest ago).
  // offset/length are in notes. Returns the channel used, or -1.
  play(str, channel = -1, offset = 0, length = NOTES) {
    const s = decodeSfx(str);
    if (!s || !this.ready) return -1;
    let [from, to] = playRange(s);
    from = Math.max(from, offset | 0);
    if (length < NOTES) to = Math.min(to, from + Math.max(0, length | 0));
    if (to <= from) return -1;
    if (channel < 0 || channel >= CHANNELS) channel = this.freeChannel();
    this.stop(channel);
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffer(str, s, from, to);
    const loops = s.loopEnd > s.loopStart && s.loopEnd > from && length >= NOTES;
    if (loops) {
      src.loop = true;
      src.loopStart = Math.max(0, s.loopStart - from) * noteSeconds(s);
      src.loopEnd = (s.loopEnd - from) * noteSeconds(s);
    }
    src.connect(this.gain);
    src.start();
    const ch = { src, started: this.ctx.currentTime, sfx: s, from, loops, done: false };
    src.onended = () => { ch.done = true; if (this.channels[channel] === ch) this.channels[channel] = null; };
    this.channels[channel] = ch;
    return channel;
  }

  freeChannel() {
    let best = 0, oldest = Infinity;
    for (let c = 0; c < CHANNELS; c++) {
      const ch = this.channels[c];
      if (!ch) return c;
      if (ch.started < oldest) { oldest = ch.started; best = c; }
    }
    return best;
  }

  stop(channel = -1) {
    for (let c = 0; c < CHANNELS; c++) {
      if (channel >= 0 && c !== channel) continue;
      const ch = this.channels[c];
      if (ch) { try { ch.src.stop(); } catch { /* already stopped */ } }
      this.channels[c] = null;
    }
  }

  // Let looping sounds finish their current pass instead of looping again.
  release(channel = -1) {
    for (let c = 0; c < CHANNELS; c++) {
      if (channel >= 0 && c !== channel) continue;
      const ch = this.channels[c];
      if (ch) ch.src.loop = false;
    }
  }

  // The note index currently playing on a channel, or -1.
  noteAt(channel) {
    const ch = this.channels[channel];
    if (!ch || !this.ctx) return -1;
    const per = noteSeconds(ch.sfx);
    let t = (this.ctx.currentTime - ch.started) / per;
    if (ch.loops) {
      const intro = ch.sfx.loopStart - ch.from, len = ch.sfx.loopEnd - ch.sfx.loopStart;
      if (t >= ch.sfx.loopEnd - ch.from) t = intro + ((t - intro) % len);
    }
    return ch.from + Math.floor(t);
  }

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
}
