import { Suspense } from 'react';
import { Metadata } from 'next';
import SupportPage from './SupportPage';

export default function () {
  return (
    <article>
      <Suspense>
        <SupportPage />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Support',
};
