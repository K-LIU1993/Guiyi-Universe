import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { assertSeed } from '../../src/content/validate.js';
export const defaultSeedRoot = new URL('../../content/seeds/', import.meta.url);
export async function loadCatalog(root = defaultSeedRoot) {
  const entries = new Map();
  for (const directory of await readdir(root, { withFileTypes: true })) {
    if (!directory.isDirectory()) throw new Error('Unexpected seed root entry');
    for (const file of await readdir(new URL(directory.name + '/', root), { withFileTypes: true })) {
      if (!file.isFile() || !file.name.endsWith('.json')) throw new Error('Unexpected seed version entry');
      const bytes = await readFile(new URL(directory.name + '/' + file.name, root));
      const seed = assertSeed(JSON.parse(bytes.toString('utf8')));
      if (directory.name !== seed.id || file.name !== seed.contentVersion + '.json') throw new Error('Seed identity/version mismatch');
      const key = seed.id + '@' + seed.contentVersion;
      if (entries.has(key)) throw new Error('Duplicate content version');
      entries.set(key, { seed, sha256: createHash('sha256').update(bytes).digest('hex') });
    }
  }
  if (!entries.size) throw new Error('Empty content catalog');
  return entries; // Publish only after every item passes validation.
}
