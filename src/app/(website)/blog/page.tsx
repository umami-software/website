import { Metadata } from 'next';
import { getPosts, Post } from 'lib/blog';
import PageHeader from 'components/layout/PageHeader';
import Card from 'app/(website)/blog/Card';
import styles from './page.module.css';

export default async function () {
  const posts = await getPosts();

  return (
    <article>
      <PageHeader>
        <h1>Blog</h1>
        <p>Welcome to the Umami blog!</p>
      </PageHeader>
      <div className={styles.posts}>
        {posts?.map(({ id, title, description, date, author }: Post) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
              author={author}
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
