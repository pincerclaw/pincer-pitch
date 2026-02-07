import fs from 'fs';
import path from 'path';

function bundle() {
  const entryFile = 'slides.md';
  if (!fs.existsSync(entryFile)) {
    console.error('slides.md not found');
    return;
  }

  const content = fs.readFileSync(entryFile, 'utf-8');
  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/g;
  
  let fullMarkdown = "# Pincer Protocol - Pitch Deck (Agent-Readable Version)\n\n";

  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    const fileName = match[1];
    const filePath = path.join('pages', fileName);
    if (fs.existsSync(filePath)) {
      let pageContent = fs.readFileSync(filePath, 'utf-8');
      // Remove frontmatter
      pageContent = pageContent.replace(/^---[\s\S]*?---\n?/, '').trim();
      fullMarkdown += `\n\n## Section: ${fileName}\n\n${pageContent}\n\n---\n`;
    }
  }

  // Ensure dist exists (it should after slidev build)
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  fs.writeFileSync(path.join('dist', 'llm.txt'), fullMarkdown);
  console.log('✅ Successfully generated dist/llm.txt');
}

bundle();