import fs from 'fs';
import path from 'path';
import remark from 'remark';
import remarkHtml from 'remark-html';

export async function getHtmlContent(dir: string, id: string) {
  const fullPath = path.join(dir, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark()
    .use(remarkHtml as any, { sanitize: true })
    .process(fileContents); // ! sanitize: true is important => protect against XSS attacks
  const html = processedContent.toString();

  const contentArray = html.split('\n');
  const h1 = contentArray.find(line => line.includes('<h1>'));
  const title = h1?.replace(/<\/?[^>]+(>|$)/g, '');

  return {
    id,
    title,
    html,
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
