import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const guide = await getDoc(id, 'guides');

  return {
    title: {
      absolute: `Guide: ${guide?.title} – Umami`,
      default: 'Guides – Umami',
    },
  };
}

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const guide = await getDoc(id, 'guides');

  return <Markdown>{guide?.body}</Markdown>;
}
