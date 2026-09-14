// 引擎：渲染、相机装备、拾取、标签投影
import * as THREE from 'three';
import { clamp } from './utils.js';

// ---------- 相机装备：3/4 俯视、限制俯仰与距离、拖拽旋转 ----------
export class CameraRig {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;
    this.target = new THREE.Vector3(0, 2, 0);
    this.dTarget = this.target.clone();
    this.theta = 0.85; this.phi = 0.98; this.radius = 62;
    this.dTheta = this.theta; this.dPhi = this.phi; this.dRadius = this.radius;
    this.def = { theta: 0.85, phi: 0.98, radius: 62 };
    this.lim = { phiMin: 0.35, phiMax: 1.12, rMin: 24, rMax: 95 };
    this.didDrag = false;
    this.pointers = new Map();
    this.pinchDist = 0;
    this.enabled = true;
    this._down = null;
    const el = dom;
    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', (e) => this._onDown(e));
    el.addEventListener('pointermove', (e) => this._onMove(e));
    el.addEventListener('pointerup', (e) => this._onUp(e));
    el.addEventListener('pointercancel', (e) => this._onUp(e));
    el.addEventListener('wheel', (e) => this._onWheel(e), { passive: false });
    el.addEventListener('dblclick', () => this.reset());
  }

  clampAll() {
    this.dPhi = clamp(this.dPhi, this.lim.phiMin, this.lim.phiMax);
    this.dRadius = clamp(this.dRadius, this.lim.rMin, this.lim.rMax);
  }

  reset() {
    this.dTheta = this.def.theta; this.dPhi = this.def.phi; this.dRadius = this.def.radius;
    this.dTarget.set(0, 2, 0);
  }

  focusOn(x, z, r) {
    this.dTarget.set(x, 2.5, z);
    if (r) this.dRadius = clamp(r, this.lim.rMin, this.lim.rMax);
  }

  _onDown(e) {
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    this._down = { x: e.clientX, y: e.clientY };
    this.didDrag = false;
    if (this.pointers.size === 2) {
      const pts = Array.from(this.pointers.values());
      this.pinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  }

  _onMove(e) {
    if (!this.enabled || !this.pointers.has(e.pointerId)) return;
    const prev = this.pointers.get(e.pointerId);
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = Array.from(this.pointers.values());
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (this.pinchDist > 0) {
        this.dRadius *= this.pinchDist / d;
        this.clampAll();
      }
      this.pinchDist = d;
      this.didDrag = true;
      return;
    }
    if (Math.abs(e.clientX - this._down.x) + Math.abs(e.clientY - this._down.y) > 6) this.didDrag = true;
    if (this.didDrag) {
      this.dTheta -= dx * 0.0052;
      this.dPhi -= dy * 0.0042;
      this.clampAll();
    }
  }

  _onUp(e) {
    this.pointers.delete(e.pointerId);
    if (this.pointers.size < 2) this.pinchDist = 0;
    this._down = null;
  }

  _onWheel(e) {
    e.preventDefault();
    this.dRadius *= 1 + e.deltaY * 0.0011;
    this.clampAll();
  }

  update(dt) {
    const k = 1 - Math.exp(-dt * 6);
    this.theta += (this.dTheta - this.theta) * k;
    this.phi += (this.dPhi - this.phi) * k;
    this.radius += (this.dRadius - this.radius) * k;
    this.target.lerp(this.dTarget, k);
    const sp = Math.sin(this.phi);
    this.camera.position.set(
      this.target.x + this.radius * sp * Math.sin(this.theta),
      this.target.y + this.radius * Math.cos(this.phi),
      this.target.z + this.radius * sp * Math.cos(this.theta)
    );
    this.camera.lookAt(this.target);
  }
}

// ---------- 引擎主体 ----------
export class Engine {
  constructor(canvas, universe) {
    this.canvas = canvas;
    this.universe = universe;
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.scene = universe.scene;
    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 900);
    this.rig = new CameraRig(this.camera, canvas);
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2(-10, -10);
    this.hovered = null;
    this.labels = [];
    this.frameHooks = [];
    this.clickHook = null;
    this.hoverHook = null;
    this.clock = new THREE.Clock();
    this.running = false;
    this.setupLights();
    this.setupPointer();
    window.addEventListener('resize', () => this.onResize());
  }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0xbfd0ff, 0x3a2f55, 0.9);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff2d8, 2.3);
    sun.position.set(42, 62, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -75;
    sun.shadow.camera.right = 75;
    sun.shadow.camera.top = 75;
    sun.shadow.camera.bottom = -75;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 220;
    sun.shadow.bias = -0.0004;
    this.scene.add(sun);
    const rim = new THREE.DirectionalLight(0x7de3ff, 0.5);
    rim.position.set(-40, 30, -50);
    this.scene.add(rim);
  }

  setupPointer() {
    const el = this.canvas;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    });
    el.addEventListener('pointerleave', () => { this.pointer.set(-10, -10); });
    el.addEventListener('pointerup', (e) => {
      if (this.rig.didDrag) return;
      const r = el.getBoundingClientRect();
      this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      const hit = this.pick();
      if (hit && this.clickHook) this.clickHook(hit);
    });
  }

  pick() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.universe.interactives, false);
    if (hits.length > 0) return hits[0].object.userData.region || null;
    return null;
  }

  onClickRegion(fn) { this.clickHook = fn; }
  onHoverRegion(fn) { this.hoverHook = fn; }
  onFrame(fn) { this.frameHooks.push(fn); }

  addLabel(el, pos) {
    const p = pos && pos.clone ? pos.clone() : new THREE.Vector3(pos.x, pos.y || 0, pos.z);
    const item = { el: el, pos: p };
    this.labels.push(item);
    return item;
  }

  removeLabel(item) {
    const i = this.labels.indexOf(item);
    if (i !== -1) this.labels.splice(i, 1);
  }

  updateLabels() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const v = new THREE.Vector3();
    for (let i = 0; i < this.labels.length; i++) {
      const lb = this.labels[i];
      v.copy(lb.pos).project(this.camera);
      const behind = v.z > 1;
      if (behind) { lb.el.style.display = 'none'; continue; }
      lb.el.style.display = '';
      lb.el.style.left = ((v.x * 0.5 + 0.5) * w) + 'px';
      lb.el.style.top = ((-v.y * 0.5 + 0.5) * h) + 'px';
    }
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      requestAnimationFrame(loop);
      const dt = Math.min(this.clock.getDelta(), 0.05);
      for (let i = 0; i < this.frameHooks.length; i++) this.frameHooks[i](dt);
      this.universe.update(dt);
      this.rig.update(dt);
      const hover = this.pick();
      if (hover !== this.hovered) {
        this.hovered = hover;
        this.canvas.style.cursor = hover ? 'pointer' : 'grab';
        if (this.hoverHook) this.hoverHook(hover);
      }
      this.updateLabels();
      this.renderer.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }
}
