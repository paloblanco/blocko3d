# blocky3D

A small, deliberately limited 3D game engine for JavaScript with a PICO-8-style developer experience. The whole API lives in the global namespace, everything is drawn from 8×8 palette-indexed textures, and the IDE is one static web page: write code, draw tiles, build voxel maps and press **Run**.

This is a first prototype built from the blocky3D spec.

## Running it

It's a static site with no build step. ES modules need a web server, so either:

- **GitHub Pages:** in the repo's Settings → Pages, deploy from the `main` branch root. The IDE is `index.html`.
- **Locally:** `python -m http.server` in this folder, then open http://localhost:8000.

Three.js (0.170) and CodeMirror 5 load from CDNs, so the page needs an internet connection.

## The IDE

| Tab | What it does |
| --- | --- |
| Code | Your game's JavaScript (`_init`, `_update`, `_draw`). |
| Map | Paint maps layer by layer, set size, name and origin, with a 3D orbit preview. |
| Spr | Draw each tile's three 8×8 textures (top, sides, bottom) with the 32-color palette. |
| Info | API reference. |

The game runs on the right in a square 256×256 view. Errors show in the console below it; click one to jump to the line. The cart autosaves in your browser; **Save** downloads it as a `.b3d.json` file and **Open** loads one. **Demo** loads the sample game (a castle, a drawbridge, palette tricks).

## A tiny cart

```js
function _init() {
  bg(12)
}

function _draw() {
  cam_set_pos([8, 10, -6])
  cam_set_lookat([8, 0, 8])
  map(0)
  sphere(8, 4, 8, 0.5, 10)
  print('HELLO', 4, 4, 7)
}
```

## API at a glance

- **Loop:** `_init()`, `_update()` (60 per second), `_draw()` (immediate mode).
- **Maps:** `map(m)`, `map_new`, `map_set_pos`, `map_set_angle` (turns; yaw, then pitch, then roll), `map_set_origin` (keeps the map in place), `mget`, `mset`, `mgetw` (point or sphere query with push-out), `msetw`.
- **Primitives:** `cube`, `sphere`, `line3`.
- **Palette:** `palette[i]` (global, 32 colors), `pal(a, b)` and `pal()` (per-draw remap), `palt(i, on)`, `bg(c)`.
- **Camera:** `cam_set_pos`, `cam_set_lookat`, `cam_set_fov` (horizontal, in turns, default 0.25).
- **Extras:** `print`, `printh`, `btn`, `btnp`, `time`/`t`, `rnd`, `flr`, `sin`, `cos`, `atan2`, `mid` and friends.

The Info tab has the full reference.

## How it works

- `js/core.js`: palette, tile atlas, voxel meshing, map transforms and the shaders. Tile textures store palette indices; a shader remaps each index through the current `pal()` table, then looks up the real color in a 32-entry palette shared by every material. So changing `palette[i]` recolors maps, primitives and the background on the next frame.
- `js/engine.js`: the runtime and the global API.
- `player.html`: runs a cart inside an iframe, so every run starts clean.
- `index.html`, `js/ide.js`, `css/ide.css`: the IDE. `js/preview.js` is the orbit viewer used by the editors.
- `js/cart.js`: cart format and the demo cart.

## Not in this version

- The `spr` equivalent for individual objects (deferred in the spec).
- Carrying the player along on moving or rotating maps.
- Undo in the map and tile editors (the code editor has undo).
- Editing the palette in the IDE (change `palette[i]` from code for now).
