import { Metadata } from 'next';
import classNames from 'classnames';
import path from 'node:path';
import { format } from 'date-fns';
import Link from 'next/link';
import { getFile } from 'lib/content';
import Markdown from '@/components/Markdown';
import styles from './page.module.css';

const FOLDER = path.resolve(process.cwd(), './src/content/blog');

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const post = await getFile(id, FOLDER);

  return {
    title: {
      absolute: `${post?.meta?.title} – Umami`,
      default: 'Blog – Umami',
    },
  };
}

export default async function ({ params }: Props) {
  const { id } = params;
  const post = await getFile(id, FOLDER);

  if (!post) {
    return null;
  }

  const { title, date, author } = post.meta || {};

  return (
    <article className={classNames(styles.blog, 'blog')}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className={styles.date}>{post?.date && format(new Date(date as string), 'PP')}</div>
        <div className={styles.author}>Posted by {author}</div>
      </div>
      <Markdown>{post?.body}</Markdown>
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>
    </article>
  );
}
