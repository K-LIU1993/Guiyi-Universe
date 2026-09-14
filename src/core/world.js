import * as THREE from 'three';
import { WORLD, REGIONS } from './constants.js';
import { Tweens, clamp, lerp, easeInOutCubic, deg, mulberry32 } from './utils.js';
import { toon, GRADIENT } from './materials.js';
import {
  islandBase, sakura, pine, bush, tuft,
  house, modernBlock, stiltHouse, billboard, signBoard,
  campfire, lanternString, portal, crystalShrine, bannerPole,
  bridge, forkSign, rockChunk, pathStone, benchLog
} from './geometry.js';

const DECK_Y = 1.2;

function regionPos(r) {
  if (r.center) return new THREE.Vector3(0, 0, 0);
  const a = deg(r.angle);
  return new THREE.Vector3(Math.cos(a) * WORLD.radius, 0, Math.sin(a) * WORLD.radius);
}

// ---------- 天空穹顶（渐变夜空） ----------
function makeSky() {
  const vert = ['varying vec3 vPos;', 'void main() {', '  vPos = position;', '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '}'].join('\n');
  const frag = [
    'varying vec3 vPos;',
    'void main() {',
    '  float h = normalize(vPos).y;',
    '  vec3 top = vec3(0.045, 0.05, 0.16);',
    '  vec3 mid = vec3(0.12, 0.10, 0.30);',
    '  vec3 low = vec3(0.30, 0.16, 0.38);',
    '  vec3 col = h > 0.0 ? mix(mid, top, pow(h, 0.72)) : mix(mid, low, clamp(-h * 2.4, 0.0, 1.0));',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');
  const mat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, side: THREE.BackSide, depthWrite: false });
  mat.fog = false;
  return new THREE.Mesh(new THREE.SphereGeometry(380, 24, 18), mat);
}

// ---------- 星空 ----------
function makeStars() {
  const n = 620;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const e = 0.04 + Math.random() * 1.45;
    const r = 300 + Math.random() * 60;
    pos[i * 3] = Math.cos(a) * Math.cos(e) * r;
    pos[i * 3 + 1] = Math.sin(e) * r;
    pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.8 });
  mat.toneMapped = false;
  mat.fog = false;
  return new THREE.Points(geo, mat);
}

// ---------- 水面 ----------
function makeWater() {
  const geo = new THREE.PlaneGeometry(420, 420, 56, 56);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshToonMaterial({ color: 0x24307c, gradientMap: GRADIENT, transparent: true, opacity: 0.94 });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = -0.4;
  m.receiveShadow = true;
  m.userData.base = geo.attributes.position.array.slice();
  return m;
}

// 遇见岛小池塘
function makePond() {
  const g = new THREE.Group();
  const water = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 0.22, 24),
    new THREE.MeshToonMaterial({ color: 0x3f66c8, transparent: true, opacity: 0.95 }));
  water.position.y = 0.11;
  water.receiveShadow = true;
  g.add(water);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + (i % 3) * 0.08, 0), toon(0x8a8a96));
    st.position.set(Math.cos(a) * 2.78, 0.16, Math.sin(a) * 2.78);
    st.castShadow = true;
    g.add(st);
  }
  return g;
}

export class Universe {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x161a3e, 0.0038);
    this.tweens = new Tweens();
    this.interactives = [];
    this.anchors = {};
    this.updaters = [];
    this.islands = {};
    this.energy = 0;
    this.portalAwake = false;
    this.portalGlow = 0;
    this.time = 0;
    this.effects = null;

    this.scene.add(makeSky());
    this.stars = makeStars();
    this.scene.add(this.stars);
    this.water = makeWater();
    this.scene.add(this.water);
    this.clouds = this.makeClouds();
    this.scene.add(this.clouds);

    this.buildIslands();
    this.buildBridges();
    this.setupUpdaters();
  }

  setEffects(e) { this.effects = e; }

  makeClouds() {
    const g = new THREE.Group();
    const puffs = [
      [70, 24, -40, 1.6], [-90, 30, -60, 2.1], [40, 27, 95, 1.8],
      [-55, 22, 75, 1.3], [110, 33, 55, 1.5], [0, 36, -120, 2.4]
    ];
    for (let i = 0; i < puffs.length; i++) {
      const p = puffs[i];
      const cloud = new THREE.Group();
      for (let j = 0; j < 4; j++) {
        const s = (0.8 + (j % 3) * 0.5) * p[3];
        const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), toon(0xf2f4ff));
        puff.position.set((j - 1.5) * s * 0.9, (j % 2) * 0.4, (j % 2 - 0.5) * s);
        puff.scale.y = 0.62;
        cloud.add(puff);
      }
      cloud.position.set(p[0], p[1], p[2]);
      g.add(cloud);
    }
    return g;
  }

  buildIslands() {
    for (const r of REGIONS) {
      const pos = regionPos(r);
      const g = new THREE.Group();
      const base = islandBase(r.center ? WORLD.centerR : WORLD.islandR, r.grass, r.rock, r.angle + 9);
      g.add(base);
      this.decorate(r, g);
      g.position.set(pos.x, -36, pos.z);
      // 锚点：着陆点（朝中心一侧）与悬浮标签位
      const dir = new THREE.Vector3(-pos.x, 0, -pos.z);
      let land;
      if (r.center) {
        land = new THREE.Vector3(0, DECK_Y, 4.5);
      } else {
        dir.normalize();
        land = new THREE.Vector3(pos.x + dir.x * 5.2, DECK_Y, pos.z + dir.z * 5.2);
      }
      this.anchors[r.key] = { land: land, label: new THREE.Vector3(pos.x, 9.4, pos.z) };
      g.traverse((o) => {
        if (o.isMesh) { o.userData.region = r.key; this.interactives.push(o); }
      });
      this.islands[r.key] = g;
      this.scene.add(g);
    }
  }

  spreadTufts(g, r, D, n) {
    const rnd = mulberry32(r.angle + 100);
    const col = r.key === 'wei' ? 0x4f6b4a : (r.key === 'cidi' ? 0xcfe0ff : (r.key === 'yu' ? 0xe8c96a : (r.key === 'cha' ? 0xffb59a : (r.key === 'form' ? 0xd8c8ff : 0x9ade6e))));
    const rr = (r.center ? 1.25 : 1) * (WORLD.islandR - 3.4);
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2;
      const d = 1.8 + rnd() * (rr - 1.8);
      g.add(tuft(new THREE.Vector3(Math.cos(a) * d, D, Math.sin(a) * d), col));
    }
  }

  addFireflies(g, D, cx, cz, n, spread, color) {
    const pos = new Float32Array(n * 3);
    const phases = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = cx + (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = D + 0.7 + Math.random() * 2.6;
      pos[i * 3 + 2] = cz + (Math.random() - 0.5) * spread;
      phases[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: color, size: 0.17, transparent: true, opacity: 0.55, depthWrite: false });
    mat.toneMapped = false;
    const pts = new THREE.Points(geo, mat);
    pts.userData.base = pos.slice();
    pts.userData.phases = phases;
    g.add(pts);
    this.fireflies = pts;
  }

  decorate(r, g) {
    const D = DECK_Y;
    const v = (x, y, z) => new THREE.Vector3(x, y, z);
    if (r.key === 'lai') {
      g.add(signBoard(v(4.8, D, -3.4), ['来路', '看看别人怎样走过'], 0xff8a3c, -0.55));
      g.add(house(v(-3.4, D, -2.4), 1.15, 0xfff3dc, 0xe86a4a));
      g.add(sakura(v(-6.3, D, 1.6), 1.25, 1));
      g.add(sakura(v(3.4, D, 4.2), 1.05, 2));
      g.add(sakura(v(-1.4, D, 5.4), 1.5, 3));
      g.add(bush(v(6.1, D, 1.0), 1.15, 0xffc9a3));
      g.add(bush(v(-6.5, D, -3.6), 0.9, 0xffc9a3));
      for (let i = 0; i < 6; i++) {
        const t = i / 5;
        g.add(pathStone(v(lerp(4.4, -2.2, t), D, lerp(-2.8, -1.6, t))));
      }
      this.spreadTufts(g, r, D, 7);
    } else if (r.key === 'cidi') {
      g.add(modernBlock(v(-3.8, D, -2.4), 2.2, 3.4, 2.2, 0x4da3ff));
      g.add(modernBlock(v(1.6, D, -3.8), 2.6, 5.2, 2.4, 0x7de3ff));
      g.add(modernBlock(v(4.4, D, 1.6), 2.0, 2.3, 2.0, 0x4da3ff));
      g.add(billboard(v(-4.6, D, 3.6), ['此地', '看清你面对的条件']));
      g.add(bush(v(5.9, D, -2.4), 1.1, 0xbfd0ff));
      g.add(bush(v(-6.2, D, 0.8), 0.95, 0xbfd0ff));
      for (let i = 0; i < 6; i++) {
        const t = i / 5;
        g.add(pathStone(v(lerp(0.2, 0.8, t), D, lerp(4.4, 1.2, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'cha') {
      g.add(forkSign(v(0.2, D, 0.6)));
      g.add(rockChunk(v(-3.9, D, 2.7), 0.95, 0xa04040));
      g.add(rockChunk(v(3.6, D, 3.1), 0.7, 0xb85545));
      g.add(rockChunk(v(4.9, D, -2.6), 0.55, 0xa04040));
      g.add(bush(v(5.7, D, 0.9), 1.1, 0xff9a7a));
      g.add(bush(v(-5.9, D, -2.2), 0.9, 0xff9a7a));
      for (let i = 0; i < 5; i++) {
        const t = i / 4;
        g.add(pathStone(v(lerp(-4.6, -1.0, t), D, lerp(-0.2, 2.7, t))));
        g.add(pathStone(v(lerp(-4.6, -1.0, t), D, lerp(0.2, -2.7, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'yu') {
      const pond = makePond();
      pond.position.set(-0.6, D, -1.8);
      g.add(pond);
      g.add(stiltHouse(v(-4.4, D, -2.8), 1.1));
      const fire = campfire(v(1.6, D, 2.6));
      g.add(fire);
      this.campfireGroup = fire;
      g.add(benchLog(v(2.9, D, 3.4), 0.6));
      g.add(benchLog(v(0.1, D, 4.1), -0.35));
      const postA = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.6, 6), toon(0x3a3f5a));
      postA.position.set(-4.8, D + 1.3, 0.9);
      postA.castShadow = true;
      const postB = postA.clone();
      postB.position.set(4.6, D + 1.3, -3.1);
      g.add(postA, postB);
      const ls = lanternString(v(-4.8, D + 2.55, 0.9), v(4.6, D + 2.55, -3.1), 7, [0xffd335, 0xff8a3c, 0xff4d6d]);
      const bulbs = [];
      ls.traverse((o) => { if (o.name === 'bulb') bulbs.push(o); });
      this.lanternBulbs = bulbs;
      g.add(ls);
      g.add(bush(v(6.2, D, -0.8), 1.1, 0xd4a94a));
      for (let i = 0; i < 5; i++) {
        const t = i / 4;
        g.add(pathStone(v(lerp(3.4, 0.6, t), D, lerp(-3.2, 1.4, t))));
      }
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'wei') {
      g.add(pine(v(4.6, D, 3.4), 1.5, 0x2e4a3a));
      g.add(pine(v(-4.9, D, 2.3), 1.2, 0x2e4a3a));
      g.add(pine(v(2.9, D, -4.7), 1.7, 0x243d30));
      g.add(pine(v(-2.5, D, 4.9), 1.35, 0x2e4a3a));
      const pg = portal(v(0.4, D, 0.4), 0x8cff6b);
      g.add(pg);
      this.portalGroup = pg;
      this.addFireflies(g, D, 0.4, 0.4, 26, 7.5, 0x8cff6b);
      g.add(rockChunk(v(3.2, D, 1.8), 0.6, 0x3a3f5c));
      g.add(rockChunk(v(-2.8, D, -1.9), 0.75, 0x3a3f5c));
      g.add(rockChunk(v(1.7, D, 4.6), 0.5, 0x3a3f5c));
      this.spreadTufts(g, r, D, 6);
    } else if (r.key === 'form') {
      const shrine = crystalShrine(v(0, D, 0));
      g.add(shrine);
      this.crystalGroup = shrine;
      for (const o of REGIONS) {
        if (o.center) continue;
        const a = deg(o.angle);
        g.add(bannerPole(v(Math.cos(a) * 9.8, D, Math.sin(a) * 9.8), o.three));
      }
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + 0.31;
        g.add(pathStone(v(Math.cos(a) * 5.5, D, Math.sin(a) * 5.5)));
      }
      g.add(bush(v(6.8, D, 2.4), 1.2, 0xcbb8ff));
      g.add(bush(v(-6.4, D, -2.8), 1.0, 0xcbb8ff));
      g.add(bush(v(1.8, D, -7.0), 0.9, 0xcbb8ff));
      this.spreadTufts(g, r, D, 8);
    }
  }

  buildBridges() {
    this.bridgeGroup = new THREE.Group();
    for (const r of REGIONS) {
      if (r.center) continue;
      const pos = regionPos(r);
      const dir = new THREE.Vector3(-pos.x, 0, -pos.z).normalize();
      const a = new THREE.Vector3(dir.x * (WORLD.centerR - 1.2), DECK_Y + 0.05, dir.z * (WORLD.centerR - 1.2));
      const b = new THREE.Vector3(pos.x - dir.x * (WORLD.islandR - 1.6), DECK_Y + 0.05, pos.z - dir.z * (WORLD.islandR - 1.6));
      const bg = bridge(a, b, r.key === 'wei' ? 0x6a6a78 : 0xc99a5b);
      bg.traverse((o) => {
        if (o.isMesh) { o.userData.region = r.key; this.interactives.push(o); }
      });
      this.bridgeGroup.add(bg);
    }
    this.scene.add(this.bridgeGroup);
  }

  rise(onDone) {
    const order = ['form', 'lai', 'cidi', 'cha', 'yu', 'wei'];
    let remaining = order.length;
    order.forEach((key, i) => {
      const g = this.islands[key];
      setTimeout(() => {
        this.tweens.add(1.6, (k) => {
          g.position.y = -36 * (1 - k);
        }, () => {
          g.position.y = 0;
          if (this.effects) {
            this.effects.spawnRipple(new THREE.Vector3(g.position.x, -0.28, g.position.z), 0x9bd7ff, 2.4);
          }
          remaining--;
          if (remaining === 0 && onDone) onDone();
        }, easeInOutCubic);
      }, 140 + i * 300);
    });
  }

  setEnergy(n) { this.energy = clamp(n, 0, 1); }

  awakenPortal() {
    if (this.portalAwake) return false;
    this.portalAwake = true;
    this.tweens.add(1.6, (k) => { this.portalGlow = k; });
    return true;
  }

  setupUpdaters() {
    // 水面波浪
    this.updaters.push((t) => {
      const arr = this.water.geometry.attributes.position.array;
      const base = this.water.userData.base;
      for (let i = 0; i < arr.length; i += 3) {
        const x = base[i]; const z = base[i + 2];
        arr[i + 1] = Math.sin(x * 0.09 + t * 1.1) * 0.16 + Math.cos(z * 0.11 + t * 0.7) * 0.12;
      }
      this.water.geometry.attributes.position.needsUpdate = true;
    });
    // 星星呼吸 + 云漂移
    this.updaters.push((t) => {
      this.stars.material.opacity = 0.72 + Math.sin(t * 0.7) * 0.14;
      this.clouds.rotation.y = t * 0.006;
    });
    // 水晶祭坛
    const shrine = this.crystalGroup;
    if (shrine) {
      const crystal = shrine.getObjectByName('crystal');
      const core = shrine.getObjectByName('crystalCore');
      const light = shrine.getObjectByName('crystalLight');
      const stones = [];
      shrine.traverse((o) => { if (o.name === 'orbitStone') stones.push(o); });
      this.updaters.push((t) => {
        crystal.rotation.y = t * 0.5;
        crystal.position.y = 2.6 + Math.sin(t * 1.2) * 0.12;
        core.position.y = crystal.position.y;
        core.rotation.y = -t * 0.8;
        light.intensity = 8 + this.energy * 55 + Math.sin(t * 2.4) * (3 + this.energy * 8);
        const s = 1 + this.energy * 0.3 + Math.sin(t * 2.4) * 0.02;
        crystal.scale.set(s, s * (1 + this.energy * 0.12), s);
        for (let i = 0; i < stones.length; i++) {
          const st = stones[i];
          const a = st.userData.orbitA + t * (0.4 + this.energy * 0.5);
          st.position.set(Math.cos(a) * 1.9, 2.2 + Math.sin(t * 1.5 + a) * 0.3 + (i % 3) * 0.5, Math.sin(a) * 1.9);
        }
      });
    }
    // 传送门
    const pg = this.portalGroup;
    if (pg) {
      const disc = pg.getObjectByName('portalDisc');
      const pLight = pg.getObjectByName('portalLight');
      this.updaters.push((t) => {
        disc.rotation.z = t * 0.3;
        const g = this.portalGlow;
        disc.material.opacity = (0.62 + Math.sin(t * 2.2) * 0.16) * g;
        pLight.intensity = (34 + Math.sin(t * 2.2) * 10) * g;
      });
    }
    // 篝火
    const fire = this.campfireGroup;
    if (fire) {
      const f1 = fire.getObjectByName('flame');
      const f2 = fire.getObjectByName('flame2');
      const li = fire.getObjectByName('firelight');
      this.updaters.push((t) => {
        const k = 1 + Math.sin(t * 11) * 0.12 + Math.sin(t * 23.7) * 0.07;
        f1.scale.set(k, 1 + Math.sin(t * 9.3) * 0.18, k);
        f2.scale.setScalar(1 + Math.sin(t * 13.1) * 0.2);
        li.intensity = 46 + Math.sin(t * 12.7) * 10;
      });
    }
    // 灯串
    const bulbs = this.lanternBulbs;
    if (bulbs && bulbs.length) {
      this.updaters.push((t) => {
        for (let i = 0; i < bulbs.length; i++) {
          bulbs[i].scale.setScalar(0.9 + Math.sin(t * 3 + i * 1.4) * 0.12);
        }
      });
    }
    // 萤火虫
    const ff = this.fireflies;
    if (ff) {
      this.updaters.push((t) => {
        const arr = ff.geometry.attributes.position.array;
        const base = ff.userData.base;
        const ph = ff.userData.phases;
        for (let i = 0; i < ph.length; i++) {
          arr[i * 3] = base[i * 3] + Math.sin(t * 0.7 + ph[i]) * 0.6;
          arr[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t * 1.3 + ph[i] * 2) * 0.45;
          arr[i * 3 + 2] = base[i * 3 + 2] + Math.cos(t * 0.6 + ph[i]) * 0.6;
        }
        ff.geometry.attributes.position.needsUpdate = true;
        ff.material.opacity = 0.5 + Math.sin(t * 2.8) * 0.15 + this.portalGlow * 0.35;
      });
    }
  }

  update(dt) {
    this.time += dt;
    this.tweens.update(dt);
    for (let i = 0; i < this.updaters.length; i++) this.updaters[i](this.time);
  }
}
