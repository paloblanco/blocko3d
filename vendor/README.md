# vendor/

Third-party files the IDE needs, kept here so the IDE works offline (and as an installed app) without
reaching other websites. Exported games don't use any of this: they carry their own bundled runtime.

| Folder | What | Version | License |
| --- | --- | --- | --- |
| `three/` | three.js, `build/three.module.min.js` (the editor previews; must match `three` in `package.json`) | 0.170.0 | MIT |
| `codemirror/` | CodeMirror 5: `lib/codemirror.js`, `mode/javascript/javascript.js` and `lib/codemirror.css`, minified with esbuild | 5.65.18 | MIT |
| `fonts/` | IBM Plex Sans 400/500/600 and JetBrains Mono 400/600, latin subset, from `@fontsource` | 5.x | SIL OFL 1.1 |
