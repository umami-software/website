import { Metadata } from 'next';
import { glob } from 'glob';
import PageContent from './PageContent';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const data = await import(`../${id}.mdx`);
  const pageTitle = data.meta?.title ?? 'Docs';

  return {
    title: {
      absolute: `${pageTitle} – umami (v1)`,
      default: 'Docs – umami (v1)',
    },
  };
}

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default function ({ params }: Props) {
  const id = params?.id?.split('.')?.[0];

  return <PageContent id={id} />;
}
