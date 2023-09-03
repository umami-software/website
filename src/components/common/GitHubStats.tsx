'use client';
import styles from './GitHubStats.module.css';
import { GITHUB_STARS, GITHUB_CONTRIBUTORS, GITHUB_DOWNLOADS } from 'lib/constants';

const gitHubStats = [
  { name: 'Downloads', value: GITHUB_DOWNLOADS },
  { name: 'GitHub stars', value: GITHUB_STARS },
  { name: 'Contributors', value: GITHUB_CONTRIBUTORS },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      {gitHubStats.map(({ name, value }) => (
        <div key={name} className={styles.stat}>
          <div className={styles.value}>{value}</div>
          <div className={styles.name}>{name}</div>
        </div>
      ))}
    </div>
  );
}
