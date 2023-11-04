import Docs from './Docs';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <Docs />
      </Suspense>
    </article>
  );
}
