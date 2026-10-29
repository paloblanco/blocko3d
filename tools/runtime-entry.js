// Entry point for runtime/blocko3d.runtime.js (built with `npm run build`).
// Exposes the boot helpers as window.Blocko3D; three.js is bundled in.
import * as boot from '../js/boot.js';
import { VERSION } from '../js/version.js';

window.Blocko3D = { ...boot, VERSION };
window.Blocky3D = window.Blocko3D;   // the name before the rename to BLOCKO3D, kept so older pages still work
