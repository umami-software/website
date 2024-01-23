import { Metadata } from 'next';
import PageHeader from 'components/layout/PageHeader';
import Privacy from './privacy-policy.mdx';

export default function PrivacyPage() {
  return (
    <article className="mdx">
      <PageHeader>
        <h1>Privacy Policy</h1>
      </PageHeader>
      <Privacy />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Privacy Policy',
};
