import PageHeader from '@/components/PageHeader';

export default function NotFoundPage() {
  return (
    <PageHeader>
      <h1>Page not found</h1>
      <p>{`Sorry, we can't find the page you're looking for.`}</p>
    </PageHeader>
  );
}
