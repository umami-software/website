import { glob } from 'glob';
import { Metadata } from 'next';
import NotFound from 'app/(website)/not-found';

async function getContent(id: string) {
  return import(`../${id}.mdx`).catch(() => ({}));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const content = await getContent(id);

  console.log({ content });

  return content?.meta;
}

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const { default: Page, meta } = await getContent(id);

  console.log({ Page, meta });

  if (!Page) {
    return <NotFound />;
  }

  return <Page />;
}
