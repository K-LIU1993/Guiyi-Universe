const {spawnSync}=require('node:child_process');
(async()=>{
 const {createServer}=await import('vite');
 const server=await createServer({server:{host:'127.0.0.1',port:5208,strictPort:true}});
 try {await server.listen(); const r=await fetch('http://127.0.0.1:5208/'); require('fs').writeFileSync('src/meet/evidence/http.json',JSON.stringify({url:'http://127.0.0.1:5208/',status:r.status}));
 const {spawn}=require('node:child_process');const code=await new Promise(resolve=>{const child=spawn(process.execPath,['src/meet/evidence/acceptance.cjs'],{stdio:'inherit',env:{...process.env,MEET_BASE:'http://127.0.0.1:5208'}});child.on('exit',resolve)});process.exitCode=code;
 } finally {await server.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
