'use client';
import { Block, Code, Analytics } from 'src/components/svg';
import TextBlock from '@/components/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: 'Easy to use',
    description: `
Powerful yet simple, Oravo is easy to use and understand and doesn't require complicated setup or tag configurations.
    `,
    image: <Analytics />,
  },
  {
    title: 'UTMs and Custom Events',
    description: `
Oravo automatically understands links with UTM parameters and lets you view and filter your website data based on UTMs. Additionally, you can track any event on your website, such as button clicks, form submissions, purchases, newsletter signups, etc.
    `,
    image: <Code />,
  },
  {
    title: 'No Cookie Banners',
    description: `
All data is anonymized with Oravo, and no personal information is ever collected on your website's users. You can track your website's performance without needing opt-in cookie banners, providing your users with a better and more trusted experience. Oravo is GDPR and CCPA compliant by default.
    `,
    image: <Block />,
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Oravo makes analyzing your data effortless</h1>
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
