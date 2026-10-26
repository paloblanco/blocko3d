// Boot helpers shared by the IDE's player (player.html) and exported games.
// Bundled with the engine and three.js into runtime/blocky3d.runtime.js as window.Blocky3D.
import { createEngine } from './engine.js';
import { drawText, textWidth } from './font.js';
import { mountShell, wireShell } from './shell.js';

let engine = null;
let overlay = null;

// Create the engine for a cart and put its whole API in the global namespace.
// Without a canvas, it builds the standard page first: the screen, touch controls and system buttons.
export function install(cart, { canvas, overlay: ui, onError = showError, onLog = console.log, onRestart, onSave } = {}) {
  if (!canvas) ({ canvas, overlay: ui } = mountShell());
  overlay = ui;
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

// Start the game loop. Pass hooks when the cart was run through eval (its let/const stay inside it);
// otherwise they are looked up in the global scope.
export function start(hooks) {
  return engine.start(hooks || (0, eval)(HOOKS_EXPR));
}

export function stop() { if (engine) engine.stop(); }

// Default error display for exported games: stop and write the message on screen.
export function showError(err) {
  console.error(err);
  if (engine) engine.stop();
  if (!overlay) return;
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
