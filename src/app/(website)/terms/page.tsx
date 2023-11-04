'use client';
import Terms from './terms-of-service.mdx';
import PageHeader from 'components/layout/PageHeader';
import { Suspense } from 'react';

export default function TermsPage() {
  return (
    <article>
      <Suspense>
        <PageHeader>
          <h1>Terms of Service</h1>
        </PageHeader>
        <Terms />
      </Suspense>
    </article>
  );
}
