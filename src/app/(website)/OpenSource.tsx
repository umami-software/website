import PageHeader from 'components/layout/PageHeader';
import GitHubStats from 'app/(website)/GitHubStats';

export default function OpenSource() {
  return (
    <section>
      <PageHeader>
        <h1>Powered by Open Source</h1>
      </PageHeader>
      <GitHubStats />
    </section>
  );
}
