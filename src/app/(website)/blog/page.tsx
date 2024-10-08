import type { Metadata } from 'next';
import type { Post } from '@/lib/blog';
import PageHeader from '@/components/PageHeader';
import Card from './components/Card';
import styles from './page.module.css';
import { getFiles } from '@/lib/content';

export default async function () {
  const posts = await getFiles('src/content/blog');

  return (
    <article>
      <PageHeader>
        <h1>Blog</h1>
      </PageHeader>
      <div className={styles.posts}>
        {posts
          ?.filter(n => n)
          ?.map(({ id, title, description, date }: Post) => {
            return <Card key={id} id={id} title={title} description={description} date={date} />;
          })}
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Blog',
};
