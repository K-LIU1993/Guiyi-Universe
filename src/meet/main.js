import './style.css';
const KEY = 'guiyi.divergence-island.save.v1';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list = value => Array.isArray(value) ? value : [];
const safeUrl = value => { try { const u = new URL(value); return ['http:','https:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };
const real = { badge:'真实来源 · 离线材料', title:'在触摸中认识一个词', who:'海伦·凯勒，自传作者', why:'这段自述提供一种不同的学习处境；它不代表你的经历。', text:'她在自传第四章回忆：老师让水流过她的一只手，同时在另一只手上拼写 water。她由此理解了这个词与水的联系。', source:'Helen Keller · The Story of My Life · 第四章（转述）', url:'https://www.gutenberg.org/ebooks/2397', possibility:'思考提示：理解一件事，除了文字解释，还可能需要哪些具体体验？' };
const teaching = { badge:'虚构示例', title:'小满：在零散时间里学习', who:'小满，虚构教学角色', why:'用一个假设情境，练习区分个人意愿与现实条件。', text:'假设小满每天只有十分钟空闲。她想学习绘画，却无法参加固定时段的课程。这个角色没有对应真实人物。', source:'本页创作的教学情境', possibility:'思考提示：如果时间条件改变，你会怎样重新看待她的选择？' };
function card(c, extra = '') {
 return '<article class="card"><div class="eyebrow">'+esc(c.badge)+'</div><h3>'+esc(c.title)+'</h3><p class="quote">'+esc(c.text)+'</p><div class="why"><b>这是谁</b><p>'+esc(c.who)+'</p><b>为什么遇见你</b><p>'+esc(c.why)+'</p></div>'+extra+'<details><summary>看见另一种可能</summary><p>'+esc(c.possibility)+'</p></details><small>来源：'+(safeUrl(c.url)?'<a target="_blank" rel="noopener noreferrer" href="'+esc(safeUrl(c.url))+'">'+esc(c.source)+'</a>':esc(c.source))+'</small></article>';
}
function saved() {
 try { const s=JSON.parse(localStorage.getItem(KEY)||'null'); if(s===null)return {notice:'还没有成形卡。完成一次探索并保存暂时判断后，可以回来看看。'}; if(s.schemaVersion!==1)return {notice:'此存档版本暂不支持读取，请回到原探索页面查看。'}; return {s}; }
 catch { return {notice:'暂时无法读取存档。原存档保持不变，请回到探索页面检查。'}; }
}
function history() {
 const {s,notice}=saved(), c=s?.formingCard;
 const fields = c ? [['支持来源',list(c.supportingSourceIds).map(id=>list(s.sources).find(x=>x.id===id)?.title||id)],['适用条件',list(c.applicableConditionIds).map(id=>list(s.conditions).find(x=>x.id===id)?.label||id)],['仍然无法解释',list(c.openQuestions)],['修改触发',list(c.revisionTriggers)]] : [];
 const extra = fields.map(([label,values])=>'<p><b>'+label+'</b><br>'+esc(values.join('；')||'暂未记录')+'</p>').join('');
 const h=card({badge:'自己的过去判断 · 只读',title:c?'我的暂时判断':'还没有成形卡',text:notice||c?.tentativeJudgment||'先在探索中保存一张成形卡，再回来与现在的处境对照。',who:'曾经写下判断的你',why:'把当时的适用条件与现在的探索并排看；是否改变判断，由你决定。',source:'此浏览器、此站点的本地存档'+(s?.savedAt?' · '+s.savedAt:''),possibility:'哪些新条件会让过去的判断需要重新考虑？这里仅展示原记录。'},extra);
 const acts={opening:'初始立场',structure:'结构',condition:'条件',counterexample:'反例',bridge:'整合桥',next_question:'下一问'};
 return '<div class="history-comparison">'+h+'<aside class="card progress"><div class="eyebrow">当前探索进度 · 只读快照</div><h3>'+esc(acts[s?.taskState?.act]||'尚无探索记录')+'</h3><p>来源 '+list(s?.sources).length+' 项 · 证据关系 '+list(s?.relations).length+' 项</p><p>已访问 '+list(s?.narrativeState?.visitedActs).length+' 个阶段</p><p>当前阶段：'+(s?.taskState?.completed?'已完成':'尚未完成')+'</p><p>仅显示同一存档已有事实，不推断你的态度。</p></aside></div>';
}
function normalize(payload) {
 const items=Array.isArray(payload)?payload:list(payload?.items||payload?.data?.items||payload?.data);
 const sources=[...list(payload?.sources),...items.filter(x=>x?.source).map(x=>({...x.source,id:x.id}))];
 return items.filter(x=>x && (x.template||x.type||x.kind)==='viewpoint').flatMap(x=>{
  const source=x.source||sources.find(s=>list(x.sourceIds).includes(s.id));
  if(x.provenance?.level!=='real'||x.provenance?.createdBy==='ai'||source?.isTeachingSample||!safeUrl(source?.url)||!source?.author||!x.text)return [];
  return [{badge:'真实来源 · 内容服务',title:x.title||'一种有出处的观点',who:source.author,why:'这份材料提供一个有出处的视角，不代表与你的经历相同。',text:x.text,source:source.title||source.url,url:source.url,possibility:'思考提示：'+(x.scope||'这段观点依赖哪些条件？哪些仍需要核实？')}];
 });
}
function render(rows,status) {
 document.querySelector('#app').innerHTML='<div class="shell"><header><div><span class="kicker">归一 UNIVERSE / M-MEET</span><h1>遇见另一种处境<br>也遇见过去的自己</h1><p>不急着下结论，先看见判断背后的条件。</p></div><span class="status" role="status">'+esc(status)+'</span></header><div class="intro">真实来源 / 虚构教学角色 / 自己的过去判断</div><div class="source-grid"><section><h2>01 · 真实来源处境</h2>'+rows.map(x=>card(x)).join('')+'</section><section><h2>02 · 虚构教学角色</h2>'+card(teaching)+'</section></div><section id="history"><h2>03 · 自己的回声</h2>'+history()+'</section></div>';
}
render([real],'正在连接内容服务 · 暂示离线材料');
fetch('http://127.0.0.1:5203/api/content/list',{signal:AbortSignal.timeout(4000)}).then(r=>{if(!r.ok)throw Error('http');return r.json();}).then(data=>{const rows=normalize(data);render(rows.length?rows:[real],rows.length?'内容服务已连接':'暂无可核实的观点 · 离线 mock');}).catch(()=>render([real],'内容服务暂不可用 · 离线 mock'));
window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)document.querySelector('#history').innerHTML='<h2>03 · 自己的回声</h2>'+history();});
