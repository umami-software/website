import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string[] };
}): Promise<Metadata> {
  const doc = await getDoc(id?.join('/'));

  return {
    title: {
      absolute: `${doc?.title} – Umami`,
      default: 'Umami',
    },
  };
}

export default async function ({ params: { id = [] } }: { params: { id: string[] } }) {
  const doc = await getDoc(id?.join('/'));

  return <Markdown>{doc?.body}</Markdown>;
}
