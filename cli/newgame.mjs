// What `b3d new` and `b3d unpack` write besides the game itself: a short CLAUDE.md for AI agents
// working in a game folder (written only when the folder has none, never over one), and the
// starter game for `b3d new`.
import { existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

export function gameClaudeMd(name) {
  return `# ${name}: a BLOCKO3D game

This folder is a BLOCKO3D game (a PICO-8-style 3D fantasy console) in the \`b3d\` project-folder form.
It was written by \`b3d\`; edit it freely.

- Code: \`main.js\`. The API is global (\`map(0)\`, \`btn(4)\`, \`vox(n, x, y, z)\`), angles are in turns, y is up.
- Assets: \`tiles/\`, \`vox/\`, \`sfx/\` (one text file each), \`maps/\`, \`music.txt\`, \`scenes.json\`, \`cart.json\`.
- Docs: \`b3d docs\` (the folder format, commands and testing), \`b3d api <name>\` (one function), \`b3d api\` (everything).

Work loop:

1. \`b3d info .\` for every asset by number and name.
2. Edit, then \`b3d check .\` (errors name the file and line).
3. Test headless: \`b3d run . --frames 300 --input "o@30, up:40-120" --watch "score"\`; \`b3d shot . --out shot.png\` to look.
   \`--at 50:"x = 10"\` sets game variables on a frame; \`--eval\` right after \`_init\`.
4. Placing things: \`b3d map . --at x,z [--scene n]\` shows a column and where a character can stand.
5. \`b3d pack .\` writes the \`.b3d.json\` cart the IDE opens; \`b3d export . --zip\` publishes.

The \`.b3d.json\` cart is made by \`b3d pack\`: don't edit it by hand. After someone edits the game in the IDE
and saves, \`b3d unpack <cart> .\` brings their changes back into this folder.
`;
}

// Writes CLAUDE.md into dir unless one is there. Returns true if it wrote it.
export function writeGameNotes(dir, name) {
  const f = join(dir, 'CLAUDE.md');
  if (existsSync(f)) return false;
  writeFileSync(f, gameClaudeMd(name));
  return true;
}

// A small working game: a floor built by a map script, a walking ball, an orbit camera.
export function writeStarter(dir, name) {
  for (const d of ['tiles', 'maps', 'vox', 'sfx']) mkdirSync(join(dir, d), { recursive: true });
  writeFileSync(join(dir, 'cart.json'), `{
  "name": ${JSON.stringify(name)},
  "maps": [
    { "name": "ground", "size": [16, 1, 16], "origin": [0, 0, 0] }
  ]
}
`);
  writeFileSync(join(dir, 'tiles', '01-grass.txt'), `name grass
top
bbbbbbbb
bb3bbbbb
bbbbbb3b
bbbbbbbb
b3bbbbbb
bbbbb3bb
bbbbbbbb
bbb3bbbb
side
3b3b3b3b
44444444
44444444
44444444
44444444
44444444
44444444
44444444
`);
  writeFileSync(join(dir, 'maps', '0-ground.gen.js'), `// builds map 0 when packing: a 16 x 16 floor of tile 1
export default (map) => {
  for (let x = 0; x < map.w; x++) for (let z = 0; z < map.d; z++) map.set(x, 0, z, 1);
};
`);
  writeFileSync(join(dir, 'sfx', '00-step.txt'), `name step
speed 4 loop 0 0
# pitch wave volume effect
20 6 2 5
`);
  writeFileSync(join(dir, 'main.js'), `// ${name}
let p = { x: 8, y: 1.5, z: 8 }, yaw = 0

function _update() {
  const [sx, sy] = stick(0)
  if (sx || sy) {
    // move relative to the camera: up is away from it
    const f = dir3(yaw, 0), r = dir3(yaw + 0.25, 0)
    p.x += (f[0] * -sy + r[0] * sx) * 0.08
    p.z += (f[2] * -sy + r[2] * sx) * 0.08
    if (time() * 60 % 16 == 0) sfx(0)
  }
  if (btn(4)) yaw -= 0.01
  if (btn(5)) yaw += 0.01
  p.x = mid(0.5, p.x, 15.5); p.z = mid(0.5, p.z, 15.5)   // stay on the floor
}

function _draw() {
  bg(12)
  map(0)
  sphere(p.x, p.y, p.z, 0.5, 8)
  cam_orbit([p.x, p.y, p.z], yaw, -0.15, 8)
  print('${name.replace(/'/g, "\\'")}', 4, 4, 7, 0)
}
`);
  writeGameNotes(dir, name);
}
