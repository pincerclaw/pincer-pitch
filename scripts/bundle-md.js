import fs from 'fs';
import path from 'path';

function bundleMarkdown() {
  const entryFile = 'slides.md';
  let content = fs.readFileSync(entryFile, 'utf-8');

  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/g;
  
  content = content.replace(srcRegex, (match, fileName) => {
    const filePath = path.join('pages', fileName);
    if (fs.existsSync(filePath)) {
      let pageContent = fs.readFileSync(filePath, 'utf-8');
      // Strip frontmatter from included pages to avoid duplicate keys in the bundled output
      pageContent = pageContent.replace(/^---[\s\S]*?---/, '');
      return `\n<!-- Start of ${fileName} -->\n${pageContent.trim()}\n<!-- End of ${fileName} -->\n`;
    }
    return match;
  });

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  // 同時提供兩種格式，滿足不同 Agent 的偏好
  fs.writeFileSync('public/pitch.md', content);
  fs.writeFileSync('public/llm.txt', content); 
  console.log('✅ AI-readable files (pitch.md, llm.txt) generated in public/');
}

bundleMarkdown();
