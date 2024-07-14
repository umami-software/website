import { Suspense } from 'react';
import { Metadata } from 'next';
import AboutPage from './AboutPage';

export default function () {
  return (
    <article>
      <Suspense>
        <AboutPage />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'About',
};
