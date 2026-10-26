// Small orbit viewer used by the Map, Tile and Vox editors.
import * as THREE from 'three';
import {
  DEFAULT_PALETTE, createAtlas, writeAtlas, createMap, buildMapGeometry,
  createPaletteUniform, syncPaletteUniform, createVoxelMaterial, setupRenderer,
  VOX, createVox, buildVoxGeometry, createVoxMaterial,
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
    // vox models: the model, a faint ghost for onion skin, and a floor grid to click on
    this.voxMesh = new THREE.Mesh(new THREE.BufferGeometry(), createVoxMaterial(this.palU));
    this.ghost = new THREE.Mesh(new THREE.BufferGeometry(),
      new THREE.MeshBasicMaterial({ color: 0xc2c3c7, transparent: true, opacity: 0.22, depthWrite: false }));
    this.ghost.renderOrder = 1;
    this.scene.add(this.voxMesh, this.ghost);
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
    let lx = 0, ly = 0, sx = 0, sy = 0, moved = false;
    c.addEventListener('contextmenu', (e) => { if (this.onClick) e.preventDefault(); });
    c.addEventListener('pointerdown', (e) => {
      this._dragging = true; lx = sx = e.clientX; ly = sy = e.clientY; moved = false;
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener('pointerup', (e) => {
      // a click (no drag) is passed on to the editor, with the voxel under the pointer
      if (this._dragging && !moved && this.onClick) this.onClick(e, this.hitVox(e.clientX, e.clientY));
    });
    c.addEventListener('pointermove', (e) => {
      if (!this._dragging) return;
      if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 4) moved = true;
      if (!moved) return;
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
    this.mesh.visible = true;
    this.voxMesh.visible = false;
    this.ghost.geometry.dispose();
    this.ghost.geometry = new THREE.BufferGeometry();
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

  // v: {data, pivot}; ghost: another model to show faintly (onion skin) or null
  setVox(v, { ghost = null, layer = null } = {}) {
    this.mesh.visible = false;
    this.voxMesh.visible = true;
    this.voxMesh.geometry.dispose();
    this.voxMesh.geometry = buildVoxGeometry(createVox(v.data, v.pivot));
    this.ghost.geometry.dispose();
    this.ghost.geometry = ghost ? buildVoxGeometry(createVox(ghost.data, ghost.pivot)) : new THREE.BufferGeometry();
    this.helpers.clear();
    const lines = [];
    for (let i = 0; i <= VOX; i++) lines.push(i, 0, 0, i, 0, VOX, 0, 0, i, VOX, 0, i);   // floor grid
    const grid = new THREE.BufferGeometry();
    grid.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    this.helpers.add(new THREE.LineSegments(grid, new THREE.LineBasicMaterial({ color: 0x2a3557 })));
    const red = [];
    if (layer !== null) {
      for (const y of [layer, layer + 1]) red.push(0, y, 0, VOX, y, 0, VOX, y, 0, VOX, y, VOX, VOX, y, VOX, 0, y, VOX, 0, y, VOX, 0, y, 0);
    }
    const o = v.pivot, s = 1.5;
    red.push(o[0] - s, o[1], o[2], o[0] + s, o[1], o[2], o[0], o[1] - s, o[2], o[0], o[1] + s, o[2], o[0], o[1], o[2] - s, o[0], o[1], o[2] + s);
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(red, 3));
    this.helpers.add(new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xff004d })));
    if (this._lastSize !== 'vox') { this.dist = 19; this._lastSize = 'vox'; }
    this.target.set(VOX / 2, VOX / 2, VOX / 2);
  }

  // The voxel under a screen point: {cell, normal} for a hit voxel, or {cell, normal: [0, 1, 0],
  // floor: true} for a floor cell; null when the pointer misses both.
  hitVox(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const hit = this.voxMesh.visible ? ray.intersectObject(this.voxMesh)[0] : null;
    if (hit) {
      const n = hit.face.normal;
      const p = hit.point.clone().addScaledVector(n, -0.5);   // step into the voxel that was hit
      return { cell: [Math.floor(p.x), Math.floor(p.y), Math.floor(p.z)], normal: [Math.round(n.x), Math.round(n.y), Math.round(n.z)] };
    }
    const floor = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), floor)) return null;
    const x = Math.floor(floor.x), z = Math.floor(floor.z);
    if (x < 0 || z < 0 || x >= VOX || z >= VOX) return null;
    return { cell: [x, -1, z], normal: [0, 1, 0], floor: true };
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
