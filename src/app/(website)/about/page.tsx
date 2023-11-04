import About from './About';
import { Suspense } from 'react';

export default function AboutPage() {
  return (
    <article>
      <Suspense>
        <About />
      </Suspense>
    </article>
  );
}
