import { Suspense } from 'react';
import { Metadata } from 'next';
import CommunityPage from './CommunityPage';

export default function () {
  return (
    <article>
      <Suspense>
        <CommunityPage />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Community',
};
