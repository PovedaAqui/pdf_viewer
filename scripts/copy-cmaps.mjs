import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

function copyDir(from, to) {
  // Ensure target directory exists
  fs.mkdirSync(to, { recursive: true });

  const files = fs.readdirSync(from);
  files.forEach((file) => {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  });
}

const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');
const targetDir = path.join('dist', 'cmaps');

copyDir(cMapsDir, targetDir);