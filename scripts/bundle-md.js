import fs from 'fs';
import path from 'path';

function bundleMarkdown() {
  const entryFile = 'slides.md';
  let content = fs.readFileSync(entryFile, 'utf-8');

  // 正則表達式匹配 src: ./pages/*.md
  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/g;
  
  content = content.replace(srcRegex, (match, fileName) => {
    const filePath = path.join('pages', fileName);
    if (fs.existsSync(filePath)) {
      const pageContent = fs.readFileSync(filePath, 'utf-8');
      return `
<!-- Start of ${fileName} -->
${pageContent}
<!-- End of ${fileName} -->
`;
    }
    return match;
  });

  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  fs.writeFileSync('dist/pitch.md', content);
  console.log('✅ Bundled pitch.md has been generated in dist/');
}

bundleMarkdown();
