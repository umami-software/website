import React from 'react';
import { NextPage } from 'next';
import Page from 'content/privacy-policy.mdx';

const Privacy: NextPage = () => {
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
};

export default Privacy;
