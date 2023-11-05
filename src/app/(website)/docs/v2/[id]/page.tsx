import { glob } from 'glob';
import PageContent from './PageContent';

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.replace('.mdx', ''),
  }));
}

export default function ({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>{params.id}!</h1>
      <PageContent id={params.id} />
    </>
  );
}
