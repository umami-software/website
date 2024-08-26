'use client';
import TextBlock from 'components/layout/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: 'Easy to use',
    description: `
Powerful yet simple, Umami is easy to use and understand and doesn't require complicated setup or tag configurations.
    `,
  },
  {
    title: 'Customizable Reporting',
    description: `
Understand how users navigate through your website by easily building custom reports that highlight the customer journey, retention, goals, trends, and funnels.
    `,
  },
  {
    title: 'Product and Marketing Analytics in One',
    description: `
Umami works everywhere your product and marketing teams do; in web-based products and traditional marketing websites. Follow the customer journey as they make initial contact with your marketing website, and then move into your web-based product
    `,
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Umami makes analyzing your customer journey effortless</h1>
        </TextBlock>
      </div>
      <div className={styles.items}>
        {statements.map(({ title, description }) => {
          return (
            <div key={title} className={styles.item}>
              <TextBlock size="sm" align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
            </div>
          );
        })}
      </div>
    </section>
  );
}
