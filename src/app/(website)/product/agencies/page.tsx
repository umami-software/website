import Agencies from './Agencies';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Agencies />
      </Suspense>
    </article>
  );
}
