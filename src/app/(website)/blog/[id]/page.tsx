import { glob } from 'glob';
import PageContent from './PageContent';
import styles from './page.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  const files = await glob('../*.mdx');

  return files.map(file => ({
    id: file.split('.')[0],
  }));
}

export default function ({ params }: { params: { id: string } }) {
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
