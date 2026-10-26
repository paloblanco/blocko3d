# Changelog

## Unreleased

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
- No riding on moving maps, no undo in the map and tile editors, no palette editor (change `palette[i]` in code), no custom pause menu items, no clicking on blocks with the mouse (`mouse_ray`), and no analog trigger values.
