import { glob } from 'glob';
import { Metadata } from 'next';
import PageContent from './PageContent';
import styles from './page.module.css';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: `${id[0].toUpperCase()}${id.slice(1).replace('-', ' ')}`.replace('.prefetch', ''),
  };
}

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default function ({ params }: Props) {
  const id = params?.id?.split('.')?.[0];

  return (
    <article className={styles.blog}>
      <PageContent id={id} />
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>
    </article>
  );
}
