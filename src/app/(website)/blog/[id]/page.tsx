'use client';
import dynamic from 'next/dynamic';
import NotFound from 'app/(website)/not-found';
import { Suspense } from 'react';

async function loadContent(id) {
  return dynamic(() => import(`../${id}.mdx`).catch(() => NotFound));
}

export default async function DocsPage({ params }: { params: { id: string } }) {
  const Page = await loadContent(params.id);

  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}
