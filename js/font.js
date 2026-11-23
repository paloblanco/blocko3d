// BLOCKO3D pixel font for print().
//
// Each character sits in a 7 x 10 cell: glyphs are 5 pixels wide, capitals and digits are 7 tall,
// and g j p q y drop 2 rows below the baseline. The cell keeps a 1-pixel margin on every side,
// so a 1-pixel outline fits between neighboring characters.
//
// Glyphs are drawn below as rows of '#' (on) and '.' (off), top row first. A block starts with
// the character it draws ("space" for the space). Rows may be left off at the bottom.

export const CHAR_W = 7;   // advance per character
export const LINE_H = 10;  // advance per line

const SRC = `
A
.###.
#...#
#...#
#####
#...#
#...#
#...#

B
####.
#...#
#...#
####.
#...#
#...#
####.

C
.###.
#...#
#....
#....
#....
#...#
.###.

D
####.
#...#
#...#
#...#
#...#
#...#
####.

E
#####
#....
#....
####.
#....
#....
#####

F
#####
#....
#....
####.
#....
#....
#....

G
.###.
#...#
#....
#.###
#...#
#...#
.####

H
#...#
#...#
#...#
#####
#...#
#...#
#...#

I
.###.
..#..
..#..
..#..
..#..
..#..
.###.

J
..###
...#.
...#.
...#.
...#.
#..#.
.##..

K
#...#
#..#.
#.#..
##...
#.#..
#..#.
#...#

L
#....
#....
#....
#....
#....
#....
#####

M
#...#
##.##
#.#.#
#.#.#
#...#
#...#
#...#

N
#...#
#...#
##..#
#.#.#
#..##
#...#
#...#

O
.###.
#...#
#...#
#...#
#...#
#...#
.###.

P
####.
#...#
#...#
####.
#....
#....
#....

Q
.###.
#...#
#...#
#...#
#.#.#
#..#.
.##.#

R
####.
#...#
#...#
####.
#.#..
#..#.
#...#

S
.####
#....
#....
.###.
....#
....#
####.

T
#####
..#..
..#..
..#..
..#..
..#..
..#..

U
#...#
#...#
#...#
#...#
#...#
#...#
.###.

V
#...#
#...#
#...#
#...#
#...#
.#.#.
..#..

W
#...#
#...#
#...#
#.#.#
#.#.#
#.#.#
.#.#.

X
#...#
#...#
.#.#.
..#..
.#.#.
#...#
#...#

Y
#...#
#...#
.#.#.
..#..
..#..
..#..
..#..

Z
#####
....#
...#.
..#..
.#...
#....
#####

a
.....
.....
.###.
....#
.####
#...#
.####

b
#....
#....
####.
#...#
#...#
#...#
####.

c
.....
.....
.###.
#....
#....
#....
.###.

d
....#
....#
.####
#...#
#...#
#...#
.####

e
.....
.....
.###.
#...#
#####
#....
.###.

f
..##.
.#...
####.
.#...
.#...
.#...
.#...

g
.....
.....
.####
#...#
#...#
#...#
.####
....#
.###.

h
#....
#....
####.
#...#
#...#
#...#
#...#

i
..#..
.....
.##..
..#..
..#..
..#..
.###.

j
...#.
.....
..##.
...#.
...#.
...#.
...#.
#..#.
.##..

k
#....
#....
#..#.
#.#..
##...
#.#..
#..#.

l
.##..
..#..
..#..
..#..
..#..
..#..
.###.

m
.....
.....
##.#.
#.#.#
#.#.#
#.#.#
#...#

n
.....
.....
####.
#...#
#...#
#...#
#...#

o
.....
.....
.###.
#...#
#...#
#...#
.###.

p
.....
.....
####.
#...#
#...#
#...#
####.
#....
#....

q
.....
.....
.####
#...#
#...#
#...#
.####
....#
....#

r
.....
.....
#.##.
##..#
#....
#....
#....

s
.....
.....
.####
#....
.###.
....#
####.

t
.#...
.#...
####.
.#...
.#...
.#..#
..##.

u
.....
.....
#...#
#...#
#...#
#...#
.####

v
.....
.....
#...#
#...#
#...#
.#.#.
..#..

w
.....
.....
#...#
#...#
#.#.#
#.#.#
.#.#.

x
.....
.....
#...#
.#.#.
..#..
.#.#.
#...#

y
.....
.....
#...#
#...#
#...#
#...#
.####
....#
.###.

z
.....
.....
#####
...#.
..#..
.#...
#####

0
.###.
#...#
#..##
#.#.#
##..#
#...#
.###.

1
..#..
.##..
..#..
..#..
..#..
..#..
.###.

2
.###.
#...#
....#
...#.
..#..
.#...
#####

3
#####
...#.
..#..
...#.
....#
#...#
.###.

4
...#.
..##.
.#.#.
#..#.
#####
...#.
...#.

5
#####
#....
####.
....#
....#
#...#
.###.

6
..##.
.#...
#....
####.
#...#
#...#
.###.

7
#####
....#
...#.
..#..
.#...
.#...
.#...

8
.###.
#...#
#...#
.###.
#...#
#...#
.###.

9
.###.
#...#
#...#
.####
....#
...#.
.##..

space
.....

!
..#..
..#..
..#..
..#..
..#..
.....
..#..

"
.#.#.
.#.#.
.#.#.

#
.#.#.
.#.#.
#####
.#.#.
#####
.#.#.
.#.#.

$
..#..
.####
#.#..
.###.
..#.#
####.
..#..

%
##...
##..#
...#.
..#..
.#...
#..##
...##

&
.##..
#..#.
#.#..
.#...
#.#.#
#..#.
.##.#

'
..#..
..#..
.#...

(
...#.
..#..
.#...
.#...
.#...
..#..
...#.

)
.#...
..#..
...#.
...#.
...#.
..#..
.#...

*
.....
..#..
#.#.#
.###.
#.#.#
..#..

+
.....
..#..
..#..
#####
..#..
..#..

,
.....
.....
.....
.....
.....
.##..
..#..
.#...

-
.....
.....
.....
#####

.
.....
.....
.....
.....
.....
.##..
.##..

/
....#
....#
...#.
..#..
.#...
#....
#....

:
.....
.##..
.##..
.....
.##..
.##..

;
.....
.##..
.##..
.....
.##..
..#..
.#...

<
...#.
..#..
.#...
#....
.#...
..#..
...#.

=
.....
.....
#####
.....
#####

>
.#...
..#..
...#.
....#
...#.
..#..
.#...

?
.###.
#...#
....#
...#.
..#..
.....
..#..

@
.###.
#...#
#.###
#.#.#
#.###
#....
.###.

[
.###.
.#...
.#...
.#...
.#...
.#...
.###.

\\
#....
#....
.#...
..#..
...#.
....#
....#

]
.###.
...#.
...#.
...#.
...#.
...#.
.###.

^
..#..
.#.#.
#...#

_
.....
.....
.....
.....
.....
.....
.....
#####

\`
.#...
..#..

{
...##
..#..
..#..
.#...
..#..
..#..
...##

|
..#..
..#..
..#..
..#..
..#..
..#..
..#..

}
##...
..#..
..#..
...#.
..#..
..#..
##...

~
.....
.....
.#...
#.#.#
...#.
`;

// char -> list of [x, y] pixels, relative to the top-left of the 5 x 9 glyph box
const GLYPHS = new Map();
for (const block of SRC.trim().split(/\n\s*\n/)) {
  const [name, ...rows] = block.split('\n');
  const ch = name === 'space' ? ' ' : name;
  const px = [];
  rows.forEach((row, y) => [...row].forEach((c, x) => { if (c === '#') px.push([x, y]); }));
  GLYPHS.set(ch, px);
}

// Width in pixels of the longest line of str, at scale sx.
export function textWidth(str, sx = 1) {
  return Math.max(...String(str).split('\n').map((l) => [...l].length)) * CHAR_W * sx;
}

// A game's name as big as fits on a 256 square card, wrapped between words, each line centered,
// the block centered on cy and at most maxH tall. Used for the app icon of a game without cover
// art, and (above the play button) for its cover screen.
export function drawTitle(ctx, name, color, outlineColor, cy = 128, maxH = 200) {
  const words = String(name || 'game').split(/\s+/).filter(Boolean);
  for (let s = 4; s >= 1; s--) {
    const lines = [];
    for (const w of words) {
      const last = lines[lines.length - 1];
      if (last !== undefined && [...(last + ' ' + w)].length * CHAR_W * s <= 240) lines[lines.length - 1] = last + ' ' + w;
      else lines.push(w);
    }
    const fits = lines.every((l) => [...l].length * CHAR_W * s <= 240) && lines.length * LINE_H * s <= maxH;
    if (!fits && s > 1) continue;
    const top = cy - ((lines.length * LINE_H * s) >> 1);
    lines.forEach((l, i) => drawText(ctx, l, (256 - [...l].length * CHAR_W * s) >> 1, top + i * LINE_H * s, color, outlineColor, s, s));
    return;
  }
}

// Calls fn(px, py) for the top-left corner of every font pixel, each font pixel being sx x sy.
function eachPixel(str, x, y, sx, sy, fn) {
  let cx = x, cy = y;
  for (const ch of String(str)) {
    if (ch === '\n') { cx = x; cy += LINE_H * sy; continue; }
    const g = GLYPHS.get(ch) || GLYPHS.get('?');
    for (const [gx, gy] of g) fn(cx + (1 + gx) * sx, cy + (1 + gy) * sy);
    cx += CHAR_W * sx;
  }
}

const AROUND = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

// ---- glyph sheets: for each color, scale, and letters or outline ring, a hidden canvas with
// every glyph in a cell of its own (one font pixel of padding all round, for the ring), each
// glyph drawn the first time it's used. Drawing text copies cells: the rings of the whole string
// first, then the letters, exactly as the pixel-by-pixel way layers them.
const SHEET_COLS = 16;
const SLOT = new Map([...GLYPHS.keys()].map((ch, i) => [ch, i]));   // glyph -> its cell
const sheets = new Map();
function sheet(fill, ring, sx, sy) {
  const key = fill + (ring ? '|ring|' : '|text|') + sx + '|' + sy;
  let s = sheets.get(key);
  if (!s) {
    if (sheets.size >= 64) sheets.clear();   // a game cycling through colors can't grow it forever
    const cw = (CHAR_W + 2) * sx, ch = (LINE_H + 2) * sy;
    const c = document.createElement('canvas');
    c.width = SHEET_COLS * cw; c.height = Math.ceil(SLOT.size / SHEET_COLS) * ch;
    s = { c, g: c.getContext('2d'), built: new Uint8Array(SLOT.size), cw, ch, fill, ring, sx, sy };
    sheets.set(key, s);
  }
  return s;
}
function blit(ctx, str, x, y, s) {
  const { sx, sy, cw, ch } = s;
  let cx = x, cy = y;
  for (const c of String(str)) {
    if (c === '\n') { cx = x; cy += LINE_H * sy; continue; }
    const k = GLYPHS.has(c) ? c : '?', g = GLYPHS.get(k);
    if (g.length) {
      const i = SLOT.get(k), ox = (i % SHEET_COLS) * cw, oy = Math.floor(i / SHEET_COLS) * ch;
      if (!s.built[i]) {          // draw this glyph into its cell, once
        s.built[i] = 1;
        s.g.fillStyle = s.fill;
        for (const [gx, gy] of g) {
          const px = ox + (2 + gx) * sx, py = oy + (2 + gy) * sy;   // the cell's padding, then the glyph's 1-pixel margin
          if (s.ring) for (const [dx, dy] of AROUND) s.g.fillRect(px + dx * sx, py + dy * sy, sx, sy);
          else s.g.fillRect(px, py, sx, sy);
        }
      }
      ctx.drawImage(s.c, ox, oy, cw, ch, cx - sx, cy - sy, cw, ch);
    }
    cx += CHAR_W * sx;
  }
}

// Draws text with its top-left cell corner at (x, y), each font pixel sx x sy screen pixels
// (whole numbers). With an outline color, every font pixel first gets a ring (including
// diagonals) one font pixel thick, so the outline scales with the text.
// Returns the x just past the last character of the last line.
export function drawText(ctx, str, x, y, color, outlineColor = null, sx = 1, sy = 1) {
  // In a browser, letters are copied from cached sheets (one drawImage each, below) instead of
  // drawn pixel by pixel: an outlined line of 20 letters was about 2,700 fillRects per frame,
  // which cost a tablet 18 fps for three lines of text. Same pixels either way.
  if (typeof document !== 'undefined' && ctx.drawImage && ctx.canvas) {
    if (outlineColor) blit(ctx, str, x, y, sheet(outlineColor, true, sx, sy));
    blit(ctx, str, x, y, sheet(color, false, sx, sy));
  } else {
    if (outlineColor) {
      ctx.fillStyle = outlineColor;
      eachPixel(str, x, y, sx, sy, (px, py) => { for (const [dx, dy] of AROUND) ctx.fillRect(px + dx * sx, py + dy * sy, sx, sy); });
    }
    ctx.fillStyle = color;
    eachPixel(str, x, y, sx, sy, (px, py) => ctx.fillRect(px, py, sx, sy));
  }
  const lines = String(str).split('\n');
  return x + [...lines[lines.length - 1]].length * CHAR_W * sx;
}
