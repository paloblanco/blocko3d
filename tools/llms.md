# BLOCKO3D {{VERSION}}: how to write a game (for AI models)

BLOCKO3D is a small 3D fantasy console in the browser, like PICO-8 but 3D: a global JavaScript API, worlds made of blocks with 8 x 8 pixel textures, a 32-color palette, no lighting, a square 256 x 256 screen, and an IDE that is one web page: https://paloblanco.github.io/blocko3d/

This file is everything you need to write a complete, working game in one reply. Read it all before writing code.

## What to give the user

Write **one JavaScript file**, the whole game, and these instructions with it:

1. Open https://paloblanco.github.io/blocko3d/
2. In the **Demos** menu at the top, pick **Starter** (and say OK to replacing the current cart).
3. Open the **Code** tab, select all of its code, delete it, and paste the game in.
4. Press **Run** (or Ctrl+Enter). Click the game, then play: arrow keys move, Z or space is O (button 4), X is X (button 5).

The Starter cart comes with art and sound already made (the **starter kit**, below), so your game needs no asset files. Build the levels in code with `map_new` and `map_box`. Do NOT write a `.b3d.json` file, and do NOT ask the user to paint maps, draw tiles or make models: everything comes from your code and the starter kit.

## Rules that matter

- The language is **JavaScript**, not Lua. Use `let`, `function`, `for (let i = 0; i < n; i++)`, `===`, `+` for joining strings, `[x, y, z]` arrays and `{ a: 1 }` objects. There's no `local`, no `..`, no `~=`, no `ipairs`, and arrays start at 0.
- **Everything is global:** call `map(0)` and `btn(4)` directly. There's no `import`, `require`, `engine.` or `window.` to add.
- **Define `_init()`, `_update()` and `_draw()`.** `_update` runs 60 times a second, and `_draw` must draw everything, every frame (nothing stays on screen by itself).
- **Space:** y is up, and one block is one unit. Block (x, y, z) fills x to x+1, y to y+1, z to z+1, so standing on a block at height y puts your feet at y + 1.
- **Angles are in turns**, not degrees or radians: 1 is a full turn, 0.25 a quarter. `sin` and `cos` take turns.
- **Many functions return arrays.** Unpack them: `let [x, y, z, nx, ny, nz, ground] = mpush(0, px, py, pz, 0.4)`.
- **Colors are palette numbers 0-31**, never hex codes (0 black, 1 dark blue, 2 purple, 3 dark green, 4 brown, 5 dark gray, 6 light gray, 7 white, 8 red, 9 orange, 10 yellow, 11 green, 12 light blue, 13 lavender, 14 pink, 15 peach).
- **Text** goes on top of the 3D view, at screen pixels 0-255 (the font is 7 x 10).

## The starter kit (the Starter cart)

{{STARTER_ASSETS}}

Use these numbers in code: `map_box(0, ..., 1)` for grass, `vox(6, x, y, z)` for a coin, `sfx(0)` to play the jump sound, `music(0)` for the song. A vox model is one block big, standing on its pivot: its bottom center at (x, y, z), facing +z.

## The API you need (all of it is global)

The game loop is `_init()` (once), `_update()` (60 times a second) and `_draw()` (after each update).

**Maps** are 3D grids of tile numbers; 0 is empty.

- `map_new(w, h, d)`: a new empty map, w wide (x), h tall (y), d deep (z). Returns its number: the first one you make in the Starter cart is map 0.
- `map_box(m, x0, y0, z0, x1, y1, z1, t)`: fill a box of map m with tile t. Both corners are included; t = 0 carves the box out.
- `mset(m, x, y, z, t)` / `mget(m, x, y, z)`: set or read one block (whole grid numbers).
- `map(m)`: draw map m. Call it in `_draw`, every frame.
- `mpush(m, x, y, z, r)`: collision. Pushes a ball of radius r at (x, y, z) out of map m (or a list of maps, like `[0, 1]`). Returns `[x, y, z, nx, ny, nz, ground]`: the corrected position, the push direction, and the number of the map you're standing on, or -1 when in the air.
- `mgetw(m, x, y, z)`: the block at a world point, as `[t, xi, yi, zi]`. Handy for "what am I standing on": `let [t] = mgetw(0, px, py - 0.5, pz)`.
- `mray(m, ox, oy, oz, dx, dy, dz, maxd)`: the first block along a ray, `[t, xi, yi, zi, nx, ny, nz, d]`; t is 0 on a miss.
- `map_set_pos(m, [x, y, z])` / `map_set_angle(m, [pitch, yaw, roll])`: move or turn a whole map (moving platforms, doors). Collision follows.

**Models and shapes:**

- `vox(n, x, y, z, pitch, yaw, roll, scale)`: draw vox model n. Everything after z is optional. To face a model the way it moves: `vox(0, x, y, z, 0, yaw_to(dx, dz))`.
- `cube(x, y, z, size, c)`, `sphere(x, y, z, r, c)`, `line3(x1, y1, z1, x2, y2, z2, c)`: simple shapes in color c.

**Camera and drawing:**

- `cam_set_pos([x, y, z])` and `cam_set_lookat([x, y, z])`: place the camera each frame.
- `cam_orbit(target, yaw, pitch, dist)`: the camera dist away from `[x, y, z]`, looking at it. Negative pitch looks down.
- `cam_set_fov(f)`: field of view in turns (default 0.25).
- `bg(c)`: the background color.
- `outline(c)` / `outline()`: black outlines look good, `outline(0)`; they apply to draws after the call.
- `pal(a, b)` / `pal()`: recolor color a as b for the following draws (a red guard into a blue one); `pal()` resets.
- `clip(x0, y0, x1, y1)` / `clip()`: draw only in part of the screen (split screen: each `clip` gets its own camera).
- `print(str, x, y, c, oc, sx)`: text at a pixel position, with an optional outline color oc and whole-number scale sx; it returns the x after the text.
- `printc(str, y, c, oc, sx)`: centered text.
- `rect(x0, y0, x1, y1, c)` / `rectfill(...)`: rectangles.

**Input:**

- `btn(i)`: held. `btnp(i)`: pressed this update.
- Buttons: 0 left, 1 right, 2 up, 3 down, 4 O (keys Z, C, N, space), 5 X (keys X, V, M).
- Players 1-3 are gamepads: `btn(i, p)`.
- `stick(0)`: `[x, y]` from -1 to 1, right and down positive. It also follows the arrow keys, so `let [sx, sy] = stick(0)` works on a keyboard too.
- Enter or P pauses: the engine handles that, so don't use it.

**Sound:** `sfx(n)` plays sound n; `music(0)` starts the song, and `music(-1)` stops it.

**Other:**

- `save(value)` / `load()`: keep any JSON value between plays (a best time). `load()` gives `null` the first time.
- `time()`: seconds since the start.
- `rnd(n)`: a random number from 0 up to n. `rnd([a, b, c])`: a random element.
- `flr`, `abs`, `sqrt`, `min`, `max`, `mid(a, b, c)` (clamp), `sgn`.
- `dist(a, b)` (points as arrays), `dir3(yaw, pitch)` (a direction for an angle), `yaw_to(dx, dz)` (an angle for a direction), `angdiff(a, b)`, `lerp(a, b, t)`.
- `printh(str)`: debug output to the IDE's console.

The full reference is https://paloblanco.github.io/blocko3d/docs/API.md (the same as the IDE's Info tab).

## Mistakes to avoid

- **Lua syntax**, or calling things through an object (`engine.map`): the game won't run.
- **Degrees** for angles: use turns (90 degrees is 0.25).
- **Guessing return values**: `mpush`, `mgetw`, `mray` and `stick` return arrays, as listed above.
- **Forgetting to draw:** draw the map, every model and the HUD in `_draw` each frame, after setting the camera.
- **Placing the player inside blocks:** a ball of radius 0.4 standing on a floor whose top is at y has its center at y + 0.4.
- **Jumps that are too far:** with the example's physics (jump speed 0.2, gravity 0.01 a frame, run speed 0.09), a jump rises about 2 blocks and crosses about 3 blocks of gap on the level. Keep gaps at 1-2 blocks and steps at most 1 block up, or add a bounce pad.
- **Tiles that don't exist**, or vox models past 8, or sounds past 12: only the starter kit is there.
- **A camera that turns with the player:** the example keeps the camera looking along +z, so the controls never change direction. Stick with that unless the game needs more.

## A complete example: the Starter cart's own game

This is the code already in the Starter cart. It's a working platformer: a level built from `map_box` calls, a walking hero with collision and jumping, coins, a patrolling guard, lava, a bounce pad, a flag, a HUD and a saved best time. Change it into the game the user wants, or use its parts.

```js
{{STARTER_CODE}}
```

## Making it a different game

Keep what works from the example (movement, `mpush` collision, the camera, the HUD) and change the rest:

- **A race:** a looping track built from `map_box` pieces, and laps counted as the player passes checkpoints in order. Give computer runners **no physics**: each moves straight toward its next checkpoint at its own speed and stands on the floor under it (`let [t, xi, yi, zi, nx, ny, nz, d] = mray(0, x, 20, z, 0, -1, 0, 30)`, so the floor's top is `20 - d`), keeping its last height and hopping over lava or holes. Runners that jump with real physics fall in. Draw each runner as the hero with `pal(4, color)` before the `vox` and `pal()` after it, so each has its own color.
- **Collecting or exploring:** more coins, a bigger map (up to 128 blocks a side), and keys that open doors (`map_box` with tile 0 to carve the door out).
- **Survival:** enemies that walk toward the player, `yaw_to(dx, dz)` to face them, and a timer.
- **Bigger worlds:** draw several maps, each placed with `map_set_pos`; moving platforms are maps moved with `map_set_pos` every frame.

Keep the game in one file, and test it by reading it through once: every function you call is listed above.
