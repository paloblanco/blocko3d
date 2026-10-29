# CLAUDE.md: BLOCKO3D

BLOCKO3D is a small, deliberately limited 3D game engine for JavaScript with a PICO-8-style developer experience: a global API, 8×8 palette textures, flat rendering, a square screen, and an IDE that is one static web page. The owner is Rocco (Palo Blanco Games), who designed it with Claude. Current version: 0.1.0-alpha. Live at https://paloblanco.github.io/blocko3d/.

## Read the right file for the job

- **Writing a whole game in one reply, with no tools:** read `llms.txt` (made by the build from `tools/llms.md` and `demos/starter.b3d.json`).
- **Making or changing a game** (a cart or a project folder): read `MAKING_GAMES.md` (also `b3d docs`) and look things up with `b3d api <name>` or `docs/API.md`. You don't need the engine notes.
- **Changing the engine, the IDE, the runtime, the demos or the `b3d` tool:** read `docs/ENGINE.md` in full first. It holds every design decision agreed with the owner, the architecture, the build, the tests and the open items.

## Rules for changing this repo

- **Run `npm run build` before every commit, for any change** (IDE-only changes too), and commit what it rewrites: `runtime/`, `standalone_demo/`, `demos/castle.b3d.json`, `docs/API.md`, `llms.txt`, `ide-sw.js`, `ide.webmanifest`. CI fails if they're stale.
- **Discuss API design with the owner before changing it.** API decisions were made deliberately, one at a time.
- **Keep the docs in sync:** an API change touches `js/apidocs.js` (the Info tab, which also makes `docs/API.md`), `README.md`, `CHANGELOG.md`, `MAKING_GAMES.md`, `tools/llms.md` (the build checks its function names) and `docs/ENGINE.md`; a cart-format change also touches `cli/check.mjs`, `cli/folder.mjs` and `cli/idesave.mjs`.
- **Guiding principles:** everything is global (`map(0)`, never `engine.map(0)`); limits are the point; all in one place, no build step for users; 3D, not 2D; the simplest thing that works.
- Exported games stay fully standalone: no network requests, they work from `file://`.
- Keep explanations to the owner plain and practical.
