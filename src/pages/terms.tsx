import React from 'react';
import { NextPage } from 'next';
import Page from 'content/terms-of-service.mdx';

const Terms: NextPage = () => {
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
};

export default Terms;
