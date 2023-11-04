import PageHeader from 'components/layout/PageHeader';
import Blog from './Blog';

export default function BlogPage() {
  return (
    <article>
      <PageHeader>
        <h1>Blog</h1>
      </PageHeader>
      <Blog />
    </article>
  );
}
