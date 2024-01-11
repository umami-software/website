import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import Link from 'next/link';
import { getPost } from 'lib/blog';
import styles from './page.module.css';

type Props = {
  params: { id: string };
};

function MDX({ children }) {
  // @ts-expect-error Server Component
  return <MDXRemote source={children as any} />;
}

export default async function ({ params }: Props) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <article className={styles.blog}>
      <div className={styles.title}>{post?.title}</div>
      <div className={styles.info}>
        <div className={styles.date}>{format(new Date(post?.date as string), 'PP')}</div>
        <div className={styles.author}>Posted by {post?.author}</div>
      </div>
      <MDX>{post?.body}</MDX>
      <Link href="/blog" className={styles.back}>
        ← Back to Blog
      </Link>
    </article>
  );
}
