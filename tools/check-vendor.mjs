// First step of `npm run build`: three.js is in two places that must match. The runtime bundle
// (games, Run, exports) is built from the npm package (`three` in package.json); the IDE's editor
// previews load vendor/three/three.module.min.js. If they differ, the previews and the games would
// run different three.js versions, so the build stops here.
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const npmCopy = new URL('node_modules/three/build/three.module.min.js', root);
const vendorCopy = new URL('vendor/three/three.module.min.js', root);

let a, b;
try { a = readFileSync(npmCopy); } catch { fail('node_modules/three is missing; run `npm install` first'); }
try { b = readFileSync(vendorCopy); } catch { fail('vendor/three/three.module.min.js is missing'); }
if (!a.equals(b)) {
  const version = JSON.parse(readFileSync(new URL('node_modules/three/package.json', root), 'utf8')).version;
  fail(`vendor/three/three.module.min.js is not the same file as three ${version} from npm (package.json).\n`
    + '  To use the npm version everywhere: cp node_modules/three/build/three.module.min.js vendor/three/\n'
    + '  and update the version in vendor/README.md.');
}

function fail(msg) {
  console.error('build stopped: ' + msg);
  process.exit(1);
}
