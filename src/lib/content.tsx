import { cache } from 'react';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { firstBy } from 'thenby';

export const getFiles = cache(async (folder: string) => {
  const dir = path.resolve(`./src/content/${folder}`);
  const posts = await fs.readdir(dir);

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const postContent = await fs.readFile(path.resolve(dir, file), 'utf8');
        const { data, content } = matter(postContent);

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

              return `<h${size} id="${id}">${name}</h${size}>`;
            }
            return line;
          })
          .join('\n');

        return {
          ...data,
          id: file.replace('.mdx', ''),
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
