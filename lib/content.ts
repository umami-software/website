import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

export const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getHtmlContent(dir: string, id: string) {
  const fullPath = path.join(dir, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark()
    .use(html as any, { sanitize: true })
    .process(fileContents); // ! sanitize: true is important => protect against XSS attacks
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
  };
}

export function getAllPathIds(dir: string) {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    return {
      params: {
        id: file.replace(/\.mdx$/, ''),
      },
    };
  });
}
