'use client';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

export default async function ({ params }: { params: { id: string } }) {
  const Page = dynamic(() => import(`../${params.id}.mdx`).catch(() => NotFound));

  return <Page />;
}
