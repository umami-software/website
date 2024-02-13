'use client';
import PageHeader from 'components/layout/PageHeader';
import Community from './Community';
import Deploy from './Deploy';
import GitHubStats from './GitHubStats';
import styles from './Developers.module.css';

export default function Developers() {
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1>Developers</h1>
        <p>
          Umami is dedicated to open-source development. Together we can build an analytics product
          that is fully transparent, secure and available to everyone.
        </p>
      </PageHeader>
      <Deploy />
      <GitHubStats />
      <Community />
    </div>
  );
}
