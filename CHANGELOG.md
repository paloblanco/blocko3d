# Changelog

BLOCKO3D was called blocky3D until 2026-10-29; older entries use the old name.

## Unreleased

- The IDE links to the GitHub repo: a small **GitHub ↗** link at the right of the header, and at the top of the Info tab (phones show only the Info tab one, since their header has no room).
- **More for `b3d`**, from an agent's report on adding star collecting to Star Observatory:
  - Test hooks for `run` and `shot`: `--eval "code"` after `_init`, `--at 50:"code"` at the start of a frame, and `--watch "expr"` (or `--every n`) to print a value when it changes. They see the game's own variables, so tests no longer need edited copies of the game.
  - `b3d map <game> --at x,z [--scene s]`: what's in one column of the world, and the heights you can stand at.
  - `b3d check` warns about scene markers buried in a block, floating above the floor or over nothing.
  - Warnings now have codes, only `check` lists them (other commands print a count), and a project folder can accept one in `cart.json` (`"ok": ["big-map"]`).
  - `b3d info` lists every asset by number and name; `b3d docs` and `b3d api <name>` print the guide and the API from the tool itself; `b3d new` starts a small working game.
  - `unpack` and `new` write a short `CLAUDE.md` for AI agents into a game folder that has none.
- The repo's `CLAUDE.md` is now a short pointer; the engine notes it held moved to `docs/ENGINE.md`, so an agent making a game doesn't load them.

- **The `b3d` command**: BLOCKO3D from a terminal, for text editors, git, scripts and AI agents. Install it with `npm install -g github:paloblanco/blocko3d`. [MAKING_GAMES.md](MAKING_GAMES.md) explains it all.
  - `b3d unpack` / `b3d pack` turn a cart into a **project folder** of small, readable files and back: `main.js`, one text file per tile, vox model and sound, `music.txt`, the maps (as bytes, or as a script that builds them), `cart.json`, `scenes.json` and `cover.png`. A cart saved in the IDE comes back from `unpack` + `pack` byte for byte, so the IDE and an editor can take turns on one game.
  - `b3d check` checks every limit and format and the code's syntax, naming the file and line of each problem.
  - `b3d shot` and `b3d run` run a game headless with scripted input (`"o@30, up:60-200, p1:x@5"`), save a screenshot and print `printh` output. Runs repeat exactly.
  - `b3d render` draws one map, vox model or the tile sheet; `b3d sfx render` writes a sound or the song to a WAV file and reports its levels.
  - `b3d export` makes the same files as the Export button.
- `docs/API.md`: the API reference as one Markdown page, made from the Info tab. The Info tab gains **Limits** and **Command line** sections.
- `srand(n)` seeds `rnd`, so the same seed gives the same numbers every run; `srand()` goes back to unseeded.
- Tiles and sounds can have a **name** (a field next to the number in the Tile and Sfx tabs), saved in the cart. Older carts open unchanged.

- **Renamed to BLOCKO3D**, with the new brand: logo in the IDE header and on the demo list page, a new favicon and app icon, a share image, and the castle demo's title card. The repo is now `paloblanco/blocko3d` and the site https://paloblanco.github.io/blocko3d/. Autosaved carts, game saves and settings carry over. The runtime file is now `runtime/blocko3d.runtime.js` and its global `Blocko3D` (`Blocky3D` still works). The brand kit is in `brand/`.

- **Editors:** the Map, Vox and Scene tabs have **Undo** and **Redo** (buttons, Ctrl+Z and Ctrl+Shift+Z or Ctrl+Y). Map and Vox can paint layers seen from the **top, front or side**, and the Scene tab can drag things across the ground or up and down an upright plane. The Vox tab can **outline every voxel** in its 3D view.

- **The IDE is installable and works offline.** Install it from Chrome or Edge (the icon in the address bar) or Safari on a Mac (File → Add to Dock): it opens in its own window and keeps working with no connection, including Run, Export, the Info tab and the demos. Online it always loads the latest version. CodeMirror, Three.js and the fonts now come from the repo's `vendor/` folder instead of other websites.

- `map_reload(m)` puts cart map m's blocks back the way the cart has them (only the blocks; its position and angle stay); `map_reload()` does every cart map. Copies and `map_new` maps aren't affected. Bumper Arena uses it to bring the arena back each round.

- **Scenes.** A new **Scene** tab arranges copies of maps (position, angle, an optional name) and vox markers (model, position, yaw) into a level, in a 3D view where you click, drag, nudge and turn things. `scene_load(n)` builds scene n in a game and returns `{ maps, named, things }`: fresh map copies already in place, the named ones, and the markers for your code to turn into the player's start, pickups and so on. Loading again gives an undamaged level. Deleting a map or vox model also removes its uses in scenes.
- `map_copy(m)` makes a new map with its own copy of map m's blocks and placement; `map_stamp(src, dst, x, y, z)` copies one map's blocks into another.
- A new demo, **Village**: two levels built as scenes, with one house map placed many times and each house's door opening on its own.

- `mpush(maps, x, y, z, r)` pushes a sphere out of one map or a list of maps and returns `[x, y, z, nx, ny, nz, ground]`: the new position, which way it was pushed, and the map it's standing on (or -1). Collision for a walker, a car or a bouncing ball is now a line or two. `lerp(a, b, t)` blends numbers or arrays. The demos use both.
- New helpers for the things 3D games keep writing by hand: `dist(a, b)`, `dir3(yaw, pitch)`, `yaw_to(dx, dz)`, `angdiff(a, b)`, `cam_orbit(target, yaw, pitch, dist)`, `printc(str, y, ...)` (centered, also within a clip area) and `textw(str, sx)`. All the demos now use them.
- `clip(x0, y0, x1, y1)` limits drawing to a rectangle of the screen, 3D and 2D alike, and each `clip()` starts a new 3D view with its own camera, centered in its rectangle: split screen, minimaps and mirrors. `cam_set_fov` now means the angle across the longer side of the view (unchanged on the full, square screen). A new demo, **Split Screen Racing**, shows it off.
- Exported games are **installable apps** (PWAs) when hosted on an https site: the zip now also holds `manifest.webmanifest`, `sw.js` and two icons made from the cover art. Players can add the game to their home screen; it opens full screen and plays offline. The game still runs from just `index.html` and its `.js`, as before. The standalone demos are installable too. On computers (Chrome, Edge, Safari on a Mac) an installed game opens in its own window and keeps its fullscreen button.
- A game without cover art now shows its name properly on the cover screen (it was squashed), above the play button.
- `touch_set_mode(n)` chooses the touch control on phones and tablets: 0 the d-pad (default), 1 an analog circle (touch anywhere in it for direction and strength, read with `stick(0)`), 2 left/right only, 3 up/down only. The pause menu always gets the d-pad. Tilt Maze and Third Person now use the analog circle.
- `freeze(n, fn)`: for the next `n` updates, the game runs `fn` (or nothing) instead of `_update`, while `_draw` keeps drawing. For hit-stun and similar pauses, in place of PICO-8's `flip()`. Bumper Arena uses it: hard bumps freeze the game for a moment and shake the camera.
- Fixed: on phones, in games that capture the mouse (like Third Person and First Person), the d-pad and dragging on the screen stopped working after pausing and resuming. Resume now only captures the mouse again when you were using a mouse.
- Exported games open on a **cover screen**: cover art (or the game's name) and a play button. Nothing loads, runs or plays until the player clicks, taps, presses a key or presses A or Start on a gamepad. The cover is captured in the IDE with **Capture cover** in the pause menu (IDE only) and saved in the cart. Every demo has a cover, and the demo list page shows them.
- When the browser won't start 3D graphics (WebGL 2), the game now says so in plain words with things to try, instead of a cryptic three.js error. Reported on an iPhone as `getShaderPrecisionFormat(...).precision`.
- `webgl-check.html`: a page to open on a device where games won't start; it shows whether WebGL 2 works there, for a screenshot.
- `mtow(m, x, y, z)` gives where a point in map m's own grid is in the world right now, and `wtom(m, x, y, z)` goes the other way (not rounded to a cell). Tilt Maze and Scrambler now use them instead of their own rotation math.
- Three more demos: **Builder** (place and dig blocks, the build is saved), **Bumper Arena** (up to 4 players on gamepads, the computer drives the rest) and **Third Person** (floating islands, an orbit camera, and riding moving platforms with `wtom`/`mtow`).
- Four new demos, in the IDE's Demos menu and as standalone pages: **Block Pop** (clicking blocks), **Tilt Maze** (collision on a rotated map), **Scrambler** (maps spinning on pivots) and **First Person** (mouse-look and a dungeon).
- In mouse mode 2, moving the mouse no longer counts toward `mouse_delta()` until it's captured, so reaching for the game to click doesn't spin a mouse-look view. Touch drags still count.
- Every demo is exported to its own page under `standalone_demo/`, and `standalone_demo/` itself is now a page linking to them (the castle moved to `standalone_demo/castle/`).
- The IDE's **Demo** button is now a **Demos** menu, listing the carts in `demos/` (see the README for adding one). The castle demo's cart name is now `castle`, so a best time saved under the old name `demo` doesn't carry over.
- `mouse_ray()` gives the ray from the camera through the cursor (the screen center when the mouse is captured), and `mray(m, ox, oy, oz, dx, dy, dz, maxd)` finds the first block of map m along any ray, with the face it hit, so clicking or tapping on blocks takes two lines.
- `outline(c, false)` draws only the outer outline of maps and vox models: no lines at corners, steps or overlaps inside them. Useful for round voxel shapes. `outline(c)` is unchanged.

## 0.1.0-alpha (2026-10-26)

The first version ready for testing by people other than its makers. Everything below works and has been checked in a headless browser (Chromium, with phone and tablet sizes emulated), but has had little time on real devices, and the API can still change.

### Engine

- **Drawing:** voxel maps (`map`) with their own position, pivot and rotation, so maps can move and turn; 8×8×8 voxel models (`vox`) with a pivot, rotation and scaling; `cube`, `sphere` and `line3`.
- **Look:** 8×8 tiles with top, side and bottom textures, a 32-color palette (`palette`, `pal`, `palt`, `bg`), no lighting, a square 256×256 screen, and optional 1-pixel outlines (`outline`) that follow every visible edge.
- **Collision:** `mget`/`mset` on the grid, and `mgetw`/`msetw` at world points, including a sphere query that returns which way to push out and how far.
- **Camera:** `cam_set_pos`, `cam_set_lookat` and `cam_set_fov` (in turns).
- **Text and UI:** `print` with a 7×10 font (upper and lower case), an outline color and whole-number scaling; `rect` and `rectfill`.
- **Sound:** `sfx` (64 sounds of 32 notes, 8 waveforms, 8 effects, 4 channels) and `music` (64 patterns of up to 4 sounds, with loops and fades).
- **Input:** `btn`/`btnp` for up to 4 players (keyboard plus gamepads, every gamepad button numbered), `stick` for analog sticks, and mouse and touch with `mouse_set_mode` (off, click, or captured for mouse-look) plus `mouse_pos`, `mouse_delta`, `mouse_wheel` and `mouse_locked`.
- **Save data:** `save` and `load` keep one JSON value per game in the browser.
- **Pause menu** (Enter, P or Start): Resume, Restart (runs the cart again without reloading the page), Screenshot (a PNG without the menu) and Resolution (1×, 2× or 3× for smoother 3D edges).

### IDE (one static web page)

- Tabs for Code, Map, Tile, Sfx (with scale snapping), Music, Vox (with onion skin and animation playback) and Info (the API reference).
- Run in a sandboxed frame, errors with clickable line numbers, autosave in the browser, Save and Open as `.b3d.json`, and a demo cart.
- A phone layout: one panel at a time, with the game in its own tab.

### Exported games

- **Export** makes a zip of two files, `index.html` and `<game>.js`, that runs from disk with no network and works on itch.io and Game Jolt.
- The page around the game has pause, mute and fullscreen buttons, and on touch screens a d-pad and O and X buttons, beside the game in landscape and under it in portrait. Run in the IDE uses the same page.
- `standalone_demo/` holds the castle demo exported this way.

### Known gaps

- Not yet tried on real iPhones or iPads (Safari), nor on most Android browsers; the touch controls and pause were fixed from reports on one real phone.
- No fullscreen button on iPhone Safari, which doesn't allow it.
- No undo in the map and tile editors, no palette editor (change `palette[i]` in code), no custom pause menu items, no clicking on blocks with the mouse (`mouse_ray`), and no analog trigger values.
