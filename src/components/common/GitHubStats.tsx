'use client';
import styles from './GitHubStats.module.css';
import { GITHUB_STARS, GITHUB_CONTRIBUTORS, GITHUB_DOWNLOADS } from 'lib/constants';

const stats = [
  { label: 'Downloads', value: GITHUB_DOWNLOADS },
  { label: 'GitHub stars', value: GITHUB_STARS },
  { label: 'Contributors', value: GITHUB_CONTRIBUTORS },
];

export default function GitHubStats() {
  return (
    <div className={styles.stats}>
      {stats.map(({ label, value }) => (
        <div key={label} className={styles.stat}>
          <div className={styles.value}>{value}+</div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
}
