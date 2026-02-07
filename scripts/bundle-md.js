import fs from 'fs';
import path from 'path';

function bundleMarkdown() {
  const entryFile = 'slides.md';
  if (!fs.existsSync(entryFile)) {
    console.error('❌ slides.md not found');
    return;
  }

  let fullContent = fs.readFileSync(entryFile, 'utf-8');

  // 1. 提取全域 Frontmatter (僅保留第一部分)
  const parts = fullContent.split('---\n');
  let bundledMarkdown = '';
  
  if (fullContent.startsWith('---')) {
    // 保留最開頭的設定資訊，但轉換為 AI 友好的標題
    bundledMarkdown = "# Pincer Protocol - Presentation Content\n\n";
  }

  // 2. 遍歷所有 slide 區塊，提取 src 內容
  const srcRegex = /src:\s*\.?\/pages\/(.+?\.md)/;
  
  parts.forEach(part => {
    const match = part.match(srcRegex);
    if (match) {
      const fileName = match[1];
      const filePath = path.join('pages', fileName);
      if (fs.existsSync(filePath)) {
        let pageContent = fs.readFileSync(filePath, 'utf-8');
        // 移除該頁面的 Frontmatter
        pageContent = pageContent.replace(/^---[\s\S]*?---\n?/, '').trim();
        bundledMarkdown += `\n\n<!-- Section: ${fileName} -->\n${pageContent}\n\n---`;
      }
    } else {
      // 如果不是 src 引用，且不是全域 Frontmatter，就直接加入內容
      const cleanedPart = part.replace(/^[\s\S]*?---/, '').trim();
      if (cleanedPart && !cleanedPart.includes('theme:')) {
        bundledMarkdown += `\n\n${cleanedPart}\n\n---`;
      }
    }
  });

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  // 輸出乾淨的檔案
  fs.writeFileSync('public/pitch.md', bundledMarkdown);
  fs.writeFileSync('public/llm.txt', bundledMarkdown); 
  console.log('✅ Success: AI-readable files generated in public/');
}

bundleMarkdown();