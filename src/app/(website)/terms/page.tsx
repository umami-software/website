import { Metadata } from 'next';
import PageHeader from 'components/layout/PageHeader';
import Terms from './Terms';

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

export const metadata: Metadata = {
  title: 'Terms of Service – umami',
};
