import getFile from '@/lib/content';

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
}

export async function getPost(id: string) {
  return getFile(id, './src/docs/content/blog');
}
