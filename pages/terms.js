import React from 'react';
import dynamic from 'next/dynamic';

export default function Terms() {

  const Page = dynamic(import('content/terms-of-service.mdx'));

  return (
    <article className="container markdown">
      <header>
        <h1>Terms of Service</h1>
      </header>
      <article >
        <Page />
      </article>
    </article>
  );
}
