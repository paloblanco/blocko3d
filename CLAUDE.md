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
2. An `spr` equivalent for individual objects. This is **deferred on purpose** until maps are right; don't invent one without discussing it.
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

**Choices Claude made that the owner hasn't specifically reviewed.** Treat them as changeable:

- The primitive names and signatures: `cube(x, y, z, size, c)`, `sphere(x, y, z, r, c)`, `line3(...)`.
- The extras: `print` (a 3×5 font on a 2D overlay), `printh`, `btn`/`btnp` (0–5, PICO-8 mapping plus WASD), `time`/`t`, and math helpers with turn-based `sin`/`cos`. `sin` is **not** inverted like PICO-8's.
- `_update` runs at a fixed 60 per second.
- Nothing is transparent by default.

## Architecture

| File | Role |
| --- | --- |
| `js/core.js` | Shared by the runtime and the IDE: palette, atlas (`DataTexture`, R8, 24×512, one row per tile), voxel meshing (one quad per exposed face), map transform math, palette uniform, voxel and solid shaders, renderer setup, cart base64 helpers. |
| `js/engine.js` | `createEngine()`: the runtime plus the global API object, object pools per draw kind, sphere query, fixed-step loop, input. |
| `player.html` | Runs a cart in an **iframe**. Installs the API on `window` with `Object.defineProperties`, which keeps `palette` as a getter/setter. Evaluates code with `(0, eval)` and `//# sourceURL=cart.js` so errors carry line numbers. Talks to the IDE through `postMessage` (`ready` → `run` → `started` / `error` / `log`). |
| `index.html`, `js/ide.js`, `css/ide.css` | The IDE: CodeMirror 5 code tab (falls back to a textarea), map editor (layer grid with a ghost of the layer below, orbit preview), tile editor (three face canvases, pencil and fill, right-click eyedropper), Info tab, console. Autosaves to `localStorage` under `blocky3d.cart.v1`. Save and Open use `.b3d.json`. |
| `js/preview.js` | The orbit viewer used by both editors. |
| `js/cart.js` | Cart format, `normalizeCart`, `emptyCart`, and `demoCart` (castle, drawbridge, guards, gems). |
| `js/font.js` | The 3×5 pixel font. |
| `js/apidocs.js` | Content for the Info tab. **Update it whenever the API changes.** |

**Rendering details**

- `THREE.ColorManagement` is disabled and output is linear, so palette hex values reach the screen unchanged.
- Shaders are `ShaderMaterial` and use dynamic indexing into uniform arrays, which needs WebGL2.
- Textures **must** stay `NearestFilter` with no mipmaps. Filtering would blend indices into unrelated colors.
- The shader samples texel centers computed from the face UV, so the atlas never bleeds between tiles.
- Each pooled draw object has its own material, and the remap and transparency arrays are copied into it on every draw.

**Cart format (JSON)**

```
{ version, name, code, palette?, tiles: [null, {top, side, bottom}...], maps: [{name, w, h, d, origin, data(base64)}] }
```

- Map data is flattened as `x + w * (y + h * z)`.
- In tile textures, row 0 is the top row of the image.

**Dependencies**, all loaded from CDNs:

- three@0.170.0, via an import map in both HTML files. If you bump it, bump it in both.
- CodeMirror 5.65.18 from cdnjs.
- Google Fonts: IBM Plex Sans and JetBrains Mono.

## Testing

There's no test suite in the repo yet. It was verified with Playwright and headless Chromium: launch with `--use-gl=swiftshader --enable-unsafe-swiftshader`, which supports WebGL2.

Because the sandbox couldn't reach the CDNs, the tests served the repo with `python -m http.server` and used `page.route` to serve three.js and CodeMirror from a local `npm install three@0.170.0 codemirror@5.65.18`.

What was checked:

- The demo plays: lowering the bridge and walking into the castle works.
- Map painting, tile painting, and autosave persistence after a reload.
- Error → line number → click jumps to the line.
- An API check cart covering:
  - `mget` and `mgetw`, unrotated and rotated.
  - Sphere push-out for pitched, yawed and rolled maps.
  - `map_set_origin` keeping the map in place.
  - `msetw`, `pal` on primitives, and the math helpers.

A small `tests/` folder built this way would be a good addition.

## Open items and next steps

- **The spr equivalent** (deferred): how individual objects are defined and drawn. Discuss with the owner first.
- **Riding moving maps**: carrying the player along on a moving or rotating map. One idea is to have the engine report each map's movement since the last frame.
- Undo in the map and tile editors.
- Palette editing in the IDE. For now, change `palette[i]` from code.
- Faces between two solid blocks are always culled, even if a tile has `palt` transparency. That's fine for now.
- GitHub Pages isn't enabled yet; the owner can turn it on in Settings → Pages → deploy from `main`.

## Working with the owner

- Keep explanations plain and practical.
- Discuss API design before changing it. API decisions were made deliberately, one at a time.
- Keep the README, the Info tab (`js/apidocs.js`) and this file in sync with API changes.
