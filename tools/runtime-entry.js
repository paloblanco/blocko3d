// Entry point for runtime/blocky3d.runtime.js (built with `npm run build`).
// Exposes the boot helpers as window.Blocky3D; three.js is bundled in.
import * as boot from '../js/boot.js';
import { VERSION } from '../js/version.js';

window.Blocky3D = { ...boot, VERSION };
