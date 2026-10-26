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

**Pause menu** (asked for by the owner): Enter, NumpadEnter or P (button 6 in `KEYMAP`) pauses, handled by the engine, not the game. While paused, `_update`/`_draw` don't run, `time()` doesn't advance and the audio context is suspended. The game's 2D overlay is snapshotted (`frozen`) and the menu drawn over it in the default palette, so it's readable whatever the game did to `palette`. Items: Resume, Restart, Screenshot, Resolution (see below). Restart calls `onRestart` (default `location.reload()`; in the IDE the player posts `restart` and the IDE runs the cart again). Screenshot composites the GL canvas (`preserveDrawingBuffer: true`) and the frozen overlay at the active resolution with no menu, and downloads `<slug>_<timestamp>.png`. The touch controls have a ☰ button that sends Enter.

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

**Input and gamepads** (asked for by the owner, PICO-8 style): `btn(i, p)` / `btnp(i, p)` with player p 0-3 (default 0). **Player 0 = the keyboard OR the first connected gamepad**; the 2nd, 3rd and 4th connected gamepads are players 1-3, ordered by the browser's gamepad slot (gaps skipped), so if the first pad is unplugged the next one becomes player 0. Pads are polled once per `_update` step (`pollInput`). Standard mapping: d-pad (12-15) or left stick (axes 0/1, deadzone 0.5) for directions; O = A or X (0, 2); X = B or Y (1, 3); Start (9) = button 6, pause, from any player. Any player can drive the pause menu. The IDE iframe has `allow="autoplay; gamepad"`. Browsers only expose a pad after one of its buttons is pressed, and pad presses don't count as a gesture for unlocking sound. `btnp` has no auto-repeat (PICO-8's does).

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
| `js/boot.js` | `install(cart, opts)` creates the engine and puts the API on `window` with `Object.defineProperties` (keeps `palette` as a getter/setter); `start(hooks?)` finds `_init`/`_update`/`_draw` via `HOOKS_EXPR` and runs the loop; `showError` draws errors on screen for exported games. |
| `runtime/blocky3d.runtime.js` | **Built file, committed.** `tools/runtime-entry.js` bundled by esbuild (`npm run build`): engine + boot + font + three.js as one minified IIFE exposing `window.Blocky3D`. Used by both `player.html` (Run) and exports, so Run matches Export. |
| `player.html` | Runs a cart in an **iframe** using the runtime bundle (classic script, no import map). Evaluates code with `(0, eval)`, appending `HOOKS_EXPR` so `let`/`const` hooks are found, and `//# sourceURL=cart.js` so errors carry line numbers. Talks to the IDE through `postMessage` (`ready` → `run` → `started` / `error` / `log`). |
| `js/export.js`, `js/zip.js` | **Export**: `<slug>.zip` (slug from the cart name) with `index.html` and `<slug>.js` = runtime bundle + `Blocky3D.install(<cart data>)` + the cart's code as plain top-level script + `Blocky3D.start()`. Syntax-checks the code first. `zip.js` is a dependency-free zip writer using the browser's `CompressionStream('deflate-raw')` when available. |
| `index.html`, `js/ide.js`, `css/ide.css` | The IDE: CodeMirror 5 code tab (falls back to a textarea), map editor (layer grid with a ghost of the layer below, orbit preview), tile editor (three face canvases, pencil and fill, right-click eyedropper), Info tab, console. Autosaves to `localStorage` under `blocky3d.cart.v1`. Save and Open use `.b3d.json`. |
| `js/preview.js` | The orbit viewer used by the Map, Tile and Vox editors. `setVox` shows a model with an onion-skin ghost and the pivot; `hitVox` raycasts a click to a voxel face (or the floor grid). |
| Mobile layout | Phone layout below 820px wide (`MOBILE` in `js/ide.js` must match the `max-width: 820px` block in `css/ide.css`): one panel at a time, compact two-row header, and the game pane becomes a **Game** tab (`body[data-tab="game"]`) that Run switches to. Touch screens (`pointer: coarse`) get on-screen buttons (`#touchpad`); the IDE posts `{type: 'key', code, down}` to the player iframe, which dispatches a matching `KeyboardEvent`, so the engine needs no touch code. Touch stand-ins for right-click: tile 0 erases on the map, the **Pick** tool is the eyedropper. |
| `js/audio.js` | Sound and music: synth (`renderNotes`), sound and pattern string formats, `renderPattern`/`nextPattern`, `SfxPlayer` (4 sfx channels, caching, loop release, the music scheduler, positions for the editors' cursors). No Three.js dependency, so the IDE imports it directly. |
| `js/cart.js` | Cart format, `normalizeCart`, `emptyCart`, and `demoCart` (a title card made with `rectfill`/`rect`/scaled `print`, castle, drawbridge, a voxel hero with a walk cycle, voxel guards recolored with `pal`, spinning voxel gems, six sound effects, a two-pattern looping song in C minor pentatonic, a run timer and a best time kept with `save`/`load`). The demo models, sounds and song are generated in code (`figure`, `makeVox`, `makeSfx`, `makePattern`). |
| `js/font.js` | The 7×10 pixel font, `drawText` (optional outline and scale) and `textWidth`. |
| `js/apidocs.js` | Content for the Info tab. **Update it whenever the API changes.** |

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

**Engine change workflow:** after editing `js/core.js`, `js/engine.js`, `js/font.js`, `js/audio.js` or `js/boot.js`, run `npm install` (once) and `npm run build`, and commit `runtime/blocky3d.runtime.js`. Run in the IDE uses the bundle, so changes don't show up until you rebuild. The GitHub Action in `.github/workflows/runtime-bundle.yml` fails if the committed bundle is stale.

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
- Outlines: the demo with `outline(0)` (silhouettes, creases, primitives, a different outline color on the player), a box-shaped map with a notch (every visible edge outlined), and a castle wall with carved notches. Frame time under SwiftShader is the same with outlines on and off (about 16.5 ms).
- UI: `rect`/`rectfill` (including reversed corners and `pal`), `print` at scale 2, stretched (4×2, 2×5) and with/without outline, the return value, and the demo title card.
- Vox: a test model drawn plain, yawed, pitched, scaled, squashed, recolored with `pal` and with/without outlines; the demo's hero walks and turns, guards march; editor painting (grid and 3D click, mirror, Erase, Fill, Pick), onion skin, playback, on desktop and at phone size.
- Pause/sound/save: every demo sound renders to non-silent audio; finishing a run saves the best time and the IDE shows it; Enter pauses, Screenshot downloads a PNG at the active resolution without the menu, Resume and Restart work (Restart shows the saved best on the title card); the Sfx tab draws, loops, plays with a cursor and accepts a pasted string; the exported game pauses offline.
- Resolution: the demo with outlines at 1×, 2× and 3× (canvas 256/512/768, outline thickness matched, smoother edges); switching from the pause menu and the stored choice; a 2× screenshot is 512×512.
- Music: both demo patterns render at 4.27 s with no clipping (peak under 0.5); the song flows 0 > 1 > 0 > 1; stop and end-of-song work; the Music tab plays, follows into the next pattern, and edits are saved; snapping to C minor pentatonic keeps drawn notes in {C, Eb, F, G, Bb}, and "Snap this sound" to A major moves them all into that scale; layouts checked on desktop and phone.
- Gamepads (simulated by replacing `navigator.getGamepads` in the test browser): keyboard and pad 1 both drive player 0; pads in slots 2, 3, 4 become players 1-3; stick and d-pad directions, O/X face buttons, `btnp` edges; unplugging pad 1 promotes the next pad to player 0; Start pauses.
- Export: the zip holds the two files and passes an integrity test; the exported game plays from `file://` with all network requests blocked (zero requests made); a runtime error shows on screen; a syntax error refuses the export.

A small `tests/` folder built this way would be a good addition.

## Open items and next steps

- **Riding moving maps**: carrying the player along on a moving or rotating map. One idea is to have the engine report each map's movement since the last frame.
- Undo in the map and tile editors.
- Palette editing in the IDE. For now, change `palette[i]` from code.
- Faces between two solid blocks are always culled, even if a tile has `palt` transparency. That's fine for now.
- Exported games have no on-screen touch controls yet (only the IDE does), so they need a keyboard.
- Games can't add their own pause menu items yet (PICO-8's `menuitem`).
- GitHub Pages isn't enabled yet; the owner can turn it on in Settings → Pages → deploy from `main`.

## Working with the owner

- Keep explanations plain and practical.
- Discuss API design before changing it. API decisions were made deliberately, one at a time.
- Keep the README, the Info tab (`js/apidocs.js`) and this file in sync with API changes.
