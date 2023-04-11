import React from 'react';
import { Row, Column } from 'react-basics';
import { NextPage } from 'next';
import Menu from 'components/Menu';
import { getAllPathIds, getHtmlContent, CONTENT_DIR } from 'lib/content';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps } from 'next';

const DocsPage: NextPage = ({ content }: { content: { id: string; contentHtml: string } }) => {
  const Page = dynamic(import(`content/v2/${content.id}.mdx`)); // mdx file is imported dynamically

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
    <Row className="markdown">
      {contentTitle && (
        <Head>
          <title>{`${contentTitle} | umami`}</title>
        </Head>
      )}

      <Column defaultSize={3} xs={12} sm={12} md={12}>
        <Menu />
      </Column>
      <Column defaultSize={9} xs={12} sm={12} md={12}>
        <article style={{ padding: '0 20px' }}>
          <Page />
        </article>
      </Column>
    </Row>
  );
};

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

export default DocsPage;
