import 'server-only';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// Tiny JSON-file store. Data lives in /data (git-ignored).
// For serverless hosts with a read-only filesystem (e.g. Vercel) swap this file for a hosted DB.
const DIR = path.join(process.cwd(), 'data');
let queue = Promise.resolve();

export async function readCollection(name, fallback = []) {
  try {
    return JSON.parse(await fs.readFile(path.join(DIR, `${name}.json`), 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') return structuredClone(fallback);
    throw e;
  }
}

// Serialised read-modify-write so concurrent submissions never clobber each other.
export function updateCollection(name, fn, fallback = []) {
  const run = queue.then(async () => {
    const current = await readCollection(name, fallback);
    const next = (await fn(current)) ?? current;
    await fs.mkdir(DIR, { recursive: true });
    const file = path.join(DIR, `${name}.json`);
    const tmp = `${file}.${process.pid}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(next, null, 2));
    await fs.rename(tmp, file);
    return next;
  });
  queue = run.catch(() => {});
  return run;
}

export const newId = () => crypto.randomUUID();
