const fs = require('fs');
const path = require('path');
const dir = __dirname;
const src = path.join(dir, 'index(actual)3.html');
const dst = path.join(dir, 'index.html');
fs.copyFileSync(src, dst);
const lines = fs.readFileSync(dst, 'utf8').split(/\r?\n/).length;
console.log('index.html created:', lines, 'lines');
