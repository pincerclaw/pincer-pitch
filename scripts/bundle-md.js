import fs from 'fs';
import path from 'path';

function bundleMarkdown() {
  const entryFile = 'slides.md';
  let content = fs.readFileSync(entryFile, 'utf-8');

  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/g;
  
  content = content.replace(srcRegex, (match, fileName) => {
    const filePath = path.join('pages', fileName);
    if (fs.existsSync(filePath)) {
      const pageContent = fs.readFileSync(filePath, 'utf-8');
      return `\n<!-- Start of ${fileName} -->\n${pageContent}\n<!-- End of ${fileName} -->\n`;
    }
    return match;
  });

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  fs.writeFileSync('public/pitch.md', content);
  console.log('✅ Bundled pitch.md has been generated in public/');
}

bundleMarkdown();