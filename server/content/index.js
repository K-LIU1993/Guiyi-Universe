import { createServer } from 'node:http';
import { createContentApp } from './app.js';
// Independent service. Port 0 selects a free port. No credential imports.
const port = Number(process.argv[2] ?? 0);
if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('Invalid port');
const server = createServer(await createContentApp());
server.listen(port, '127.0.0.1', () => console.log(JSON.stringify({ service: 'K-CONTENT', host: '127.0.0.1', port: server.address().port })));
