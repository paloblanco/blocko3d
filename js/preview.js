// Small orbit viewer used by the Map and Spr editors.
import * as THREE from 'three';
import {
  DEFAULT_PALETTE, createAtlas, writeAtlas, createMap, buildMapGeometry,
  createPaletteUniform, syncPaletteUniform, createVoxelMaterial, setupRenderer,
} from './core.js';

export class Preview {
  constructor(canvas, { autoSpin = false } = {}) {
    this.canvas = canvas;
    this.renderer = setupRenderer(canvas);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.05, 2000);
    this.palette = [...DEFAULT_PALETTE];
    this.palU = createPaletteUniform(this.palette);
    this.atlas = createAtlas();
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), createVoxelMaterial(this.atlas, this.palU));
    this.scene.add(this.mesh);
    this.helpers = new THREE.Group();
    this.scene.add(this.helpers);
    this.yaw = 0.62; this.pitch = 0.55; this.dist = 10; this.target = new THREE.Vector3();
    this.autoSpin = autoSpin;
    this.bg = 0x111d35;
    this._bindInput();
    this._resize();
    new ResizeObserver(() => { this._resize(); this.render(); }).observe(canvas);
    if (autoSpin) {
      const spin = () => {
        if (this.autoSpin && !this._dragging && canvas.isConnected && canvas.offsetParent) { this.yaw += 0.008; this.render(); }
        requestAnimationFrame(spin);
      };
      requestAnimationFrame(spin);
    }
  }

  _resize() {
    const w = Math.max(1, this.canvas.clientWidth), h = Math.max(1, this.canvas.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _bindInput() {
    const c = this.canvas;
    let lx = 0, ly = 0;
    c.addEventListener('pointerdown', (e) => { this._dragging = true; lx = e.clientX; ly = e.clientY; c.setPointerCapture(e.pointerId); });
    c.addEventListener('pointermove', (e) => {
      if (!this._dragging) return;
      this.yaw -= (e.clientX - lx) * 0.01;
      this.pitch = Math.max(-1.4, Math.min(1.4, this.pitch + (e.clientY - ly) * 0.01));
      lx = e.clientX; ly = e.clientY;
      this.render();
    });
    c.addEventListener('pointerup', () => { this._dragging = false; });
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.dist = Math.max(1.5, Math.min(400, this.dist * (e.deltaY > 0 ? 1.1 : 0.9)));
      this.render();
    }, { passive: false });
  }

  setPalette(p) { this.palette = p; syncPaletteUniform(this.palU, p); }
  setTiles(tiles) { writeAtlas(this.atlas, tiles); }

  // map: {w, h, d, data: Uint8Array, origin}
  setMap(map, { layer = null, frame = false } = {}) {
    const m = createMap(map.w, map.h, map.d, map.origin, map.data);
    this.mesh.geometry.dispose();
    this.mesh.geometry = buildMapGeometry(m);
    this.helpers.clear();
    const lines = [];
    if (layer !== null) {
      // outline of the layer being edited
      for (const y of [layer, layer + 1]) {
        lines.push(0, y, 0, map.w, y, 0, map.w, y, 0, map.w, y, map.d, map.w, y, map.d, 0, y, map.d, 0, y, map.d, 0, y, 0);
      }
    }
    if (frame) {
      const o = map.origin, s = 0.6;
      lines.push(o[0] - s, o[1], o[2], o[0] + s, o[1], o[2], o[0], o[1] - s, o[2], o[0], o[1] + s, o[2], o[0], o[1], o[2] - s, o[0], o[1], o[2] + s);
    }
    if (lines.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
      this.helpers.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xff004d })));
    }
    const size = Math.max(map.w, map.h, map.d);
    if (this._lastSize !== size) { this.dist = size * 1.35 + 2; this._lastSize = size; }
    this.target.set(map.w / 2, map.h / 2, map.d / 2);
  }

  render() {
    const cp = Math.cos(this.pitch);
    this.camera.position.set(
      this.target.x + Math.sin(this.yaw) * cp * this.dist,
      this.target.y + Math.sin(this.pitch) * this.dist,
      this.target.z + Math.cos(this.yaw) * cp * this.dist,
    );
    this.camera.lookAt(this.target);
    this.renderer.setClearColor(this.bg, 1);
    this.renderer.render(this.scene, this.camera);
  }
}
