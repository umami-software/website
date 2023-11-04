import PageHeader from 'components/layout/PageHeader';
import Privacy from './Privacy';
import { Suspense } from 'react';

export default function PrivacyPage() {
  return (
    <article>
      <Suspense>
        <PageHeader>
          <h1>Privacy Policy</h1>
        </PageHeader>
        <Privacy />
      </Suspense>
    </article>
  );
}
