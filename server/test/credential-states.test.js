import test from 'node:test';
import assert from 'node:assert/strict';
import { createZhidaLlmClient } from '../lib/llm-zhida.js';
import { createHttpZhihuClient } from '../lib/zhihu-http.js';

test('credential states: missing, expired, recovered', async () => {
  await assert.rejects(createZhidaLlmClient({}).generate({ system: '', user: '' }), e => e.status === 503 && e.code === 'LLM_NOT_CONFIGURED');
  globalThis.fetch = async () => new Response('{}', { status: 401 });
  await assert.rejects(createZhidaLlmClient({ accessSecret: 'redacted' }).generate({ system: '', user: '' }), e => e.status === 401 && e.code === 'LLM_CREDENTIAL_INVALID');
  globalThis.fetch = async () => new Response(JSON.stringify({ model: 'test', id: 'r', choices: [{ message: { content: '{\"ok\":true}' } }] }), { status: 200, headers: { 'content-type': 'application/json' } });
  assert.equal(await createZhidaLlmClient({ accessSecret: 'redacted' }).generate({ system: '', user: '' }), '{\"ok\":true}');
});

test('zhihu missing credential is explicit and never logs secret', async () => {
  await assert.rejects(createHttpZhihuClient({}).searchZhihu('x'), e => e.status === 503 && e.code === 'ZHIHU_NOT_CONFIGURED');
});
