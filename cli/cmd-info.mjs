// b3d info <game>: the whole game on one screen: every tile, map, model, sound, pattern and scene
// by number and name, with "(no name)" marking the ones still to be named.
import { loadGame } from './project.mjs';
import { decodePattern, EMPTY_CH } from '../js/audio.js';
import { b64ToBytes } from '../js/format.js';

const NONE = '(no name)';

// "label  item  item  item..." wrapped to the terminal's width, continuation lines indented
function line(label, items, width) {
  const pad = ' '.repeat(8), out = [];
  let cur = label.padEnd(7) + ' ';
  for (const it of items) {
    if (cur.length + it.length + 2 > width && cur.trim() !== label) { out.push(cur.trimEnd()); cur = pad; }
    cur += it + '  ';
  }
  out.push(cur.trimEnd());
  return out.join('\n');
}

export default async function (cmd, { pos, opt }) {
  const game = await loadGame(pos[0]);
  const c = game.cart;
  const width = Math.max(60, Math.min(120, Number(opt.width) || process.stdout.columns || 100));
  const n = (k, a) => `${a} ${k}${a === 1 ? '' : 's'}`;
  const tiles = c.tiles.map((t, i) => (i && t ? [i, t] : null)).filter(Boolean);
  const sounds = (c.sfx || []).map((s, i) => (s ? i : null)).filter((i) => i !== null);
  const names = c.sfxNames || [];
  const music = (c.music || []).map((s, i) => (s ? [i, decodePattern(s)] : null)).filter(Boolean);
  const scenes = c.scenes || [];
  const fns = [...new Set((c.code.match(/^\s*function\s+([A-Za-z_$][\w$]*)/gm) || []).map((s) => s.trim().split(/\s+/)[1]))];

  console.log(`${c.name}: ${n('tile', tiles.length)}, ${n('map', c.maps.length)}, ${n('vox model', c.vox.length)}, ${n('sound', sounds.length)}, `
    + `${n('pattern', music.length)}${scenes.length ? ', ' + n('scene', scenes.length) : ''}${c.cover ? ', cover art' : ''}${c.palette ? ', own palette' : ''}`);
  console.log(line('code', [`${c.code.split('\n').length} lines,`, fns.length ? 'functions ' + fns.join(' ') : 'no top-level functions'], width));
  if (tiles.length) console.log(line('tiles', tiles.map(([i, t]) => `${i} ${t.name || NONE}`), width));
  if (c.maps.length) console.log(line('maps', c.maps.map((m, i) => {
    const solid = b64ToBytes(m.data).reduce((a, b) => a + (b ? 1 : 0), 0);
    const o = m.origin || [0, 0, 0];
    return `${i} ${m.name || NONE} ${m.w}x${m.h}x${m.d} (${solid.toLocaleString('en-US')} blocks${o.some((v) => v) ? `, origin ${o.join(',')}` : ''})`;
  }), width));
  if (c.vox.length) console.log(line('vox', c.vox.map((v, i) => `${i} ${v.name || NONE}`), width));
  if (sounds.length || names.some(Boolean)) {
    const ids = [...new Set([...sounds, ...names.map((x, i) => (x ? i : null)).filter((i) => i !== null)])].sort((a, b) => a - b);
    console.log(line('sfx', ids.map((i) => `${i} ${names[i] || NONE}${c.sfx[i] ? '' : ' (silent)'}`), width));
  }
  if (music.length) console.log(line('music', music.map(([i, p]) => {
    const ch = p.ch.map((x) => (x >= EMPTY_CH ? '-' : x)).join(' ');
    const fl = [p.loopStart && 'start', p.loopBack && 'back', p.stop && 'stop'].filter(Boolean).join(' ');
    return `${i}: ${ch}${fl ? ' ' + fl : ''} |`;
  }).map((s, k, a) => (k === a.length - 1 ? s.slice(0, -2) : s)), width));
  scenes.forEach((s, i) => {
    const counts = {};
    for (const v of s.vox || []) counts[v.v] = (counts[v.v] || 0) + 1;
    const marks = Object.entries(counts).map(([v, k]) => `vox ${v} ${(c.vox[v] && c.vox[v].name) || ''} x${k}`.replace('  ', ' '));
    const named = (s.maps || []).filter((p) => p.name).map((p) => p.name);
    console.log(line(i ? '' : 'scenes', [`${i} ${s.name || NONE}: ${n('map', (s.maps || []).length)}${named.length ? ` (named ${named.join(', ')})` : ''}, ${n('marker', (s.vox || []).length)}${marks.length ? ` (${marks.join(', ')})` : ''}`], width));
  });
  return 0;
}
