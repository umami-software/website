'use client';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

export default function Content({ id }: { id: string }) {
  const Page = dynamic(() => import(`../${id}.mdx`).catch(() => NotFound));

  return <Page />;
}
