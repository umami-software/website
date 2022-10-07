import React from 'react';
import dynamic from 'next/dynamic';

export default function Privacy() {

  const Page = dynamic(import('../content/privacy-policy.mdx'));

  return (
    <article className="container markdown">
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <article>
        <Page />
      </article>
    </article>
  );
}
