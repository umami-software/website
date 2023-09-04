import PageHeader from 'components/layout/PageHeader';
import Community from './Community';
import Deloy from './Deploy';
import GitHubStats from 'components/common/GitHubStats';

export default function DevelopersPage() {
  return (
    <article>
      <PageHeader>
        <h1>Developers</h1>
        <p>Join the Umami community of fellow developers, users, marketers and website owners.</p>
      </PageHeader>
      <GitHubStats />
      <Deloy />
      <Community />
    </article>
  );
}
