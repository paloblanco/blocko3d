// Small orbit viewer used by the Map, Tile, Vox and Scene editors.
import * as THREE from 'three';
import {
  DEFAULT_PALETTE, createAtlas, writeAtlas, createMap, buildMapGeometry,
  createPaletteUniform, syncPaletteUniform, createVoxelMaterial, setupRenderer,
  VOX, createVox, buildVoxGeometry, createVoxMaterial, updateTransform, voxMatrix,
} from './core.js';

// Outline of one layer of a w × h × d grid, as line segments: the layer's two faces (at L and L + 1)
// across the other two axes. axis is the axis the layers stack along: 'y', 'z' or 'x'.
function layerLines(axis, L, w, h, d) {
  const out = [];
  for (const k of [L, L + 1]) {
    // the four corners of the rectangle at k, in [x, y, z]
    const c = axis === 'y' ? [[0, k, 0], [w, k, 0], [w, k, d], [0, k, d]]
      : axis === 'z' ? [[0, 0, k], [w, 0, k], [w, h, k], [0, h, k]]
        : [[k, 0, 0], [k, 0, d], [k, h, d], [k, h, 0]];
    for (let i = 0; i < 4; i++) out.push(...c[i], ...c[(i + 1) % 4]);
  }
  return out;
}

// The 12 edges of every filled voxel (data: 0 = empty), as line segments in voxel units.
function voxelEdges(data) {
  const out = [];
  for (let z = 0; z < VOX; z++) for (let y = 0; y < VOX; y++) for (let x = 0; x < VOX; x++) {
    if (!data[x + VOX * (y + VOX * z)]) continue;
    for (const [a, b] of [[0, 1], [1, 2], [2, 3], [3, 0]]) {
      const sq = [[0, 0], [1, 0], [1, 1], [0, 1]];
      out.push(x + sq[a][0], y + sq[a][1], z, x + sq[b][0], y + sq[b][1], z);           // front
      out.push(x + sq[a][0], y + sq[a][1], z + 1, x + sq[b][0], y + sq[b][1], z + 1);   // back
    }
    for (const [dx, dy] of [[0, 0], [1, 0], [1, 1], [0, 1]]) out.push(x + dx, y + dy, z, x + dx, y + dy, z + 1);
  }
  return out;
}

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
    // push the model's faces back a touch, so voxel edge lines drawn on them stay visible
    Object.assign(this.voxMesh.material, { polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
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
    let lx = 0, ly = 0, sx = 0, sy = 0, moved = false, panning = false;
    c.addEventListener('contextmenu', (e) => { if (this.onClick || this.canPan) e.preventDefault(); });
    c.addEventListener('pointerdown', (e) => {
      // the editor can take over a drag (the scene editor moves the selected item)
      if (this.onGrab && e.button === 0 && !e.shiftKey && this.onGrab('down', e)) {
        this._grabbing = true; c.setPointerCapture(e.pointerId); return;
      }
      this._dragging = true; lx = sx = e.clientX; ly = sy = e.clientY; moved = false;
      panning = this.canPan && (e.button === 1 || e.button === 2 || e.shiftKey);
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener('pointerup', (e) => {
      if (this._grabbing) { this._grabbing = false; this.onGrab('up', e); return; }
      // a click (no drag) is passed on to the editor, with the voxel under the pointer
      if (this._dragging && !moved && this.onClick) this.onClick(e, this.hitVox(e.clientX, e.clientY));
    });
    c.addEventListener('pointermove', (e) => {
      if (this._grabbing) { this.onGrab('move', e); return; }
      if (!this._dragging) return;
      if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 4) moved = true;
      if (!moved) return;
      if (panning) {
        // slide the point we orbit around, across the screen
        const k = this.dist * 0.0022;
        const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0);
        const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1);
        this.target.addScaledVector(right, -(e.clientX - lx) * k).addScaledVector(up, (e.clientY - ly) * k);
      } else {
        this.yaw -= (e.clientX - lx) * 0.01;
        this.pitch = Math.max(-1.4, Math.min(1.4, this.pitch + (e.clientY - ly) * 0.01));
      }
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

  // map: {w, h, d, data: Uint8Array, origin}; layer: the layer being edited along axis ('y', 'z', 'x')
  setMap(map, { layer = null, axis = 'y', frame = false } = {}) {
    this.mesh.visible = true;
    this.voxMesh.visible = false;
    this.ghost.geometry.dispose();
    this.ghost.geometry = new THREE.BufferGeometry();
    const m = createMap(map.w, map.h, map.d, map.origin, map.data);
    this.mesh.geometry.dispose();
    this.mesh.geometry = buildMapGeometry(m);
    this.helpers.clear();
    const lines = [];
    if (layer !== null) lines.push(...layerLines(axis, layer, map.w, map.h, map.d));   // the layer being edited
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

  // v: {data, pivot}; ghost: another model to show faintly (onion skin) or null; layer: the layer
  // being edited along axis; edges: outline every voxel
  setVox(v, { ghost = null, layer = null, axis = 'y', edges = false } = {}) {
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
    if (edges) {
      const eg = new THREE.BufferGeometry();
      eg.setAttribute('position', new THREE.Float32BufferAttribute(voxelEdges(v.data), 3));
      this.helpers.add(new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: 0x0d1222 })));
    }
    const red = [];
    if (layer !== null) red.push(...layerLines(axis, layer, VOX, VOX, VOX));
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

  // ---- scene editor: many maps and vox models at once.
  // items: [{ type: 'map', key, src: {w, h, d, data, origin}, pos, angle }
  //         | { type: 'vox', key, src: {data, pivot}, pos, yaw }]
  // key names the source (e.g. 'm3', 'v5'): meshes are built once per key until clearSceneCache().
  setScene(items, { sel = -1 } = {}) {
    if (!this.sceneGroup) {
      this.sceneGroup = new THREE.Group();
      this.sceneHelpers = new THREE.Group();
      this.scene.add(this.sceneGroup, this.sceneHelpers);
      this._geo = new Map();
      this._mapMat = createVoxelMaterial(this.atlas, this.palU);
      this._voxMat = createVoxMaterial(this.palU);
      this._standMat = new THREE.MeshBasicMaterial({ color: 0x8d93ad, wireframe: true });
    }
    this.mesh.visible = false; this.voxMesh.visible = false;
    for (const o of this.sceneGroup.children) if (o.material === this._standMat) o.geometry.dispose();
    for (const o of this.sceneHelpers.children) { o.geometry.dispose(); o.material.dispose(); }
    this.sceneGroup.clear(); this.sceneHelpers.clear();
    const bounds = new THREE.Box3();
    let selBox = null;
    this.itemBoxes = [];
    items.forEach((it, i) => {
      let geo = this._geo.get(it.key);
      if (!geo) {
        geo = it.type === 'map' ? buildMapGeometry(createMap(it.src.w, it.src.h, it.src.d, it.src.origin, it.src.data))
          : buildVoxGeometry(createVox(it.src.data, it.src.pivot));
        this._geo.set(it.key, geo);
      }
      const matrix = new THREE.Matrix4();
      let size;
      if (it.type === 'map') {
        const m = createMap(it.src.w, it.src.h, it.src.d, it.src.origin);
        m.pos = [...it.pos]; m.angle = [...it.angle];
        updateTransform(m);
        matrix.copy(m._m);
        size = [it.src.w, it.src.h, it.src.d];
      } else {
        voxMatrix(it.src, it.pos, [0, it.yaw, 0], [1, 1, 1], matrix);
        size = [VOX, VOX, VOX];
      }
      const empty = !geo.index || geo.index.count === 0;
      // an empty map or model gets a wire box, so it can still be seen and picked
      const o = empty ? new THREE.Mesh(new THREE.BoxGeometry(...size).translate(size[0] / 2, size[1] / 2, size[2] / 2), this._standMat)
        : new THREE.Mesh(geo, it.type === 'map' ? this._mapMat : this._voxMat);
      o.matrixAutoUpdate = false;
      o.matrix.copy(matrix);
      o.updateMatrixWorld(true);
      o.userData.item = i;
      this.sceneGroup.add(o);
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      const box = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld);
      bounds.union(box);
      this.itemBoxes[i] = box.clone();
      if (i === sel) selBox = box;
    });
    // ground grid around everything, at y = 0
    const lo = bounds.isEmpty() ? [-4, -4] : [Math.floor(bounds.min.x) - 4, Math.floor(bounds.min.z) - 4];
    const hi = bounds.isEmpty() ? [12, 12] : [Math.ceil(bounds.max.x) + 4, Math.ceil(bounds.max.z) + 4];
    const lines = [];
    for (let x = lo[0]; x <= hi[0]; x++) lines.push(x, 0, lo[1], x, 0, hi[1]);
    for (let z = lo[1]; z <= hi[1]; z++) lines.push(lo[0], 0, z, hi[0], 0, z);
    const grid = new THREE.BufferGeometry();
    grid.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    this.sceneHelpers.add(new THREE.LineSegments(grid, new THREE.LineBasicMaterial({ color: 0x2a3557 })));
    const axes = new THREE.BufferGeometry();
    axes.setAttribute('position', new THREE.Float32BufferAttribute([0, 0.01, 0, 2, 0.01, 0, 0, 0.01, 0, 0, 0.01, 2], 3));
    axes.setAttribute('color', new THREE.Float32BufferAttribute([1, 0, 0.3, 1, 0, 0.3, 0.16, 0.68, 1, 0.16, 0.68, 1], 3));
    this.sceneHelpers.add(new THREE.LineSegments(axes, new THREE.LineBasicMaterial({ vertexColors: true })));
    if (selBox) {
      this.sceneHelpers.add(new THREE.Box3Helper(selBox.expandByScalar(0.03), 0xffec27));
      const p = items[sel].pos, s = 0.6, cross = new THREE.BufferGeometry();
      cross.setAttribute('position', new THREE.Float32BufferAttribute([p[0] - s, p[1], p[2], p[0] + s, p[1], p[2], p[0], p[1] - s, p[2], p[0], p[1] + s, p[2], p[0], p[1], p[2] - s, p[0], p[1], p[2] + s], 3));
      const line = new THREE.LineSegments(cross, new THREE.LineBasicMaterial({ color: 0xff004d, depthTest: false }));
      line.renderOrder = 2;
      this.sceneHelpers.add(line);
    }
    this.sceneBounds = bounds;
  }

  clearSceneCache() {
    if (!this._geo) return;
    for (const g of this._geo.values()) g.dispose();
    this._geo.clear();
  }

  // Point the camera at a box (or the whole scene), from a distance that shows all of it.
  frameBox(box = this.sceneBounds) {
    if (!box || box.isEmpty()) { this.target.set(4, 0, 4); this.dist = 16; return; }
    box.getCenter(this.target);
    const s = box.getSize(new THREE.Vector3());
    this.dist = Math.max(6, Math.max(s.x, s.y, s.z) * 1.3 + 2);
  }

  // The scene item under a screen point, or -1.
  pickItem(clientX, clientY) {
    if (!this.sceneGroup) return -1;
    const hit = this._ray(clientX, clientY).intersectObjects(this.sceneGroup.children, false)[0];
    return hit ? hit.object.userData.item : -1;
  }

  // Where a screen point meets a flat plane, or null: by default the level plane at height value;
  // axis 'z' is the upright plane z = value, 'x' the upright plane x = value.
  planePoint(clientX, clientY, value, axis = 'y') {
    const n = new THREE.Vector3(axis === 'x' ? 1 : 0, axis === 'y' ? 1 : 0, axis === 'z' ? 1 : 0);
    const p = new THREE.Vector3();
    return this._ray(clientX, clientY).ray.intersectPlane(new THREE.Plane(n, -value), p) ? p : null;
  }

  _ray(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1), this.camera);
    return ray;
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
