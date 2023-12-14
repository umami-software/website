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

  const data = await import(`../${id}.mdx`);
  const pageTitle = data.meta?.title ?? 'Blog';

  return {
    title: {
      absolute: `${pageTitle} – umami Blog`,
      default: 'Blog – umami',
    },
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
