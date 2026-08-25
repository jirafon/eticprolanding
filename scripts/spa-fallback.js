const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('spa-fallback: build/index.html not found');
  process.exit(1);
}

const html = fs.readFileSync(indexPath);

['en', 'pt'].forEach((lang) => {
  const dir = path.join(buildDir, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(buildDir, `${lang}.html`), html);
});

console.log('spa-fallback: created /en and /pt indexes');
