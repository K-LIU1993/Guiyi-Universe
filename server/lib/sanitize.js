const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const TAG_RE = /<\/?[a-zA-Z][^>]*>/g;

export function cleanText(value, maxLen) {
  if (typeof value !== 'string') return '';
  const stripped = value.replace(TAG_RE, '').replace(CONTROL_RE, '');
  const collapsed = stripped.replace(/[ \t\r\n]+/g, ' ').trim();
  return maxLen != null && collapsed.length > maxLen ? collapsed.slice(0, maxLen) : collapsed;
}

export function cleanMultiline(value, maxLen) {
  if (typeof value !== 'string') return '';
  const stripped = value.replace(TAG_RE, '').replace(CONTROL_RE, '');
  const normalized = stripped.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').trim();
  return maxLen != null && normalized.length > maxLen ? normalized.slice(0, maxLen) : normalized;
}

export function cleanStringArray(value, maxItems, itemMaxLen) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const item of value) {
    const s = cleanMultiline(item, itemMaxLen);
    if (s) out.push(s);
    if (out.length >= maxItems) break;
  }
  return out;
}

const ID_RE = /^[a-z0-9][a-z0-9_-]{0,47}$/;

export function cleanId(value) {
  const s = typeof value === 'string' ? value.trim().toLowerCase() : '';
  return ID_RE.test(s) ? s : null;
}

export function isHttpUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch (err) {
    return false;
  }
}
