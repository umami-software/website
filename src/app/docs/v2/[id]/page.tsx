'use client';
import dynamic from 'next/dynamic';

export default function DocsPage({ params }: { params: { id: string } }) {
  const Page = dynamic(() => import(`../${params.id}.mdx`));

  return <Page />;
}
