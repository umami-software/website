import { Metadata } from 'next';
import { format } from 'date-fns';
import Link from 'next/link';
import { getPost } from 'lib/blog';
import Markdown from 'components/common/Markdown';
import styles from './page.module.css';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const post = await getPost(id);

  return {
    title: {
      absolute: `${post?.title} – Umami`,
      default: 'Blog – Umami',
    },
  };
}

export default async function ({ params }: Props) {
  const { id } = params;
  const post = await getPost(id);

  if (!post) {
    return null;
  }

  return (
    <article className={styles.blog}>
      <div className={styles.title}>{post?.title}</div>
      <div className={styles.info}>
        <div className={styles.date}>
          {post?.date && format(new Date(post?.date as string), 'PP')}
        </div>
        <div className={styles.author}>Posted by {post?.author}</div>
      </div>
      <Markdown>{post?.body}</Markdown>
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>
    </article>
  );
}
