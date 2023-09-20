'use client';
import { GITHUB_STARS, GITHUB_CONTRIBUTORS, GITHUB_DOWNLOADS, REPO_URL } from 'lib/constants';
import SectionHeader from 'components/layout/SectionHeader';
import styles from './GitHubStats.module.css';
import LinkButton from 'components/common/LinkButton';

const stats = [
  { label: 'Downloads', value: GITHUB_DOWNLOADS },
  { label: 'GitHub stars', value: GITHUB_STARS },
  { label: 'Contributors', value: GITHUB_CONTRIBUTORS },
];

export default function GitHubStats() {
  return (
    <section>
      <SectionHeader className={styles.header}>
        <h1>Join the Umami developer community</h1>
      </SectionHeader>
      <div className={styles.buttons}>
        <LinkButton href="/docs/getting-started" variant="secondary">
          Read the docs
        </LinkButton>
        <LinkButton href={REPO_URL} variant="secondary">
          View the source
        </LinkButton>
      </div>
      <div className={styles.stats}>
        {stats.map(({ label, value }) => (
          <div key={label} className={styles.stat}>
            <div className={styles.value}>{value}+</div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
