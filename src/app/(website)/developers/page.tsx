import Developers from './Developers';
import { Suspense } from 'react';
import { Metadata } from 'next';

export default function () {
  return (
    <article>
      <Suspense>
        <Developers />
      </Suspense>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Developers',
};
