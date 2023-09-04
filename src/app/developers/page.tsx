'use client';
import PageHeader from 'components/layout/PageHeader';
import Community from './Community';
import Deloy from './Deploy';
import GitHubStats from 'app/developers/GitHubStats';
import styles from './page.module.css';

export default function DevelopersPage() {
  return (
    <article className={styles.container}>
      <PageHeader>
        <h1>Developers</h1>
        <p>
          Umami is dedicated to open-source development. Together we can build an analytics product
          that is fully transparent, secure and available to everyone.
        </p>
      </PageHeader>
      <GitHubStats />
      <Deloy />
      <Community />
    </article>
  );
}
