import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
}

export const getPosts = cache(async () => {
  const dir = path.resolve('./src/posts');
  const posts = await fs.readdir(dir);

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const postContent = await fs.readFile(path.resolve(dir, file), 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, id: file.replace('.mdx', ''), body: content } as Post;
      }),
  );
});

export async function getPost(id: string) {
  const posts = await getPosts();

  return posts.find(post => post?.id === id);
}

export default getPosts;
