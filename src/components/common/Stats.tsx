'use client';
import styles from './Stats.module.css';

const stats = [
  { name: 'Downloads', value: '4M+' },
  { name: 'GitHub stars', value: '16K+' },
  { name: 'Contributors', value: '150+' },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map(({ name, value }) => (
        <div key={name} className={styles.stat}>
          <div className={styles.value}>{value}</div>
          <div className={styles.name}>{name}</div>
        </div>
      ))}
    </div>
  );
}
