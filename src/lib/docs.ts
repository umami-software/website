import getFile from 'lib/content';

export interface Doc {
  id: string;
  title: string;
  body: string;
}

export async function getDoc(pathname: string = '') {
  const parts = pathname.split('/');

  let id = parts[parts.length - 1] || 'index';
  let folder = parts.splice(0, parts.length - 1).join('/') || 'v2';

  if (['api', 'cloud', 'guides', 'reports'].includes(parts[0])) {
    id = parts.splice(1).join('/') || 'index';
    folder = parts[0];
  }

  return getFile(id, `docs/${folder}`);
}
