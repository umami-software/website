'use client';
import { GITHUB_STATS } from '@/lib/constants';
import styles from './GitHubStats.module.css';

export default function GitHubStats() {
  return (
    <div className={styles.stats}>
      {GITHUB_STATS.map(({ label, value }) => (
        <div key={label} className={styles.stat}>
          <div className={styles.value}>{value}+</div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
}
