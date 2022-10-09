import React from 'react';
import Menu from 'components/Menu';
import { getAllPathIds, getHtmlContent, CONTENT_DIR } from 'lib/content';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function DocsPage({ content }: { content: { id: string; contentHtml: string } }) {
  const Page = dynamic(import(`content/${content.id}.mdx`)); // mdx file is imported dynamically

  const contentTitle = React.useMemo(() => {
    const contentArray = content.contentHtml.split('\n');
    const h1 = contentArray.find(line => line.includes('<h1>'));

    if (h1) {
      // this regex removes the HTML tags from the content title
      // <h1>About</h1> will become -> About
      // see https://regexr.com/6r9cc
      return h1.replace(/<\/?[^>]+(>|$)/g, '');
    }

    return null;
  }, [content.contentHtml]);

  return (
    <div className="container markdown">
      {contentTitle && (
        <Head>
          <title>{`umami - ${contentTitle}`}</title>
        </Head>
      )}

      <div className="row">
        <div className="col-12 col-lg-3">
          <Menu />
        </div>
        <div className="docs col-12 col-lg-9">
          <article>
            <Page />
          </article>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPathIds(CONTENT_DIR);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: { id: string } }) => {
  const content = await getHtmlContent(CONTENT_DIR, params.id);
  return {
    props: {
      content,
    },
  };
};
