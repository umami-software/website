import GoogleAnalytics from './GoogleAnalytics';
import { Suspense } from 'react';

export default function () {
  return (
    <article>
      <Suspense>
        <GoogleAnalytics />
      </Suspense>
    </article>
  );
}
