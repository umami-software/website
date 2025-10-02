'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Column, Row } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import ImageBlock from '@/components/ImageBlock';
import styles from './ProductAnalytics.module.css';

const images = [
  `/images/feature-user-journeys.png`,
  `/images/feature-user-retention.png`,
  `/images/feature-funnels.png`,
];

const items = [
  { name: 'User journeys', description: 'Understand how users navigate through your product.' },
  {
    name: 'User retention',
    description: 'Measure your website stickiness by tracking how often users return.',
  },
  { name: 'Funnels', description: 'Understand the conversion and drop-off rate of users.' },
];

export default function ProductAnalytics() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => setNum(num => num + 1), 3000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <Row gap="6" className={styles.row}>
      <ImageBlock className={styles.block}>
        {images.map((src, index) => {
          return (
            <img
              key={src}
              src={src}
              alt="screenshot"
              className={classNames(styles.image, num % 3 === index && styles.selected)}
            />
          );
        })}
      </ImageBlock>
      <Column gap="6">
        <TextBlock align="center" size="lg">
          <header>Product analytics</header>
          <h2>Turn user behavior into insights</h2>
          <p>
            Oravo helps you understand why your users do what they do, so you can optimize your
            conversion paths.
          </p>
        </TextBlock>
        <Column gap="3">
          {items.map(({ name, description }, index) => {
            return (
              <TextBlock
                key={name}
                className={classNames(styles.item, num % 3 === index && styles.selected)}
                onClick={() => setNum(index)}
              >
                <h3>{name}</h3>
                <p>{description}</p>
              </TextBlock>
            );
          })}
        </Column>
      </Column>
    </Row>
  );
}
