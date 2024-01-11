import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export interface Doc {
  id: string;
  title: string;
  body: string;
}

export const getDocs = cache(async (folder: string) => {
  const dir = path.resolve(`./src/docs/${folder}`);
  const posts = await fs.readdir(dir);

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const postContent = await fs.readFile(path.resolve(dir, file), 'utf8');
        const { data, content } = matter(postContent);

        return { ...data, id: file.replace('.mdx', ''), body: content } as Doc;
      }),
  );
});

export async function getDoc(id: string, folder: string) {
  const docs = await getDocs(folder);

  return docs.find(doc => doc?.id === id);
}

export default getDocs;
