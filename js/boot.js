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
export function install(cart, { canvas, overlay: ui, onError = showError, onLog = console.log, onRestart = restart, onSave } = {}) {
  if (!canvas) ({ canvas, overlay: ui } = mountShell());
  overlay = ui;
  reportError = onError;
  engine = createEngine({ canvas, overlay: ui, cart, onError, onLog, onRestart, onSave });
  Object.defineProperties(window, Object.getOwnPropertyDescriptors(engine.api));
  window.addEventListener('keydown', (e) => engine.key(e, true));
  window.addEventListener('keyup', (e) => engine.key(e, false));
  window.addEventListener('pointerdown', () => engine.unlockAudio());
  wireShell(engine);
  return engine;
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
