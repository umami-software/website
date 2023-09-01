'use client';
import styles from './Statements.module.css';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import OpenSource from 'assets/open-source.svg';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';

const statements = [
  {
    title: 'Respect data privacy',
    description: `
    Umami lets you to gather the data you need while respecting the privacy of your users.
    Umami does not collect any personal information, does not use cookies, does not track
    users across websites, and is GDPR compliant.
    `,
    image: <Lock />,
  },
  {
    title: 'Own your data',
    description: `
    Umami helps you stay compliant with ever changing data privacy laws. All data collected
    is anonymized, making it impossible to identify any individual user. Rest assured
    knowing that your data is securely in your hands.
    `,
    image: <Shield />,
  },
  {
    title: 'Simple analytics',
    description: `
    Umami is easy to use and understand without needing to run complicated reports. Umami
    collects only the metrics you care about and everything fits on a single page.
    `,
    image: <Analytics />,
  },
  {
    title: 'Open source',
    description: `
    Umami is dedicated to open source development. Place your confidence in a product that
    is fully transparent, battle-tested and community supported.
    `,
    image: <OpenSource />,
  },
];

export default function Statements() {
  return (
    <section className={styles.statements}>
      {statements.map(({ title, description, image }) => {
        return (
          <ImageBlock className={styles.item}>
            <TextBlock>
              <h1>{title}</h1>
              <p>{description}</p>
            </TextBlock>
            <div className={styles.image}>{image}</div>
          </ImageBlock>
        );
      })}
    </section>
  );
}
