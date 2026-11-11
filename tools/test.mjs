// `npm test`: a quick check that nothing is broken. CI runs it on every push.
// 1. the map mesher: face counts on small maps whose answer is known;
// 2. every demo in demos/index.json passes `b3d check`, and unpacks to a folder and packs back to
//    the cart the IDE's Save would write for it (older demo files gain new default fields);
// 3. `b3d new` makes a game that passes `b3d check`;
// 4. every demo (and the new game) runs headless for 300 frames with some buttons pressed,
//    without throwing.
// Part 4 needs Playwright's Chromium (npx playwright install chromium), or set B3D_CHROMIUM to a
// Chrome or Chromium already on this computer. `npm test -- --quick` skips it.
import { readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createMap, buildMapGeometry, mapIndex } from '../js/core.js';
import { loadGame } from '../cli/project.mjs';
import { checkGame } from '../cli/check.mjs';
import { writeFolder } from '../cli/folder.mjs';
import { writeStarter } from '../cli/newgame.mjs';
import { ideSaveText } from '../cli/idesave.mjs';

const root = new URL('../', import.meta.url);
const quick = process.argv.includes('--quick');
const failures = [];
const tmp = mkdtempSync(join(tmpdir(), 'b3d-test-'));

function test(name, ok, detail = '') {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${!ok && detail ? ': ' + detail : ''}`);
  if (!ok) failures.push(name);
}

try {
  // ---------------------------------------------------------------- 1. the mesher
  const quads = (w, h, d, blocks) => {
    const m = createMap(w, h, d);
    for (const [x, y, z] of blocks) m.data[mapIndex(m, x, y, z)] = 1;
    return buildMapGeometry(m).index.count / 6;
  };
  test('mesher: empty map has no faces', quads(4, 4, 4, []) === 0);
  test('mesher: one block has 6 faces', quads(3, 3, 3, [[1, 1, 1]]) === 6);
  test('mesher: one block at the map edge has 6 faces', quads(1, 1, 1, [[0, 0, 0]]) === 6);
  test('mesher: two touching blocks have 10 faces', quads(3, 1, 1, [[0, 0, 0], [1, 0, 0]]) === 10);
  const cube = [];
  for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) cube.push([x, y, z]);
  test('mesher: a solid 3x3x3 has only its 54 outside faces', quads(3, 3, 3, cube) === 54);
  const big = createMap(64, 64, 64);
  for (let i = 0; i < big.data.length; i++) big.data[i] = ((i % 64) + Math.floor(i / 64)) & 1;   // many faces
  const g = buildMapGeometry(big);
  test('mesher: more than 65,536 vertices use 32-bit indices', g.index.array instanceof Uint32Array && g.attributes.position.count > 65536);

  // ---------------------------------------------------------------- 2. the demos
  const demos = JSON.parse(readFileSync(new URL('demos/index.json', root), 'utf8'));
  const games = [];
  for (const d of demos) {
    const path = new URL('demos/' + d.file, root).pathname;
    const game = await loadGame(path);
    games.push({ label: d.file, game });
    const res = await checkGame(game);
    test(`check ${d.file}`, res.errors.length === 0, res.errors.map((e) => `${e.at}: ${e.msg}`).join('; '));
    const dir = join(tmp, d.file.replace(/\.b3d\.json$/, ''));
    const saved = ideSaveText(game.cart, game.cart.name);   // as if opened in the IDE and saved
    writeFolder(JSON.parse(saved), dir);
    const back = await loadGame(dir, { strict: true });
    test(`unpack and pack ${d.file} gives the IDE's save back`, JSON.stringify(back.cart) === saved);
  }

  // ---------------------------------------------------------------- 3. b3d new
  const fresh = join(tmp, 'new-game');
  writeStarter(fresh, 'new game');
  const freshGame = await loadGame(fresh, { strict: true });
  const freshRes = await checkGame(freshGame);
  test('b3d new makes a game that passes check', freshRes.errors.length === 0, freshRes.errors.map((e) => `${e.at}: ${e.msg}`).join('; '));
  games.push({ label: 'b3d new game', game: freshGame });

  // ---------------------------------------------------------------- 4. headless runs
  if (quick) console.log('skip headless runs (--quick)');
  else {
    const { runCart, parseInput } = await import('../cli/headless.mjs');
    // walk, turn, jump and press both buttons; click once, for the mouse demos
    const input = parseInput('up:10-120, right:60-150, left:160-220, down:200-260, o@40, x@90, o:130-140, x@200, 19@100');
    for (const { label, game } of games) {
      const r = await runCart(game.cart, game.where, { frames: 300, input, seed: 1, res: 1, drawAll: true });
      try { test(`run ${label} for 300 frames`, r.ok && r.frames === 300, r.error || `stopped at frame ${r.frames}`); }
      finally { await r.close(); }
    }
  }
} catch (e) {
  test('the test script itself', false, e && e.stack ? e.stack : String(e));
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(failures.length ? `\n${failures.length} failed` : '\nall passed');
process.exitCode = failures.length ? 1 : 0;
