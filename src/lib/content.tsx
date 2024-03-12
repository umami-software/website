import { cache } from 'react';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';

export const getFiles = cache(async (folder: string) => {
  const dir = path.resolve(`./src/content/${folder}`);
  const posts = await fs.readdir(dir);

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const postContent = await fs.readFile(path.resolve(dir, file), 'utf8');
        const { data, content } = matter(postContent);

        return { ...data, id: file.replace('.mdx', ''), body: content } as any;
      }),
  );
});

export async function getContent(id: string, folder: string) {
  const files = await getFiles(folder);

  return files.find(file => file?.id === id);
}

export default getContent;
