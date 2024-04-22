import getContent from 'lib/content';

const FOLDER = 'docs';

export interface Doc {
  id: string;
  title: string;
  body: string;
}

export async function getDoc(id: string, version: string = 'v2') {
  return getContent(id, `${FOLDER}/${version}`);
}
