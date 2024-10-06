'use client';
import TextBlock from 'components/layout/TextBlock';
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
          return (
            <img
              key={name}
              src={`https://static.umami.dev/website/images/logo-${name}.png`}
              alt={title}
            />
          );
        })}
      </div>
    </TextBlock>
  );
}
