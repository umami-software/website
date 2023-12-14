import { Metadata } from 'next';
import PageHeader from 'components/layout/PageHeader';
import Card from 'app/(website)/blog/Card';
import styles from './page.module.css';

const blogs = [
  {
    id: 'why-privacy-matters',
    title: 'Why Privacy Matters',
    description: 'Learn about how corporations are spying on your internet activity.',
  },
];

export default async function () {
  return (
    <article>
      <PageHeader>
        <h1>Blog</h1>
        <p>Welcome to the Umami blog!</p>
      </PageHeader>
      <div className={styles.posts}>
        {blogs.map(({ id, title, description }) => {
          return <Card key={id} id={id} title={title} description={description} />;
        })}
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Blog',
};
