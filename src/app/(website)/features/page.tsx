import Features from './Features';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Features />
      </Suspense>
    </article>
  );
}
