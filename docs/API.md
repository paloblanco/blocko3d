# BLOCKO3D 0.1.0-alpha API

<!-- Made by tools/build-docs.mjs from js/apidocs.js (the IDE's Info tab). Don't edit by hand. -->

An alpha: everything here works and is tested, but the API can still change. Found a bug or something confusing? Note the version, your device and browser, whether it was in the IDE or an exported game, and what you did just before.

Making games outside the IDE (the `b3d` command and the project folder): see [MAKING_GAMES.md](../MAKING_GAMES.md).

- [Game loop](#game-loop)
- [Maps](#maps)
- [Scenes](#scenes)
- [Vox models](#vox-models)
- [Primitives](#primitives)
- [Palette](#palette)
- [Outlines](#outlines)
- [Sound](#sound)
- [Music](#music)
- [Save data](#save-data)
- [Pause menu](#pause-menu)
- [Camera](#camera)
- [Text, rectangles, input and time](#text-rectangles-input-and-time)
- [Mouse and touch](#mouse-and-touch)
- [Math](#math)
- [Conventions](#conventions)
- [Limits](#limits)
- [Command line (b3d)](#command-line-b3d)
- [Cart format](#cart-format)

## Game loop

Define any of these three functions in your code. Everything else is already global.

- **`_init()`**: Called once when the game starts.
- **`_update()`**: Called 60 times per second. Move things and check input here.
- **`_draw()`**: Called after each update. Drawing is immediate-mode: anything you want on screen must be drawn every frame.

## Maps

A map is a 3D grid of tile indices (0 = empty). Maps from the Map tab are numbered 0, 1, 2… Each map has an origin (pivot, in its own block coordinates), a world position for that origin, and an angle.

- **`map(m)`**: Draw map m with its current position and angle.
- **`map_new(w, h, d, origin?)`**: Create an empty map of w × h × d blocks. Returns its index.
- **`map_copy(m)`**: A new map with its own copy of map m's blocks, origin, position and angle. Returns its index. Draw a house five times as five copies, and each can move or change on its own.
- **`map_reload(m)`**: Put cart map m's blocks back the way the cart has them: undo digging, crumbling, opened doors. Only the blocks: its position, angle and origin stay as they are. map_reload() does every cart map. Only cart maps (the ones from the Map tab) can be reloaded; copies and map_new maps are left alone (a scene comes back fresh with scene_load).
- **`map_stamp(src, dst, x, y, z)`**: Copy map src's solid blocks into map dst, with src's block (0, 0, 0) landing on dst's block (x, y, z). Empty blocks in src leave dst as it was; blocks past dst's edge are cut off. For scenery that never moves: one big map is one mesh and one collision check.
- **`map_set_pos(m, [x, y, z])`**: Put the map's origin at this world position.
- **`map_set_angle(m, [pitch, yaw, roll])`**: Rotate the map around its origin. Angles are in turns.
- **`map_set_origin(m, [x, y, z])`**: Move the pivot. The map stays where it is on screen.
- **`mget(m, x, y, z)`**: Tile index at a grid cell of map m (0 outside the map).
- **`mset(m, x, y, z, t)`**: Set a grid cell of map m to tile t.
- **`mgetw(m, x, y, z)`**: Look up the world point (x, y, z) in map m. Returns [t, xi, yi, zi].
- **`mgetw(m, x, y, z, r)`**: Sphere query. Returns [t, xi, yi, zi, nx, ny, nz, d]: the deepest block hit, plus the world-space direction (nx, ny, nz) and distance d to push the sphere out. t is 0 when nothing is hit.
- **`mpush(maps, x, y, z, r)`**: Collision in one call: pushes a sphere of radius r at x, y, z out of the solid blocks of map maps (a number, or a list like [0, 1, 2]), a few times over so corners work. Returns [x, y, z, nx, ny, nz, ground]: the new position; the overall direction it was pushed (all 0 if it touched nothing; ny > 0.5 means standing on something, ny < -0.5 a ceiling, a sideways push a wall); and the number of the map it stands on, or -1. Works on moved and turned maps. A walker: let [x, y, z, nx, ny, nz, g] = mpush([0, 1], px, py, pz, 0.4); px = x; py = y; pz = z; if (g >= 0 && vy < 0) vy = 0.
- **`msetw(m, x, y, z, t)`**: Set the block of map m at a world point.
- **`mtow(m, x, y, z)`**: Where a point in map m's own grid is in the world right now, as [x, y, z], using the map's position, origin and angle. Handy for anything attached to a moving or turned map: a flag on a tilting maze, a car on a spinning arm, a camera riding along.
- **`wtom(m, x, y, z)`**: The other way: where a world point is in map m's own grid, as [x, y, z]. Not rounded to a cell (mgetw does that). Keep something's position in a platform's grid and convert back each frame to ride it.
- **`mray(m, ox, oy, oz, dx, dy, dz, maxd?)`**: The first block of map m along a ray from (ox, oy, oz) in direction (dx, dy, dz), within maxd (default 100). Returns [t, xi, yi, zi, nx, ny, nz, d]: the tile, its grid cell, the face it hit as a grid direction (n), and the distance d along the ray. t is 0 when nothing is hit. Works on moved and rotated maps. Use it with mouse_ray() to click on blocks, or for line of sight.

```js
let [t, xi, yi, zi, nx, ny, nz, d] = mgetw(0, px, py, pz, 0.4)
if (t) { px += nx*d; py += ny*d; pz += nz*d }
```

## Scenes

A scene, made in the Scene tab, arranges copies of maps (each with a position, an angle and an optional name) and vox markers (a model number, a position and a yaw) into one world, such as a level. Scenes are numbered 0, 1, 2… The engine doesn't draw markers: they're a list for your code (the player's start, coins, enemies).

- **`scene_load(n)`**: Builds scene n and returns { maps, named, things }. maps: the numbers of fresh map copies, already placed, in the Scene tab's order; draw them and collide with them (mpush(s.maps, ...)). named: { name: map number } for the placements you named. things: [[v, x, y, z, yaw], ...] for the vox markers. The copies come from the maps as the cart has them, so loading a level again gives it back undamaged. Loading a scene throws away the copies the previous scene_load made (using one of those numbers is an error), and a reload reuses the same numbers.

```js
let s = scene_load(0)
for (let [v, x, y, z, yaw] of s.things) if (v == 0) start = [x, y, z]
// _draw: for (let m of s.maps) map(m)
// _update: mpush(s.maps, px, py, pz, 0.4); map_set_pos(s.named.lift, ...)
```

## Vox models

Models from the Vox tab, numbered 0-63: 8 × 8 × 8 voxels in palette colors. Unscaled, a model fills one block (8 voxels = 1 block). Each model has a pivot (set in the Vox tab, default bottom center): x, y, z is where the pivot goes, and rotation and scaling happen around it. pal(), palt() and outline() apply.

- **`vox(n, x, y, z)`**: Draw model n with its pivot at (x, y, z).
- **`vox(n, x, y, z, pitch, yaw, roll)`**: Rotated, in turns, in the same order as maps (yaw, then pitch, then roll). The model's front is +z.
- **`vox(n, x, y, z, pitch, yaw, roll, s)`**: Scaled evenly by s.
- **`vox(n, x, y, z, pitch, yaw, roll, sx, sy, sz)`**: Scaled separately along the model's own axes (squash and stretch).

```js
// a walk cycle: models 1, 0, 2, 0, facing the way you move
let f = [1, 0, 2, 0][flr(t() * 8) % 4]
vox(f, px, py, pz, 0, yaw_to(dx, dz))
```

## Primitives

Simple shapes, colored with a palette index.

- **`cube(x, y, z, size?, c?)`**: Axis-aligned cube centered on (x, y, z). size defaults to 1, c to 7.
- **`sphere(x, y, z, r?, c?)`**: Low-poly sphere. r defaults to 0.5.
- **`line3(x1, y1, z1, x2, y2, z2, c?)`**: A 1-pixel line in 3D.

## Palette

Every color is a palette index from 0 to 31. Tile textures store indices too, so changing the palette recolors everything, including maps.

- **`palette`**: Global array of 32 colors (0xRRGGBB), defaulting to the PICO-8 extended palette. Change entries any time: palette[28] = 0x1478d4.
- **`pal(a, b)`**: For draws after this call, color a is drawn as color b.
- **`pal()`**: Reset all remaps and transparency.
- **`palt(i, on?)`**: Make color i transparent for following draws (on defaults to true).
- **`bg(c)`**: Set the background color.

```js
pal(8, 12)        // red becomes blue
map(enemy_ship)
pal()
```

## Outlines

A 1-pixel outline around whatever is drawn, computed from what is on screen. On maps, every visible edge is outlined: silhouettes, corners and the rims of holes. Like pal(), it applies to the draws that follow and stays set until changed. Off by default.

- **`outline(c)`**: Draws after this get an outline in color c (a palette index; pal() remaps apply), inner edges included.
- **`outline(c, false)`**: Only the outer outline: a line where each map or vox model meets the background or another draw, none inside it (no corner or step lines, no line where one part overlaps another). Good for round voxel shapes. Primitives are always drawn this way.
- **`outline()`**: No outline for draws after this.

```js
outline(0)       // black outlines
map(0)           // outlines every visible edge of the map
outline(0, false)
vox(3, bx, by, bz) // a round model: just its outer outline
sphere(px, py, pz, 0.4, 10)
outline()
```

## Sound

Sounds come from the Sfx tab, numbered 0-63: 32 notes each, with a pitch, waveform, volume and effect per note. There are 4 channels. Browsers only allow sound after the player presses a key or clicks, so the very first sound may be silent.

- **`sfx(n)`**: Play sound n on a free channel (or the one that has played longest).
- **`sfx(n, ch)`**: Play sound n on channel ch (0-3), replacing what was playing there.
- **`sfx(n, ch, offset, length)`**: Play only some notes: start at note offset, play length notes.
- **`sfx(-1) / sfx(-1, ch)`**: Stop all sounds / stop channel ch.
- **`sfx(-2, ch)`**: Let a looping sound on channel ch finish instead of looping again.
- **`sfx(str)`**: Play a sound string copied from the Sfx tab, without using a slot.

## Music

Songs come from the Music tab: 64 patterns, each playing up to 4 sounds at once. A pattern lasts as long as its longest non-looping sound; looping sounds repeat to fill it. Patterns play in order until one marked stop, a loop back (which jumps to the nearest loop start), or an empty pattern. Music has its own 4 voices, so sfx() never cuts it off.

- **`music(n)`**: Play the song from pattern n. If the player hasn't pressed a key or clicked yet, it starts as soon as they do.
- **`music(n, fade)`**: Fade in over fade milliseconds.
- **`music(-1, fade?)`**: Stop the music, optionally fading out over fade milliseconds.

## Save data

Keep data between plays, like a best time or unlocked levels. It is stored in the player's browser under the game's name, so renaming the game starts fresh. The IDE shows it under the game and can clear it.

- **`save(value)`**: Store any JSON value: a number, string, array or object (up to 64 KB). save(null) deletes it.
- **`load()`**: The value saved last time, or null if there is none.

```js
let data = load() || { best: 999 }
if (secs < data.best) save({ best: secs })
```

## Pause menu

Enter (or P) pauses any game, PICO-8 style: the game freezes, sounds pause, and a menu offers Resume, Restart (runs the game again from the start), Screenshot (saves the game screen as a PNG, without the menu) and Resolution; in the IDE it also has Capture cover, which makes the current screen the cover art an exported game shows, with a play button, before it starts. Up/down choose; O, X or Enter select; Enter again resumes. In games that use the mouse, the menu can also be clicked or tapped. Next to the game are buttons for pause, mute (remembered on that device) and fullscreen; on touch screens a d-pad and O and X buttons appear too, beside the game in landscape and under it in portrait. Resolution (left/right) renders the 3D view at 1×, 2× or 3× (256, 512 or 768 pixels square) for smoother edges; text and rectangles stay at 256, and outlines keep the same thickness. The choice is remembered on that device, and screenshots use it.


## Camera

One camera. The screen is square, 256 × 256 pixels.

- **`cam_set_pos([x, y, z])`**: Camera position.
- **`cam_set_lookat([x, y, z])`**: The world point the camera faces.
- **`cam_orbit(target, yaw, pitch, dist)`**: Put the camera dist away from target, looking at it. yaw and pitch are the way the camera looks (as in dir3), so a negative pitch looks down from above: cam_orbit(player, yaw, -0.1, 8) is a chase or orbit camera in one line. target is [x, y, z] or an object with x, y, z.
- **`cam_set_fov(f)`**: Field of view in turns, across the longer side of the view (on the full square screen, both ways). Default 0.25 (90°).
- **`clip(x0, y0, x1, y1)`**: Only draw inside this rectangle of the screen, corners included: 3D, text and rectangles. clip() draws everywhere again. Each clip() starts a new 3D view, centered in its rectangle, with its own camera: the camera, fov and bg as set by the time the next clip() or the end of _draw comes. So clip(0, 0, 127, 255), set a camera, draw; clip(128, 0, 255, 255), set another, draw again: split screen. A view drawn later sits on top of earlier ones (a minimap, a mirror). mouse_ray() uses the view under the cursor.

## Text, rectangles, input and time

- **`print(str, x, y, c?, oc?, sx?, sy?)`**: Draw text on top of the 3D view, at screen pixels (0-255). Each character is a 7 × 10 cell (upper and lower case). c is the color (default 7). oc adds an outline in that color; leave it off, or pass -1, for none. sx and sy scale the text by whole numbers (sy defaults to sx); the outline scales with it. A line of n characters is n × 7 × sx pixels wide (textw). Returns the x just past the text.
- **`printc(str, y, c?, oc?, sx?, sy?)`**: print, centered across the screen, or across the clip area when clip is on (so each half of a split screen centers on its own).
- **`textw(str, sx?)`**: How wide print(str) is, in pixels, at scale sx (the longest line). For right-aligning: print(s, 252 - textw(s), 4).
- **`rect(x0, y0, x1, y1, c?)`**: Outline of a rectangle on the same layer as print, corners included.
- **`rectfill(x0, y0, x1, y1, c?)`**: Filled rectangle, corners included. Text and rectangles are drawn in the order you call them, on top of the 3D view.
- **`printh(...)`**: Write a line to the IDE console, for debugging.
- **`btn(i, p?)`**: Is button i held by player p (0-3, default 0)? Buttons: 0 left, 1 right, 2 up, 3 down, 4 O, 5 X.
- **`btnp(i, p?)`**: Was button i pressed by player p this update?
- **`Gamepad buttons`**: 6 Start (also pauses), 7 A, 8 B, 9 X, 10 Y, 11 LB, 12 RB, 13 LT, 14 RT, 15 Select, 16 L3 (press left stick), 17 R3, 18 Home. 0-5 still work on a gamepad too: O is A or X, and X is B or Y. Use 7-10 to tell all four face buttons apart. 19-21 are the mouse buttons (see Mouse and touch).
- **`stick(i, p?)`**: Stick i (0 left, 1 right) of player p as [x, y], each -1 to 1; right and down are positive. A small dead zone reads as exactly 0. When the left stick is centered, stick(0) follows the d-pad or arrow keys instead, so analog movement also works on a keyboard.
- **`touch_set_mode(n)`**: Which control phones and tablets show on the left: 0 d-pad (the default), 1 analog circle (touch anywhere in it: direction and distance from the middle go to stick(0), and pushing past halfway also presses the arrow buttons), 2 left and right only (side-scrollers), 3 up and down only. While the game is paused the d-pad always shows; Restart goes back to the d-pad. Keyboards and gamepads are unaffected.
- **`Players`**: Player 0 is the keyboard (arrows or WASD; O = Z, C, N or space; X = X, V or M) together with the first gamepad. The 2nd, 3rd and 4th gamepads are players 1-3, in the order they connect. On a gamepad: d-pad or left stick to move, A or X for O, B or Y for X, Start to pause. Browsers only report a gamepad after a button on it is pressed.
- **`time() / t()`**: Seconds since the game started.
- **`freeze(n, fn)`**: For the next n updates, run fn instead of _update (or nothing, without fn). _draw keeps running, so the picture holds still: hit-stun on a big hit, a beat before a death. fn can draw an effect, like shaking the camera. Time keeps going. Calling freeze again replaces the current one; freeze(0) ends it.

## Mouse and touch

Off by default, so the mouse never gets in the way of keyboard and gamepad games. Pick a mode in _init(). Mouse buttons are buttons 19 (left), 20 (right) and 21 (middle) of player 0, so btn() and btnp() work for them; right-click no longer opens the browser menu.

- **`mouse_set_mode(m)`**: 0 off (the default; mouse and touch are ignored). 1 click: the cursor stays free, for pointing and clicking. 2 capture: the mouse is hidden and locked to the game, for mouse-look; it locks on the first click on the game (that click is not reported). Esc or switching away releases it and pauses the game; Resume captures it again.
- **`mouse_pos()`**: Cursor position as [x, y] in screen pixels, like print and rect (0-255 on the screen; it can go past that when the cursor is off the screen). Doesn't change while captured.
- **`mouse_delta()`**: How far the mouse moved since the last update, as [dx, dy] in pixels; right and down are positive. Works in both modes; use it for mouse-look in mode 2, where it only counts once the mouse is captured (or a finger drags on a touch screen), so moving the mouse to the game to click doesn't turn the view.
- **`mouse_wheel()`**: Wheel scroll since the last update, in notches (about 1 per click of the wheel); down is positive.
- **`mouse_locked()`**: Is the mouse captured right now (mode 2)? Handy for showing "click to play".
- **`mouse_ray()`**: The line from the camera through the cursor, as [ox, oy, oz, dx, dy, dz] (a start point and a direction of length 1), using the camera as last set. In mode 2 it goes through the middle of the screen, like a crosshair. Pass it to mray() to find the block under the cursor.
- **`Touch`**: Mode 1: a tap is a left click (button 19) at that spot. Mode 2: dragging a finger gives mouse_delta(), so mouse-look works on a phone. In either mode, the pause menu can be clicked or tapped.

```js
let yaw = 0, pitch = 0
function _init() { mouse_set_mode(2) }
function _update() {
  let [dx, dy] = mouse_delta()
  yaw += dx / 1000; pitch = mid(-0.2, pitch - dy / 1000, 0.2)
  if (btnp(19)) sfx(0)   // left click
}

// click to build, right-click to dig (mode 1)
let [t, xi, yi, zi, nx, ny, nz] = mray(0, ...mouse_ray())
if (t && btnp(19)) mset(0, xi + nx, yi + ny, zi + nz, 5)
if (t && btnp(20)) mset(0, xi, yi, zi, 0)
```

## Math

Angles are in turns: 1 is a full rotation.

- **`sin(a), cos(a)`**: Standard sine and cosine of an angle in turns.
- **`atan2(dx, dy)`**: Angle of a vector, in turns (0 to 1). For which way something faces in 3D, yaw_to is easier.
- **`dist(a, b)`**: Distance between two points: arrays ([x, y] or [x, y, z]) or objects with x, y and maybe z. Along the ground in 3D: dist([a.x, a.z], [b.x, b.z]).
- **`dir3(yaw, pitch?)`**: The direction [x, y, z] (length 1) for a yaw and pitch: yaw 0 looks along +z and turns toward +x, positive pitch looks up. Walking forward: let [fx, , fz] = dir3(yaw); x += fx * speed; z += fz * speed.
- **`yaw_to(dx, dz)`**: The yaw that faces along (dx, dz): what to give vox so a model faces the way it moves, or the angle toward a target.
- **`lerp(a, b, t)`**: The value t of the way from a to b (t from 0 to 1). Works on numbers and on arrays, element by element: lerp(camPos, target, 0.1) eases a position. Easing each update: x = lerp(x, goal, 0.1). Not for angles (it would go the long way round): use a += angdiff(a, b) * t.
- **`angdiff(a, b)`**: The shortest turn from angle a to angle b, between -0.5 and 0.5. Turning smoothly toward a target: yaw += angdiff(yaw, want) * 0.1.
- **`rnd(n?)`**: Random number from 0 up to n (default 1). rnd(array) picks an element.
- **`srand(n)`**: Seed rnd: after srand(n), rnd gives the same numbers every run (handy for levels made from a seed). srand() goes back to unseeded. Restart unseeds.
- **`flr, ceil, abs, sqrt, min, max, sgn, mid(a, b, c)`**: The usual helpers.

## Conventions

- **`Axes`**: y is up. One block is one world unit; block (xi, yi, zi) spans xi to xi+1 and so on.
- **`Rotation order`**: Yaw, then pitch, then roll. +z is forward: positive pitch tips +z up, positive yaw turns +z toward +x, positive roll turns +x toward +y.
- **`Rendering`**: No shading or lighting: every face is drawn exactly as textured.
- **`Tiles`**: Up to 63 tiles (1-63). Each has three 8 × 8 textures: top, sides and bottom.

## Limits

The same numbers the editors and b3d check use.

- **`Screen`**: 256 × 256, drawn at 1×, 2× or 3× (the player picks in the pause menu); print and rect always use 256 pixels.
- **`Palette`**: 32 colors, 0-31.
- **`Tiles`**: 63, numbered 1-63 (0 is empty), each three 8 × 8 faces.
- **`Maps`**: As many as you like. The Map tab edits up to 128 blocks per side and 524,288 blocks in all.
- **`Vox models`**: 64, numbered 0-63, each 8 × 8 × 8 voxels.
- **`Sounds`**: 64, numbered 0-63, each 32 notes: pitch 0-63, wave, volume and effect 0-7.
- **`Music`**: 64 patterns of 4 channels.
- **`Save data`**: 64 KB of JSON per game.

## Command line (b3d)

Outside the IDE, the b3d command checks, exports, runs and renders games, and turns a cart into a folder of small text files and back, for a text editor, git or an AI agent. Install it with npm install -g github:paloblanco/blocko3d (Node 18 or later). shot, run and the map and model renders also need Playwright: npm install -g playwright, then npx playwright install chromium. A game is a .b3d.json cart or a project folder; MAKING_GAMES.md in the repo explains the folder.

- **`b3d check <game>`**: Checks every limit and format and the code's syntax. Problems name the file and line.
- **`b3d export <game> [--out dir] [--zip]`**: The standalone game, exactly as the Export button makes it.
- **`b3d unpack <cart> <folder>`**: A cart to a project folder: cart.json, main.js, tiles/, vox/, sfx/, music.txt, maps/, scenes.json, cover.png.
- **`b3d pack <folder> [--out cart]`**: The folder back to a cart, exactly as the IDE's Save would write it, ready to Open in the IDE.
- **`b3d shot <game> [--frames n] [--input "..."] [--out shot.png]`**: Runs the game headless for n updates (default 60) and saves the screen. --input "o@30, up:40-90, p1:x@5" taps O on update 30, holds up from 40 to 90, and taps X for player 1. --seed n (default 0) makes rnd repeat, --res 1-3.
- **`b3d run <game> [same options]`**: The same run, printing printh output (and save calls) to the terminal. A game error names main.js and the line.
- **`b3d render <game> --map n | --vox n | --tiles`**: Pictures of one asset: a map from the top, front, side or a 3/4 view (--view), a model from six sides, or every tile.
- **`b3d sfx render <game> --sfx n | --music [n]`**: A sound or the song to a WAV file, with its length, peak level and any clipping.

## Cart format

A cart (`.b3d.json`) is one JSON object, what the IDE's Save writes:

```
{ version: 1, name, code,
  tiles: [null, { top, side, bottom, name? }, ...],    // tile 1-63; each face 64 palette indices, row by row
  maps: [{ name, w, h, d, origin: [x, y, z], data }],  // data: base64 of w*h*d tile bytes, index x + w * (y + h * z)
  vox: [{ name, pivot: [x, y, z], data }],             // data: base64 of 512 bytes, x + 8 * (y + 8 * z), 0 = empty, else color + 1
  sfx: [string or null, ...],                          // sounds, 166 hex digits each (below)
  sfxNames?: [string or null, ...],                    // optional sound names, by sound number
  music: [string or null, ...],                        // patterns, 9 hex digits each (below)
  scale: { snap, root, type },                         // the Sfx tab's note snapping (the engine ignores it)
  scenes?: [{ name, maps: [{ m, pos, angle, name? }], vox: [{ v, pos, yaw }] }],
  palette?: [32 colors as 0xRRGGBB numbers],
  cover?: 'data:image/png;base64,...' }                // 256 x 256 cover art
```

- A **sound** is `SS LL EE` (speed, loop start, loop end, two hex digits each), then 32 notes of `PP W V E`: pitch 00-3f (33 = A 440 Hz), wave 0-7 (triangle, tilted saw, saw, square, pulse, organ, noise, phaser), volume 0-7 and effect 0-7 (none, slide, vibrato, drop, fade in, fade out, arp fast, arp slow). Each note lasts speed / 120 seconds. The blank note is `18000` (pitch 24, silent).
- A **pattern** is a flags digit (1 = loop start, 2 = loop back, 4 = stop), then two hex digits per channel: a sound 00-3f, or 40 for none.
- `b3d check` checks all of this; `b3d unpack` turns a cart into readable files.
