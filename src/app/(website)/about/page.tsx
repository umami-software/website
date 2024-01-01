import { Suspense } from 'react';
import { Metadata } from 'next';
import About from './About';

export default function () {
  return (
    <article>
      <Suspense>
        <About />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'About',
};
