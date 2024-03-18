import getContent from 'lib/content';

export interface Doc {
  id: string;
  title: string;
  body: string;
}

export async function getDoc(id: string, version: string = 'v2') {
  return getContent(id, `docs/${version}`);
}
