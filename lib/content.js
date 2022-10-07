import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

export const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getHtmlContent(dir, id) {
  const fullPath = path.join(dir, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
  };
}

export function getAllPathIds(dir) {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    return {
      params: {
        id: file.replace(/\.mdx$/, ''),
      },
    };
  });
}
