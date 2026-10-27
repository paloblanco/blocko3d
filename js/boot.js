// Boot helpers shared by the IDE's player (player.html) and exported games.
// Bundled with the engine and three.js into runtime/blocky3d.runtime.js as window.Blocky3D.
import { createEngine } from './engine.js';
import { drawText, textWidth } from './font.js';
import { mountShell, wireShell } from './shell.js';

let engine = null;
let overlay = null;
let runCart = null;      // the cart's code as a function returning its hooks (see start)
let reportError = null;

// Create the engine for a cart and put its whole API in the global namespace.
// Without a canvas, it builds the standard page first: the screen, touch controls and system buttons.
// Restart (pause menu) runs the cart again in the same page unless onRestart says otherwise, so
// fullscreen and the touch controls stay as they are.
export function install(cart, { canvas, overlay: ui, onError = showError, onLog = console.log, onRestart = restart, onSave, onCover, wire = true } = {}) {
  if (!canvas) ({ canvas, overlay: ui } = mountShell());
  overlay = ui;
  reportError = onError;
  engine = createEngine({ canvas, overlay: ui, cart, onError, onLog, onRestart, onSave, onCover });
  Object.defineProperties(window, Object.getOwnPropertyDescriptors(engine.api));
  window.addEventListener('keydown', (e) => engine.key(e, true));
  window.addEventListener('keyup', (e) => engine.key(e, false));
  window.addEventListener('pointerdown', () => engine.unlockAudio());
  if (wire) wireShell(engine);
  return engine;
}

// Exported games start here: the page shows the cart's cover art (or its name) with a play button,
// and nothing else happens (no 3D graphics, no game code, no sound) until the player clicks or taps
// the game, presses a key, or presses A or Start on a gamepad. Then the game installs and starts.
// The shell's buttons are wired to a stand-in until then: mute already works, anything else starts.
export function play(cart, cartFn) {
  const els = mountShell();
  const ctx = els.overlay.getContext('2d');
  let real = null, begun = false;
  const stand = {
    setButton(i, on) { if (real) real.setButton(i, on); else if (on && i !== 6) begin(); },
    setStick(x, y) { if (real) real.setStick(x, y); },
    onTouchMode: null,   // set by wireShell; handed to the engine once it exists
    get muted() { if (real) return real.muted; try { return localStorage.getItem('blocky3d.mute') === '1'; } catch { return false; } },
    setMuted(m) { if (real) real.setMuted(m); else try { localStorage.setItem('blocky3d.mute', m ? '1' : '0'); } catch { /* storage blocked */ } },
  };
  wireShell(stand);

  const drawCover = (img) => {
    ctx.imageSmoothingEnabled = false;
    if (img) ctx.drawImage(img, 0, 0, 256, 256);
    else {
      // no cover art: the game's name on a plain card
      ctx.fillStyle = '#1d2b53'; ctx.fillRect(0, 0, 256, 256);
      const name = String(cart.name || 'game');
      const s = textWidth(name) * 2 <= 240 ? 2 : 1;
      drawText(ctx, name, (256 - textWidth(name) * s) >> 1, 84, '#fff1e8', '#000000', s);
    }
    // the play button: a dark disc with a triangle, in the middle
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.beginPath(); ctx.arc(128, 128, 24, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff1e8';
    ctx.beginPath(); ctx.moveTo(120, 115); ctx.lineTo(120, 141); ctx.lineTo(141, 128); ctx.closePath(); ctx.fill();
  };
  if (typeof cart.cover === 'string' && cart.cover.startsWith('data:image/')) {
    const img = new Image();
    img.onload = () => { if (!begun) drawCover(img); };
    img.onerror = () => { if (!begun) drawCover(null); };
    img.src = cart.cover;
  } else drawCover(null);
  els.overlay.style.cursor = 'pointer';

  const keyStart = (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || /^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(e.key)) return;
    e.preventDefault();
    begin();
  };
  const clickStart = () => begin();
  els.overlay.addEventListener('click', clickStart);
  window.addEventListener('keydown', keyStart);
  const padStart = () => {
    if (begun) return;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && [0, 1, 2, 3, 9].some((b) => p.buttons[b] && p.buttons[b].pressed)) return begin();
    requestAnimationFrame(padStart);
  };
  requestAnimationFrame(padStart);

  function begin() {
    if (begun) return;
    begun = true;
    els.overlay.removeEventListener('click', clickStart);
    window.removeEventListener('keydown', keyStart);
    els.overlay.style.cursor = '';
    ctx.clearRect(0, 0, 256, 256);
    try {
      real = install(cart, { ...els, wire: false });
    } catch (e) { showError(e); return; }
    real.onTouchMode = stand.onTouchMode;   // the page follows touch_set_mode from now on
    real.unlockAudio();          // this click or key press lets the browser start sound right away
    start(cartFn);
  }
}

// Expression that collects the cart's _init/_update/_draw, whether declared with function, let or const.
export const HOOKS_EXPR = '({ _init: typeof _init === "function" ? _init : null,' +
  ' _update: typeof _update === "function" ? _update : null,' +
  ' _draw: typeof _draw === "function" ? _draw : null })';

// Wraps cart code in a function that returns its hooks. Each call runs the code from scratch with
// fresh variables, which is what lets Restart run it again (top-level let/const would clash if the
// code ran twice as a plain script). The wrapper adds no line, so error line numbers still match.
export function cartFunctionSource(code) {
  return '(function () {' + String(code || '') + '\n;return ' + HOOKS_EXPR + ';\n})';
}

// Start the game. Pass the cart as a function returning its hooks (exports and the IDE do this), or
// hooks directly, or nothing to look the hooks up in the global scope (those two can't soft-restart).
export function start(cart) {
  runCart = typeof cart === 'function' ? cart : null;
  let hooks;
  try {
    hooks = runCart ? runCart() : cart || (0, eval)(HOOKS_EXPR);
  } catch (e) { reportError(e); return false; }
  return engine.start(hooks);
}

// Run the cart again from the top, in the same page: the engine goes back to the cart's starting
// state (maps, palette, camera, time, sound) and the cart's code runs again, _init included.
export function restart() {
  if (!runCart) { location.reload(); return; }
  engine.reset();
  start(runCart);
}

export function stop() { if (engine) engine.stop(); }

// Default error display for exported games: stop and write the message on screen.
export function showError(err) {
  console.error(err);
  if (engine) engine.stop();
  if (!overlay) return;
  if (overlay.width !== 256) overlay.width = overlay.height = 256;   // the engine may have failed before sizing it
  const ctx = overlay.getContext('2d');
  const words = ('Error: ' + String((err && err.message) || err)).split(/\s+/);
  const lines = [''];
  for (const w of words) {
    const last = lines[lines.length - 1];
    if (last && textWidth(last + ' ' + w) > 248) lines.push(w); else lines[lines.length - 1] = last ? last + ' ' + w : w;
  }
  drawText(ctx, lines.join('\n'), 4, 4, '#ff004d', '#000000');
}

// For exported games: report errors thrown at load time or outside the game loop.
export function catchGlobalErrors() {
  window.addEventListener('error', (e) => showError(e.error || e.message));
}
