// blocky3D IDE: code editor, map editor, tile editor, vox editor, API info and the run pane.
import {
  DEFAULT_PALETTE, MAX_TILES, FACES, hexColor, emptyTile, bytesToB64, b64ToBytes,
  VOX, MAX_VOX, DEFAULT_PIVOT, voxIndex,
} from './core.js';
import { demoCart, emptyCart, normalizeCart, CART_VERSION } from './cart.js';
import { Preview } from './preview.js';
import { API_SECTIONS } from './apidocs.js';
import { exportGame } from './export.js';
import {
  SfxPlayer, NOTES, MAX_SFX, WAVES, EFFECTS, NOTE_NAMES, noteName, emptySfx, encodeSfx, decodeSfx, isSilent, noteSeconds,
  MAX_PATTERNS, EMPTY_CH, emptyPattern, encodePattern, decodePattern, patternEmpty, patternSeconds,
} from './audio.js';

const $ = (id) => document.getElementById(id);
const STORE = 'blocky3d.cart.v1';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
// Phone layout (matches the max-width: 820px block in ide.css): one panel at a time, the game is a tab.
const MOBILE = window.matchMedia('(max-width: 820px)');

// ================================================================= state
let cart = null;   // { name, code, palette?, tiles }
let maps = [];     // editable maps: { name, w, h, d, origin, data: Uint8Array }
let curMap = 0, layer = 0, mapTile = 1;
let curTile = 1, color = 7, tool = 'pencil';
let voxModels = [];   // editable vox models: { name, pivot, data: Uint8Array(512) }, 0 = empty, else color + 1
let curVox = 0, voxLayer = 0, voxColor = 8, voxTool = 'pencil';
let sounds = [];   // 64 decoded sounds (see js/audio.js)
let curSfx = 0, brush = { wave: 0, vol: 5, fx: 0 };
let patterns = [];   // 64 decoded music patterns
let curPat = 0;
let scale = { snap: false, root: 0, type: 'minor pentatonic' };   // Sfx tab note snapping, saved in the cart
let activeTab = 'code';

const palette = () => cart.palette || DEFAULT_PALETTE;

function loadCart(c, name) {
  cart = normalizeCart(JSON.parse(JSON.stringify(c)));
  if (name) cart.name = name;
  if (!cart.name) cart.name = 'untitled';
  maps = cart.maps.map((m) => {
    let data = m.data ? b64ToBytes(m.data) : null;
    if (!data || data.length !== m.w * m.h * m.d) data = new Uint8Array(m.w * m.h * m.d);
    return { name: m.name || '', w: m.w, h: m.h, d: m.d, origin: [...(m.origin || [0, 0, 0])], data };
  });
  delete cart.maps;
  voxModels = (cart.vox || []).map((v) => {
    let data = v && v.data ? b64ToBytes(v.data) : null;
    if (!data || data.length !== VOX * VOX * VOX) data = new Uint8Array(VOX * VOX * VOX);
    return { name: (v && v.name) || '', pivot: [...((v && v.pivot) || DEFAULT_PIVOT)], data };
  });
  delete cart.vox;
  sounds = Array.from({ length: MAX_SFX }, (_, i) => decodeSfx((cart.sfx || [])[i]) || emptySfx());
  delete cart.sfx;
  curSfx = 0;
  patterns = Array.from({ length: MAX_PATTERNS }, (_, i) => decodePattern((cart.music || [])[i]) || emptyPattern());
  delete cart.music;
  curPat = 0;
  scale = { snap: false, root: 0, type: 'minor pentatonic', ...(cart.scale || {}) };
  if (!SCALES[scale.type]) scale.type = 'minor pentatonic';
  if (!voxModels.length) voxModels.push(newVox());
  curVox = 0; voxLayer = 0;
  voxThumbs.clear();
  if (cart.tiles.length < 2) cart.tiles.push(emptyTile(6));
  curMap = 0; layer = 0;
  curTile = 1; mapTile = 1;
  thumbs.clear();
  $('cartName').value = cart.name;
  setCode(cart.code);
  if ($('saveData')) showSaveData();
  refreshMapUI();
  refreshSprUI();
  refreshVoxUI();
  refreshSfxUI();
  refreshMusicUI();
}

function serialize() {
  const out = {
    version: CART_VERSION,
    name: cart.name,
    code: getCode(),
    tiles: cart.tiles,
    maps: maps.map((m) => ({ name: m.name, w: m.w, h: m.h, d: m.d, origin: m.origin, data: bytesToB64(m.data) })),
    vox: voxModels.map((v) => ({ name: v.name, pivot: v.pivot, data: bytesToB64(v.data) })),
    sfx: trimSounds(),
    music: trimPatterns(),
    scale,
  };
  if (cart.palette) out.palette = cart.palette;
  return out;
}

let saveTimer = 0;
function dirty() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(STORE, JSON.stringify(serialize())); }
    catch (e) { log('Could not autosave: ' + e.message, 'error'); }
  }, 400);
}

// ================================================================= tile thumbnails
const thumbs = new Map();
function faceCanvas(t, face = 'top') {
  const key = t + face;
  if (thumbs.has(key)) return thumbs.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 8;
  const ctx = c.getContext('2d');
  const tile = cart.tiles[t];
  if (tile) {
    const p = palette();
    for (let i = 0; i < 64; i++) { ctx.fillStyle = hexColor(p[tile[face][i] & 31]); ctx.fillRect(i % 8, (i / 8) | 0, 1, 1); }
  }
  thumbs.set(key, c);
  return c;
}
function invalidateTile(t) { for (const f of FACES) thumbs.delete(t + f); }

function tileButton(t, selected, onPick) {
  const b = document.createElement('button');
  b.className = 'tilebtn' + (selected ? ' on' : '') + (t === 0 ? ' eraser' : '');
  b.title = t === 0 ? 'Empty (0)' : 'Tile ' + t;
  if (t > 0) {
    const c = document.createElement('canvas');
    c.width = c.height = 8;
    c.getContext('2d').drawImage(faceCanvas(t), 0, 0);
    b.append(c);
  }
  const s = document.createElement('span');
  s.textContent = t;
  b.append(s);
  b.onclick = () => onPick(t);
  return b;
}

// ================================================================= code editor
let cm = null;
let errMark = null;

function setupCode() {
  if (window.CodeMirror) {
    cm = window.CodeMirror.fromTextArea($('code'), {
      mode: 'javascript', lineNumbers: true, tabSize: 2, indentUnit: 2, indentWithTabs: false,
      matchBrackets: true, viewportMargin: 50,
      extraKeys: { Tab: (ed) => ed.execCommand(ed.somethingSelected() ? 'indentMore' : 'insertSoftTab') },
    });
    cm.on('change', () => { cart.code = cm.getValue(); dirty(); });
  } else {
    const ta = $('code');
    ta.addEventListener('input', () => { cart.code = ta.value; dirty(); });
    ta.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      e.preventDefault();
      ta.setRangeText('  ', ta.selectionStart, ta.selectionEnd, 'end');
      cart.code = ta.value; dirty();
    });
  }
}
const getCode = () => (cm ? cm.getValue() : $('code').value);
function setCode(s) { if (cm) { cm.setValue(s); cm.clearHistory(); } else $('code').value = s; }

function gotoLine(line) {
  showTab('code');
  if (!cm) return;
  clearErrMark();
  errMark = cm.addLineClass(line - 1, 'background', 'errline');
  cm.setCursor({ line: line - 1, ch: 0 });
  cm.scrollIntoView(null, 120);
  cm.focus();
}
function clearErrMark() { if (cm && errMark) { cm.removeLineClass(errMark, 'background', 'errline'); errMark = null; } }

// ================================================================= console
function log(text, cls = '') {
  const el = document.createElement('div');
  el.className = cls;
  el.textContent = text;
  $('console').append(el);
  $('console').scrollTop = 1e9;
  return el;
}
function logError(message, line) {
  const el = log((line ? `line ${line}: ` : '') + message, 'error');
  if (line) { el.title = 'Go to line ' + line; el.onclick = () => gotoLine(line); }
}

// ================================================================= run / stop
let frame = null, pendingCart = null;

function run() {
  stop(false);
  $('console').textContent = '';
  clearErrMark();
  pendingCart = serialize();
  frame = document.createElement('iframe');
  frame.src = 'player.html';
  frame.title = 'Game';
  frame.allow = 'autoplay; gamepad; fullscreen';   // sound once you've clicked Run; gamepads; the fullscreen button
  $('placeholder').hidden = true;
  $('screen').append(frame);
  if (MOBILE.matches) showTab('game');
}

function stop(showPlaceholder = true) {
  if (frame) { frame.remove(); frame = null; }
  if (showPlaceholder) $('placeholder').hidden = false;
}

window.addEventListener('message', (e) => {
  if (!frame || e.source !== frame.contentWindow) return;
  const d = e.data || {};
  if (d.source !== 'blocky3d-player') return;
  if (d.type === 'ready') frame.contentWindow.postMessage({ type: 'run', cart: pendingCart }, '*');
  else if (d.type === 'started') { log('running', 'info'); frame.focus(); frame.contentWindow.focus(); }
  else if (d.type === 'error') logError(d.message, d.line);
  else if (d.type === 'log') log(d.text);
  else if (d.type === 'save') showSaveData();
});

// ================================================================= tabs
function showTab(name) {
  if (name === 'game' && !MOBILE.matches) name = 'code';   // the game tab only exists on phones
  activeTab = name;
  document.body.dataset.tab = name;
  document.querySelectorAll('.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === name));
  document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('on', p.id === 'tab-' + name));
  if (name === 'code' && cm) cm.refresh();
  if (name === 'map') refreshMapUI();
  if (name === 'tile') refreshSprUI();
  if (name === 'vox') refreshVoxUI();
  if (name === 'sfx') refreshSfxUI();
  if (name !== 'sfx') stopSfxPreview();
  if (name === 'music') refreshMusicUI();
  if (name !== 'music') stopMusicPreview();
  if (name !== 'vox') stopPlayback();
}

// ================================================================= map editor
let mapPreview = null, previewQueued = false;
const curM = () => maps[curMap];

function refreshMapUI() {
  if (!cart) return;
  curMap = clamp(curMap, 0, Math.max(0, maps.length - 1));
  const sel = $('mapSelect');
  sel.innerHTML = '';
  maps.forEach((m, i) => sel.append(new Option(`${i}: ${m.name || 'map'}`, i)));
  sel.value = curMap;
  const m = curM();
  for (const id of ['mapName', 'mapW', 'mapH', 'mapD', 'oX', 'oY', 'oZ', 'mapResize', 'mapDelete']) $(id).disabled = !m;
  if (m) {
    $('mapName').value = m.name;
    $('mapW').value = m.w; $('mapH').value = m.h; $('mapD').value = m.d;
    [$('oX').value, $('oY').value, $('oZ').value] = m.origin;
    layer = clamp(layer, 0, m.h - 1);
    $('layerRange').max = m.h - 1;
    $('layerRange').value = layer;
    $('layerLabel').textContent = layer;
  }
  mapTile = clamp(mapTile, 0, cart.tiles.length - 1);
  const bar = $('mapTiles');
  bar.innerHTML = '';
  for (let t = 0; t < cart.tiles.length; t++) {
    bar.append(tileButton(t, t === mapTile, (pick) => { mapTile = pick; refreshMapUI(); }));
  }
  drawGrid();
  queuePreview();
}

let cell = 16;
function drawGrid() {
  const cv = $('mapGrid'), m = curM();
  const ctx = cv.getContext('2d');
  if (!m) { cv.width = cv.height = 0; return; }
  const box = $('gridScroll');
  // on phones the grid only has to fit the width; the page scrolls
  const availW = Math.max(100, box.clientWidth - 4), availH = MOBILE.matches ? 1e9 : Math.max(100, box.clientHeight - 4);
  cell = clamp(Math.floor(Math.min(availW / m.w, availH / m.d)), 8, 34);
  const dpr = window.devicePixelRatio || 1;
  const W = m.w * cell + 1, H = m.d * cell + 1;
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 0, W, H);
  const ghost = $('ghost').checked && layer > 0;
  for (let z = 0; z < m.d; z++) for (let x = 0; x < m.w; x++) {
    const t = m.data[x + m.w * (layer + m.h * z)];
    if (t) { ctx.drawImage(faceCanvas(t), x * cell, z * cell, cell, cell); continue; }
    if (ghost) {
      const b = m.data[x + m.w * (layer - 1 + m.h * z)];
      if (b) { ctx.globalAlpha = 0.25; ctx.drawImage(faceCanvas(b), x * cell, z * cell, cell, cell); ctx.globalAlpha = 1; }
    }
  }
  ctx.strokeStyle = 'rgba(141,147,173,0.22)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= m.w; x++) { ctx.moveTo(x * cell + 0.5, 0); ctx.lineTo(x * cell + 0.5, H); }
  for (let z = 0; z <= m.d; z++) { ctx.moveTo(0, z * cell + 0.5); ctx.lineTo(W, z * cell + 0.5); }
  ctx.stroke();
}

function queuePreview() {
  if (previewQueued) return;
  previewQueued = true;
  requestAnimationFrame(() => {
    previewQueued = false;
    if (activeTab !== 'map') return;
    const m = curM();
    if (!mapPreview) mapPreview = new Preview($('mapPreview'));
    mapPreview.setPalette(palette());
    mapPreview.setTiles(cart.tiles);
    if (m) mapPreview.setMap(m, { layer, frame: true });
    else mapPreview.setMap({ w: 1, h: 1, d: 1, data: new Uint8Array(1), origin: [0, 0, 0] });
    mapPreview.render();
  });
}

function setLayer(y) {
  const m = curM();
  if (!m) return;
  layer = clamp(y, 0, m.h - 1);
  $('layerRange').value = layer;
  $('layerLabel').textContent = layer;
  drawGrid();
  queuePreview();
}

function setupMapEditor() {
  $('mapSelect').onchange = (e) => { curMap = +e.target.value; layer = 0; refreshMapUI(); };
  $('mapNew').onclick = () => {
    maps.push({ name: 'map' + maps.length, w: 16, h: 8, d: 16, origin: [0, 0, 0], data: new Uint8Array(16 * 8 * 16) });
    curMap = maps.length - 1; layer = 0;
    refreshMapUI(); dirty();
  };
  $('mapDelete').onclick = () => {
    const m = curM();
    if (!m || !confirm(`Delete map ${curMap} (${m.name})? Maps after it will be renumbered.`)) return;
    maps.splice(curMap, 1);
    curMap = Math.max(0, curMap - 1);
    refreshMapUI(); dirty();
  };
  $('mapName').oninput = (e) => {
    const m = curM(); if (!m) return;
    m.name = e.target.value;
    $('mapSelect').options[curMap].text = `${curMap}: ${m.name || 'map'}`;
    dirty();
  };
  $('mapResize').onclick = () => {
    const m = curM(); if (!m) return;
    const w = clamp(+$('mapW').value | 0, 1, 128), h = clamp(+$('mapH').value | 0, 1, 128), d = clamp(+$('mapD').value | 0, 1, 128);
    if (w * h * d > 512 * 1024) { alert('That map is too large (max 524,288 blocks).'); return; }
    const data = new Uint8Array(w * h * d);
    for (let z = 0; z < Math.min(d, m.d); z++) for (let y = 0; y < Math.min(h, m.h); y++) for (let x = 0; x < Math.min(w, m.w); x++) {
      data[x + w * (y + h * z)] = m.data[x + m.w * (y + m.h * z)];
    }
    Object.assign(m, { w, h, d, data });
    refreshMapUI(); dirty();
  };
  for (const [id, k] of [['oX', 0], ['oY', 1], ['oZ', 2]]) {
    $(id).oninput = (e) => { const m = curM(); if (!m) return; m.origin[k] = +e.target.value || 0; queuePreview(); dirty(); };
  }
  $('layerUp').onclick = () => setLayer(layer + 1);
  $('layerDown').onclick = () => setLayer(layer - 1);
  $('layerRange').oninput = (e) => setLayer(+e.target.value);
  $('ghost').onchange = drawGrid;
  const fillLayer = (t) => {
    const m = curM(); if (!m) return;
    for (let z = 0; z < m.d; z++) for (let x = 0; x < m.w; x++) m.data[x + m.w * (layer + m.h * z)] = t;
    drawGrid(); queuePreview(); dirty();
  };
  $('layerFill').onclick = () => fillLayer(mapTile);
  $('layerClear').onclick = () => fillLayer(0);

  const cv = $('mapGrid');
  let painting = -1;
  const paintAt = (e) => {
    const m = curM(); if (!m) return;
    const r = cv.getBoundingClientRect();
    const x = Math.floor((e.clientX - r.left) / cell), z = Math.floor((e.clientY - r.top) / cell);
    if (x < 0 || z < 0 || x >= m.w || z >= m.d) return;
    const i = x + m.w * (layer + m.h * z);
    if (m.data[i] === painting) return;
    m.data[i] = painting;
    drawGrid(); queuePreview(); dirty();
  };
  cv.addEventListener('contextmenu', (e) => e.preventDefault());
  cv.addEventListener('pointerdown', (e) => {
    painting = e.button === 2 ? 0 : mapTile;
    cv.setPointerCapture(e.pointerId);
    paintAt(e);
  });
  cv.addEventListener('pointermove', (e) => { if (painting >= 0) paintAt(e); });
  cv.addEventListener('pointerup', () => { painting = -1; });
  new ResizeObserver(() => { if (activeTab === 'map') drawGrid(); }).observe($('gridScroll'));
}

// ================================================================= spr (tile) editor
let sprPreview = null;
const PX = 22;   // on-screen size of one texture pixel

function refreshSprUI() {
  if (!cart) return;
  curTile = clamp(curTile, 1, cart.tiles.length - 1);
  $('sprIndex').textContent = curTile;
  const list = $('sprTiles');
  list.innerHTML = '';
  for (let t = 1; t < cart.tiles.length; t++) {
    list.append(tileButton(t, t === curTile, (pick) => { curTile = pick; refreshSprUI(); }));
  }
  $('tileAdd').disabled = $('tileDup').disabled = cart.tiles.length >= MAX_TILES;
  drawFaces();
  drawPalette();
  updateSprPreview();
}

function buildFaces() {
  const wrap = $('faces');
  const labels = { top: 'Top', side: 'Sides', bottom: 'Bottom' };
  for (const f of FACES) {
    const box = document.createElement('div');
    box.className = 'face';
    box.innerHTML = `<div class="facehead"><span>${labels[f]}</span><button title="Copy this face to the other two">Copy to all</button></div>`;
    const cv = document.createElement('canvas');
    cv.className = 'facecanvas';
    cv.width = cv.height = 8 * PX;
    cv.dataset.face = f;
    box.append(cv);
    wrap.append(box);
    box.querySelector('button').onclick = () => {
      const tile = cart.tiles[curTile];
      for (const g of FACES) if (g !== f) tile[g] = [...tile[f]];
      tileEdited();
    };
    let drawing = false;
    const at = (e) => {
      const r = cv.getBoundingClientRect();
      const c = Math.floor((e.clientX - r.left) / r.width * 8), row = Math.floor((e.clientY - r.top) / r.height * 8);
      return c >= 0 && c < 8 && row >= 0 && row < 8 ? row * 8 + c : -1;
    };
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    cv.addEventListener('pointerdown', (e) => {
      const i = at(e);
      if (i < 0) return;
      const px = cart.tiles[curTile][f];
      if (e.button === 2 || tool === 'pick') {
        color = px[i]; drawPalette();
        if (tool === 'pick') setTool('pencil');   // back to drawing after a pick
        return;
      }
      if (tool === 'fill') { floodFill(px, i, color); tileEdited(); return; }
      drawing = true;
      cv.setPointerCapture(e.pointerId);
      if (px[i] !== color) { px[i] = color; tileEdited(); }
    });
    cv.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const i = at(e), px = cart.tiles[curTile][f];
      if (i >= 0 && px[i] !== color) { px[i] = color; tileEdited(); }
    });
    cv.addEventListener('pointerup', () => { drawing = false; });
  }
}

function floodFill(px, start, c) {
  const from = px[start];
  if (from === c) return;
  const stack = [start];
  while (stack.length) {
    const i = stack.pop();
    if (px[i] !== from) continue;
    px[i] = c;
    const x = i % 8, y = (i / 8) | 0;
    if (x > 0) stack.push(i - 1);
    if (x < 7) stack.push(i + 1);
    if (y > 0) stack.push(i - 8);
    if (y < 7) stack.push(i + 8);
  }
}

function drawFaces() {
  const tile = cart.tiles[curTile];
  const p = palette();
  document.querySelectorAll('.facecanvas').forEach((cv) => {
    const ctx = cv.getContext('2d');
    const px = tile[cv.dataset.face];
    for (let i = 0; i < 64; i++) {
      ctx.fillStyle = hexColor(p[px[i] & 31]);
      ctx.fillRect((i % 8) * PX, ((i / 8) | 0) * PX, PX, PX);
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.28)';
    ctx.beginPath();
    for (let k = 1; k < 8; k++) {
      ctx.moveTo(k * PX + 0.5, 0); ctx.lineTo(k * PX + 0.5, 8 * PX);
      ctx.moveTo(0, k * PX + 0.5); ctx.lineTo(8 * PX, k * PX + 0.5);
    }
    ctx.stroke();
  });
}

function drawPalette() {
  const wrap = $('sprPalette');
  const p = palette();
  if (!wrap.children.length) {
    for (let i = 0; i < 32; i++) {
      const b = document.createElement('button');
      b.className = 'swatch';
      b.title = 'Color ' + i;
      b.onclick = () => { color = i; drawPalette(); };
      wrap.append(b);
    }
  }
  [...wrap.children].forEach((b, i) => {
    b.style.background = hexColor(p[i]);
    b.classList.toggle('on', i === color);
  });
  $('colorIndex').textContent = color;
  $('colorHex').textContent = hexColor(p[color]);
}

function updateSprPreview() {
  if (activeTab !== 'tile') return;
  if (!sprPreview) sprPreview = new Preview($('sprPreview'), { autoSpin: true });
  sprPreview.setPalette(palette());
  sprPreview.setTiles(cart.tiles);
  sprPreview.setMap({ w: 1, h: 1, d: 1, data: new Uint8Array([curTile]), origin: [0, 0, 0] });
  sprPreview.dist = 3.2;
  sprPreview.render();
}

function tileEdited() {
  invalidateTile(curTile);
  drawFaces();
  const btn = $('sprTiles').children[curTile - 1];
  if (btn) btn.querySelector('canvas').getContext('2d').drawImage(faceCanvas(curTile), 0, 0);
  updateSprPreview();
  dirty();
}

function setTool(t) {
  tool = t;
  document.querySelectorAll('#tileTools button').forEach((o) => o.classList.toggle('on', o.dataset.tool === t));
}

function setupSprEditor() {
  buildFaces();
  document.querySelectorAll('#tileTools button').forEach((b) => { b.onclick = () => setTool(b.dataset.tool); });
  $('tileAdd').onclick = () => {
    if (cart.tiles.length >= MAX_TILES) return;
    cart.tiles.push(emptyTile(6));
    curTile = cart.tiles.length - 1;
    refreshSprUI(); dirty();
  };
  $('tileDup').onclick = () => {
    if (cart.tiles.length >= MAX_TILES) return;
    cart.tiles.push(JSON.parse(JSON.stringify(cart.tiles[curTile])));
    curTile = cart.tiles.length - 1;
    refreshSprUI(); dirty();
  };
  $('tileClear').onclick = () => {
    if (!confirm(`Clear tile ${curTile} to black?`)) return;
    cart.tiles[curTile] = emptyTile(0);
    tileEdited();
  };
}

// ================================================================= vox editor
// 8 x 8 x 8 models. The grid shows one layer (y) from above: +x right, +z (the model's front) down.
let voxPreview = null, voxQueued = false;
const voxThumbs = new Map();
const curV = () => voxModels[curVox];
const newVox = () => ({ name: '', pivot: [...DEFAULT_PIVOT], data: new Uint8Array(VOX * VOX * VOX) });
const VCELL = 36;   // grid canvas pixels per voxel

// Front view thumbnail: the first voxel seen looking at the model's front (+z side).
function voxThumb(i) {
  if (voxThumbs.has(i)) return voxThumbs.get(i);
  const c = document.createElement('canvas');
  c.width = c.height = VOX;
  const ctx = c.getContext('2d'), v = voxModels[i], p = palette();
  for (let y = 0; y < VOX; y++) for (let x = 0; x < VOX; x++) {
    for (let z = VOX - 1; z >= 0; z--) {
      const val = v.data[voxIndex(x, y, z)];
      if (!val) continue;
      ctx.fillStyle = hexColor(p[val - 1]);
      ctx.fillRect(VOX - 1 - x, VOX - 1 - y, 1, 1);   // seen from the front, +x is on the left
      break;
    }
  }
  voxThumbs.set(i, c);
  return c;
}

function voxButton(i) {
  const b = document.createElement('button');
  b.className = 'tilebtn voxthumb' + (i === curVox ? ' on' : '');
  b.title = `Vox ${i}` + (voxModels[i].name ? ` (${voxModels[i].name})` : '');
  const c = document.createElement('canvas');
  c.width = c.height = VOX;
  c.getContext('2d').drawImage(voxThumb(i), 0, 0);
  const sp = document.createElement('span');
  sp.textContent = i;
  b.append(c, sp);
  b.onclick = () => { stopPlayback(); curVox = i; refreshVoxUI(); };
  return b;
}

function refreshVoxUI() {
  if (!cart) return;
  curVox = clamp(curVox, 0, voxModels.length - 1);
  const v = curV();
  const list = $('voxList');
  list.innerHTML = '';
  voxModels.forEach((_, i) => list.append(voxButton(i)));
  $('voxIndex').textContent = curVox;
  $('voxName').value = v.name;
  [$('pX').value, $('pY').value, $('pZ').value] = v.pivot;
  $('voxLayer').textContent = voxLayer;
  $('voxAdd').disabled = $('voxDup').disabled = voxModels.length >= MAX_VOX;
  $('voxDelete').disabled = voxModels.length <= 1;
  if (!playTimer) {
    if ($('playFrom').value === '') $('playFrom').value = curVox;
    if ($('playTo').value === '') $('playTo').value = Math.min(voxModels.length - 1, curVox + 3);
  }
  drawVoxPalette();
  drawVoxGrid();
  queueVoxPreview();
}

function drawVoxGrid() {
  const cv = $('voxGrid'), v = curV(), p = palette();
  const size = VOX * VCELL;
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 0, size, size);
  const onion = $('voxOnion').checked && curVox > 0 ? voxModels[curVox - 1] : null;
  for (let z = 0; z < VOX; z++) for (let x = 0; x < VOX; x++) {
    const val = v.data[voxIndex(x, voxLayer, z)];
    const px = x * VCELL, py = z * VCELL;
    if (val) {
      ctx.fillStyle = hexColor(p[val - 1]);
      ctx.fillRect(px, py, VCELL, VCELL);
    } else if ($('voxGhost').checked && voxLayer > 0 && v.data[voxIndex(x, voxLayer - 1, z)]) {
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = hexColor(p[v.data[voxIndex(x, voxLayer - 1, z)] - 1]);
      ctx.fillRect(px, py, VCELL, VCELL);
      ctx.globalAlpha = 1;
    }
    if (onion && onion.data[voxIndex(x, voxLayer, z)]) {
      // the previous model's voxel on this layer: a dashed square
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(px + 5.5, py + 5.5, VCELL - 11, VCELL - 11);
      ctx.setLineDash([]);
    }
  }
  ctx.strokeStyle = 'rgba(141,147,173,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let k = 0; k <= VOX; k++) {
    ctx.moveTo(k * VCELL + 0.5, 0); ctx.lineTo(k * VCELL + 0.5, size);
    ctx.moveTo(0, k * VCELL + 0.5); ctx.lineTo(size, k * VCELL + 0.5);
  }
  ctx.stroke();
  // the pivot's x/z, as a small cross
  const pv = v.pivot;
  ctx.strokeStyle = '#ff004d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pv[0] * VCELL - 6, pv[2] * VCELL); ctx.lineTo(pv[0] * VCELL + 6, pv[2] * VCELL);
  ctx.moveTo(pv[0] * VCELL, pv[2] * VCELL - 6); ctx.lineTo(pv[0] * VCELL, pv[2] * VCELL + 6);
  ctx.stroke();
}

function queueVoxPreview() {
  if (voxQueued) return;
  voxQueued = true;
  requestAnimationFrame(() => {
    voxQueued = false;
    if (activeTab !== 'vox') return;
    showVoxInPreview(curVox, true);
  });
}

function showVoxInPreview(i, editing) {
  if (!voxPreview) {
    voxPreview = new Preview($('voxPreview'));
    voxPreview.onClick = voxPreviewClick;
  }
  voxPreview.setPalette(palette());
  const onion = editing && $('voxOnion').checked && i > 0 ? voxModels[i - 1] : null;
  voxPreview.setVox(voxModels[i], { ghost: onion, layer: editing ? voxLayer : null });
  voxPreview.render();
}

function setVoxLayer(y) {
  voxLayer = clamp(y, 0, VOX - 1);
  $('voxLayer').textContent = voxLayer;
  drawVoxGrid();
  queueVoxPreview();
}

function voxEdited() {
  voxThumbs.delete(curVox);
  const btn = $('voxList').children[curVox];
  if (btn) {
    const ctx = btn.querySelector('canvas').getContext('2d');
    ctx.clearRect(0, 0, VOX, VOX);
    ctx.drawImage(voxThumb(curVox), 0, 0);
  }
  drawVoxGrid();
  queueVoxPreview();
  dirty();
}

// Set one voxel (val: 0 = empty, else color + 1), plus its mirror across x when mirroring.
function voxPut(x, y, z, val) {
  const v = curV();
  let changed = false;
  for (const xx of $('voxMirror').checked ? [x, VOX - 1 - x] : [x]) {
    if (xx < 0 || y < 0 || z < 0 || xx >= VOX || y >= VOX || z >= VOX) continue;
    const i = voxIndex(xx, y, z);
    if (v.data[i] !== val) { v.data[i] = val; changed = true; }
  }
  return changed;
}

function voxFill(x, z, val) {
  const v = curV(), from = v.data[voxIndex(x, voxLayer, z)];
  if (from === val) return false;
  const stack = [[x, z]];
  while (stack.length) {
    const [cx, cz] = stack.pop();
    if (cx < 0 || cz < 0 || cx >= VOX || cz >= VOX || v.data[voxIndex(cx, voxLayer, cz)] !== from) continue;
    voxPut(cx, voxLayer, cz, val);
    stack.push([cx + 1, cz], [cx - 1, cz], [cx, cz + 1], [cx, cz - 1]);
  }
  return true;
}

function pickVoxColor(val) {
  if (!val) return;   // nothing there to pick
  voxColor = val - 1;
  setVoxTool('pencil');
  drawVoxPalette();
}

function drawVoxPalette() {
  const wrap = $('voxPalette'), p = palette();
  if (!wrap.children.length) {
    for (let i = 0; i < 32; i++) {
      const b = document.createElement('button');
      b.className = 'swatch';
      b.title = 'Color ' + i;
      // choosing a color while erasing switches back to the pencil
      b.onclick = () => { voxColor = i; if (voxTool === 'erase' || voxTool === 'pick') setVoxTool('pencil'); drawVoxPalette(); };
      wrap.append(b);
    }
  }
  [...wrap.children].forEach((b, k) => {
    b.style.background = hexColor(p[k]);
    b.classList.toggle('on', k === voxColor);
  });
  $('voxColorLabel').innerHTML = `Color <b>${voxColor}</b> <code>${hexColor(p[voxColor])}</code>`;
}

function setVoxTool(t) {
  voxTool = t;
  document.querySelectorAll('#voxTools button').forEach((o) => o.classList.toggle('on', o.dataset.tool === t));
}

// Click in the 3D preview: add a voxel on the clicked face, remove it (right-click or eraser),
// or pick its color.
function voxPreviewClick(e, hit) {
  if (!hit) return;
  const v = curV();
  const [x, y, z] = hit.cell;
  if (voxTool === 'pick') { if (!hit.floor) pickVoxColor(v.data[voxIndex(x, y, z)]); return; }
  const erase = e.button === 2 || voxTool === 'erase';
  let changed;
  if (erase) changed = !hit.floor && voxPut(x, y, z, 0);
  else changed = voxPut(x + hit.normal[0], y + hit.normal[1], z + hit.normal[2], voxColor + 1);
  if (changed) voxEdited();
}

// ---- animation preview: loop models from..to in the 3D view
let playTimer = 0;
function stopPlayback() {
  if (!playTimer) return;
  clearInterval(playTimer);
  playTimer = 0;
  $('playBtn').textContent = '▶ Play';
  $('playBtn').classList.remove('on');
  [...$('voxList').children].forEach((el) => el.classList.remove('playing'));
  if (activeTab === 'vox') queueVoxPreview();
}
function startPlayback() {
  const last = voxModels.length - 1;
  const a = clamp(+$('playFrom').value | 0, 0, last), b = clamp(+$('playTo').value | 0, 0, last);
  const fps = clamp(+$('playFps').value || 6, 1, 60);
  const lo = Math.min(a, b), hi = Math.max(a, b);
  let f = lo;
  showVoxInPreview(f, false);
  playTimer = setInterval(() => {
    f = f >= hi ? lo : f + 1;
    showVoxInPreview(f, false);
    [...$('voxList').children].forEach((el, i) => el.classList.toggle('playing', i === f));
  }, 1000 / fps);
  $('playBtn').textContent = '■ Stop';
  $('playBtn').classList.add('on');
}

function setupVoxEditor() {
  document.querySelectorAll('#voxTools button').forEach((b) => { b.onclick = () => setVoxTool(b.dataset.tool); });
  $('voxUp').onclick = () => setVoxLayer(voxLayer + 1);
  $('voxDown').onclick = () => setVoxLayer(voxLayer - 1);
  $('voxGhost').onchange = drawVoxGrid;
  $('voxOnion').onchange = () => { drawVoxGrid(); queueVoxPreview(); };
  $('voxName').oninput = (e) => { curV().name = e.target.value; dirty(); };
  for (const [id, k] of [['pX', 0], ['pY', 1], ['pZ', 2]]) {
    $(id).oninput = (e) => { curV().pivot[k] = +e.target.value || 0; drawVoxGrid(); queueVoxPreview(); dirty(); };
  }
  $('voxAdd').onclick = () => {
    if (voxModels.length >= MAX_VOX) return;
    stopPlayback();
    voxModels.push(newVox());
    curVox = voxModels.length - 1;
    refreshVoxUI(); dirty();
  };
  $('voxDup').onclick = () => {
    if (voxModels.length >= MAX_VOX) return;
    stopPlayback();
    const v = curV();
    voxModels.push({ name: v.name, pivot: [...v.pivot], data: new Uint8Array(v.data) });
    curVox = voxModels.length - 1;
    refreshVoxUI(); dirty();
  };
  $('voxClear').onclick = () => {
    if (!confirm(`Clear vox ${curVox}?`)) return;
    curV().data.fill(0);
    voxEdited();
  };
  $('voxDelete').onclick = () => {
    if (voxModels.length <= 1 || !confirm(`Delete vox ${curVox}? Models after it will be renumbered.`)) return;
    stopPlayback();
    voxModels.splice(curVox, 1);
    voxThumbs.clear();
    curVox = Math.max(0, curVox - 1);
    refreshVoxUI(); dirty();
  };
  $('playBtn').onclick = () => (playTimer ? stopPlayback() : startPlayback());

  // painting on the layer grid
  const cv = $('voxGrid');
  let painting = null;   // value being painted while dragging, or null
  const cellAt = (e) => {
    const r = cv.getBoundingClientRect();
    const x = Math.floor((e.clientX - r.left) / r.width * VOX), z = Math.floor((e.clientY - r.top) / r.height * VOX);
    return x >= 0 && z >= 0 && x < VOX && z < VOX ? [x, z] : null;
  };
  cv.addEventListener('contextmenu', (e) => e.preventDefault());
  cv.addEventListener('pointerdown', (e) => {
    const c = cellAt(e);
    if (!c) return;
    const val = e.button === 2 || voxTool === 'erase' ? 0 : voxColor + 1;
    if (voxTool === 'pick') { pickVoxColor(curV().data[voxIndex(c[0], voxLayer, c[1])]); return; }
    if (voxTool === 'fill') { if (voxFill(c[0], c[1], val)) voxEdited(); return; }
    painting = val;
    cv.setPointerCapture(e.pointerId);
    if (voxPut(c[0], voxLayer, c[1], val)) voxEdited();
  });
  cv.addEventListener('pointermove', (e) => {
    if (painting === null) return;
    const c = cellAt(e);
    if (c && voxPut(c[0], voxLayer, c[1], painting)) voxEdited();
  });
  cv.addEventListener('pointerup', () => { painting = null; });
}

// ================================================================= scales (Sfx tab snapping)
// Semitones above the root. Snapping moves a drawn pitch to the nearest note in the scale.
const SCALES = {
  'minor pentatonic': [0, 3, 5, 7, 10],
  'major pentatonic': [0, 2, 4, 7, 9],
  'major': [0, 2, 4, 5, 7, 9, 11],
  'minor': [0, 2, 3, 5, 7, 8, 10],
  'harmonic minor': [0, 2, 3, 5, 7, 8, 11],
  'dorian': [0, 2, 3, 5, 7, 9, 10],
  'mixolydian': [0, 2, 4, 5, 7, 9, 10],
  'blues': [0, 3, 5, 6, 7, 10],
  'whole tone': [0, 2, 4, 6, 8, 10],
};
const inScale = (pitch) => SCALES[scale.type].includes((((pitch - scale.root) % 12) + 12) % 12);
function snapPitch(pitch) {
  if (!scale.snap) return pitch;
  for (let d = 0; d < 12; d++) {             // nearest scale note; ties go down
    if (pitch - d >= 0 && inScale(pitch - d)) return pitch - d;
    if (pitch + d <= 63 && inScale(pitch + d)) return pitch + d;
  }
  return pitch;
}

function setupScale() {
  NOTE_NAMES.forEach((n, i) => $('scaleRoot').append(new Option(n, i)));
  Object.keys(SCALES).forEach((k) => $('scaleType').append(new Option(k, k)));
  const changed = () => { drawSfx(); dirty(); };
  $('snapOn').onchange = (e) => { scale.snap = e.target.checked; showScale(); changed(); };
  $('scaleRoot').onchange = (e) => { scale.root = +e.target.value; changed(); };
  $('scaleType').onchange = (e) => { scale.type = e.target.value; changed(); };
  $('snapAll').onclick = () => {
    const was = scale.snap;
    scale.snap = true;
    curS().notes.forEach((n) => { n.pitch = snapPitch(n.pitch); });
    scale.snap = was;
    sfxEdited();
    log(`snapped sfx ${curSfx} to ${NOTE_NAMES[scale.root]} ${scale.type}`, 'info');
  };
}

function showScale() {
  $('snapOn').checked = scale.snap;
  $('scaleRoot').value = scale.root;
  $('scaleType').value = scale.type;
  $('scaleRoot').disabled = $('scaleType').disabled = !scale.snap;
}

// ================================================================= sfx editor
// PICO-8 style: 64 sounds of 32 notes. The brush (wave, volume, effect) is applied when drawing
// pitches; the volume graph and the wave/effect rows change just that part of a note.
const WAVE_COLORS = [12, 9, 8, 14, 11, 13, 6, 10];
const PW = 448, PH = 256, COLW = PW / NOTES;   // pitch canvas size, column width
const ideAudio = new SfxPlayer();
let sfxAnim = 0;

const curS = () => sounds[curSfx];

// Saved as strings; trailing empty slots are dropped and empty ones in between become null.
function trimSounds() {
  const out = sounds.map((s) => (isSilent(s) && s.loopEnd === 0 && s.speed === 16 ? null : encodeSfx(s)));
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}

function refreshSfxUI() {
  if (!cart) return;
  const list = $('sfxList');
  if (!list.children.length) {
    for (let i = 0; i < MAX_SFX; i++) {
      const b = document.createElement('button');
      b.textContent = i;
      b.onclick = () => { stopSfxPreview(); curSfx = i; refreshSfxUI(); };
      list.append(b);
    }
  }
  [...list.children].forEach((b, i) => {
    b.classList.toggle('on', i === curSfx);
    b.classList.toggle('has', !isSilent(sounds[i]));
  });
  const s = curS();
  $('sfxIndex').textContent = curSfx;
  $('sfxSpeed').value = s.speed;
  $('sfxLoopA').value = s.loopStart;
  $('sfxLoopB').value = s.loopEnd;
  $('sfxString').value = encodeSfx(s);
  showScale();
  drawBrush();
  drawSfx();
}

function drawBrush() {
  const p = palette();
  const fill = (id, labels, key, swatch) => {
    const wrap = $(id);
    if (!wrap.children.length) {
      labels.forEach((label, i) => {
        const b = document.createElement('button');
        b.innerHTML = (swatch ? `<i style="background:${hexColor(p[WAVE_COLORS[i]])}"></i>` : '') + label;
        b.onclick = () => { brush[key] = id === 'brushVol' ? i + 1 : i; drawBrush(); };
        wrap.append(b);
      });
    }
    [...wrap.children].forEach((b, i) => b.classList.toggle('on', (id === 'brushVol' ? i + 1 : i) === brush[key]));
  };
  fill('brushWave', WAVES.map((w, i) => `${i} ${w}`), 'wave', true);
  fill('brushVol', ['1', '2', '3', '4', '5', '6', '7'], 'vol', false);
  fill('brushFx', EFFECTS.map((f, i) => `${i} ${f}`), 'fx', false);
}

function drawSfx(playing = -1) {
  const s = curS(), p = palette();
  // pitch graph
  let ctx = $('sfxPitch').getContext('2d');
  ctx.fillStyle = '#0a0f1d'; ctx.fillRect(0, 0, PW, PH);
  if (scale.snap) {                             // the scale's notes as faint rows, the root brighter
    for (let pitch = 0; pitch < 64; pitch++) {
      if (!inScale(pitch)) continue;
      ctx.fillStyle = (pitch - scale.root) % 12 === 0 ? 'rgba(41,173,255,0.22)' : 'rgba(41,173,255,0.09)';
      ctx.fillRect(0, PH - (pitch + 1) * 4, PW, 4);
    }
  }
  for (let oct = 1; oct < 6; oct++) {           // a faint line at each C
    ctx.fillStyle = 'rgba(141,147,173,0.18)';
    ctx.fillRect(0, PH - oct * 12 * 4, PW, 1);
  }
  if (s.loopEnd > s.loopStart) {
    ctx.fillStyle = 'rgba(41,173,255,0.10)';
    ctx.fillRect(s.loopStart * COLW, 0, (s.loopEnd - s.loopStart) * COLW, PH);
  }
  s.notes.forEach((n, i) => {
    const x = i * COLW;
    if (i === playing) { ctx.fillStyle = 'rgba(255,236,39,0.18)'; ctx.fillRect(x, 0, COLW, PH); }
    if (!n.vol) return;
    const y = PH - (n.pitch + 1) * 4;
    ctx.fillStyle = hexColor(p[WAVE_COLORS[n.wave]]);
    ctx.globalAlpha = 0.35; ctx.fillRect(x + 2, y, COLW - 4, PH - y); ctx.globalAlpha = 1;
    ctx.fillRect(x + 1, y, COLW - 2, 4);
  });
  // volume graph: 7 steps
  ctx = $('sfxVol').getContext('2d');
  ctx.fillStyle = '#0a0f1d'; ctx.fillRect(0, 0, PW, 64);
  s.notes.forEach((n, i) => {
    if (i === playing) { ctx.fillStyle = 'rgba(255,236,39,0.18)'; ctx.fillRect(i * COLW, 0, COLW, 64); }
    ctx.fillStyle = hexColor(p[WAVE_COLORS[n.wave]]);
    for (let v = 0; v < n.vol; v++) ctx.fillRect(i * COLW + 2, 64 - (v + 1) * 9, COLW - 4, 7);
  });
  // wave and effect numbers
  ctx = $('sfxWF').getContext('2d');
  ctx.fillStyle = '#0a0f1d'; ctx.fillRect(0, 0, PW, 36);
  ctx.font = '11px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  s.notes.forEach((n, i) => {
    const cx = i * COLW + COLW / 2;
    ctx.fillStyle = n.vol ? hexColor(p[WAVE_COLORS[n.wave]]) : '#3a4466';
    ctx.fillText(n.wave, cx, 14);
    ctx.fillStyle = n.fx ? '#fff1e8' : '#3a4466';
    ctx.fillText(n.fx, cx, 31);
  });
  ctx.fillStyle = 'rgba(141,147,173,0.25)'; ctx.fillRect(0, 18, PW, 1);
}

function sfxEdited() {
  $('sfxString').value = encodeSfx(curS());
  const b = $('sfxList').children[curSfx];
  if (b) b.classList.toggle('has', !isSilent(curS()));
  drawSfx();
  dirty();
}

// Drag handling shared by the three graphs: fn(noteIndex, yFraction 0 top .. 1 bottom, event)
function graphDrag(canvas, fn) {
  let active = false;
  const at = (e) => {
    const r = canvas.getBoundingClientRect();
    const i = Math.floor((e.clientX - r.left) / r.width * NOTES);
    const f = (e.clientY - r.top) / r.height;
    if (i >= 0 && i < NOTES) fn(i, Math.max(0, Math.min(0.999, f)), e);
  };
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => { active = true; canvas.setPointerCapture(e.pointerId); at(e); });
  canvas.addEventListener('pointermove', (e) => {
    if (active) at(e);
    else if (canvas.id === 'sfxPitch') {
      const r = canvas.getBoundingClientRect();
      const pitch = Math.floor((1 - (e.clientY - r.top) / r.height) * 64);
      $('sfxNote').textContent = pitch >= 0 && pitch < 64 ? noteName(snapPitch(pitch)) : '';
    }
  });
  canvas.addEventListener('pointerup', () => { active = false; });
  canvas.addEventListener('pointerleave', () => { if (canvas.id === 'sfxPitch') $('sfxNote').textContent = ''; });
}

function stopSfxPreview() {
  ideAudio.stop();
  cancelAnimationFrame(sfxAnim);
  sfxAnim = 0;
  $('sfxPlay').textContent = '▶ Play';
  $('sfxPlay').classList.remove('on');
  if (cart) drawSfx();
}

function toggleSfxPreview() {
  if (sfxAnim) { stopSfxPreview(); return; }
  ideAudio.unlock();
  const go = () => {
    if (ideAudio.play(encodeSfx(curS()), 0) < 0) { log('That sound is silent: draw some notes first.', 'info'); return; }
    $('sfxPlay').textContent = '■ Stop';
    $('sfxPlay').classList.add('on');
    const frame = () => {
      const n = ideAudio.noteAt(0);
      if (n < 0) { stopSfxPreview(); return; }
      drawSfx(n);
      sfxAnim = requestAnimationFrame(frame);
    };
    sfxAnim = requestAnimationFrame(frame);
  };
  // the audio context may take a moment to start after the first click
  if (ideAudio.ready) go(); else setTimeout(go, 60);
}

function setupSfxEditor() {
  setupScale();
  $('sfxPlay').onclick = toggleSfxPreview;
  $('sfxSpeed').oninput = (e) => { curS().speed = clamp(+e.target.value | 0, 1, 255); sfxEdited(); };
  $('sfxLoopA').oninput = (e) => { curS().loopStart = clamp(+e.target.value | 0, 0, NOTES); sfxEdited(); };
  $('sfxLoopB').oninput = (e) => { curS().loopEnd = clamp(+e.target.value | 0, 0, NOTES); sfxEdited(); };
  $('sfxClear').onclick = () => {
    if (!confirm(`Clear sfx ${curSfx}?`)) return;
    stopSfxPreview();
    sounds[curSfx] = emptySfx();
    refreshSfxUI(); dirty();
  };
  $('sfxCopy').onclick = async () => {
    const str = encodeSfx(curS());
    try { await navigator.clipboard.writeText(str); log(`copied sfx ${curSfx} (${str.length} characters)`, 'info'); }
    catch { $('sfxString').select(); log('Select the sound string and copy it.', 'info'); }
  };
  $('sfxString').addEventListener('focus', (e) => e.target.select());
  $('sfxString').addEventListener('input', (e) => {
    const s = decodeSfx(e.target.value);
    if (!s) return;
    sounds[curSfx] = s;
    refreshSfxUI(); dirty();
    log(`loaded a sound string into sfx ${curSfx}`, 'info');
  });
  graphDrag($('sfxPitch'), (i, f, e) => {
    const n = curS().notes[i];
    if (e.buttons === 2 || e.button === 2) n.vol = 0;
    else Object.assign(n, { pitch: snapPitch(clamp(Math.floor((1 - f) * 64), 0, 63)), wave: brush.wave, vol: brush.vol, fx: brush.fx });
    sfxEdited();
  });
  graphDrag($('sfxVol'), (i, f) => { curS().notes[i].vol = clamp(Math.round((1 - f) * 7.5), 0, 7); sfxEdited(); });
  graphDrag($('sfxWF'), (i, f) => {
    const n = curS().notes[i];
    if (f < 0.5) n.wave = brush.wave; else n.fx = brush.fx;
    sfxEdited();
  });
}

// ================================================================= music editor
// 64 patterns; each plays up to 4 sounds at once. Playing follows the song through the patterns.
let musicAnim = 0;
const curP = () => patterns[curPat];

function trimPatterns() {
  const out = patterns.map((p) => (patternEmpty(p) && !p.loopStart && !p.loopBack && !p.stop ? null : encodePattern(p)));
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}

function refreshMusicUI(playing = null) {
  if (!cart) return;
  const list = $('patList');
  if (!list.children.length) {
    for (let i = 0; i < MAX_PATTERNS; i++) {
      const b = document.createElement('button');
      b.textContent = i;
      b.onclick = () => { curPat = i; refreshMusicUI(); };
      list.append(b);
    }
  }
  [...list.children].forEach((b, i) => {
    b.classList.toggle('on', i === curPat);
    b.classList.toggle('has', !patternEmpty(patterns[i]));
    b.classList.toggle('playing', !!playing && i === playing.pattern);
  });
  const p = curP();
  $('patIndex').textContent = curPat;
  $('patLoopStart').checked = p.loopStart;
  $('patLoopBack').checked = p.loopBack;
  $('patStop').checked = p.stop;
  const secs = patternEmpty(p) ? 0 : patternSeconds(p, sounds);
  $('patLen').textContent = secs ? `Length: ${secs.toFixed(2)} s` : 'Empty pattern: pick a sound for a channel.';
  drawChannels(playing && playing.pattern === curPat ? playing.frac : -1);
}

function drawChannels(frac = -1) {
  const wrap = $('channels'), p = curP(), pal = palette();
  if (!wrap.children.length) {
    for (let c = 0; c < 4; c++) {
      const card = document.createElement('div');
      card.className = 'chan';
      card.innerHTML = `
        <div class="chanhead"><label class="check"><input type="checkbox"> Ch ${c + 1}</label>
          <span class="chanpick"><button aria-label="Previous sound">−</button><input type="number" min="0" max="63" aria-label="Sound"><button aria-label="Next sound">+</button></span></div>
        <canvas width="160" height="64" title="Click to edit this sound"></canvas>
        <button class="edit">Edit sound</button>`;
      const [check, minus, num, plus, cv, edit] = ['input[type=checkbox]', 'button[aria-label="Previous sound"]', 'input[type=number]', 'button[aria-label="Next sound"]', 'canvas', '.edit'].map((q) => card.querySelector(q));
      const setCh = (v) => { curP().ch[c] = v; musicEdited(); };
      check.onchange = () => setCh(check.checked ? clamp(+num.value | 0, 0, 63) : EMPTY_CH);
      num.oninput = () => { if (curP().ch[c] < MAX_SFX || num.value !== '') setCh(clamp(+num.value | 0, 0, 63)); };
      minus.onclick = () => setCh(clamp((curP().ch[c] < MAX_SFX ? curP().ch[c] : +num.value | 0) - 1, 0, 63));
      plus.onclick = () => setCh(clamp((curP().ch[c] < MAX_SFX ? curP().ch[c] : (+num.value | 0) - 1) + 1, 0, 63));
      const openSfx = () => { const v = curP().ch[c]; if (v < MAX_SFX) { curSfx = v; showTab('sfx'); } };
      cv.onclick = openSfx;
      edit.onclick = openSfx;
      wrap.append(card);
    }
  }
  [...wrap.children].forEach((card, c) => {
    const v = p.ch[c], on = v < MAX_SFX;
    card.classList.toggle('off', !on);
    card.querySelector('input[type=checkbox]').checked = on;
    const num = card.querySelector('input[type=number]');
    if (on) num.value = v; else if (num.value === '') num.value = c;
    card.querySelector('.edit').disabled = !on;
    // a small pitch view of the sound, with a cursor while playing
    const ctx = card.querySelector('canvas').getContext('2d');
    ctx.fillStyle = '#0a0f1d'; ctx.fillRect(0, 0, 160, 64);
    if (!on) return;
    const s = sounds[v], cw = 160 / NOTES;
    if (s.loopEnd > s.loopStart) { ctx.fillStyle = 'rgba(41,173,255,0.12)'; ctx.fillRect(s.loopStart * cw, 0, (s.loopEnd - s.loopStart) * cw, 64); }
    s.notes.forEach((n, i) => {
      if (!n.vol) return;
      ctx.fillStyle = hexColor(pal[WAVE_COLORS[n.wave]]);
      const y = 64 - (n.pitch + 1);
      ctx.fillRect(i * cw + 0.5, y, cw - 1, 2);
      ctx.globalAlpha = 0.3; ctx.fillRect(i * cw + 0.5, y + 2, cw - 1, 64 - y); ctx.globalAlpha = 1;
    });
    if (frac >= 0) {
      // where this channel's sound is: it repeats if it loops, otherwise plays once
      const secs = patternSeconds(p, sounds), t = frac * secs, per = noteSeconds(s);
      let note = Math.floor(t / per);
      if (s.loopEnd > s.loopStart && note >= s.loopEnd) note = s.loopStart + ((note - s.loopStart) % (s.loopEnd - s.loopStart));
      if (note < NOTES) { ctx.fillStyle = 'rgba(255,236,39,0.35)'; ctx.fillRect(note * cw, 0, cw, 64); }
    }
  });
}

function musicEdited() {
  refreshMusicUI();
  dirty();
}

function stopMusicPreview() {
  ideAudio.musicStop();
  cancelAnimationFrame(musicAnim);
  musicAnim = 0;
  $('musPlay').textContent = '▶ Play';
  $('musPlay').classList.remove('on');
  if (cart) refreshMusicUI();
}

function toggleMusicPreview() {
  if (musicAnim) { stopMusicPreview(); return; }
  if (patternEmpty(curP())) { log('This pattern is empty: pick a sound for at least one channel.', 'info'); return; }
  ideAudio.unlock();
  ideAudio.music(() => patterns, () => sounds, curPat);
  $('musPlay').textContent = '■ Stop';
  $('musPlay').classList.add('on');
  let started = false;
  const frame = () => {
    const pos = ideAudio.musicPosition();
    if (pos) {
      started = true;
      if (pos.pattern !== curPat) curPat = pos.pattern;   // follow the song
      refreshMusicUI(pos);
    } else if (started && !ideAudio.song) { stopMusicPreview(); return; }
    musicAnim = requestAnimationFrame(frame);
  };
  musicAnim = requestAnimationFrame(frame);
}

function setupMusicEditor() {
  $('musPlay').onclick = toggleMusicPreview;
  $('patLoopStart').onchange = (e) => { curP().loopStart = e.target.checked; musicEdited(); };
  $('patLoopBack').onchange = (e) => { curP().loopBack = e.target.checked; musicEdited(); };
  $('patStop').onchange = (e) => { curP().stop = e.target.checked; musicEdited(); };
  $('patClear').onclick = () => {
    if (!confirm(`Clear pattern ${curPat}?`)) return;
    patterns[curPat] = emptyPattern();
    musicEdited();
  };
}

// ================================================================= info
function renderInfo() {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  $('info').innerHTML = API_SECTIONS.map((s) => `
    <h2>${esc(s.title)}</h2>
    ${s.intro ? `<p>${esc(s.intro)}</p>` : ''}
    ${s.items.length ? `<table>${s.items.map(([sig, desc]) => `<tr><td><code>${esc(sig)}</code></td><td>${esc(desc)}</td></tr>`).join('')}</table>` : ''}
    ${s.code ? `<pre>${esc(s.code)}</pre>` : ''}`).join('');
}

// ================================================================= top bar + keys
function download(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function setupTopBar() {
  $('btnRun').onclick = run;
  $('btnStop').onclick = () => stop();
  $('cartName').oninput = (e) => { cart.name = e.target.value; dirty(); showSaveData(); };
  $('btnNew').onclick = () => {
    if (!confirm('Start a new, empty cart? The current cart in this browser will be replaced (Save it first if you want to keep it).')) return;
    stop(); loadCart(emptyCart(), 'untitled'); dirty();
  };
  $('btnDemo').onclick = () => {
    if (!confirm('Load the demo cart? The current cart in this browser will be replaced.')) return;
    stop(); loadCart(demoCart(), 'demo'); dirty();
  };
  $('btnSave').onclick = () => {
    const blob = new Blob([JSON.stringify(serialize())], { type: 'application/json' });
    download(blob, (cart.name || 'cart').replace(/[^\w.-]+/g, '_') + '.b3d.json');
  };
  $('btnExport').onclick = async () => {
    const btn = $('btnExport');
    btn.disabled = true;
    try {
      const { filename, blob } = await exportGame(serialize());
      download(blob, filename);
      log(`exported ${filename} (${Math.round(blob.size / 1024)} KB): index.html + game .js, no other files needed`, 'info');
    } catch (err) {
      log('Export failed: ' + err.message, 'error');
    } finally { btn.disabled = false; }
  };
  $('btnOpen').onclick = () => $('fileInput').click();
  $('fileInput').onchange = async (e) => {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const c = JSON.parse(await f.text());
      stop();
      loadCart(c, c.name || f.name.replace(/\.b3d\.json$|\.json$/i, ''));
      dirty();
      log(`opened ${f.name}`, 'info');
    } catch (err) { log('Could not open that file: ' + err.message, 'error'); }
  };
  document.querySelectorAll('.tabs button').forEach((b) => { b.onclick = () => showTab(b.dataset.tab); });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); run(); return; }
    const typing = e.target.closest('input, textarea, select, .CodeMirror');
    if (activeTab === 'map' && !typing) {
      if (e.key === '[') setLayer(layer - 1);
      if (e.key === ']') setLayer(layer + 1);
    }
    if (activeTab === 'sfx' && !typing && e.code === 'Space') { e.preventDefault(); toggleSfxPreview(); }
    if (activeTab === 'music' && !typing && e.code === 'Space') { e.preventDefault(); toggleMusicPreview(); }
    if (activeTab === 'vox' && !typing) {
      if (e.key === '[') setVoxLayer(voxLayer - 1);
      if (e.key === ']') setVoxLayer(voxLayer + 1);
    }
  });
}

// ================================================================= save data
// Games store JSON with save(); it lives in this browser under the game's name.
const saveKeyFor = (name) => 'blocky3d.save.' + (String(name || 'game').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'game');

function showSaveData() {
  let json = null;
  try { json = localStorage.getItem(saveKeyFor(cart.name)); } catch { /* storage blocked */ }
  $('saveData').textContent = json === null ? 'none' : json.length > 60 ? json.slice(0, 57) + '...' : json;
  $('saveData').title = json === null ? '' : json;
  $('saveClear').disabled = json === null;
}

function setupSaveData() {
  $('saveClear').onclick = () => {
    if (!confirm(`Clear the save data for "${cart.name}"?`)) return;
    try { localStorage.removeItem(saveKeyFor(cart.name)); } catch { /* storage blocked */ }
    showSaveData();
  };
}

// Leaving the phone layout while on the game tab: go back to the code.
MOBILE.addEventListener('change', () => {
  if (!MOBILE.matches && activeTab === 'game') showTab('code');
  if (activeTab === 'map') drawGrid();
});

// ================================================================= boot
setupCode();
setupTopBar();
setupMapEditor();
setupSprEditor();
setupVoxEditor();
setupSfxEditor();
setupMusicEditor();
setupSaveData();
renderInfo();
document.body.dataset.tab = activeTab;
let saved = null;
try { saved = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch { saved = null; }
loadCart(saved || demoCart(), saved ? saved.name : 'demo');
showSaveData();
log('blocky3D ready. Press Run or Ctrl+Enter.', 'info');
