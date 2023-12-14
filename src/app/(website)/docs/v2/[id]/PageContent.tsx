'use client';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';

export default function PageContent({ id }: { id: string }) {
  const Page: any = dynamic(() => import(`../${id}.mdx`).catch(() => NotFound));

  return <Page />;
}
