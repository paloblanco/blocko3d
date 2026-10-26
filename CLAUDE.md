# CLAUDE.md: blocky3D

Context for any agent picking up this repo. Read this first, then `README.md`.

## What this is

blocky3D (working name) is a small, deliberately limited **3D** game engine for JavaScript with a **PICO-8-style developer experience**. The owner (Rocco, who makes games as Palo Blanco Games and knows PICO-8 well) designed it in conversation with Claude. It follows an earlier, heavier engine called Neptune, whose developer experience felt too involved.

Guiding principles. Keep them when adding features:

- **Everything is global.** You call `map(0)`, never `engine.map(0)`. Keep the API small and terse, in the PICO-8 naming style.
- **Limits are the point.** 8×8 textures, a 32-color palette, flat rendering, a square screen.
- **All in one place.** The IDE is one static web page: code, map editor, tile editor, docs, Run. No build step, no install.
- **3D, not 2D.** There are plenty of 2D fantasy consoles already.
- Rocco prefers the **simplest thing that works** over clever architecture.

**Current version: 0.1.0-alpha**, tagged `v0.1.0-alpha` (the first version for human testing). The version lives in `js/version.js` (shown at the top of the Info tab, in the IDE console, in the first line of exported game scripts and as `Blocky3D.VERSION`) and in `package.json`; `CHANGELOG.md` lists what each version has. To release: bump both, add a CHANGELOG entry, `npm run build`, commit, then tag `v<version>` and push the tag.

The site is live on GitHub Pages (deployed from `main`): the IDE at https://paloblanco.github.io/demo_blocky_3d/ and the exported demo at https://paloblanco.github.io/demo_blocky_3d/standalone_demo/.

The design spec lives in a Claude Doc titled "blocky3D Spec" (claude.ai artifact `JH2BMJck8VtrndcyhxTSB5`). This file and the code are the source of truth if they disagree.

## Design decisions (agreed with the owner)

**Drawing tiers** mirror PICO-8:

1. `map`: voxel maps, the equivalent of PICO-8's map.
2. `vox`: 8×8×8 voxel models for characters and items, the `spr` equivalent (see **Vox models** below).
3. Primitives: `cube`, `sphere`, `line3`.

Drawing is **immediate-mode**: `_draw()` re-submits everything every frame, with no scene graph.

**Maps**

- A map is a 3D array of tile indices; `0` is empty. There can be many maps, numbered 0, 1, 2… in cart order, plus any made with `map_new`.
- Each map has its own transform, so you can have dynamic geometry (a moving platform, a drawbridge) without models:
  - **origin**: a pivot point in the map's own block coordinates, non-integer allowed. Defaults to `[0,0,0]`. It is set when the map is declared and can be changed during play.
  - **pos**: where the origin sits in the world.
  - **angle**: `[pitch, yaw, roll]`.
- World point = `pos + R · (local − origin)`.
- **`map_set_origin` keeps the map in place on screen.** It quietly adjusts `pos` so only the pivot moves. The owner chose this explicitly.
- The transform lives on the map, not in the draw call. That way collision (`mgetw`) and drawing always agree.
- Queries:
  - `mget`/`mset` use grid coordinates.
  - `mgetw(m, x, y, z)` takes a world point and returns `[t, xi, yi, zi]`. It works for any rotation.
  - `mgetw(m, x, y, z, r)` is a sphere query. It returns the deepest hit, `[t, xi, yi, zi, nx, ny, nz, d]`, with a world-space push-out direction and depth, so collision is one line. `t` is 0 when nothing is hit.
  - `msetw` sets a block at a world point.
  - `mray(m, ox, oy, oz, dx, dy, dz, maxd = 100)` (agreed with the owner) returns the first solid block along a ray, `[t, xi, yi, zi, nx, ny, nz, d]`, same shape as the sphere query; all zeros on a miss. **n is the face hit as a grid direction** (the owner's choice, so `mset(m, xi+nx, yi+ny, zi+nz, t)` places a block on it; on rotated maps it differs from a world direction). d is in world units (map transforms only rotate and move). `rayQuery` in `js/engine.js` moves the ray into map space, clips it to the map's box and steps cell by cell (Amanatides & Woo). A ray starting inside a solid block hits it at d = 0 with n = 0. The direction needn't be normalized.

**Angles and axes**

- Angles are in **turns**: 1 is a full rotation, as in PICO-8.
- Rotation order is **yaw, then pitch, then roll**. In Three.js this is Euler `'YXZ'`, built with x = −pitch.
- y is up and one block is one world unit.
- +z is "forward":
  - Positive pitch tips +z up toward +y.
  - Positive yaw turns +z toward +x.
  - Positive roll turns +x toward +y.

**Tiles**

- Up to 63 tiles, numbered 1–63.
- Each tile has three 8×8 textures: **top, sides, bottom**, like Minecraft but simpler.
- Pixels store **palette indices**, never colors.

**Rendering**

- **No shading or lighting, and no options for it.** Every face shows its texture exactly as drawn.
- The background is one palette color, set with `bg(c)`.
- The screen is **square (1:1)** and renders at 256×256, scaled up with crisp pixels.

**Camera**

- Set with `cam_set_pos`, `cam_set_lookat`, and `cam_set_fov`.
- FOV is **horizontal**, in turns, with a **default of 0.25** (90°). Because the screen is square, horizontal and vertical FOV are equal.

**Palette**, PICO-8 style, in two layers:

- `palette`: a global array of 32 colors (0xRRGGBB), defaulting to the PICO-8 extended palette. Changing an entry recolors everything next frame.
- `pal(a, b)` / `pal()` / `palt(i, on)`: a **per-draw** remap and transparency. It is captured at each draw call.
- In the shader, transparency is checked against the original index. Then comes the remap, then the palette lookup.

**Outlines** (agreed with the owner):

- `outline(c)` / `outline()`, per-draw state like `pal`, **off by default**. The color is a palette index and goes through the current `pal` remap at draw time.
- They're screen-space and 1 pixel wide, and work the same for maps, primitives and the future spr. Every shader also writes a second output (outline index + 1, draw id); a full-screen pass in `createOutlinePass` (`js/core.js`) then paints a pixel with the outline color of a 4-neighbor that is outlined and in front of it.
- **Every visible edge of a map is outlined** (the owner asked for this: a box-shaped map shows all its visible edges, and a divot in a cliff is outlined). Two rules inside the same map:
  - **Creases:** map pixels also record which way their face points (direction 1-6 in the info target's alpha; 0 for primitives). Neighboring pixels facing different ways get a line, which covers both outside and inside corners, like the foot of a pillar. Only the pixel with the larger direction index takes the line, so it stays 1 pixel wide. Grid lines between blocks on one flat surface get no line.
  - **Depth jumps:** where one part of the map is in front of a parallel part behind it, the pass extrapolates the neighbor's surface one pixel (1/z is linear across a flat face) and outlines where this pixel sits well behind it.
- Primitives only get outlined against other draws and the background, never inside themselves (so a low-poly sphere doesn't show its facets).
- **`outline(c, false)`: outer outline only** (the owner asked, for round voxel models; it applies to maps too, and drops overlap lines as well as creases). Per-draw state like the color; `outline(c)` turns inner edges back on and `outline()` resets both. Each material has a `uInner` uniform; when it's 0, `writePixel` stores direction **7** instead of the face direction, and the outline pass skips any pair of pixels from the same draw when the neighbor is a 7 (no crease, no depth jump), so only edges against the background or other draws remain. No extra texture fetches. Default output is pixel-identical to before at 1× and 3×.
- The pass fetches each depth and info texel once per neighbor; keep it that way. Under SwiftShader (CPU rendering), the demo runs at the same frame rate with outlines on or off.
- Background is detected by the depth buffer still holding its cleared value. Don't clear the color with alpha 0: three.js premultiplies the clear color, which turns the background black.

**Vox models** (agreed with the owner):

- Up to 64 models, numbered 0-63, edited in the **Vox** tab (the old Spr tab is now **Tile**). Each is 8×8×8 voxels; one byte per voxel, 0 = empty, else palette color + 1, so black (color 0) stays usable. Index `x + 8 * (y + 8 * z)`, y up, the model's **front is +z**.
- **8 voxels = 1 block**: unscaled, a model fills exactly one block.
- `vox(n, x, y, z, pitch, yaw, roll, sx, sy, sz)`: everything after the position is optional; `sy`/`sz` default to `sx`. Angles are in turns, in the **same order as maps** (yaw, then pitch, then roll). World = pos + R · S · (local − pivot) / 8.
- Each model has a **pivot** in voxel units (default `[4, 0, 4]`, bottom center), set in the editor. It's the point placed at x, y, z and the center of rotation and scaling, so a leg with its pivot at the hip swings correctly.
- **Animation is model swapping**, PICO-8 style, plus composing characters from parts in code. A skeleton/rig editor was considered and set aside as not worth the effort. The editor helps with frames: Duplicate (appends a copy), onion skin (previous model shown faintly in the grid and 3D view), and a Play button that loops a range of models in the preview.
- `pal`, `palt` and `outline` apply. Vox meshes write face directions like maps, so outlines show their edges and creases.
- Models have no collision; games keep using spheres and `mgetw`.
- Editor: layer grid (top view, +z down), click a face in the 3D preview to add (right-click or the Erase tool removes), Pencil/Erase/Fill/Pick tools, mirror across x, name, pivot. Add and Duplicate append at the end, so existing numbers never change; Delete renumbers later models (with a confirm).

**Text and UI** (agreed with the owner): `print(str, x, y, c, oc, sx, sy)` draws on a 2D overlay canvas on top of the 3D view, in screen pixels. The font (`js/font.js`) uses 7×10 cells: 5-wide glyphs, 7-tall capitals, 2-row descenders, a 1-pixel margin all round, upper and lower case and all printable ASCII. Glyphs are written as `#`/`.` rows in that file, so they're easy to edit. `oc` is an optional outline color (8-direction ring, drawn under all the text first); leaving it off means no outline. Both colors go through `pal`. `sx`/`sy` are whole-number scales (`sy` defaults to `sx`; the owner asked for both so titles can be stretched); the outline scales with the text (one font pixel thick). Pass `oc` as `null` or `-1` to scale without an outline. `print` returns the x just past the text, like PICO-8. `rect(x0, y0, x1, y1, c)` (outline) and `rectfill(...)` (filled) draw on the same 2D layer, corners included and in either order, PICO-8 style. Text and rectangles stack in call order.

**Pause menu** (asked for by the owner): Enter, NumpadEnter or P (button 6 in `KEYMAP`) pauses, handled by the engine, not the game. While paused, `_update`/`_draw` don't run, `time()` doesn't advance and the audio context is suspended. The menu is drawn on **its own canvas** (`menuCanvas`, created by the engine right after the overlay, `pointer-events: none`, shown only while paused) in the default palette, so it's readable whatever the game did to `palette`. The game's overlay is left untouched while paused (`_draw` doesn't run), so nothing is read back with `getImageData`. That readback used to be how the overlay was frozen, and on a real phone the first one (after each start or restart) left the menu invisible except for single frames, probably because reading a canvas back makes the browser move it off the GPU. Keep pixel readback out of the pause path. Items: Resume, Restart, Screenshot, Resolution (see below). **Restart is soft** (the owner asked, after a page reload dropped fullscreen and broke the touch controls): boot's `restart()` calls `engine.reset()` (maps rebuilt from the cart, palette, `pal`/`palt`, `bg`, outline, camera, time, mouse mode, input, pause and sound back to the start; resolution, mute and fullscreen kept) and runs the cart function again, `_init` included. It works the same in the IDE and in exports, because both hand `Blocky3D.start` the cart as a **function returning its hooks** (`cartFunctionSource` in the player, a `function () { … }` wrapper in the export), so each run gets fresh top-level `let`/`const` (as a plain script they'd clash on a second run). The wrapper adds no line, so error line numbers still match. `location.reload()` is only the fallback when `start` was given plain hooks. Screenshot composites the GL canvas (`preserveDrawingBuffer: true`) and the game's overlay at the active resolution with no menu, and downloads `<slug>_<timestamp>.png`. The page's pause button (see **Game page** below) presses button 6 once. For 15 updates (0.25 s) after pausing, the menu ignores choosing (`menuAge`), so a doubled press can't resume straight away (a reported phone bug: the first pause tap unpaused at once). Pausing calls `audio.suspend()`, which sets `held`: while held, `unlock()` (run on every key press and click) creates the context if needed but never resumes it, and a resume still in flight when the game pauses suspends again when it lands (`wake`). Only `audio.resume()` (Resume) brings sound back.

**Resolution** (agreed with the owner): the pause menu's Resolution item (left/right or select) sets the 3D view to **1×, 2× or 3×** (256/512/768 square). Only these three, by the owner's choice. The 2D overlay (`print`, `rect`) always stays 256. The choice is stored per device in `localStorage['blocky3d.res']`, and screenshots save at the active size. Changing it while paused re-runs `_draw` once to repaint the frozen frame.
- 1× uses the original single outline pass. 2× and 3× keep outlines one 256-pixel thick (k real pixels) with option 1 from the design talk: the edge pass writes a 1-pixel **edge mask** to a float target (`uMode = 1`: outline color + 1, outlined surface's distance, its draw id, edge kind); two **grow passes** widen it by k − 1 (across, then down; nearest surface wins; creases grow only toward +x/+y so they stay k wide); a **paint pass** colors a pixel only where the kind allows. Kind 1 (over something else) goes onto background or another draw farther away; kind 2 (depth jump in one draw) onto the same draw well behind; kind 3 (crease) onto the same draw. So outlines spread over what's behind an object, never into it.
- 2×/3× need `EXT_color_buffer_float` (float render targets); without it the Resolution item is hidden and the game stays at 1×.
- Spheres use 24×16 segments so they look round at 3×. `line3` stays 1 real pixel wide.
- Performance: under SwiftShader (CPU rendering) frame time grows with pixel count (about 23/116/247 ms for 1×/2×/3× in the demo); on a real GPU 768² is small.

**Sound** (asked for by the owner): PICO-8-style SFX in `js/audio.js`, shared by the engine and the IDE.
- 64 sounds × 32 notes; each note has pitch 0-63 (33 = A 440 Hz), wave 0-7 (triangle, tilted saw, saw, square, pulse, organ, noise, phaser), volume 0-7 and effect 0-7 (none, slide, vibrato, drop, fade in, fade out, arp fast, arp slow). Speed: each note lasts speed/120 s. Loop: notes loopStart up to loopEnd repeat.
- **Saved as a string** (the owner wanted Playload-like strings): 166 hex characters, `SS LL EE` then `PP W V E` per note. The cart's `sfx` is an array of these strings (null for empty slots, trailing empties dropped).
- Sounds are synthesized in JS to a 22050 Hz buffer (cached per string) and played with Web Audio on 4 channels. Looping uses the buffer source's loop points. `sfx(n, ch, offset, length)`, `sfx(-1[, ch])` stop, `sfx(-2, ch)` releases a loop, and `sfx(str)` plays a string directly.
- Browsers block audio until a user gesture: the engine unlocks on keydown/pointerdown, and the IDE's iframe has `allow="autoplay"`. Sounds requested before the unlock are dropped, not delayed.
- Sfx tab: slot list, Play (Space), speed, loop, a brush (wave, volume, effect) applied when drawing in the pitch graph, separate volume graph and wave/effect rows, a playback cursor, and a string field to copy or paste a sound.

**Music** (asked for by the owner):
- 64 **patterns**; each has 4 channels (an sfx number, or empty) and flags: loop start, loop back (jump to the nearest loop start at or before it, else the pattern the song started on), stop (end after it). Saved as 9 hex characters: flags (1 = loop start, 2 = loop back, 4 = stop), then 2 hex digits per channel (00-3f, or 40 = empty). The cart's `music` is an array of these strings.
- A pattern lasts as long as its longest **non-looping** sound's 32 notes (if all loop, the first channel's). Looping sounds repeat their loop to fill it. The song also ends at an empty pattern or after pattern 63.
- Playback: each pattern's channels are mixed into one buffer (`renderPattern`, cached) and scheduled back-to-back on the audio clock, 0.4 s ahead, by `SfxPlayer.music`. **Music has its own 4 voices** separate from the 4 sfx channels, so effects never cut out the song (a simplification from PICO-8, where they share channels). `music(n, fade)` fades in; `music(-1, fade)` fades out. A music request made before the browser allows sound is kept and starts on the first key press or click. Pausing suspends the audio clock, so music pauses too.
- **Music tab:** pattern list (playing pattern highlighted), Play (Space) from the current pattern that follows the song, flag checkboxes, 4 channel cards (enable, −/+ sound number, a mini pitch view with a playhead, click or Edit sound to open it in the Sfx tab), and the pattern length.
- **Scale snapping** in the Sfx tab: "Snap to scale" with a root note and one of 9 scales (minor/major pentatonic, major, minor, harmonic minor, dorian, mixolydian, blues, whole tone). The default when enabled is **C minor pentatonic**, like PICO-8. Drawn pitches snap to the nearest scale note (ties go down), scale rows are highlighted in the pitch graph (root brighter), and "Snap this sound" moves an existing sound's notes onto the scale. Settings are saved in the cart as `scale: {snap, root, type}`; the engine ignores them.

**Input and gamepads** (asked for by the owner, PICO-8 style): `btn(i, p)` / `btnp(i, p)` with player p 0-3 (default 0). **Player 0 = the keyboard OR the first connected gamepad**; the 2nd, 3rd and 4th connected gamepads are players 1-3, ordered by the browser's gamepad slot (gaps skipped), so if the first pad is unplugged the next one becomes player 0. Pads are polled once per `_update` step (`pollInput`). Standard mapping: d-pad (12-15) or left stick (axes 0/1, deadzone 0.5) for directions; O = A or X (0, 2); X = B or Y (1, 3); Start (9) = button 6, pause, from any player. Any player can drive the pause menu.
- **All gamepad buttons** (the owner asked to keep counting up): 6 Start (still pauses), 7 A, 8 B, 9 X, 10 Y, 11 LB, 12 RB, 13 LT, 14 RT, 15 Select, 16 L3, 17 R3, 18 Home (`EXTRA` in `js/engine.js` maps them from the standard layout). 0-5 keep combining buttons (O = A or X, X = B or Y) so keyboard and pad games stay compatible. Buttons 7-18 have no keyboard keys. Triggers count as pressed past the browser's threshold; there's no analog trigger value yet.
- **`stick(i, p)`** (the owner's design): i = 0 left, 1 right; returns `[x, y]`, -1..1, **right and down positive** (screen and browser convention; Claude's choice, changeable). Round dead zone 0.15, rescaled so values start at 0 just outside it. When the left stick is centered, `stick(0)` falls back to the player's d-pad/arrow buttons (diagonals normalized to length 1), so analog code works on a keyboard. The demo moves with `stick(0)`.
The IDE iframe has `allow="autoplay; gamepad; fullscreen"`. Browsers only expose a pad after one of its buttons is pressed, and pad presses don't count as a gesture for unlocking sound. `btnp` has no auto-repeat (PICO-8's does).

**Mouse and touch** (designed with the owner): `mouse_set_mode(m)`: 0 off (default: mouse and touch ignored, so existing games are unaffected), 1 click, 2 capture (Pointer Lock on the overlay canvas).
- Buttons are **19 left, 20 right, 21 middle** of player 0, folded into `btn`/`btnp`. The context menu is blocked in modes 1 and 2.
- `mouse_pos()` → `[x, y]` in 256 screen pixels (overlay `getBoundingClientRect`), can go outside 0-255 when the cursor is off the screen (only seen in exports; in the IDE the iframe stops getting events at its edge); frozen while captured. `mouse_delta()` → `[dx, dy]` raw CSS pixels since the last `_update` (movementX/Y; fractional for touch). `mouse_wheel()` → notches since the last update (deltaY/100 for pixel mode, /3 for lines), down positive. `mouse_locked()`. Deltas and wheel are accumulated from events and snapshotted in `pollInput` (`takeMouse`).
- Mode 2 arms capture: the next click on the game locks, and that click is swallowed. **Losing the lock (Esc, alt-tab) pauses the game**; pausing exits the lock and Resume requests it again (if the browser refuses, e.g. Chrome's ~1 s cooldown after Esc, it stays armed and the next click locks).
- Touch (pointer events with `pointerType !== 'mouse'`, one finger tracked): mode 1 a tap is button 19 at that spot; mode 2 dragging gives deltas (no button). The overlay gets `touch-action: none` in modes 1/2.
- The pause menu is clickable/tappable in modes 1 and 2: hover selects, click chooses (`menuRects` from `drawMenu`).
- **Short presses are latched** (`tapped[]`): a key or mouse press that starts and ends between two updates still reads as down for one update, so `btnp` never misses it.
- `mouse_ray()` → `[ox, oy, oz, dx, dy, dz]`: the ray from the camera through `mouse_pos()` (the screen center in mode 2, like a crosshair), direction normalized, built from the camera as last set (`camPos`, `camLook`, fov) with a spare three.js camera and `unproject`, so it matches the render. `mray(m, ...mouse_ray())` is the block under the cursor.
- Audio still unlocks on any pointerdown in every mode.
- **Deferred (discussed with the owner): `mouse_pick()`.** Draw calls would return their draw id, and `mouse_pick()` would read the id under the cursor from the info target (pixel-exact clicks on vox models and primitives, one frame late, a 1-pixel `readPixels` only when called). Set aside until games want it; distance checks cover most cases.

**Game page: touch controls and system buttons** (asked for by the owner, PICO-8 style): `js/shell.js`, bundled into the runtime, builds the page around the game for both Run (`player.html`) and exports, so they match. `install()` calls `mountShell()` when no canvas is passed, and `wireShell(engine)` connects it. It's plain HTML and CSS around the canvases, never drawn on the game screen; the style sheet goes first in `<head>`, so an exported `index.html` can restyle it.
- **Layout** (CSS grid, by `orientation`): landscape puts the d-pad left of the screen, O and X right, system buttons at the top of the right column; portrait puts the screen on top, the system buttons under it, then the d-pad and O/X. The screen stays square and as big as fits (`--g`), safe areas respected.
- **System buttons, always shown (desktop too):** pause (presses button 6 once through `engine.setButton`), mute (`engine.setMuted`, the audio player's master gain; stored per device in `localStorage['blocky3d.mute']`, muted sounds still play silently), fullscreen (the whole page, so the controls stay; hidden where the browser has no fullscreen, e.g. iPhone Safari). They never take keyboard focus, so Space/Enter keep going to the game. A finger acts on `pointerup` (a user gesture, which fullscreen needs) and a mouse or keyboard on `click`; anything within 500 ms of the last activation is dropped, so one tap is always one action.
- **Touch controls** show only with `pointer: coarse` or after any touch on the page (`html.b3d-touch`), so a touchscreen laptop gets them on its first tap. The d-pad is one touch area with 8 directions (thumb can roll onto diagonals, center dead zone); O and X are separate buttons; several fingers work at once. They press buttons 0-5 of player 0 directly (`engine.setButton`, the `held[]` array), no fake key events.
- The IDE's own touchpad is gone; its iframe has `allow="autoplay; gamepad; fullscreen"`.

**Save data** (asked for by the owner): `save(value)` / `load()` store one JSON value per game in `localStorage` under `blocky3d.save.<slug of the cart name>`, up to 64 KB. `save(null)` deletes it. Web pages can't silently write real files, so the browser's storage is the "file". It works in the IDE, from `file://` and on itch.io. The IDE shows the current save under the game with a Clear button (the player posts `save` when a game saves). Renaming the cart changes the key.

**Choices Claude made that the owner hasn't specifically reviewed.** Treat them as changeable:

- The primitive names and signatures: `cube(x, y, z, size, c)`, `sphere(x, y, z, r, c)`, `line3(...)`.
- The extras: `printh`, the keyboard mapping (arrows/WASD, Z C N space for O, X V M for X), `time`/`t`, and math helpers with turn-based `sin`/`cos`. `sin` is **not** inverted like PICO-8's.
- `_update` runs at a fixed 60 per second.
- Nothing is transparent by default.

## Architecture

| File | Role |
| --- | --- |
| `js/core.js` | Shared by the runtime and the IDE: palette, atlas (`DataTexture`, R8, 24×512, one row per tile), voxel meshing (one quad per exposed face), map transform math, palette uniform, voxel and solid shaders (GLSL3, two outputs), the scene render target and outline pass, renderer setup, cart base64 helpers. |
| `js/engine.js` | `createEngine()`: the runtime plus the global API object, object pools per draw kind, sphere query, fixed-step loop, input. |
| `js/boot.js` | `install(cart, opts)` creates the engine and puts the API on `window` with `Object.defineProperties` (keeps `palette` as a getter/setter); `start(cart)` takes the cart as a function returning its hooks (or plain hooks, or nothing to look them up globally) and runs the loop; `restart()` resets the engine and runs that function again; `showError` draws errors on screen for exported games. |
| `runtime/blocky3d.runtime.js` | **Built file, committed.** `tools/runtime-entry.js` bundled by esbuild (`npm run build`): engine + boot + font + three.js as one minified IIFE exposing `window.Blocky3D`. Used by both `player.html` (Run) and exports, so Run matches Export. |
| `standalone_demo/` | **Built, committed.** The castle demo exported exactly as Export would (`index.html` + `demo.js`), written by `tools/build-demo.mjs` at the end of `npm run build`, to try the export page on the static site (and on GitHub Pages at `/standalone_demo/`). |
| `player.html` | Runs a cart in an **iframe** using the runtime bundle (classic script, no import map). Evaluates the code wrapped by `Blocky3D.cartFunctionSource` (a function returning the hooks, so `let`/`const` hooks are found and Restart can run it again) with `(0, eval)` and `//# sourceURL=cart.js`, so errors carry line numbers. Talks to the IDE through `postMessage` (`ready` → `run` → `started` / `error` / `log`). |
| `js/export.js`, `js/zip.js` | **Export**: `<slug>.zip` (slug from the cart name) with `index.html` and `<slug>.js` = runtime bundle + `Blocky3D.install(<cart data>)` + `Blocky3D.start(function () { <the cart's code>; return <hooks> })`. Syntax-checks the code first. `zip.js` is a dependency-free zip writer using the browser's `CompressionStream('deflate-raw')` when available. |
| `index.html`, `js/ide.js`, `css/ide.css` | The IDE: CodeMirror 5 code tab (falls back to a textarea), map editor (layer grid with a ghost of the layer below, orbit preview), tile editor (three face canvases, pencil and fill, right-click eyedropper), Info tab, console. Autosaves to `localStorage` under `blocky3d.cart.v1`. Save and Open use `.b3d.json`. |
| `js/preview.js` | The orbit viewer used by the Map, Tile and Vox editors. `setVox` shows a model with an onion-skin ghost and the pivot; `hitVox` raycasts a click to a voxel face (or the floor grid). |
| Mobile layout | Phone layout below 820px wide (`MOBILE` in `js/ide.js` must match the `max-width: 820px` block in `css/ide.css`): one panel at a time, compact two-row header, and the game pane becomes a **Game** tab (`body[data-tab="game"]`) that Run switches to. The game's touch controls come from the player page itself (`js/shell.js`). Touch stand-ins for right-click: tile 0 erases on the map, the **Pick** tool is the eyedropper. |
| `js/audio.js` | Sound and music: synth (`renderNotes`), sound and pattern string formats, `renderPattern`/`nextPattern`, `SfxPlayer` (4 sfx channels, caching, loop release, the music scheduler, positions for the editors' cursors). No Three.js dependency, so the IDE imports it directly. |
| `js/cart.js` | Cart format, `normalizeCart`, `emptyCart`, and `demoCart` (a title card made with `rectfill`/`rect`/scaled `print`, castle, drawbridge, a voxel hero with a walk cycle, voxel guards recolored with `pal`, spinning voxel gems, six sound effects, a two-pattern looping song in C minor pentatonic, a run timer and a best time kept with `save`/`load`). The demo models, sounds and song are generated in code (`figure`, `makeVox`, `makeSfx`, `makePattern`). |
| `js/shell.js` | The game page around the canvases: layout CSS, touch controls, pause/mute/fullscreen buttons (see **Game page**). Part of the runtime bundle. |
| `js/font.js` | The 7×10 pixel font, `drawText` (optional outline and scale) and `textWidth`. |
| `js/apidocs.js` | Content for the Info tab (its first section shows the version). **Update it whenever the API changes.** |
| `js/version.js`, `CHANGELOG.md` | The version number and the release notes. |

**Rendering details**

- `THREE.ColorManagement` is disabled and output is linear, so palette hex values reach the screen unchanged.
- Shaders are `ShaderMaterial` and use dynamic indexing into uniform arrays, which needs WebGL2.
- Textures **must** stay `NearestFilter` with no mipmaps. Filtering would blend indices into unrelated colors.
- The shader samples texel centers computed from the face UV, so the atlas never bleeds between tiles.
- Each pooled draw object has its own material, and the remap, transparency, outline color and draw id are copied into it on every draw.
- The engine renders the scene into a 256×256 multiple-render-target (color + draw info) with a depth texture, then the outline pass draws to the canvas. The editor previews render straight to their canvas; the extra shader output is simply ignored there.

**Cart format (JSON)**

```
{ version, name, code, palette?, tiles: [null, {top, side, bottom}...], maps: [{name, w, h, d, origin, data(base64)}],
  vox: [{name, pivot, data(base64, 512 bytes)}], sfx: [string or null, ...],
  music: [pattern string or null, ...], scale?: {snap, root, type} }
```

- Map data is flattened as `x + w * (y + h * z)`.
- In tile textures, row 0 is the top row of the image.

**Dependencies**

- three@0.170.0, in two places that must match: `package.json` (bundled into the runtime) and the import map in `index.html` (used by the editor previews in `js/preview.js`).
- CodeMirror 5.65.18 from cdnjs, and Google Fonts (IBM Plex Sans, JetBrains Mono), for the IDE only.
- esbuild, a dev dependency for building the runtime bundle.

**Engine change workflow:** after editing `js/core.js`, `js/engine.js`, `js/font.js`, `js/audio.js`, `js/shell.js`, `js/boot.js` or `js/version.js`, run `npm install` (once) and `npm run build`, and commit `runtime/blocky3d.runtime.js` and `standalone_demo/` (the build also re-exports the demo). Run in the IDE uses the bundle, so changes don't show up until you rebuild. The GitHub Action in `.github/workflows/runtime-bundle.yml` fails if the committed bundle or demo is stale. Editing `js/cart.js` or `js/export.js` also changes the demo, so rebuild after those too.

**Exported games** must stay fully standalone: two files, no network requests, working from `file://`. Don't add CDN loads, ES modules (they fail from `file://`) or extra asset files to the export.

## Testing

There's no test suite in the repo yet. It was verified with Playwright and headless Chromium: launch with `--use-gl=swiftshader --enable-unsafe-swiftshader`, which supports WebGL2.

Because the sandbox couldn't reach the CDNs, the tests served the repo with `python -m http.server` and used `page.route` to serve three.js and CodeMirror from a local `npm install three@0.170.0 codemirror@5.65.18`. The game player no longer needs that, since it uses the committed bundle.

What was checked:

- The demo plays: lowering the bridge and walking into the castle works.
- Map painting, tile painting, and autosave persistence after a reload.
- Error → line number → click jumps to the line.
- An API check cart covering:
  - `mget` and `mgetw`, unrotated and rotated.
  - Sphere push-out for pitched, yawed and rolled maps.
  - `map_set_origin` keeping the map in place.
  - `msetw`, `pal` on primitives, and the math helpers.
- Rays: `mray` on an unrotated map (straight down onto a block and the floor, from the side, up and out of range for a miss, starting inside a block, an unnormalized direction); 400 random rays through a pitched, yawed and rolled map with a moved pivot against brute-force stepping with `mgetw` (all 209 hits on the same block and face, distance within 0.001); clicking on three projected points of a rendered map gives the expected blocks and faces; `mouse_ray` in mode 2 points straight down the view, and a corner ray matches the field of view.
- Outer-only outlines: a voxel ball, a figure with an arm in front of its body and a rounded map hill, with `outline(0)` and `outline(0, false)` side by side at 1× and 3× (the ball and hill lose their step lines, the arm loses its overlap line, edges against the background stay); the default renders identically to the previous runtime.
- Outlines: the demo with `outline(0)` (silhouettes, creases, primitives, a different outline color on the player), a box-shaped map with a notch (every visible edge outlined), and a castle wall with carved notches. Frame time under SwiftShader is the same with outlines on and off (about 16.5 ms).
- UI: `rect`/`rectfill` (including reversed corners and `pal`), `print` at scale 2, stretched (4×2, 2×5) and with/without outline, the return value, and the demo title card.
- Vox: a test model drawn plain, yawed, pitched, scaled, squashed, recolored with `pal` and with/without outlines; the demo's hero walks and turns, guards march; editor painting (grid and 3D click, mirror, Erase, Fill, Pick), onion skin, playback, on desktop and at phone size.
- Pause/sound/save: every demo sound renders to non-silent audio; finishing a run saves the best time and the IDE shows it; Enter pauses, Screenshot downloads a PNG at the active resolution without the menu, Resume and Restart work (Restart shows the saved best on the title card); the Sfx tab draws, loops, plays with a cursor and accepts a pasted string; the exported game pauses offline.
- Resolution: the demo with outlines at 1×, 2× and 3× (canvas 256/512/768, outline thickness matched, smoother edges); switching from the pause menu and the stored choice; a 2× screenshot is 512×512.
- Music: both demo patterns render at 4.27 s with no clipping (peak under 0.5); the song flows 0 > 1 > 0 > 1; stop and end-of-song work; the Music tab plays, follows into the next pattern, and edits are saved; snapping to C minor pentatonic keeps drawn notes in {C, Eb, F, G, Bb}, and "Snap this sound" to A major moves them all into that scale; layouts checked on desktop and phone.
- Gamepads (simulated by replacing `navigator.getGamepads` in the test browser): keyboard and pad 1 both drive player 0; pads in slots 2, 3, 4 become players 1-3; stick and d-pad directions, O/X face buttons, `btnp` edges; unplugging pad 1 promotes the next pad to player 0; Start pauses.
- Mouse (pointer lock mocked in the test browser): position mapping, all three buttons including clicks shorter than a frame, wheel, context menu blocked; mode 2 swallows the capturing click, gives deltas, losing the lock pauses, hover and click on the menu, Resume re-locks; touch tap in mode 1 and drag deltas in mode 2.
- Gamepad extras: every button 7-18 read individually; both sticks (full push 0.6/-0.8 on the right stick, 0.9 up reading -0.88 after rescaling, 0.1 inside the dead zone reading 0); keyboard arrows through `stick(0)` including a diagonal of 0.71/-0.71; the demo still walks into the castle on the keyboard.
- Game page: the standalone demo at desktop (system buttons only, touch controls appear after a touch), desktop portrait, phone landscape and portrait, and tablet, with no page scrolling; mute toggles and is remembered after a reload, pause and fullscreen work; in the IDE at phone size the d-pad rolls right → up-right → up, a second finger presses O at the same time, and the pause button opens the menu; mouse tests still pass inside the new page. Pause fixes (the old build fails each of these): the audio context stays suspended through clicks, arrow keys and other keys while paused and runs again after Resume; the first-ever gesture being the pause tap leaves sound suspended; Enter twice 50 ms apart, and a pause tap followed by a stray click 150 ms later, both leave the game paused. With the menu on its own canvas: no `getImageData` calls at all; at phone size the menu stays visible through the pause, while moving between items, after Screenshot and after a Resolution change; the screenshot has the game's text and no menu; resume clears it; clicking the menu with the mouse still works. Soft restart, on a phone-sized exported demo: fullscreen on, play (bridge lowered, timer at 6.9 s), Restart from the menu: no page reload, still fullscreen, title card back, bridge up, timer from 0, and the d-pad drives the hero again; Restart in the IDE shows the saved best; error line numbers unchanged.
- Export: the zip holds the two files and passes an integrity test; the exported game plays from `file://` with all network requests blocked (zero requests made); a runtime error shows on screen; a syntax error refuses the export.

A small `tests/` folder built this way would be a good addition.

## Open items and next steps

- **Alpha feedback:** real-device testing, especially iPhone/iPad Safari (untested) and Android browsers other than the one the owner used. The phone pause and restart bugs were found that way and couldn't be reproduced in emulation, so take device reports seriously even when tests pass.
- **Riding moving maps**: carrying the player along on a moving or rotating map. One idea is to have the engine report each map's movement since the last frame.
- Undo in the map and tile editors.
- Palette editing in the IDE. For now, change `palette[i]` from code.
- Faces between two solid blocks are always culled, even if a tile has `palt` transparency. That's fine for now.
- Games can't add their own pause menu items yet (PICO-8's `menuitem`).

## Working with the owner

- Keep explanations plain and practical.
- Discuss API design before changing it. API decisions were made deliberately, one at a time.
- Keep the README, the Info tab (`js/apidocs.js`), `CHANGELOG.md` and this file in sync with API changes.
