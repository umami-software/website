import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Terms from './terms-of-service.mdx';

export default function TermsPage() {
  return (
    <article className="mdx">
      <PageHeader title="Terms of Service" />
      <Terms />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Terms of Service',
};
