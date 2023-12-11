'use client';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

export default async function ({ params }: { params: { id: string } }) {
  const id = params?.id?.split('.')?.[0];

  const Page: any = dynamic(() => import(`../${id}.mdx`).catch(() => NotFound));

  return <Page />;
}
