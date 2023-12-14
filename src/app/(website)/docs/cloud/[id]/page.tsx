import { glob } from 'glob';
import PageContent from './PageContent';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  return {
    title: `${id[0].toUpperCase()}${id.slice(1).replace('-', ' ')}`.replace('.prefetch', ''),
  };
}

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default function ({ params }: { params: { id: string } }) {
  const id = params?.id?.split('.')?.[0];

  return <PageContent id={id} />;
}
