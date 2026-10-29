# Making BLOCKO3D games outside the IDE

The IDE (https://paloblanco.github.io/blocko3d/) is the main way to make a BLOCKO3D game. This page is for working without it, or alongside it: with a text editor, git, scripts or an AI agent. The `b3d` command does the IDE's jobs from a terminal. It checks a game, runs it headless and saves screenshots, draws pictures of single assets, renders sounds, exports, and turns a cart into a folder of small text files and back.

The API itself is in [docs/API.md](docs/API.md) (the same text as the IDE's Info tab).

## Install

You need Node 18 or later.

```
npm install -g github:paloblanco/blocko3d
b3d help
```

`shot`, `run`, and the map and model renders run the game in a headless browser. They need Playwright:

```
npm install -g playwright
npx playwright install chromium
```

`check`, `export`, `pack`, `unpack`, `render --tiles` and `sfx render` work without it.

## A game is a cart or a folder

Every command takes either a **cart** (`game.b3d.json`, the file the IDE saves and opens) or a **project folder**. A cart is one JSON file, which is hard to edit by hand. A folder holds the same game as small text files, so you can edit it and git can show what changed.

```
b3d unpack game.b3d.json game/     # a cart to a folder
b3d pack game/                     # the folder back to game.b3d.json
```

`pack` writes exactly what the IDE's Save would write. So the IDE and a text editor can take turns on one game:

1. Edit in the IDE and press **Save**.
2. Run `b3d unpack game.b3d.json game/`. `git diff` then shows just what changed in the IDE.
3. Edit the files.
4. Run `b3d pack game/`, then **Open** the cart in the IDE.

Unpacking replaces the folder's asset files, so commit or pack your folder edits before unpacking over it. Map scripts (`.gen.js`) and files of your own are never touched.

## The project folder

```
game/
  cart.json            name, map sizes and origins, the palette (optional), the Sfx tab's scale
  main.js              the game code
  tiles/01-grass.txt   one file per tile
  vox/00-hero.txt      one file per vox model
  sfx/00-jump.txt      one file per sound
  music.txt            the song's patterns
  maps/0-island.bin    each map's blocks
  maps/0-island.gen.js optional: a script that builds the map instead
  scenes.json          the Scene tab's scenes (optional)
  cover.png            the cover art, 256 x 256 (optional)
```

The smallest game is `cart.json` with `{ "name": "my game", "maps": [] }`, plus `main.js`.

**Numbers and names.** The number at the front of a file name is the asset's number: `tiles/07-brick.txt` is tile 7, and `map(0)` draws `maps/0-*.bin`. The rest of the file name is only for people. An asset's real name is the `name` line inside its file, or `name` in `cart.json` for maps, and `unpack` uses it for the file name. Gaps in the numbers are fine.

**Colors** in tiles and models are one character each: `0`-`9` for colors 0-9, then `a`-`v` for colors 10-31. A model also uses `.` for an empty voxel. Each row then lines up, so the files look like pictures.

**Comments.** Blank lines and lines starting with `#` are ignored in every file except `main.js`.

### cart.json

```json
{
  "name": "village",
  "maps": [
    { "name": "island", "size": [20, 3, 20], "origin": [0, 0, 0] },
    { "name": "house", "size": [6, 5, 6], "origin": [3, 0, 3] }
  ],
  "scale": { "snap": false, "root": 0, "type": "minor pentatonic" },
  "palette": ["#000000", "#1d2b53", "..."]
}
```

- **Maps** are listed in order: the first is map 0. `size` is `[w, h, d]` in blocks (y is up). `origin` is the map's pivot in its own block coordinates.
- **The palette** is optional (32 colors). Leave it out for the default.
- **The scale** is the Sfx tab's note snapping. Only the editor uses it.

### Tiles: `tiles/NN-name.txt`

```
name grass
top
bbb3bbrr
b3rrbbbb
...6 more rows
side
3b3b3b3b
44444444
...6 more rows
bottom
...8 rows
```

There are three 8 x 8 faces, with row 0 at the top. A missing `bottom` copies `side`, and a missing `side` copies `top`. Tiles are numbered 1-63 (0 is always empty).

### Vox models: `vox/NN-name.txt`

```
name hero
pivot 4 0 4
y0
........
........
...kk...
...kk...
...4 more rows
y1
...
```

- **Layers** are eight, `y0` (bottom) to `y7` (top). A layer you leave out is empty.
- **Rows** in each layer go from back to front (z 0 to 7). Each row has 8 characters, x 0 to 7 from left to right.
- **The front** of a model is +z, the last row of each layer.
- **The pivot** is the point `vox(n, x, y, z)` places at x, y, z, and the center for rotating and scaling, in voxels. The default `4 0 4` is the bottom center.
- **Scale:** 8 voxels make one block.

### Sounds: `sfx/NN-name.txt`

```
name jump
speed 3 loop 0 0
# pitch wave volume effect
22 3 5 0
29 3 5 1
34 3 4 1
```

- **Speed** sets note length: each note lasts speed / 120 seconds.
- **Loop A B** repeats notes A to B-1 (`loop 0 0` means no loop).
- **Notes** come one per line, up to 32:
  - pitch 0-63 (33 = A 440 Hz, 12 per octave)
  - wave 0-7: triangle, tilted saw, saw, square, pulse, organ, noise, phaser
  - volume 0-7
  - effect 0-7: none, slide, vibrato, drop, fade in, fade out, arp fast, arp slow
- **Notes you leave off the end** are silent.

### Music: `music.txt`

```
0: 4 5 7 - start
1: 4 6 7 8 back
```

- **Each line** is one pattern: its number, then up to four sound numbers (`-` for an empty channel), then any flags.
- **Flags:** `start` (loop start), `back` (go back to the last loop start after this pattern), `stop` (end the song here).
- **The song** plays patterns in order from the one `music(n)` starts at.

### Maps: `maps/N-name.bin` or `maps/N-name.gen.js`

**A `.bin` file** is the map's blocks as raw bytes, one tile number per block, in the order `x + w * (y + h * z)`. Its size must match `cart.json`.

**A `.gen.js` file** builds the map in code instead, each time you pack:

```js
// maps/0-island.gen.js
export default (map) => {
  for (let x = 0; x < map.w; x++) for (let z = 0; z < map.d; z++) {
    map.set(x, 0, z, 1);                      // a floor of tile 1
    if (Math.hypot(x - 10, z - 10) < 4) map.set(x, 1, z, 2);
  }
};
```

The script gets `map.w`, `map.h`, `map.d`, `map.get(x, y, z)`, `map.set(x, y, z, t)` and `map.data` (the bytes). It may import other files.

**Scripts and the IDE.** `unpack` always writes the `.bin` file and never touches a `.gen.js`. If a map has both, `pack` builds it from the script and compares the result with the `.bin`:

- **They match:** the map packs as usual.
- **They differ** (usually because the map was edited in the IDE): pack stops and tells you which file to delete. Delete the `.bin` to keep building from the script and lose the IDE edits, or delete the `.gen.js` to keep the edited blocks.

### Scenes and cover

**`scenes.json`** is the cart's `scenes` list, as described in [docs/API.md](docs/API.md#scenes).

**`cover.png`** is the cover art an exported game shows before it starts. It can be captured in the IDE (pause menu, **Capture cover**) or drawn yourself at 256 x 256.

## Checking your work

### `b3d check <game>`

`check` covers every limit and format, and the code's syntax. Each problem names the file and line:

```
game/tiles/02.txt:4: error: "z" isn't a color; colors are 0-9 then a-v (0-31)
game/main.js:5: error: syntax error: Unexpected token ';'
game/maps/0-island.bin: warning: 800 blocks use tile 2, which is empty (drawn as nothing)
```

Run it after every change: it takes a moment. `pack`, `export`, `shot` and `run` refuse a game with errors.

### `b3d shot` and `b3d run`

These run the game headless. One run is a number of **frames**, one update each. Frame 1 is the first `_update` after `_init`, and during frame f, `time() * 60` is f. The run is exactly repeatable: the same command gives the same picture and the same output every time, on any machine.

```
b3d shot game/ --frames 300 --input "o@30, up:60-200" --out walk.png
b3d run game/ --frames 600 --input "right:1-" --seed 3
```

- **`--frames n`** sets how many updates to run (default 60, one second).
- **`--input`** lists buttons, separated by commas:
  - `x@30` taps X on frame 30.
  - `up:60-200` holds up from frame 60 to 200; `up:60-` holds it to the end.
  - Button names are `left`, `right`, `up`, `down`, `o` and `x` (buttons 0-5), or any button number.
  - `p1:`, `p2:` and `p3:` in front press for players 1-3, as gamepads.
  - `stick(0)` follows the arrow buttons.
- **`--seed n`** seeds `rnd` (and `Math.random`). It's 0 when you leave it out, so runs repeat. Use another seed to see other random outcomes.
- **`--res 1|2|3`** sets the resolution (`shot` saves at 256, 512 or 768).
- **`--skip-draw`** draws only the last frame, which is faster. `_draw` doesn't run on the other frames, so don't use it if your `_draw` changes game state.
- **`--out file.png`** names the screenshot (`run` saves one only when asked).

`run` prints every `printh` line, so you can test game logic by printing what you want to know:

```js
function _update() {
  // ...
  if (time() * 60 % 30 == 0) printh(`frame ${time() * 60}: x ${p.x.toFixed(2)} y ${p.y.toFixed(2)} on ${ground}`)
}
```

Calls to `save()` show as `[save] {...}`. If the game throws, the run stops and names the frame, the file and the line:

```
error at frame 58: game/main.js:10: nothing_here is not defined
```

### `b3d render`

Pictures of one asset, with no game code involved:

```
b3d render game/ --map 0 --view top        # also front, side or iso (the default)
b3d render game/ --vox 3                   # a model from front, back, both sides, top and 3/4
b3d render game/ --tiles                   # every tile's top, side and bottom
```

Maps and models are drawn by the real engine, with a nearly flat camera. Each view is named for where the camera is:

| View | Camera position | Left to right | Top of the picture |
| --- | --- | --- | --- |
| `top` | above | +x | -z |
| `front` | +z | +x | +y |
| `side` | -x | +z | +y |

These match the editors' Top, Front and Side views. More options:

- **`--outline n`** adds outlines in color n.
- **`--bg n`** sets the background color.
- **`--res`** sets the size, as for `shot`.

### `b3d sfx render`

```
b3d sfx render game/ --sfx 2            # one sound (a looping sound plays its loop twice more; --loops k)
b3d sfx render game/ --music 0          # the song from pattern 0, until it ends or loops back
```

Each command writes a WAV file and prints the sound's length, peak level and any clipping. Use it to check a sound you can't hear: whether it's silent, too quiet, too long, or clipping when channels add up.

## Publishing

```
b3d export game/ --out dist/       # index.html, game.js and the installable-app files
b3d export game/ --zip             # the same as game.zip, like the IDE's Export button
```

The result is exactly what the IDE's Export makes. It runs from disk or any web host, with no network requests, and is installable as an app from an https site.

## Tips

- **The API is global**, PICO-8 style: `map(0)`, `btn(4)`, `vox(1, x, y, z)`. Angles are in turns (1 = a full turn). y is up, and one block is one world unit. Drawing is immediate-mode, so `_draw` draws everything, every frame.
- **Collision** is a sphere against maps: `mpush(maps, x, y, z, r)` in one call. Use `mray` for line of sight and clicking.
- **Debug output:** `printh` lines appear in the IDE's console and in `b3d run`.
- **Repeatable random levels:** `srand(n)` in `_init` makes the game's own randomness repeat too.
- **Before you finish:** `b3d check`, a few `b3d shot`s of the important moments, then `b3d pack` and open the cart in the IDE once.
