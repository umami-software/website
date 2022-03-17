import React from 'react';
import Layout from 'components/layout';
import Menu from 'components/menu';
import { getAllPathIds, getHtmlContent, CONTENT_DIR } from 'lib/content';

export default function DocsPage({ content }) {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-lg-3">
          <Menu />
        </div>
        <div
          className="docs col-12 col-lg-9"
          dangerouslySetInnerHTML={{ __html: content.contentHtml }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPathIds(CONTENT_DIR);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const content = await getHtmlContent(CONTENT_DIR, params.id);
  return {
    props: {
      content,
    },
  };
}
