import { schemas, seedSchema } from './schemas.js';

// Implements precisely the keywords used in schemas.js; no coercion or repair.
export function validateSchema(schema, value, path = '$') {
  const errors = [];
  const fail = (message) => errors.push({ path, message });
  if (schema.anyOf && !schema.anyOf.some((branch) => validateSchema(branch, value, path).length === 0)) fail('No allowed variant matches');
  if ('const' in schema && value !== schema.const) fail('Unexpected constant');
  if (schema.enum && !schema.enum.includes(value)) fail('Value outside whitelist');
  if (schema.type) {
    const matches = schema.type === 'object' ? value !== null && typeof value === 'object' && !Array.isArray(value)
      : schema.type === 'array' ? Array.isArray(value)
        : schema.type === 'number' ? typeof value === 'number' && Number.isFinite(value) : typeof value === schema.type;
    if (!matches) { fail(`Expected ${schema.type}`); return errors; }
  }
  if (schema.type === 'object') {
    for (const key of schema.required ?? []) if (!Object.hasOwn(value, key)) fail(`Missing ${key}`);
    for (const key of Object.keys(value)) {
      if (Object.hasOwn(schema.properties, key)) errors.push(...validateSchema(schema.properties[key], value[key], `${path}.${key}`));
      else if (schema.additionalProperties === false) fail(`Unknown field ${key}`);
    }
  }
  if (schema.type === 'array') {
    if (value.length < (schema.minItems ?? 0) || value.length > (schema.maxItems ?? Infinity)) fail('Invalid array size');
    value.forEach((item, index) => errors.push(...validateSchema(schema.items, item, `${path}[${index}]`)));
  }
  if (schema.type === 'string') {
    const length = [...value].length;
    if (length < (schema.minLength ?? 0) || length > (schema.maxLength ?? Infinity)) fail('Invalid string length');
    if (schema.pattern && !new RegExp(schema.pattern, 'u').test(value)) fail('Invalid string pattern');
    if (schema.format === 'uri') {
      try { const parsed = new URL(value); if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) fail('Expected credential-free HTTP(S) URL'); } catch { fail('Invalid URL'); }
    }
    if (schema.format === 'date-time' && (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 19) !== value.slice(0, 19))) fail('Expected valid UTC date-time');
  }
  if (schema.type === 'number' && (value < schema.minimum || value > schema.maximum)) fail('Hours outside 0..168');
  return errors;
}
const result = (errors) => ({ ok: errors.length === 0, errors });
export function validateTemplate(name, value) {
  if (!Object.hasOwn(schemas, name)) return result([{ path: '$.template', message: 'Unknown template' }]);
  const errors = validateSchema(schemas[name], value);
  if (!errors.length && name.startsWith('real-') && value.text !== value.source.excerpt) errors.push({ path: '$.text', message: 'Real text must match the reviewed source excerpt exactly' });
  return result(errors);
}
export const validateRealQuestion = (value) => validateTemplate('real-question', value);
export const validateRealAnswer = (value) => validateTemplate('real-answer', value);
export const validateViewpoint = (value) => validateTemplate('viewpoint', value);
export const validateConditionScenario = (value) => validateTemplate('condition-scenario', value);
export const validateTeachingSample = (value) => validateTemplate('teaching-sample', value);
export function validateSeed(value) {
  const errors = validateSchema(seedSchema, value);
  if (!errors.length) {
    const ids = [...value.sources, ...value.claims].map((item) => item.id);
    if (new Set(ids).size !== ids.length) errors.push({ path: '$', message: 'Duplicate source/claim ID' });
    for (const source of value.sources) if (source.author || source.url || source.publishedAt) errors.push({ path: '$.sources', message: 'Synthetic teaching sources cannot impersonate external authors or publications' });
  }
  return result(errors);
}
export function assertSeed(value) {
  const checked = validateSeed(value);
  if (!checked.ok) throw new Error(`INVALID_CONTENT: ${JSON.stringify(checked.errors)}`);
  return value;
}
