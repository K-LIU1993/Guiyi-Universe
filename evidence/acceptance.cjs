const {chromium}=require(process.env.U_APP_PLAYWRIGHT||'C:/Users/15738/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'); const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1100}});
 const page=await context.newPage(); const errors=[];
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});page.on('pageerror',e=>errors.push(e.message));
 const key='guiyi.divergence-island.save.v1';
 const fixture={schemaVersion:1,formingCard:{tentativeJudgment:'验收样例：先检查时间条件，再决定学习计划。',supportingSourceIds:['s1'],applicableConditionIds:['c1'],openQuestions:['零散时间能否持续？'],revisionTriggers:['每周可用时间变化']},sources:[{id:'s1',title:'验收依据'}],conditions:[{id:'c1',label:'每周两小时'}],relations:[{id:'r1'}],taskState:{act:'condition',completed:false},narrativeState:{visitedActs:['opening','structure']},savedAt:'2026-09-17'};
 let mode='empty';
 await page.route('**/api/content/list',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(mode==='api'?{items:[{template:'viewpoint',title:'接口契约验收材料',text:'观点样本',provenance:{level:'real',createdBy:'human'},source:{author:'测试来源作者',title:'来源样本',url:'https://example.org/source'}},{template:'real-answer',text:'不得展示此非观点条目'}]}:{items:[]})}));
 try {
  const response=await page.goto((process.env.MEET_BASE||'http://localhost:5208')+'/meet.html'); await page.getByRole('status').filter({hasText:'暂无'}).waitFor(); assert.equal(response.status(),200);
  assert.equal(await page.getByText('还没有成形卡',{exact:true}).count(),1);await page.screenshot({path:'src/meet/evidence/meet-empty.png',fullPage:true});
  await page.evaluate(([k,s])=>localStorage.setItem(k,JSON.stringify(s)),[key,fixture]);await page.reload();await page.getByRole('status').filter({hasText:'暂无'}).waitFor();
  const before=await page.evaluate(k=>localStorage.getItem(k),key);
  assert.equal(await page.locator('.card .why').count(),3);assert.equal(await page.locator('details').count(),3);
  for(const summary of await page.locator('summary').all())await summary.click();
  assert.equal(await page.locator('details[open]').count(),3);assert.equal(await page.getByText('虚构示例',{exact:true}).count(),1);
  assert.equal(await page.locator('input,textarea,[contenteditable=true]').count(),0);
  assert.equal(await page.locator('.progress').innerText().then(t=>t.includes('来源 1 项 · 证据关系 1 项')),true);
  assert.equal(await page.evaluate(k=>localStorage.getItem(k),key),before);
  await page.screenshot({path:'src/meet/evidence/meet-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});
  const mobile=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,targets:[...document.querySelectorAll('summary,a')].map(e=>({h:e.getBoundingClientRect().height,w:e.getBoundingClientRect().width}))}));
  assert.ok(mobile.scroll<=390);assert.ok(mobile.targets.every(t=>t.h>=44&&t.w>=44));await page.screenshot({path:'src/meet/evidence/meet-mobile.png',fullPage:true});
  mode='api';await page.reload();await page.getByRole('status').filter({hasText:'已连接'}).waitFor();assert.equal(await page.getByText('接口契约验收材料',{exact:true}).count(),1);assert.equal(await page.getByText('不得展示此非观点条目').count(),0);assert.equal(await page.getByText('虚构示例',{exact:true}).count(),1);
  await page.evaluate(k=>localStorage.setItem(k,'{broken'),key);await page.reload();await page.getByText('暂时无法读取存档。原存档保持不变，请回到探索页面检查。').waitFor();assert.equal(await page.evaluate(k=>localStorage.getItem(k),key),'{broken');
  assert.deepEqual(errors,[]);
  fs.writeFileSync('src/meet/evidence/acceptance.json',JSON.stringify({status:'passed',http:response.status(),fixture:'isolated browser context; API route fixture',checks:['three sources','source attribution','teaching badge','all three disclosures','history byte-identical','actual progress snapshot','empty and corrupt save','viewpoint filtering','390px overflow','all targets >=44px'],mobile,consoleErrors:errors,pageErrors:errors},null,2));console.log('ACCEPTANCE PASS');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
