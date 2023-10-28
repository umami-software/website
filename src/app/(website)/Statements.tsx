'use client';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import ImageBlock from 'components/layout/ImageBlock';
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
    <>
      <div className={styles.header}>
        <TextBlock align="center">
          <h1>Umami is a simple, privacy-focused alternative to Google Analytics</h1>
          <p>
            You deserve an analytics solution that you can trust — that won't invade your user's
            privacy and gives you complete ownership of your data.
          </p>
        </TextBlock>
      </div>
      <section className={styles.statements}>
        {statements.map(({ title, description, image }) => {
          return (
            <ImageBlock key={title} className={styles.item}>
              <TextBlock align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
              <div className={styles.image}>{image}</div>
            </ImageBlock>
          );
        })}
      </section>
    </>
  );
}
