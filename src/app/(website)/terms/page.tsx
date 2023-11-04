'use client';
import Terms from './terms-of-service.mdx';
import PageHeader from 'components/layout/PageHeader';

export default function TermsPage() {
  return (
    <article>
      <PageHeader>
        <h1>Terms of Service</h1>
      </PageHeader>
      <Terms />
    </article>
  );
}
