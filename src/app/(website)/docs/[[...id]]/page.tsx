import { getContent, getContentIds } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';
import config from '@/app/shiso.config.json';
import { Metadata } from 'next';

const contentDir = './src/content/docs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string[] }>;
}): Promise<Metadata> {
  const name = (await params)?.id?.join('/');

  const content = await getContent(name, contentDir);

  return {
    title: {
      absolute: `${content?.meta?.title} – Umami`,
      default: 'Umami',
    },
  };
}

export async function generateStaticParams() {
  const ids = await getContentIds(contentDir);

  return ids.map((id: string) => ({
    id: id.split('/'),
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string[] }> }) {
  const name = (await params)?.id?.join('/');

  const content = await getContent(name, contentDir);

  return <Shiso type="docs" content={content} config={config} />;
}
