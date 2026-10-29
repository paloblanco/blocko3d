// b3d sfx render <game> --sfx n [--loops k] [--out sound.wav]
// b3d sfx render <game> --music [n] [--out song.wav]
// Renders a sound, or the song from pattern n (default 0), with the engine's own synth (js/audio.js,
// plain JS, no browser) to a 16-bit mono WAV at 22050 Hz, and prints its length, peak level and
// any clipping. A looping sound plays its loop k more times (default 2); a song that loops back
// stops when it would play a pattern for the second time.
import { writeFileSync } from 'node:fs';
import { loadGame, UserError } from './project.mjs';
import { RATE, NOTES, MAX_SFX, MAX_PATTERNS, decodeSfx, decodePattern, renderNotes, renderPattern, nextPattern, patternEmpty, noteSeconds, isSilent, noteName } from '../js/audio.js';

export function wav(samples) {
  const n = samples.length, buf = Buffer.alloc(44 + n * 2);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write('WAVE', 8);
  buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(RATE, 24); buf.writeUInt32LE(RATE * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34);
  buf.write('data', 36); buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, samples[i])) * 32767), 44 + i * 2);
  return buf;
}

export function stats(samples) {
  let peak = 0, clipped = 0, sum = 0, last = -1;
  for (let i = 0; i < samples.length; i++) {
    const a = Math.abs(samples[i]);
    if (a > peak) peak = a;
    if (a > 1) clipped++;
    if (a > 0.001) last = i;
    sum += a * a;
  }
  return { seconds: samples.length / RATE, peak, clipped, rms: Math.sqrt(sum / Math.max(1, samples.length)), audible: (last + 1) / RATE };
}

const db = (x) => (x > 0 ? (20 * Math.log10(x)).toFixed(1) + ' dB' : '-inf dB');

export default async function (cmd, { pos, opt }) {
  if (pos[0] !== 'render') throw new UserError('usage: b3d sfx render <game> (--sfx n | --music [n]) [--out file.wav]');
  const game = await loadGame(pos[1], { strict: true });
  const cart = game.cart;
  const sounds = Array.from({ length: MAX_SFX }, (_, i) => decodeSfx((cart.sfx || [])[i]));
  let samples, what, out;
  if (opt.sfx !== undefined) {
    const n = Number(opt.sfx);
    if (!Number.isInteger(n) || n < 0 || n >= MAX_SFX) throw new UserError(`--sfx is a sound number 0-${MAX_SFX - 1}`);
    const s = sounds[n];
    if (!s) throw new UserError(`sound ${n} is empty`);
    const loops = s.loopEnd > s.loopStart;
    const k = opt.loops === undefined ? 2 : Number(opt.loops);
    const seq = [];
    for (let i = 0; i < (loops ? s.loopEnd : NOTES); i++) seq.push(i);
    if (loops) for (let r = 0; r < k; r++) for (let i = s.loopStart; i < s.loopEnd; i++) seq.push(i);
    samples = renderNotes(s, seq);
    const name = (cart.sfxNames || [])[n];
    const used = s.notes.filter((x) => x.vol > 0);
    what = `sound ${n}${name ? ` "${name}"` : ''}: speed ${s.speed} (${(noteSeconds(s) * 1000).toFixed(0)} ms a note)`
      + (loops ? `, loops notes ${s.loopStart}-${s.loopEnd - 1} (rendered ${k} more time${k === 1 ? '' : 's'})` : '')
      + (used.length ? `, ${used.length} notes from ${noteName(Math.min(...used.map((x) => x.pitch)))} to ${noteName(Math.max(...used.map((x) => x.pitch)))}` : ', silent');
    out = typeof opt.out === 'string' ? opt.out : `sfx${n}.wav`;
    if (isSilent(s)) console.log('warning: every note has volume 0');
  } else if (opt.music !== undefined) {
    const start = opt.music === true ? 0 : Number(opt.music);
    if (!Number.isInteger(start) || start < 0 || start >= MAX_PATTERNS) throw new UserError(`--music is a pattern number 0-${MAX_PATTERNS - 1}`);
    const patterns = Array.from({ length: MAX_PATTERNS }, (_, i) => decodePattern((cart.music || [])[i]));
    if (patternEmpty(patterns[start])) throw new UserError(`pattern ${start} is empty`);
    const order = [], seen = new Set();
    let i = start, ending = 'ends';
    while (i >= 0) {
      if (seen.has(i)) { ending = `loops back to ${i}`; break; }
      seen.add(i); order.push(i);
      for (const c of patterns[i].ch) if (c < MAX_SFX && !sounds[c]) console.log(`warning: pattern ${i} plays sound ${c}, which is empty`);
      i = nextPattern(patterns, i, start);
    }
    const parts = order.map((p) => renderPattern(patterns[p], sounds));
    samples = new Float32Array(parts.reduce((a, p) => a + p.length, 0));
    let o = 0;
    for (const p of parts) { samples.set(p, o); o += p.length; }
    what = `the song from pattern ${start}: patterns ${order.join(' > ')}, then ${ending}`;
    out = typeof opt.out === 'string' ? opt.out : `music${start}.wav`;
  } else throw new UserError('render which? --sfx n or --music [pattern]');
  const st = stats(samples);
  writeFileSync(out, wav(samples));
  console.log(`wrote ${out}: ${what}`);
  console.log(`length ${st.seconds.toFixed(2)} s (sound until ${st.audible.toFixed(2)} s), peak ${st.peak.toFixed(3)} (${db(st.peak)}), rms ${st.rms.toFixed(3)}`
    + (st.clipped ? `, CLIPPING: ${st.clipped} samples over full scale` : ', no clipping'));
  return 0;
}
