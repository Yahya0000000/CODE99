const fs = require('fs');
const path = require('path');

function tree(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  let result = '';
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    result += `${prefix}${file}${stat.isDirectory() ? '/' : ''}\n`;
    if (stat.isDirectory()) {
      result += tree(fullPath, prefix + '  ');
    }
  }
  return result;
}

const structure =
  '# شجرة هيكل المشروع\n\n```\n' +
  tree('apps') +
  tree('packages') +
  tree('docs') +
  tree('scripts') +
  '```\n';

fs.writeFileSync('docs/STRUCTURE.md', structure);
console.log('✔ تم تحديث docs/STRUCTURE.md');