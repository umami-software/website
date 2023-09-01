'use client';
import Community from './Community';
import PageHeader from 'components/layout/PageHeader';

export default function CommunityPage() {
  return (
    <article>
      <PageHeader>
        <h1>Community</h1>
        <p>Get help with issues, discuss ideas and share your feedback</p>
      </PageHeader>
      <Community />
    </article>
  );
}
