// `npm test`: a quick check that nothing is broken. CI runs it on every push.
// 1. the map mesher: face counts on small maps whose answer is known;
// 2. every demo in demos/index.json passes `b3d check`, and unpacks to a folder and packs back to
//    the cart the IDE's Save would write for it (older demo files gain new default fields);
// 3. `b3d new` makes a game that passes `b3d check`;
// 4. every demo (and the new game) runs headless for 300 frames with some buttons pressed,
//    without throwing; and b3d.d.ts (editor autocomplete) names exactly the engine's globals.
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

  // ---------------------------------------------------------------- 3b. text maps
  {
    const { writeFileSync, readdirSync, readFileSync: read } = await import('node:fs');
    const { bytesToB64, b64ToBytes } = await import('../js/format.js');
    const base = freshGame.cart;   // has tile 1, named grass
    const tryMap = async (label, text, size = [4, 2, 3]) => {
      const dir = join(tmp, 'tm-' + label.replace(/\W+/g, '-'));
      writeFolder(base, dir);
      for (const f of readdirSync(join(dir, 'maps'))) rmSync(join(dir, 'maps', f));
      writeFileSync(join(dir, 'cart.json'), JSON.stringify({ name: 'tm', maps: [{ name: 'm', size, origin: [0, 0, 0] }] }));
      writeFileSync(join(dir, 'maps', '0-m.txt'), text);
      return loadGame(dir);
    };
    // y1 left out (empty); z rows back to front; legend characters are free to choose
    const good = await tryMap('good', 'legend\nG 1 grass\n% 7\ny0\nGG..\n....\n...%\n');
    const bytes = good.errors.length ? null : b64ToBytes(good.cart.maps[0].data);
    test('text map: reads blocks at the right x, y, z', bytes && bytes[0] === 1 && bytes[1] === 1 && bytes[3 + 4 * (0 + 2 * 2)] === 7 && bytes.filter(Boolean).length === 3,
      good.errors.map((e) => e.msg).join('; '));
    const bad = await tryMap('bad', 'legend\ng 1\ny0\ngg..\n.q..\n....\n');
    test('text map: an unknown character names the file and line', bad.errors.length === 1 && /0-m\.txt:5$/.test(bad.errors[0].at) && /"q"/.test(bad.errors[0].msg), JSON.stringify(bad.errors));
    const short = await tryMap('short', 'legend\ng 1\ny0\ngg..\n....\n');
    test('text map: a layer with too few rows is an error', short.errors.length === 1 && /needs 3/.test(short.errors[0].msg), JSON.stringify(short.errors));
    // unpack: names give the characters (g for grass); more tiles than characters falls back to .bin
    const many = new Uint8Array(200);
    for (let i = 0; i < 200; i++) many[i] = (i % 120) + 1;
    const cart = { ...base, maps: [
      { name: 'named', w: 2, h: 1, d: 1, origin: [0, 0, 0], data: bytesToB64(new Uint8Array([1, 0])) },
      { name: 'many', w: 10, h: 2, d: 10, origin: [0, 0, 0], data: bytesToB64(many) },
    ] };
    const dir = join(tmp, 'tm-unpack');
    writeFolder(cart, dir);
    const files = readdirSync(join(dir, 'maps')).sort().join(' ');
    test('unpack writes .txt maps, and .bin for a map with too many tiles', files === '0-named.txt 1-many.bin', files);
    test('unpack picks a tile\'s first letter for its character', /^g 1 grass$/m.test(read(join(dir, 'maps', '0-named.txt'), 'utf8')));
    const back = await loadGame(dir, { strict: true });
    test('both maps pack back the same', back.cart.maps.every((m, i) => m.data === cart.maps[i].data));
  }

  // ---------------------------------------------------------------- 4. headless runs
  if (quick) console.log('skip headless runs (--quick)');
  else {
    const { runCart, parseInput } = await import('../cli/headless.mjs');
    // walk, turn, jump and press both buttons; click once, for the mouse demos
    const input = parseInput('up:10-120, right:60-150, left:160-220, down:200-260, o@40, x@90, o:130-140, x@200, 19@100');
    let apiChecked = false;
    for (const { label, game } of games) {
      const r = await runCart(game.cart, game.where, { frames: 300, input, seed: 1, res: 1, drawAll: true });
      try {
        test(`run ${label} for 300 frames`, r.ok && r.frames === 300, r.error || `stopped at frame ${r.frames}`);
        if (!apiChecked) {
          // b3d.d.ts (editor autocomplete, from the API docs) must name exactly the engine's globals
          apiChecked = true;
          const { dtsText } = await import('../cli/editor.mjs');
          const real = new Set(await r.page.evaluate(() => Object.keys(B3D.engine.api)));
          const { names } = dtsText();
          const missing = [...real].filter((n) => !names.has(n)), extra = [...names].filter((n) => !real.has(n));
          test('b3d.d.ts and the API docs cover every engine global, and only those', !missing.length && !extra.length,
            (missing.length ? 'not documented: ' + missing.join(', ') : '') + (extra.length ? ' documented but not in the engine: ' + extra.join(', ') : ''));
        }
      } finally { await r.close(); }
    }
  }
} catch (e) {
  test('the test script itself', false, e && e.stack ? e.stack : String(e));
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(failures.length ? `\n${failures.length} failed` : '\nall passed');
process.exitCode = failures.length ? 1 : 0;
