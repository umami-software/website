import DevelopersPage from './DevelopersPage';
import { Suspense } from 'react';
import { Metadata } from 'next';

export default function () {
  return (
    <article>
      <Suspense>
        <DevelopersPage />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Developers',
};
