import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const data = await import(`docs/v2/${id?.replace('.prefetch', '')}.mdx`).catch(() => ({}));
  const pageTitle = data?.meta?.title ?? 'Docs';

  return {
    title: {
      absolute: `Docs: ${pageTitle} – Umami`,
      default: 'Docs – Umami',
    },
  };
}

export default function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const Page = dynamic(() => import(`docs/v2/${id}.mdx`).catch(() => NotFound));

  return <Page />;
}
