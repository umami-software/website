import { Suspense } from 'react';
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
