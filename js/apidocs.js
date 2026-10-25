// API reference shown in the IDE's Info tab.
export const API_SECTIONS = [
  {
    title: 'Game loop',
    intro: 'Define any of these three functions in your code. Everything else is already global.',
    items: [
      ['_init()', 'Called once when the game starts.'],
      ['_update()', 'Called 60 times per second. Move things and check input here.'],
      ['_draw()', 'Called after each update. Drawing is immediate-mode: anything you want on screen must be drawn every frame.'],
    ],
  },
  {
    title: 'Maps',
    intro: 'A map is a 3D grid of tile indices (0 = empty). Maps from the Map tab are numbered 0, 1, 2… Each map has an origin (pivot, in its own block coordinates), a world position for that origin, and an angle.',
    items: [
      ['map(m)', 'Draw map m with its current position and angle.'],
      ['map_new(w, h, d, origin?)', 'Create an empty map of w × h × d blocks. Returns its index.'],
      ['map_set_pos(m, [x, y, z])', 'Put the map\'s origin at this world position.'],
      ['map_set_angle(m, [pitch, yaw, roll])', 'Rotate the map around its origin. Angles are in turns.'],
      ['map_set_origin(m, [x, y, z])', 'Move the pivot. The map stays where it is on screen.'],
      ['mget(m, x, y, z)', 'Tile index at a grid cell of map m (0 outside the map).'],
      ['mset(m, x, y, z, t)', 'Set a grid cell of map m to tile t.'],
      ['mgetw(m, x, y, z)', 'Look up the world point (x, y, z) in map m. Returns [t, xi, yi, zi].'],
      ['mgetw(m, x, y, z, r)', 'Sphere query. Returns [t, xi, yi, zi, nx, ny, nz, d]: the deepest block hit, plus the world-space direction (nx, ny, nz) and distance d to push the sphere out. t is 0 when nothing is hit.'],
      ['msetw(m, x, y, z, t)', 'Set the block of map m at a world point.'],
    ],
    code: `let [t, xi, yi, zi, nx, ny, nz, d] = mgetw(0, px, py, pz, 0.4)
if (t) { px += nx*d; py += ny*d; pz += nz*d }`,
  },
  {
    title: 'Primitives',
    intro: 'Simple shapes, colored with a palette index.',
    items: [
      ['cube(x, y, z, size?, c?)', 'Axis-aligned cube centered on (x, y, z). size defaults to 1, c to 7.'],
      ['sphere(x, y, z, r?, c?)', 'Low-poly sphere. r defaults to 0.5.'],
      ['line3(x1, y1, z1, x2, y2, z2, c?)', 'A 1-pixel line in 3D.'],
    ],
  },
  {
    title: 'Palette',
    intro: 'Every color is a palette index from 0 to 31. Tile textures store indices too, so changing the palette recolors everything, including maps.',
    items: [
      ['palette', 'Global array of 32 colors (0xRRGGBB), defaulting to the PICO-8 extended palette. Change entries any time: palette[28] = 0x1478d4.'],
      ['pal(a, b)', 'For draws after this call, color a is drawn as color b.'],
      ['pal()', 'Reset all remaps and transparency.'],
      ['palt(i, on?)', 'Make color i transparent for following draws (on defaults to true).'],
      ['bg(c)', 'Set the background color.'],
    ],
    code: `pal(8, 12)        // red becomes blue
map(enemy_ship)
pal()`,
  },
  {
    title: 'Outlines',
    intro: 'A 1-pixel outline around whatever is drawn, computed from what is on screen. Like pal(), it applies to the draws that follow and stays set until changed. Off by default.',
    items: [
      ['outline(c)', 'Draws after this get an outline in color c (a palette index; pal() remaps apply).'],
      ['outline()', 'No outline for draws after this.'],
    ],
    code: `outline(0)       // black outlines
map(0)           // follows the map's shape, including edges inside it
sphere(px, py, pz, 0.4, 10)
outline()`,
  },
  {
    title: 'Camera',
    intro: 'One camera. The screen is square, 256 × 256 pixels.',
    items: [
      ['cam_set_pos([x, y, z])', 'Camera position.'],
      ['cam_set_lookat([x, y, z])', 'The world point the camera faces.'],
      ['cam_set_fov(f)', 'Horizontal field of view in turns. Default 0.25 (90°).'],
    ],
  },
  {
    title: 'Text, input and time',
    items: [
      ['print(str, x, y, c?)', 'Draw text on top of the 3D view in screen pixels (0-255).'],
      ['printh(...)', 'Write a line to the IDE console, for debugging.'],
      ['btn(i)', 'Is button i held? 0 left, 1 right, 2 up, 3 down (arrows or WASD), 4 O (Z, C, N, space), 5 X (X, V, M).'],
      ['btnp(i)', 'Was button i pressed this update?'],
      ['time() / t()', 'Seconds since the game started.'],
    ],
  },
  {
    title: 'Math',
    intro: 'Angles are in turns: 1 is a full rotation.',
    items: [
      ['sin(a), cos(a)', 'Standard sine and cosine of an angle in turns.'],
      ['atan2(dx, dy)', 'Angle of a vector, in turns (0 to 1).'],
      ['rnd(n?)', 'Random number from 0 up to n (default 1). rnd(array) picks an element.'],
      ['flr, ceil, abs, sqrt, min, max, sgn, mid(a, b, c)', 'The usual helpers.'],
    ],
  },
  {
    title: 'Conventions',
    items: [
      ['Axes', 'y is up. One block is one world unit; block (xi, yi, zi) spans xi to xi+1 and so on.'],
      ['Rotation order', 'Yaw, then pitch, then roll. +z is forward: positive pitch tips +z up, positive yaw turns +z toward +x, positive roll turns +x toward +y.'],
      ['Rendering', 'No shading or lighting: every face is drawn exactly as textured.'],
      ['Tiles', 'Up to 63 tiles (1-63). Each has three 8 × 8 textures: top, sides and bottom.'],
    ],
  },
];
