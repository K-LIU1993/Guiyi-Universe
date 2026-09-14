// Bloomy — 陪伴探索的小机器人 Agent
import * as THREE from 'three';
import { makeBloomy } from '../core/geometry.js';
import { Tweens, easeInOutCubic, easeOutBack, pick } from '../core/utils.js';

export const BLOOMY_LINES = {
  hello: [
    '我是Bloomy，陪你逛逛这个宇宙。',
    '别急，我们慢慢看。',
    '这里没有标准答案，只有不同的看见。'
  ],
  arrive_lai: [
    '这里是来路。看看别人走过的路。',
    '每段经历都是一块路标。',
    '先听听他们的故事吧。'
  ],
  arrive_cidi: [
    '此地。先看清你脚下的条件。',
    '条件不会说谎，地图在这里。',
    '把现实看仔细，是出发的资格。'
  ],
  arrive_cha: [
    '岔路到了。同一个问题，有人往左，有人往右。',
    '分歧不是坏事，它是世界的另一面。',
    '两种走法都摆着，不用急着选。'
  ],
  arrive_yu: [
    '篝火点着了，坐下来听听。',
    '真实的人，比观点更暖。',
    '遇见他者，是理解的开始。'
  ],
  arrive_wei: [
    '传送门后面，是你没想到的方向。',
    '盲点被照亮的时候，别怕。',
    '这里有点暗，但值得看。'
  ],
  arrive_form: [
    '中央岛。把你的看见放在一起试试。',
    '轮到你了，写下你自己的答案。',
    '水晶在等你的成形。'
  ],
  collect: [
    '收好了，放进你的背包。',
    '这张卡会留在你的宇宙里。',
    '不错的一站。'
  ],
  compare: [
    '把它们放在一起看，像两盏灯。',
    '对照会让差异自己说话。',
    '你开始看见不同了。'
  ],
  portal: [
    '传送门亮了！因为你把三条路都走过了。',
    '未至岛为你打开。',
    '准备好了，就去看看盲点吧。'
  ],
  form_done: [
    '成形了。这个答案是你的，不是世界的。',
    '看见不同，然后形成自己。',
    '为你的答案，轻轻鼓掌。'
  ],
  waiting: [
    '我在这里等你。',
    '不着急，宇宙不关门。'
  ],
  locked: [
    '这扇门还没亮，再多走一条路试试。',
    '先去来路、此地、岔路各看一眼，它会为你点亮。'
  ]
};

export class Bloomy {
  constructor() {
    this.group = makeBloomy();
    this.tweens = new Tweens();
    this.stateName = 'idle';
    this.time = 0;
    this.blinkTimer = 2 + Math.random() * 3;
    this.baseY = this.group.position.y;
    this.onSay = null;
    this.lastLineKey = '';
    this.flying = false;
  }

  place(v) {
    this.group.position.copy(v);
    this.baseY = v.y;
  }

  say(lineKey, force) {
    if (lineKey === this.lastLineKey && !force) return;
    this.lastLineKey = lineKey;
    const lines = BLOOMY_LINES[lineKey];
    if (lines && this.onSay) this.onSay(pick(lines));
  }

  setMood(name) {
    this.stateName = name;
    const lamp = this.group.getObjectByName('bloomyLight');
    if (name === 'searching') { lamp.color.setHex(0xffd335); }
    else if (name === 'found') { lamp.color.setHex(0x7de3ff); }
    else { lamp.color.setHex(0x7cfb4d); }
  }

  // 贝塞尔弧线飞行到目标点（落点为甲板高度）
  flyTo(target, onDone) {
    if (this.flying) return;
    this.flying = true;
    this.setMood('moving');
    const jet = this.group.getObjectByName('jet');
    const g = this.group;
    const start = g.position.clone();
    const dist = start.distanceTo(target);
    const mid = start.clone().add(target).multiplyScalar(0.5);
    mid.y += Math.min(9, 2.5 + dist * 0.28);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, target);
    jet.visible = true;
    const dir = target.clone().sub(start);
    if (Math.abs(dir.x) + Math.abs(dir.z) > 0.01) {
      g.rotation.y = Math.atan2(dir.x, dir.z);
    }
    this.tweens.add(Math.max(1.1, dist * 0.045), (k) => {
      const p = curve.getPoint(k);
      g.position.set(p.x, p.y, p.z);
      g.rotation.x = Math.sin(k * Math.PI) * -0.22;
    }, () => {
      jet.visible = false;
      g.rotation.x = 0;
      this.baseY = target.y;
      // 落地小弹跳
      this.tweens.add(0.45, (k) => {
        const s = 1 + Math.sin(k * Math.PI) * 0.12;
        g.scale.set(2 - s, s, 2 - s);
      }, () => {
        g.scale.set(1, 1, 1);
        this.flying = false;
        if (onDone) onDone();
      }, easeOutBack);
    }, easeInOutCubic);
  }

  celebrate() {
    this.setMood('found');
    const g = this.group;
    this.tweens.add(0.35, (k) => { g.position.y = this.baseY + Math.sin(k * Math.PI) * 0.55; }, () => {
      this.tweens.add(0.35, (k) => { g.position.y = this.baseY + Math.sin(k * Math.PI) * 0.35; }, () => {
        g.position.y = this.baseY;
        this.setMood('idle');
      });
    });
  }

  update(dt) {
    this.time += dt;
    this.tweens.update(dt);
    const g = this.group;
    // 待机呼吸浮动
    if (!this.flying && this.stateName !== 'found') {
      g.position.y = this.baseY + Math.sin(this.time * 2.1) * 0.06;
      g.rotation.y += Math.sin(this.time * 0.8) * 0.0015;
    }
    // 小芽摇摆
    const stem = g.getObjectByName('stem');
    const sprout = g.getObjectByName('sprout');
    const wig = Math.sin(this.time * (this.stateName === 'searching' ? 9 : 3)) * (this.stateName === 'searching' ? 0.22 : 0.1);
    stem.rotation.z = -0.3 + wig;
    sprout.rotation.z = wig * 0.8;
    // 喷焰抖动
    const jet = g.getObjectByName('jet');
    if (jet.visible) jet.scale.setScalar(0.8 + Math.sin(this.time * 30) * 0.25);
    // 眨眼
    this.blinkTimer -= dt;
    const eyeL = g.getObjectByName('eyeL');
    const eyeR = g.getObjectByName('eyeR');
    if (this.blinkTimer <= 0) {
      eyeL.scale.y = 0.12; eyeR.scale.y = 0.12;
      this.blinkTimer = 2.2 + Math.random() * 3.2;
    } else {
      eyeL.scale.y += (1 - eyeL.scale.y) * Math.min(1, dt * 14);
      eyeR.scale.y = eyeL.scale.y;
    }
    // 嘴：状态表情（简单缩放模拟）
    const mouth = g.getObjectByName('mouth');
    if (this.stateName === 'searching') mouth.scale.set(1.35, 1, 1);
    else if (this.stateName === 'found') mouth.scale.set(1.5, 1.9, 1);
    else mouth.scale.set(1, 1, 1);
    // 状态灯光
    const lamp = g.getObjectByName('bloomyLight');
    if (this.stateName === 'searching') lamp.intensity = 8 + Math.sin(this.time * 10) * 5;
    else lamp.intensity = 8 + Math.sin(this.time * 2.5) * 1.5;
  }
}
