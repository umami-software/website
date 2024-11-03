import { cache } from 'react';
import matter from 'gray-matter';
import recursive from 'recursive-readdir';
import { firstBy } from 'thenby';
import fs from 'node:fs/promises';
import path from 'node:path';

export const getFiles = cache(async (folder: string) => {
  const dir = path.resolve(folder);
  const files = await recursive(dir);

  return Promise.all(
    files
      .filter((file: string) => path.extname(file) === '.mdx')
      .map(async (file: string) => {
        const postContent = await fs.readFile(file, 'utf8');
        const { data, content } = matter(postContent);

        const id = file.replace('.mdx', '').replace(dir, '').replace(/\\/g, '/').replace(/^\//, '');
        const anchors: { name: string; id: string; size: number }[] = [];
        const body = content
          .split('\n')
          .map(line => {
            const match = line.match(/(#{2,})\s+(.*)/);
            if (match) {
              const [, num, name] = match;
              const id = name.toLowerCase().replace(/\s+/g, '-');
              const size = num.length;

              anchors.push({ name, id, size });

              return `<h${size} id="${id}">${name.replace(/\{|\}/g, '')}</h${size}>`;
            }
            return line;
          })
          .join('\n');

        return {
          meta: data,
          id,
          body,
          anchors,
        } as any;
      }),
  ).then(posts => posts.sort(firstBy('date', 'desc')));
});

export async function getFile(id: string, folder: string) {
  const files = await getFiles(folder);

  return files.find(file => file?.id === id);
}

export default getFile;
