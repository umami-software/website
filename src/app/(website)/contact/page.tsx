import { Suspense } from 'react';
import Contact from './Contact';

export default function () {
  return (
    <article>
      <Suspense>
        <Contact />
      </Suspense>
    </article>
  );
}
