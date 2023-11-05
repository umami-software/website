import { glob } from 'glob';
import PageContent from './PageContent';

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.replace('.mdx', ''),
  }));
}

export default async function ({ params }: { params: { id: string } }) {
  return <PageContent id={params.id} />;
}
