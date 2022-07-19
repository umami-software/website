import styles from './Stats.module.css';
import classNames from 'classnames';

const stats = [
  { name: 'Downloads', value: '4M+' },
  { name: 'GitHub stars', value: '12K+' },
  { name: 'Contributors', value: '100+' },
];

export default function Stats() {
  return (
    <div className={classNames('row', styles.stats)}>
      {stats.map(({ name, value }) => (
        <div key={name} className={classNames('col-12 col-lg-4', styles.stat)}>
          <div className={styles.value}>{value}</div>
          <div className={styles.name}>{name}</div>
        </div>
      ))}
    </div>
  );
}
