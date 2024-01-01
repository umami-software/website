'use client';
import PageHeader from 'components/layout/PageHeader';
import { Suspense } from 'react';
import Blog from './Blog';

export default function BlogPage() {
  return (
    <article>
      <Suspense>
        <PageHeader>
          <h1>Blog</h1>
        </PageHeader>
        <Blog />
      </Suspense>
    </article>
  );
}
