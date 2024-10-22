import type { Metadata } from 'next';
import { firstBy } from 'thenby';
import PageHeader from '@/components/PageHeader';
import Card from './components/Card';
import { getFiles } from 'lib/content';
import styles from './page.module.css';

interface Post {
  id: string;
  meta: {
    title: string;
    description: string;
    date: string;
    author: string;
    body: string;
  };
}

export default async function () {
  const posts = await getFiles('src/content/blog');

  return (
    <article>
      <PageHeader>
        <div>Blog</div>
      </PageHeader>
      <div className={styles.posts}>
        {posts
          ?.filter((n: Post) => n)
          ?.sort(firstBy((v1: Post, v2: Post) => +new Date(v2.meta.date) - +new Date(v1.meta.date)))
          ?.map((post: Post) => {
            const { title, description, date } = post.meta;
            return (
              <Card
                key={post.id}
                id={post.id}
                title={title}
                description={description}
                date={date}
              />
            );
          })}
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Blog',
};
