'use client';
import { GITHUB_STARS, GITHUB_CONTRIBUTORS, GITHUB_DOWNLOADS } from 'lib/constants';
import SectionHeader from 'components/layout/SectionHeader';
import styles from './GitHubStats.module.css';

const stats = [
  { label: 'Downloads', value: GITHUB_DOWNLOADS },
  { label: 'GitHub stars', value: GITHUB_STARS },
  { label: 'Contributors', value: GITHUB_CONTRIBUTORS },
];

export default function GitHubStats() {
  return (
    <section>
      <SectionHeader className={styles.header}>
        <h1>Join a passionate developer community</h1>
      </SectionHeader>
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
