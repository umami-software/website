import { glob } from 'glob';
import PageContent from './PageContent';

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default function ({ params }: { params: { id: string } }) {
  const id = params.id.split('.')[0];

  return (
    <>
      <h1>{id}!</h1>
      <PageContent id={id} />
    </>
  );
}
