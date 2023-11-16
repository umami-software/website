'use client';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import TextBlock from 'components/layout/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: 'Easy to use',
    description: `
    Umami is easy to use and understand without needing to run complicated reports.
    All data is available at a glance.
    `,
    image: <Analytics />,
  },
  {
    title: 'Own your data',
    description: `
    Data ownership is vitally important for maintinaing compliance with ever changing privacy laws.
    Rest assured knowing your data is in your control.
    `,
    image: <Shield />,
  },
  {
    title: 'Respect data privacy',
    description: `
    Umami lets you gather the data you need while respecting the privacy of your users.
    All data is anonymized and no personal data is ever collected. Cookie banners not required.
    `,
    image: <Lock />,
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Umami is a simple, fast, privacy-focused alternative to Google Analytics</h1>
          <p>
            You deserve an analytics solution that you can trust — that won't invade your user's
            privacy and gives you complete ownership of your data.
          </p>
        </TextBlock>
      </div>
      <div className={styles.items}>
        {statements.map(({ title, description, image }) => {
          return (
            <div key={title} className={styles.item}>
              <TextBlock size="sm" align="center">
                <h1>
                  <div className={styles.image}>{image}</div> {title}
                </h1>
                <p>{description}</p>
              </TextBlock>
            </div>
          );
        })}
      </div>
    </section>
  );
}
