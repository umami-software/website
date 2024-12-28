import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Privacy from './privacy-policy.mdx';

export default function PrivacyPage() {
  return (
    <article className="mdx">
      <PageHeader title="Privacy Policy" />
      <Privacy />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Privacy Policy',
};
