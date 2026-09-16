// JSON Schema draft 2020-12; deliberately small, closed template vocabulary.
const text = { type: 'string', minLength: 1, maxLength: 4000, pattern: '\\S' };
const id = { type: 'string', pattern: '^[a-z][a-z0-9-]{0,79}$' };
const version = { type: 'string', pattern: '^[1-9][0-9]*\\.[0-9]+\\.[0-9]+$' };
const url = { type: 'string', format: 'uri' };
const date = { type: 'string', format: 'date-time' };
const obj = (properties, required = Object.keys(properties)) => ({ type: 'object', properties, required, additionalProperties: false });
const array = (items, minItems = 1) => ({ type: 'array', items, minItems, maxItems: 100 });
const level = { enum: ['real', 'teaching', 'ai_inference'] };
const provenance = obj({ level, createdBy: { enum: ['human', 'ai'] } });
const realSource = obj({ url, author: text, fetchedAt: date, excerpt: text, verifiedBy: text });
export const sourceSchema = obj({ id, title: text, url, author: text, publishedAt: date, fetchedAt: date, excerpt: text, isTeachingSample: { const: true } }, ['id', 'title', 'fetchedAt', 'excerpt', 'isTeachingSample']);
export const claimSchema = obj({ id, text, scope: text });
// Numeric hour predicates are the supported subset of the frozen rule contract.
export const conditionSchema = obj({ field: { enum: ['time.weekly_hours_plan', 'time.weekly_hours_actual'] }, op: { enum: ['eq', 'neq', 'gte', 'lte'] }, value: { type: 'number', minimum: 0, maximum: 168 }, label: text });
const base = (template, properties) => obj({ template: { const: template }, id, contentVersion: version, provenance, ...properties });
export const schemas = {
  'real-question': base('real-question', { text, source: realSource }),
  'real-answer': base('real-answer', { questionId: id, text, source: realSource }),
  'viewpoint': base('viewpoint', { text, scope: text, sourceIds: array(id) }),
  'condition-scenario': base('condition-scenario', { context: text, condition: conditionSchema }),
  'teaching-sample': base('teaching-sample', { title: text, excerpt: text, isTeachingSample: { const: true } }),
};
for (const [name, schema] of Object.entries(schemas)) {
  schema.$schema = 'https://json-schema.org/draft/2020-12/schema';
  schema.$id = `urn:guiyi:content:${name}:1`;
  if (name.startsWith('real-')) {
    schema.properties.provenance = obj({ level: { const: 'real' }, createdBy: { const: 'human' } });
  } else if (name === 'teaching-sample') {
    schema.properties.provenance = obj({ level: { const: 'teaching' }, createdBy: { enum: ['human', 'ai'] } });
  } else {
    schema.properties.provenance = { anyOf: [
      obj({ level, createdBy: { const: 'human' } }),
      obj({ level: { enum: ['teaching', 'ai_inference'] }, createdBy: { const: 'ai' } }),
    ] };
  }
}
export const seedSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'urn:guiyi:content:seed:1',
  ...obj({ format: { const: 'guiyi.divergence-island.seed' }, schemaVersion: { const: 1 }, id, contentVersion: version, title: text, question: text, provenance: obj({ level: { const: 'teaching' }, createdBy: { const: 'ai' } }), isTeachingSample: { const: true }, excerpt: text, sources: array(sourceSchema, 3), claims: array(claimSchema, 2), conditions: array(conditionSchema, 2) }),
};
