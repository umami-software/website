import React from 'react';
import Page from "content/privacy-policy.mdx";

export default function Privacy() {
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
