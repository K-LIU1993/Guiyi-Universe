// HUD：开场、顶栏、气泡、小地图、径向菜单、提示与音效
import { REGIONS, REGION_MAP } from '../core/constants.js';
import { pickEntryChips } from '../game/questionPool.js';
import { PACKS } from '../game/content.js';

// 极简 WebAudio：环境垫音 + 操作 blip
export class Sfx {
  constructor() { this.enabled = false; this.ctx = null; this.master = null; this.amb = null; }
  _ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.12;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return true;
  }
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) this._ambientOn(); else this._ambientOff();
    return this.enabled;
  }
  _ambientOn() {
    if (!this._ensure() || this.amb) return;
    const g = this.ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.5, this.ctx.currentTime + 2.5);
    const o1 = this.ctx.createOscillator(); o1.type = 'sine'; o1.frequency.value = 108;
    const o2 = this.ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 162; o2.detune.value = 6;
    const o3 = this.ctx.createOscillator(); o3.type = 'triangle'; o3.frequency.value = 324; o3.detune.value = -8;
    const g3 = this.ctx.createGain(); g3.gain.value = 0.18;
    o1.connect(g); o2.connect(g); o3.connect(g3); g3.connect(g);
    g.connect(this.master);
    o1.start(); o2.start(); o3.start();
    this.amb = { g: g, oscs: [o1, o2, o3] };
  }
  _ambientOff() {
    if (!this.amb) return;
    const a = this.amb; this.amb = null;
    a.g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.6);
    setTimeout(() => { a.oscs.forEach((o) => { try { o.stop(); } catch (e) { /* noop */ } }); }, 800);
  }
  blip(freq) {
    if (!this.enabled || !this._ensure()) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = 'square'; o.frequency.value = freq || 660;
    const g = this.ctx.createGain(); g.gain.value = 0.0001;
    g.gain.exponentialRampToValueAtTime(0.4, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + 0.16);
  }
}

export class HUD {
  constructor(cb) {
    this.cb = cb;
    this.sfx = new Sfx();
    this.tags = {};
    this.mmDots = {};
    this.sayTimer = null;
    this.selPack = 'paint';
    this.radialOpen = false;
    this.build();
  }

  el(tag, cls, parent, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }

  build() {
    let ui = document.getElementById('ui');
    if (!ui) { ui = this.el('div', '', document.getElementById('app')); ui.id = 'ui'; }
    this.ui = ui;
    this.buildTopbar();
    this.buildBubble();
    this.buildMinimap();
    this.buildActionbar();
    this.buildPhilosophyPanel();
    this.toastwrap = this.el('div', 'toastwrap', ui);
    this.buildGenerating();
    this.buildRadial();
    this.buildHelp();
    this.buildIntro();
  }

  buildTopbar() {
    const bar = this.el('div', 'topbar', this.ui);
    const q = this.el('div', 'q-sticker panel', bar);
    this.el('div', 'q-label', q, '当前问题 · QUESTION');
    this.qText = this.el('div', 'q-text', q, '……');
    this.qOrigin = this.el('div', 'q-origin', q);
    this.qOrigin.style.display = 'none';
    const right = this.el('div', 'hud-right', bar);
    const steps = this.el('div', 'steps panel', right);
    this.stepEls = [];
    const names = ['提问', '探索', '对照', '遇见', '成形'];
    for (let i = 0; i < 5; i++) {
      const s = this.el('div', 'step', steps, '<span class=st-num>' + (i + 1) + '</span>' + names[i]);
      this.stepEls.push(s);
    }
    const row = this.el('div', 'iconrow', right);
    this.btnSound = this.el('button', 'icobtn', row, '🔇');
    this.btnQuiet = this.el('button', 'icobtn', row, '🌙');
    this.btnHelp = this.el('button', 'icobtn', row, '❓');
    this.btnReset = this.el('button', 'icobtn', row, '↺');
    this.btnSound.title = '宇宙环境音';
    this.btnQuiet.title = '安静模式（减少动效）';
    this.btnHelp.title = '玩法说明';
    this.btnReset.title = '重置宇宙';
    this.btnSound.addEventListener('click', () => {
      const on = this.sfx.toggle();
      this.btnSound.textContent = on ? '🔊' : '🔇';
      this.btnSound.classList.toggle('on', on);
      if (on) this.sfx.blip(760);
    });
    this.btnQuiet.addEventListener('click', () => {
      const on = document.body.classList.toggle('quiet');
      this.btnQuiet.classList.toggle('on', on);
      this.sfx.blip(520);
    });
    this.btnHelp.addEventListener('click', () => { this.helpBg.style.display = 'flex'; this.sfx.blip(620); });
    this.btnReset.addEventListener('click', () => { this.cb.onReset(); });
  }

  buildBubble() {
    this.bubbleWrap = this.el('div', 'bubble-wrap hide', this.ui);
    const b = this.el('div', 'bubble panel', this.bubbleWrap);
    this.el('div', 'b-ava', b, '🌱');
    this.bubbleText = this.el('div', 'b-txt', b, '……');
    const x = this.el('button', 'b-close', b, '×');
    x.addEventListener('click', () => this.hideBubble());
  }

  say(text, dur) {
    this.bubbleText.textContent = text;
    this.bubbleWrap.classList.remove('hide');
    if (this.sayTimer) clearTimeout(this.sayTimer);
    this.sayTimer = setTimeout(() => this.hideBubble(), dur || 7000);
  }

  hideBubble() { this.bubbleWrap.classList.add('hide'); }

  buildMinimap() {
    const mm = this.el('div', 'minimap', this.ui);
    for (const r of REGIONS) {
      let x = 50; let y = 50;
      if (!r.center) {
        const a = (r.angle * Math.PI) / 180;
        x = 50 + Math.cos(a) * 37;
        y = 50 + Math.sin(a) * 37;
      }
      const d = this.el('div', 'mm-dot', mm);
      d.style.left = x + '%';
      d.style.top = y + '%';
      d.dataset.key = r.key;
      this.el('span', 'mm-name', d, r.name);
      this.mmDots[r.key] = d;
    }
    mm.addEventListener('click', (e) => {
      const t = e.target.closest('.mm-dot');
      if (t && t.dataset.key) this.cb.onMinimap(t.dataset.key);
    });
  }

  buildActionbar() {
    const bar = this.el('div', 'actionbar', this.ui);
    this.bloomyBtn = this.el('button', 'btn ghost', bar, '🌱 Bloomy');
    this.formBtn = this.el('button', 'btn primary', bar, '✦ 去成形');
    this.formBtn.style.display = 'none';
    this.bloomyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const r = this.bloomyBtn.getBoundingClientRect();
      this.openRadial(r.left + 10, r.top - 190);
    });
    this.formBtn.addEventListener('click', () => this.cb.onForm());
  }

  buildPhilosophyPanel() {
    const panel = this.el('div', 'philosophy-panel panel', this.ui);
    this.el('div', 'philosophy-kicker', panel, '归一 · 认知冒险');
    this.philosophyLoop = this.el('div', 'philosophy-loop', panel, '<span class="pl-active">提问</span><i>→</i><span>探索</span><i>→</i><span>对照</span><i>→</i><span>遇见</span><i>→</i><span>成形</span>');
    this.el('div', 'philosophy-hint', panel, '证据先于结论 · 每次回来，世界多一条路');
    const islands = this.el('div', 'philosophy-islands', panel);
    [['lai','经历','别人怎样走过'],['cidi','现实','我面对什么条件'],['cha','分歧','不同答案为何成立'],['wei','未知','我还没想到的可能']].forEach(([key,name,sub]) => {
      const item = this.el('button', 'philosophy-island', islands);
      item.innerHTML = '<b>' + name + '</b><small>' + sub + '</small>';
      item.addEventListener('click', () => this.cb.onMinimap(key));
    });
    this.philosophyMission = this.el('div', 'philosophy-mission', panel, '🧭 下一步：把一个问题交给宇宙');
  }

  setFormAvailable(v) { this.formBtn.style.display = v ? '' : 'none'; }

  buildRadial() {
    this.radial = this.el('div', 'radial', this.ui);
    this.radial.style.display = 'none';
    const items = [
      ['explain', '💬 解释此地'],
      ['compare', '⚖️ 比较观点'],
      ['next', '🧭 建议下一站'],
      ['reask', '🌀 换个问法']
    ];
    for (const it of items) {
      const d = this.el('div', 'rd-item', this.radial, it[1]);
      d.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeRadial();
        this.cb.onRadial(it[0]);
      });
    }
    document.addEventListener('click', () => this.closeRadial());
  }

  openRadial(x, y) {
    this.radial.style.left = Math.max(10, x) + 'px';
    this.radial.style.top = Math.max(10, y) + 'px';
    this.radial.style.display = 'flex';
    this.radialOpen = true;
  }

  closeRadial() {
    if (!this.radialOpen) return;
    this.radial.style.display = 'none';
    this.radialOpen = false;
  }

  buildGenerating() {
    this.genEl = this.el('div', 'generating', this.ui);
    this.genEl.style.display = 'none';
    this.genStamp = this.el('div', 'gen-stamp panel', this.genEl);
    this.el('div', 'gen-sub', this.genEl, '四座认知之岛，正从海面升起……');
  }

  showGenerating(q) {
    this.genStamp.textContent = q;
    this.genEl.style.display = 'flex';
  }

  hideGenerating() { this.genEl.classList.add('fadeout'); setTimeout(() => { this.genEl.style.display = 'none'; this.genEl.classList.remove('fadeout'); }, 750); }

  setStartBusy(busy) {
    if (this.startBtn) { this.startBtn.disabled = busy; this.startBtn.textContent = busy ? '生成中…' : '开始探索 →'; }
    if (this.askBtn) this.askBtn.disabled = busy;
  }

  setPackOrigin(text) {
    if (!this.qOrigin) return;
    if (text) { this.qOrigin.textContent = text; this.qOrigin.style.display = ''; }
    else { this.qOrigin.textContent = ''; this.qOrigin.style.display = 'none'; }
  }

  showWorldError(msg, actions) {
    this.hideWorldError();
    const bg = this.el('div', 'modal-bg', this.ui);
    this.worldErrEl = bg;
    const m = this.el('div', 'modal panel', bg);
    const x = this.el('button', 'modal-close', m, '×');
    this.el('div', 'help-title', m, '生成没有成功');
    const line = this.el('div', 'help-list', m);
    line.textContent = String(msg || '生成服务暂时不可用。') + ' 这不影响你本地已有的存档。';
    const row = this.el('div', 'intro-actions', m);
    const retry = this.el('button', 'btn primary', row, '重试生成');
    const demo = this.el('button', 'btn ghost', row, '改用本地演示内容…');
    retry.addEventListener('click', () => { const f = actions && actions.onRetry; this.hideWorldError(); if (f) f(); });
    demo.addEventListener('click', () => { const f = actions && actions.onDemo; this.hideWorldError(); if (f) f(); });
    x.addEventListener('click', () => this.hideWorldError());
    bg.addEventListener('click', (e) => { if (e.target === bg) this.hideWorldError(); });
  }

  hideWorldError() { if (this.worldErrEl) { this.worldErrEl.remove(); this.worldErrEl = null; } }

  showDemoChooser(onPick) {
    this.hideDemoChooser();
    const bg = this.el('div', 'modal-bg', this.ui);
    this.demoEl = bg;
    const m = this.el('div', 'modal panel', bg);
    const x = this.el('button', 'modal-close', m, '×');
    this.el('div', 'help-title', m, '选择本地演示内容');
    const list = this.el('div', 'help-list', m);
    const note = this.el('div', '', list);
    note.textContent = '在线生成暂不可用。以下为预先打磨的本地演示包，或按你输入的问题本地规则生成（非 LLM）。';
    const row = this.el('div', 'demo-choices', m);
    for (const p of PACKS) {
      const b = this.el('button', 'btn ghost demo-choice', row);
      b.textContent = (p.sub ? p.sub + ' · ' : '') + p.q;
      b.addEventListener('click', () => { this.hideDemoChooser(); onPick({ mode: 'preset', packId: p.id }); });
    }
    const rule = this.el('button', 'btn ghost demo-choice', row);
    rule.textContent = '用我的问题本地生成（规则版，非 LLM）';
    rule.addEventListener('click', () => {
      const q = this.input ? this.input.value.trim() : '';
      this.hideDemoChooser();
      onPick({ mode: 'rule', question: q });
    });
    x.addEventListener('click', () => this.hideDemoChooser());
    bg.addEventListener('click', (e) => { if (e.target === bg) this.hideDemoChooser(); });
  }

  hideDemoChooser() { if (this.demoEl) { this.demoEl.remove(); this.demoEl = null; } }

  buildHelp() {
    this.helpBg = this.el('div', 'modal-bg', this.ui);
    this.helpBg.style.display = 'none';
    const m = this.el('div', 'modal panel', this.helpBg);
    const x = this.el('button', 'modal-close', m, '×');
    this.el('div', 'help-title', m, '怎么玩');
    this.el('div', 'help-list', m,
      '<div><b>1 提问</b>：把你的问题交给宇宙，它不给你答案，只为它生成一片可探索的星空。</div>' +
      '<div><b>2 探索</b>：点击浮岛或小地图，去 来路 / 此地 / 岔路 收下不同的卡。每张卡都是一种看见。</div>' +
      '<div><b>3 对照</b>：把两张卡放上对照桌。差异自己会说话，你可以裁决，也可以先存着。</div>' +
      '<div><b>4 遇见</b>：去遇见岛，听真实的人讲话。共鸣比观点更接近理解。</div>' +
      '<div><b>5 成形</b>：走够四个方向、见过他者、做过对照之后，中央岛为你打开。写下属于你的答案。</div>' +
      '<div>🌱 <b>Bloomy</b> 是你的同伴，点击它随时可以让它解释、比较、带路，或换个问法。</div>' +
      '<div>🧠 <b>内容来源</b>：默认由服务端 LLM（含知乎检索）为你的问题实时生成问题包，来源徽标会如实标注；无服务时可在错误弹窗里显式选择本地演示内容。</div>' +
      '<div>📮 <b>问题漂流</b>：留下的问题只保存在本浏览器的本地存档里，仅作你自己下次进入时的参考标签；它不会发布到知乎，也不会同步给其他用户。</div>' +
      '<div>✦ 传送门提示：走完 来路 / 此地 / 岔路 三岛，未至岛的门会为你点亮。</div>' +
      '<div>🖐 拖拽旋转 · 滚轮缩放 · 双击回到全景。</div>'
    );
    x.addEventListener('click', () => { this.helpBg.style.display = 'none'; });
    this.helpBg.addEventListener('click', (e) => { if (e.target === this.helpBg) this.helpBg.style.display = 'none'; });
  }

  buildIntro() {
    this.intro = this.el('div', 'intro', this.ui);
    const card = this.el('div', 'intro-card panel', this.intro);
    this.el('div', 'intro-crown', card, '🌱');
    this.el('div', 'intro-brand', card, 'GUIYI · 归一');
    this.el('div', 'intro-title', card, '一问<em>一世界</em>');
    this.el('div', 'intro-slogan', card, '看见不同，形成自己');
    this.el('div', 'intro-lede', card,
      '把一个问题交给宇宙，它不会直接给你答案——它会生成一片可探索的 3D 星域：六座浮岛，五步旅程。' +
      '你将穿过别人的来路、脚下的此地、分歧的岔路，遇见真实的人，照亮自己的盲点，最后在中央岛形成属于你的答案。');
    this.el('div', 'intro-q', card, '看看别人在问什么 · 点一下作参考，或写下你自己的');
    const chips = this.el('div', 'intro-chips', card);
    this.chipEls = [];
    // 每次打开页面随机换一批参考问题；旅人飞回的问题优先浮现
    const qs = pickEntryChips(3);
    for (const it of qs) {
      const c = this.el('button', 'chip' + (it.from === 'comm' ? ' chip--comm' : ''), chips);
      c.textContent = (it.from === 'comm' ? '📮 ' : '') + it.q;
      c.title = it.from === 'comm' ? '本浏览器里之前留下的问题（不上传、不跨用户）' : '点击把问题填进下面，作为参考';
      c.addEventListener('click', () => {
        this.input.value = it.q;
        this.chipEls.forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        this.input.focus();
      });
      this.chipEls.push(c);
    }
    const row = this.el('div', 'intro-input', card);
    this.input = this.el('input', '', row);
    this.input.placeholder = '写下你自己的问题，宇宙会为它单独生成……';
    this.input.maxLength = 40;
    this.askBtn = this.el('button', 'btn', row, '造一个宇宙');
    const actions = this.el('div', 'intro-actions', card);
    this.startBtn = this.el('button', 'btn primary', actions, '开始探索 →');
    this.el('span', 'intro-hint', actions, '建议用电脑全屏体验 · 支持触屏');
    const cont = this.el('div', 'intro-continue', card);
    this.contRow = cont;
    cont.style.display = 'none';
    this.contInfo = this.el('span', '', cont, '发现未完成的宇宙');
    const cbtn = this.el('button', 'btn small primary', cont, '继续');
    const cdel = this.el('button', 'btn small ghost', cont, '放弃存档');
    const go = () => {
      const custom = this.input.value.trim();
      this.sfx.blip(880);
      this.cb.onStart(custom || null);
    };
    this.startBtn.addEventListener('click', go);
    this.askBtn.addEventListener('click', () => {
      const custom = this.input.value.trim();
      if (!custom) { this.input.focus(); return; }
      this.selPack = 'paint';
      go();
    });
    cbtn.addEventListener('click', () => this.cb.onContinue());
    cdel.addEventListener('click', () => this.cb.onDiscard());
    this.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
  }

  showIntro(continueInfo) {
    this.intro.style.display = 'flex';
    if (continueInfo) {
      this.contRow.style.display = 'flex';
      this.contInfo.textContent = '发现未完成的宇宙：「' + continueInfo + '」';
    } else {
      this.contRow.style.display = 'none';
    }
  }

  hideIntro() { this.intro.style.display = 'none'; }

  setQuestion(q) { this.qText.textContent = q; }

  setStep(n) {
    for (let i = 0; i < 5; i++) {
      const e = this.stepEls[i];
      e.classList.toggle('done', i < n);
      e.classList.toggle('doing', i === n);
    }
    if (this.philosophyLoop) {
      this.philosophyLoop.querySelectorAll('span').forEach((el, i) => el.classList.toggle('pl-active', i === n));
    }
  }

  setMission(text) { if (this.philosophyMission) this.philosophyMission.textContent = '🧭 下一步：' + String(text || '继续探索'); }

  // 世界标签（供 engine 投影）
  createTag(r) {
    const t = this.el('div', 'tag', document.getElementById('labels'));
    const dot = this.el('span', 'tag-dot', t);
    dot.style.background = r.color;
    this.el('span', 'tag-name', t, r.name);
    this.el('span', 'tag-sub', t, r.sub);
    const cnt = this.el('span', 'tag-count', t, '0');
    cnt.style.display = 'none';
    this.tags[r.key] = { el: t, count: cnt };
    return t;
  }

  setTagCount(key, n) {
    const t = this.tags[key];
    if (!t) return;
    t.count.textContent = String(n);
    t.count.style.display = n > 0 ? '' : 'none';
  }

  setVisited(keys) {
    for (const k in this.mmDots) {
      const d = this.mmDots[k];
      const r = REGION_MAP[k];
      d.classList.toggle('visited', keys.indexOf(k) !== -1);
      d.style.background = keys.indexOf(k) !== -1 ? r.color : '#555';
    }
  }

  setCurrent(key) {
    for (const k in this.mmDots) this.mmDots[k].classList.toggle('current', k === key);
  }

  toast(text, cls) {
    const t = this.el('div', 'toast panel ' + (cls || 'info'), this.toastwrap);
    t.textContent = text;
    setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 3400);
  }

  toastAchievement(name) {
    this.toast('🏆 成就解锁 · ' + name, 'ach');
    this.sfx.blip(990);
    setTimeout(() => this.sfx.blip(1320), 120);
  }
}
