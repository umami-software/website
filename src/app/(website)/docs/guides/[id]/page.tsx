import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';

const FOLDER = 'guides';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return {
    title: {
      absolute: `Guide: ${doc?.title} – Umami`,
      default: 'Guides – Umami',
    },
  };
}

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return <Markdown>{doc?.body}</Markdown>;
}
