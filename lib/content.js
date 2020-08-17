import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getHtmlContent(id) {
  const fullPath = path.join(CONTENT_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
  };
}


export function getAllPathIds() {
  const files = fs.readdirSync(CONTENT_DIR);
  return files.map(file => {
    return {
      params: {
        id: file.replace(/\.md$/, ''),
      },
    };
  });
}