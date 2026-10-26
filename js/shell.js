// The page around the game: the square screen, on-screen touch controls and the system buttons
// (pause, mute, fullscreen). Shared by Run in the IDE (player.html) and exported games, and bundled
// into the runtime, so an exported game is still just index.html + one .js file.
//
// Layout, PICO-8 style:
//   landscape: d-pad on the left of the screen, O and X on the right, system buttons above O and X
//   portrait:  the screen on top, system buttons under it, then the d-pad and O and X
// The touch controls only show on a touch device (pointer: coarse) or once someone touches the page,
// so a touchscreen laptop gets them on its first tap. The system buttons always show.
// Nothing is drawn on the game canvas itself. The style sheet goes first in <head>, so a game's own
// index.html can override any of it.

const CSS = `
html, body { margin: 0; height: 100%; background: #000; overflow: hidden; }
[hidden] { display: none !important; }
#b3d-shell {
  --vh: 100vh; --sys: 46px; --side: 46px; --pad: 0px;
  --insx: calc(env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px));
  --insy: calc(env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px));
  position: fixed; inset: 0; display: grid; justify-content: center; align-content: center;
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
  touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent; font-family: system-ui, sans-serif;
}
@supports (height: 100dvh) { #b3d-shell { --vh: 100dvh; } }
html.b3d-touch #b3d-shell { --side: clamp(120px, 21vw, 200px); --pad: clamp(150px, 30vh, 260px); }
#screen { grid-area: game; position: relative; width: var(--g); height: var(--g); }
#screen canvas { position: absolute; inset: 0; width: 100%; height: 100%; image-rendering: pixelated; display: block; }

.b3d-sys { grid-area: sys; display: flex; gap: 8px; align-items: center; justify-content: center; }
.b3d-sys button {
  width: 36px; height: 36px; padding: 0; display: grid; place-items: center; cursor: pointer;
  background: #161616; border: 1px solid #333; border-radius: 9px; color: #8a8a8a;
}
.b3d-sys button:hover { color: #ddd; border-color: #555; }
.b3d-sys button:active, .b3d-sys button.on { background: #2a2a2a; color: #fff; }
.b3d-sys svg { width: 20px; height: 20px; display: block; }

.b3d-dpad, .b3d-ab { display: none; align-self: center; justify-self: center; touch-action: none; }
html.b3d-touch .b3d-dpad, html.b3d-touch .b3d-ab { display: block; }
.b3d-dpad { grid-area: dpad; position: relative; width: var(--dp); height: var(--dp); }
.b3d-dpad div { position: absolute; background: #222; border: 1px solid #383838; color: #666; display: grid; place-items: center; font-size: calc(var(--dp) * 0.11); }
.b3d-dpad .c { left: 33%; top: 33%; width: 34%; height: 34%; border: none; background: #222; }
.b3d-dpad .u { left: 33%; top: 0; width: 34%; height: 36%; border-bottom: none; border-radius: 8px 8px 0 0; }
.b3d-dpad .d { left: 33%; bottom: 0; width: 34%; height: 36%; border-top: none; border-radius: 0 0 8px 8px; }
.b3d-dpad .l { top: 33%; left: 0; width: 36%; height: 34%; border-right: none; border-radius: 8px 0 0 8px; }
.b3d-dpad .r { top: 33%; right: 0; width: 36%; height: 34%; border-left: none; border-radius: 0 8px 8px 0; }
.b3d-dpad div.on { background: #4a4a4a; color: #fff; }
.b3d-ab { grid-area: ab; position: relative; width: var(--dp); height: var(--dp); }
.b3d-ab button {
  position: absolute; width: 46%; height: 46%; padding: 0; border-radius: 50%; touch-action: none;
  background: #222; border: 1px solid #383838; color: #777; font: 600 calc(var(--dp) * 0.15) system-ui, sans-serif;
}
.b3d-ab button.on { background: #4a4a4a; color: #fff; }
.b3d-ab .o { left: 2%; bottom: 14%; }
.b3d-ab .x { right: 2%; top: 14%; }

@media (orientation: landscape) {
  #b3d-shell {
    --g: min(var(--vh) - var(--insy), 100vw - 2 * var(--side) - var(--insx));
    --dp: min(var(--side) - 14px, 170px);
    grid-template-columns: var(--side) var(--g) var(--side);
    grid-template-rows: auto 1fr;
    grid-template-areas: ". game sys" "dpad game ab";
  }
  .b3d-sys { flex-direction: column; padding-top: 6px; }
}
@media (orientation: portrait) {
  #b3d-shell {
    --g: min(100vw - var(--insx), var(--vh) - var(--sys) - var(--pad) - var(--insy));
    --dp: min(var(--pad) - 20px, 46vw - 10px, 180px);
    grid-template-columns: calc(var(--g) / 2) calc(var(--g) / 2);
    grid-template-rows: var(--g) var(--sys);
    grid-template-areas: "game game" "sys sys";
  }
  html.b3d-touch #b3d-shell {
    align-content: stretch; grid-template-rows: var(--g) var(--sys) minmax(var(--pad), 1fr);
    grid-template-areas: "game game" "sys sys" "dpad ab";
  }
}
`;

const svg = (body) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const ICON = {
  pause: svg('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),
  sound: svg('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),
  muted: svg('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),
  full: svg('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),
  exitFull: svg('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>'),
};

// Builds the page and returns the two canvases the engine draws on.
export function mountShell(doc = document) {
  const style = doc.createElement('style');
  style.id = 'b3d-style';
  style.textContent = CSS;
  doc.head.prepend(style);
  const shell = doc.createElement('div');
  shell.id = 'b3d-shell';
  shell.innerHTML = `
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${ICON.pause}</button>
    <button class="b3d-mute" title="Mute" aria-label="Mute"></button>
    <button class="b3d-full" title="Fullscreen" aria-label="Fullscreen"></button>
  </div>
  <div class="b3d-dpad" aria-label="D-pad">
    <div class="c"></div><div class="u">▲</div><div class="d">▼</div><div class="l">◀</div><div class="r">▶</div>
  </div>
  <div class="b3d-ab">
    <button class="o" aria-label="O button">O</button>
    <button class="x" aria-label="X button">X</button>
  </div>`;
  doc.body.prepend(shell);
  return { canvas: doc.getElementById('gl'), overlay: doc.getElementById('ui') };
}

// Connects the controls to the engine. Does nothing if the page has no shell.
export function wireShell(engine, doc = document) {
  const shell = doc.getElementById('b3d-shell');
  if (!shell) return;
  const win = doc.defaultView;
  const root = doc.documentElement;
  const $ = (sel) => shell.querySelector(sel);

  // Show the touch controls on touch devices, or as soon as anyone touches the page.
  const showTouch = () => root.classList.add('b3d-touch');
  const coarse = win.matchMedia('(pointer: coarse)');
  if (coarse.matches) showTouch();
  if (coarse.addEventListener) coarse.addEventListener('change', () => { if (coarse.matches) showTouch(); });
  win.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' || e.pointerType === 'pen') showTouch(); }, true);

  // Keep keyboard focus on the game, also when embedded in an iframe (itch.io, Game Jolt).
  win.focus();
  win.addEventListener('pointerdown', () => win.focus());

  // D-pad: one touch area, so a thumb can roll between directions and onto diagonals.
  const dpad = $('.b3d-dpad');
  const arms = ['.l', '.r', '.u', '.d'].map((s) => dpad.querySelector(s));   // buttons 0-3
  const touches = new Map();
  const dpadUpdate = () => {
    const on = [false, false, false, false];
    const r = dpad.getBoundingClientRect();
    for (const [x, y] of touches.values()) {
      const dx = (x - r.left) / r.width * 2 - 1, dy = (y - r.top) / r.height * 2 - 1;
      if (Math.hypot(dx, dy) < 0.2) continue;              // the middle is a dead zone
      const ax = Math.abs(dx), ay = Math.abs(dy);
      if (ax > ay * 0.42) on[dx < 0 ? 0 : 1] = true;       // 0.42 = tan(22.5°): 8 directions
      if (ay > ax * 0.42) on[dy < 0 ? 2 : 3] = true;
    }
    on.forEach((v, i) => { engine.setButton(i, v); arms[i].classList.toggle('on', v); });
  };
  dpad.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    try { dpad.setPointerCapture(e.pointerId); } catch { /* already gone */ }
    touches.set(e.pointerId, [e.clientX, e.clientY]);
    dpadUpdate();
  });
  dpad.addEventListener('pointermove', (e) => {
    if (!touches.has(e.pointerId)) return;
    touches.set(e.pointerId, [e.clientX, e.clientY]);
    dpadUpdate();
  });
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    dpad.addEventListener(ev, (e) => { if (touches.delete(e.pointerId)) dpadUpdate(); });
  }

  // O and X
  [['.o', 4], ['.x', 5]].forEach(([sel, i]) => {
    const b = $('.b3d-ab ' + sel);
    const set = (on) => { engine.setButton(i, on); b.classList.toggle('on', on); };
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      try { b.setPointerCapture(e.pointerId); } catch { /* already gone */ }
      set(true);
    });
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(ev, () => set(false));
  });
  shell.addEventListener('contextmenu', (e) => { if (!e.target.closest('#screen')) e.preventDefault(); });

  // System buttons act on click (fullscreen needs one). They never take keyboard focus, so
  // Space or Enter keep going to the game instead of pressing the button again.
  // A finger acts on pointerup (it counts as a user gesture, which fullscreen needs) and the
  // click a phone may send after it is ignored; a mouse or keyboard acts on click. Either way one
  // tap is one action: anything within 500 ms of the last one is dropped.
  const sys = (sel, fn) => {
    const b = $(sel);
    let last = -1e9;
    const fire = () => {
      const now = performance.now();
      if (now - last < 500) return;
      last = now;
      fn();
      b.blur();
    };
    b.addEventListener('mousedown', (e) => e.preventDefault());
    b.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') e.preventDefault(); });
    b.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') fire(); });
    b.addEventListener('click', fire);
    return b;
  };
  sys('.b3d-pause', () => { engine.setButton(6, true); engine.setButton(6, false); });   // one press of Start

  const muteBtn = sys('.b3d-mute', () => { engine.setMuted(!engine.muted); showMute(); });
  const showMute = () => {
    muteBtn.innerHTML = engine.muted ? ICON.muted : ICON.sound;
    muteBtn.title = engine.muted ? 'Unmute' : 'Mute';
    muteBtn.classList.toggle('on', engine.muted);
  };
  showMute();

  const fsElement = () => doc.fullscreenElement || doc.webkitFullscreenElement;
  const fullBtn = sys('.b3d-full', () => {
    try {
      const p = fsElement() ? (doc.exitFullscreen || doc.webkitExitFullscreen).call(doc)
        : (root.requestFullscreen || root.webkitRequestFullscreen).call(root);
      if (p && p.catch) p.catch(() => {});
    } catch { /* refused */ }
  });
  const showFull = () => {
    fullBtn.innerHTML = fsElement() ? ICON.exitFull : ICON.full;
    fullBtn.title = fsElement() ? 'Exit fullscreen' : 'Fullscreen';
  };
  fullBtn.hidden = !(doc.fullscreenEnabled || doc.webkitFullscreenEnabled);   // e.g. iPhone Safari
  doc.addEventListener('fullscreenchange', showFull);
  doc.addEventListener('webkitfullscreenchange', showFull);
  showFull();
}
