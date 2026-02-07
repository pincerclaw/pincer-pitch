import fs from 'fs';
import path from 'path';

function bundle() {
  const entryFile = 'slides.md';
  if (!fs.existsSync(entryFile)) return;

  const content = fs.readFileSync(entryFile, 'utf-8');
  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/g;
  
  let fullMarkdown = "# Pincer Protocol - Pitch Deck (Agent-Readable Version)

";

  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    const filePath = path.join('pages', match[1]);
    if (fs.existsSync(filePath)) {
      let pageContent = fs.readFileSync(filePath, 'utf-8');
      pageContent = pageContent.replace(/^---[\s\S]*?---
?/, '').trim();
      fullMarkdown += `

## Section: ${match[1]}
${pageContent}

---`;
    }
  }

  if (!fs.existsSync('dist')) { fs.mkdirSync('dist'); }
  
  fs.writeFileSync('dist/llm.txt', fullMarkdown);
  console.log('✅ Generated dist/llm.txt for AI Agents');
}

bundle();
