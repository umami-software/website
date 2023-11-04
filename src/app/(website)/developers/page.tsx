import Developers from './Developers';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Developers />
      </Suspense>
    </article>
  );
}
