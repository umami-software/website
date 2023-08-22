import { Row, Column } from 'react-basics';
import { NextPage } from 'next';
import Menu from 'components/pages/docs/Menu';
import { getAllPathIds, getHtmlContent } from 'lib/content';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/v1');

const DocsPage: NextPage = ({
  content,
}: {
  content: { id: string; title: string; html: string };
}) => {
  const { id, title } = content;

  const Page = dynamic(import(`content/v1/${id}.mdx`));

  return (
    <Row className="markdown">
      {title && (
        <Head>
          <title>{`${title} | umami`}</title>
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
