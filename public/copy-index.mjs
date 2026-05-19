import { copyFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, 'index(actual)3.html');
const dst = join(dir, 'index.html');
copyFileSync(src, dst);
const lines = readFileSync(dst, 'utf8').split(/\r?\n/).length;
console.log('OK', lines, 'lines');
