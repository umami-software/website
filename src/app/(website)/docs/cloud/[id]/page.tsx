import { glob } from 'glob';
import { Metadata } from 'next';
import PageContent from 'app/(website)/docs/v2/[id]/PageContent';

type Props = {
  params: { id: string };
};

async function getContent(id: string) {
  return import(`../${id}.mdx`).catch(() => ({}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default function ({ params }: Props) {
  const { id } = params;

  return <PageContent id={id} />;
}
