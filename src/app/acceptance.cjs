const { chromium } = require(process.env.U_APP_PLAYWRIGHT);
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.join(__dirname,'evidence');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const page=await context.newPage(),errors=[],checks=[],layouts=[];
 page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const nav=async r=>{await page.locator('nav [data-go='+r+']').click();await page.waitForFunction(x=>location.hash==='#'+x&&document.querySelector('nav [aria-current=page]').dataset.go===x,r)};
 const shot=async name=>page.screenshot({path:path.join(out,name+'.png'),fullPage:true});
 try{
 await page.goto('http://localhost:5206/app.html');await page.locator('canvas').waitFor();
 await page.locator('#question').fill('How can I make time for a small experiment?');await shot('01-home-390');
 await page.locator('#question-form button').click();await page.locator('[data-filter]').nth(1).click();assert.equal(await page.locator('[data-card]').count(),1);
 await page.locator('[data-card=c]').click();await page.locator('[data-favorite]').click();assert.equal(await page.locator('[data-favorite]').getAttribute('aria-pressed'),'true');await shot('03-detail-390');
 await page.locator('[data-add-compare]').click();assert.match(await page.locator('.compare-grid').innerText(),/必要开支/);
 for(let i=0;i<3;i++)await page.locator('[data-mark]').nth(i).click();assert.equal(await page.locator('.marks [aria-pressed=true]').count(),3);await shot('04-compare-390');
 await page.locator('.screen [data-go=meet]').click();await page.locator('.character').first().waitFor();assert.equal(await page.locator('.character .tag').count(),2);await shot('05-meet-390');
 await page.locator('.screen [data-go=shape]').click();for(let i=0;i<4;i++)await page.locator('[data-draft]').nth(i).fill('My observation '+i);
 await nav('explore');assert.equal(await page.locator('[data-filter]').nth(1).getAttribute('aria-pressed'),'true');await shot('02-explore-390');
 await nav('shape');assert.equal(await page.locator('[data-draft]').first().inputValue(),'My observation 0');await page.locator('#shape-form button').click();await page.locator('[data-path]').waitFor();await shot('06-shape-390');
 await page.reload();await page.locator('[data-path]').waitFor();assert.equal(await page.locator('[data-draft]').first().inputValue(),'My observation 0');
 await page.locator('[data-path]').click();await page.locator('[data-filter]').first().waitFor();assert.equal(await page.locator('[data-filter]').nth(3).getAttribute('aria-pressed'),'true');
 checks.push('Full question/filter/favorite/compare/marks/meet/shape/save/unlock flow; reload persistence');
 for(let i=0;i<4;i++){await page.locator('[data-filter]').nth(i).click();assert.equal(await page.locator('[data-card]').count(),[4,1,2,1][i])}
 for(let i=0;i<4;i++){await nav('home');await page.locator('[data-island]').nth(i).click();await page.locator('[data-clear-island]').waitFor();assert.equal(await page.locator('[data-card]').count(),1)}
 await page.locator('[data-clear-island]').click();checks.push('Four filters and four island entrances');
 for(const width of [375,390,430]){await page.setViewportSize({width,height:844});for(const route of ['home','explore','detail','compare','meet','shape']){
 await nav(route);const m=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,canvas:document.querySelectorAll('canvas').length,small:[...document.querySelectorAll('button,textarea')].filter(e=>{const r=e.getBoundingClientRect();return r.width<44||r.height<44}).map(e=>e.textContent),compare:[...document.querySelectorAll('.compare-card')].map(e=>({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y}))}));
 assert.equal(m.scroll,m.width,route+' overflow');assert.deepEqual(m.small,[],route+' hit targets');assert.equal(m.canvas,route==='home'?1:0);if(route==='compare'){assert.equal(m.compare[0].y,m.compare[1].y);assert(m.compare[1].x>m.compare[0].x)}layouts.push({route,...m});if(width!==390)await shot(route+'-'+width);
 }}
 await nav('home');const first=await page.locator('canvas').elementHandle();await nav('explore');assert.equal(await first.evaluate(e=>e.isConnected),false);await nav('home');assert.equal(await page.locator('canvas').evaluate(e=>e.width>0&&e.height>0),true);
 for(let i=0;i<5;i++){await nav('explore');await nav('home')}assert.equal(await page.locator('canvas').count(),1);
 checks.push('18 mobile layouts: no overflow, targets >=44px, side-by-side comparison');checks.push('Canvas disposal/recreation and five repeat roundtrips');assert.deepEqual(errors,[]);
 fs.writeFileSync(path.join(out,'acceptance.json'),JSON.stringify({status:'passed',browser:await browser.version(),checks,layouts,errors},null,2));console.log(JSON.stringify({status:'passed',checks,errors}));
 }catch(e){await shot('failure');fs.writeFileSync(path.join(out,'failure.json'),JSON.stringify({error:String(e),errors},null,2));throw e}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});


