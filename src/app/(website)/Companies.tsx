'use client';
import { Text, Column } from '@umami/react-zen';
import styles from './Companies.module.css';

const items = [
  { name: 'amd', title: 'AMD' },
  { name: 'accenture', title: 'Accenture' },
  { name: 'gm', title: 'GM' },
  { name: 'espn', title: 'ESPN' },
  { name: 'siemens', title: 'Siemens' },
  { name: 'intel', title: 'Intel' },
  { name: 'hulu', title: 'Hulu' },
  { name: 'vsp', title: 'VSP' },
  //{ name: 'huawei', title: 'Huawei' },
];

export default function Companies() {
  return (
    <Column gap="3">
      <Text type="muted" align="center">
        Trusted by thousands of companies
      </Text>
      <div className={styles.logos}>
        <div className={styles.scroll}>
          {items.map(({ name, title }) => {
            return <img key={name} src={`/images/logo-${name}.png`} alt={title} />;
          })}
        </div>
        <div className={styles.scroll} style={{ left: 1600 }}>
          {items.map(({ name, title }) => {
            return <img key={name} src={`/images/logo-${name}.png`} alt={title} />;
          })}
        </div>
      </div>
    </Column>
  );
}
