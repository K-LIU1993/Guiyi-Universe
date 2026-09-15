import { readFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';

const CACHE_TTL_MS = 30_000;

const DEFAULTS = Object.freeze({
  port: 5201,
  host: '127.0.0.1',
  llmBaseUrl: 'https://api.openai-next.com/v1/chat/completions',
  llmModel: 'gpt-5.6-luna',
  llmTimeoutMs: 120_000,
  llmMaxOutputTokens: 6000,
  zhihuTimeoutMs: 30_000,
  maxBodyBytes: 65_536,
  maxConcurrent: 2
});

function num(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export function loadSettings(env) {
  const e = env || process.env;
  return {
    port: num(e.GUIYI_PORT, DEFAULTS.port),
    host: e.GUIYI_HOST || DEFAULTS.host,
    llmBaseUrl: (e.GUIYI_LLM_BASE_URL || DEFAULTS.llmBaseUrl).replace(/\/+$/, ''),
    llmModel: e.GUIYI_LLM_MODEL || DEFAULTS.llmModel,
    llmTimeoutMs: num(e.GUIYI_LLM_TIMEOUT_MS, DEFAULTS.llmTimeoutMs),
    llmMaxOutputTokens: num(e.GUIYI_LLM_MAX_OUTPUT_TOKENS, DEFAULTS.llmMaxOutputTokens),
    zhihuTimeoutMs: num(e.GUIYI_ZHIHU_TIMEOUT_MS, DEFAULTS.zhihuTimeoutMs),
    maxBodyBytes: num(e.GUIYI_MAX_BODY_BYTES, DEFAULTS.maxBodyBytes),
    maxConcurrent: num(e.GUIYI_MAX_CONCURRENT, DEFAULTS.maxConcurrent),
    opencexConfigPath: resolve(e.GUIYI_OPENCODEX_CONFIG || join(homedir(), '.opencodex', 'config.json')),
    zhihuCliEnv: e.GUIYI_ZHIHU_CLI || '',
    zhihuEnvFile: e.GUIYI_ZHIHU_ENV_FILE || ''
  };
}

export function readOpencexAuthSummary(settings, logWarn) {
  const out = { configFound: false, enabledKeyCount: 0, keyName: null };
  try {
    if (!existsSync(settings.opencexConfigPath)) return out;
    const cfg = JSON.parse(readFileSync(settings.opencexConfigPath, 'utf8'));
    out.configFound = true;
    const keys = Array.isArray(cfg && cfg.apiKeys) ? cfg.apiKeys : [];
    for (const entry of keys) {
      if (!entry || typeof entry !== 'object') continue;
      const enabled = entry.enabled !== false;
      const hasKey = typeof entry.key === 'string' && entry.key.length > 0;
      if (enabled && hasKey) {
        out.enabledKeyCount += 1;
        if (!out.keyName) out.keyName = typeof entry.name === 'string' ? entry.name : 'unnamed';
      }
    }
  } catch (err) {
    if (logWarn) logWarn('opencex config read failed: ' + (err && err.message));
  }
  return out;
}

export function readApiKeySecret(settings, logWarn) {
  try {
    if (!existsSync(settings.opencexConfigPath)) return null;
    const cfg = JSON.parse(readFileSync(settings.opencexConfigPath, 'utf8'));
    const keys = Array.isArray(cfg && cfg.apiKeys) ? cfg.apiKeys : [];
    for (const entry of keys) {
      if (entry && typeof entry === 'object' && entry.enabled !== false && typeof entry.key === 'string' && entry.key.length > 0) {
        return entry.key;
      }
    }
  } catch (err) {
    if (logWarn) logWarn('opencex config read failed: ' + (err && err.message));
  }
  return null;
}

export function resolveZhihuCli(env) {
  const e = env || process.env;
  if (e.GUIYI_ZHIHU_CLI) {
    const p = resolve(e.GUIYI_ZHIHU_CLI);
    return { path: p, found: existsSync(p), source: 'env' };
  }
  if (process.platform === 'win32') {
    const localAppData = e.LOCALAPPDATA || join(homedir(), 'AppData', 'Local');
    const p = join(localAppData, 'ZhihuCLI', 'current', 'zhihu-cli.exe');
    return { path: p, found: existsSync(p), source: 'default' };
  }
  return { path: null, found: false, source: 'none' };
}

export function loadZhihuAccessSecret(settings) {
  const out = { envFileFound: false, secretLoaded: false, secret: null };
  if (!settings.zhihuEnvFile) return out;
  try {
    if (!existsSync(settings.zhihuEnvFile)) return out;
    out.envFileFound = true;
    const rawFile = readFileSync(settings.zhihuEnvFile, 'utf8');
    const lines = rawFile.replace(/^\uFEFF/, '').split(/\r?\n/);
    for (const line of lines) {
      const m = /^\s*ZHIHU_ACCESS_SECRET\s*=\s*(.*)\s*$/.exec(line);
      if (m && m[1]) {
        out.secretLoaded = true;
        out.secret = m[1].replace(/^["']|["']$/g, '');
        break;
      }
    }
  } catch (err) { return out; }
  return out;
}

export function createCredentialProvider(settings, logWarn) {
  let cache = null;
  return function getCredentials() {
    const now = Date.now();
    if (cache && now - cache.at < CACHE_TTL_MS) return cache.value;
    const auth = readOpencexAuthSummary(settings, logWarn);
    const secret = readApiKeySecret(settings, logWarn);
    const cli = resolveZhihuCli(process.env);
    const zhihu = loadZhihuAccessSecret(settings);
    const value = {
      llm: {
        configFound: auth.configFound,
        enabledKeyCount: auth.enabledKeyCount,
        hasApiKey: Boolean(secret)
      },
      apiKeySecret: secret,
      zhihu: {
        cliPath: cli.path,
        cliFound: cli.found,
        cliSource: cli.source,
        envFileFound: zhihu.envFileFound,
        accessSecretLoaded: zhihu.secretLoaded
      },
      accessSecret: zhihu.secret
    };
    cache = { at: now, value };
    return value;
  };
}
