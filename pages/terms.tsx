import React from 'react';
import Page from 'content/terms-of-service.mdx';

export default function Terms() {
  return (
    <article className="container markdown">
      <header>
        <h1>Terms of Service</h1>
      </header>
      <article>
        <Page />
      </article>
    </article>
  );
}
