import Creators from './Creators';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Creators />
      </Suspense>
    </article>
  );
}
