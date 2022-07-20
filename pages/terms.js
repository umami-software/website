import { CONTENT_DIR, getHtmlContent } from 'lib/content';
import React from 'react';

export default function Terms({ content }) {
  return (
    <article className="container markdown">
      <header>
        <h1>Terms of Service</h1>
      </header>
      <article dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </article>
  );
}

export async function getStaticProps() {
  const content = await getHtmlContent(CONTENT_DIR, 'terms-of-service');
  return {
    props: {
      content,
    },
  };
}
