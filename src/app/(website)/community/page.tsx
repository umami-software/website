import { Suspense } from 'react';
import { Metadata } from 'next';
import Community from './Community';

export default function () {
  return (
    <article>
      <Suspense>
        <Community />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Community',
};
