import Marketers from './Marketers';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Marketers />
      </Suspense>
    </article>
  );
}
