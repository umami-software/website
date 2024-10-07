'use client';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import styles from './Companies.module.css';

const items = [
  { name: 'amd', title: 'AMD' },
  { name: 'accenture', title: 'Accenture' },
  //{ name: 'bp', title: 'bp' },
  { name: 'espn', title: 'ESPN' },
  { name: 'siemens', title: 'Siemens' },
  { name: 'hulu', title: 'Hulu' },
  { name: 'vsp', title: 'VSP' },
  //{ name: 'huawei', title: 'Huawei' },
];

export default function Companies() {
  return (
    <TextBlock align="center">
      <h1>Trusted by thousands of companies</h1>
      <div className={styles.logos}>
        {items.map(({ name, title }) => {
          return <ContentImage key={name} src={`/images/logo-${name}.png`} alt={title} />;
        })}
      </div>
    </TextBlock>
  );
}
