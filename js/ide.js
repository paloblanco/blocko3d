// blocky3D IDE: code editor, map editor, tile (spr) editor, API info and the run pane.
import { DEFAULT_PALETTE, MAX_TILES, FACES, hexColor, emptyTile, bytesToB64, b64ToBytes } from './core.js';
import { demoCart, emptyCart, normalizeCart, CART_VERSION } from './cart.js';
import { Preview } from './preview.js';
import { API_SECTIONS } from './apidocs.js';

const $ = (id) => document.getElementById(id);
const STORE = 'blocky3d.cart.v1';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ================================================================= state
let cart = null;   // { name, code, palette?, tiles }
let maps = [];     // editable maps: { name, w, h, d, origin, data: Uint8Array }
let curMap = 0, layer = 0, mapTile = 1;
let curTile = 1, color = 7, tool = 'pencil';
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
  if (cart.tiles.length < 2) cart.tiles.push(emptyTile(6));
  curMap = 0; layer = 0;
  curTile = 1; mapTile = 1;
  thumbs.clear();
  $('cartName').value = cart.name;
  setCode(cart.code);
  refreshMapUI();
  refreshSprUI();
}

function serialize() {
  const out = {
    version: CART_VERSION,
    name: cart.name,
    code: getCode(),
    tiles: cart.tiles,
    maps: maps.map((m) => ({ name: m.name, w: m.w, h: m.h, d: m.d, origin: m.origin, data: bytesToB64(m.data) })),
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
  $('placeholder').hidden = true;
  $('screen').append(frame);
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
});

// ================================================================= tabs
function showTab(name) {
  activeTab = name;
  document.querySelectorAll('.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === name));
  document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('on', p.id === 'tab-' + name));
  if (name === 'code' && cm) cm.refresh();
  if (name === 'map') refreshMapUI();
  if (name === 'spr') refreshSprUI();
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
  const availW = Math.max(100, box.clientWidth - 4), availH = Math.max(100, box.clientHeight - 4);
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
      if (e.button === 2) { color = px[i]; drawPalette(); return; }
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
  if (activeTab !== 'spr') return;
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

function setupSprEditor() {
  buildFaces();
  document.querySelectorAll('.toolpick button').forEach((b) => {
    b.onclick = () => {
      tool = b.dataset.tool;
      document.querySelectorAll('.toolpick button').forEach((o) => o.classList.toggle('on', o === b));
    };
  });
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

// ================================================================= info
function renderInfo() {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  $('info').innerHTML = API_SECTIONS.map((s) => `
    <h2>${esc(s.title)}</h2>
    ${s.intro ? `<p>${esc(s.intro)}</p>` : ''}
    <table>${s.items.map(([sig, desc]) => `<tr><td><code>${esc(sig)}</code></td><td>${esc(desc)}</td></tr>`).join('')}</table>
    ${s.code ? `<pre>${esc(s.code)}</pre>` : ''}`).join('');
}

// ================================================================= top bar + keys
function setupTopBar() {
  $('btnRun').onclick = run;
  $('btnStop').onclick = () => stop();
  $('cartName').oninput = (e) => { cart.name = e.target.value; dirty(); };
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
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (cart.name || 'cart').replace(/[^\w.-]+/g, '_') + '.b3d.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
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
  });
}

// ================================================================= boot
setupCode();
setupTopBar();
setupMapEditor();
setupSprEditor();
renderInfo();
let saved = null;
try { saved = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch { saved = null; }
loadCart(saved || demoCart(), saved ? saved.name : 'demo');
log('blocky3D ready. Press Run or Ctrl+Enter.', 'info');
