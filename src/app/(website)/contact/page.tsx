import Contact from './Contact';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Contact />
      </Suspense>
    </article>
  );
}
