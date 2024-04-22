import getContent from 'lib/content';

const FOLDER = 'blog';

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
}

export async function getPost(id: string) {
  return getContent(id, FOLDER);
}
