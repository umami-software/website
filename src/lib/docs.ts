import getFile from '@/lib/content';
import config from '@/app/(website)/docs/config.json';

export interface Doc {
  id: string;
  title: string;
  body: string;
}

export async function getDoc(pathname = '') {
  const parts = pathname.split('/');

  let id = parts[parts.length - 1] || 'index';
  let folder = parts.splice(0, parts.length - 1).join('/');

  if (config.tabs.find(({ name }) => name === parts[0])) {
    id = parts.splice(1).join('/') || 'index';
    folder = parts[0];
  }

  return getFile(id, `./src/docs/content/${folder}`);
}
