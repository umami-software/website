'use client';
import PageHeader from '@/components/PageHeader';
import Deploy from './Deploy';
import Join from './Join';
import styles from './DevelopersPage.module.css';

export default function DevelopersPage() {
  return (
    <div className={styles.container}>
      <PageHeader>
        <h1>Developers</h1>
        <p>
          Umami is dedicated to open-source development. Together we can build an analytics product
          that is fully transparent, secure and available to everyone.
        </p>
      </PageHeader>
      <Join />
      <Deploy />
    </div>
  );
}
