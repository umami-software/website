'use client';
import { Icon, Icons, Text } from 'react-basics';
import TextBlock from 'components/layout/TextBlock';
import LinkButton from 'components/common/LinkButton';
import styles from './Personas.module.css';

const items = [
  {
    title: 'Creators',
    description: 'Measure everything you need to help improve your website.',
    image: 'https://content.umami.is/website/images/creators.jpg',
    url: '/product/creators',
  },
  {
    title: 'Marketers',
    description: 'Easily measure the effectiveness of your campaigns.',
    image: 'https://content.umami.is/website/images/marketers.jpg',
    url: '/product/marketers',
  },
  {
    title: 'Agencies',
    description: 'Bring value to your clients by delivering insights into their data',
    image: 'https://content.umami.is/website/images/agencies.jpg',
    url: '/product/agencies',
  },
];

export default function Personas() {
  return (
    <section className={styles.container}>
      <TextBlock align="center" size="lg">
        <h1>Built for you</h1>
      </TextBlock>
      <div className={styles.items}>
        {items.map(({ title, description, image, url }) => {
          return (
            <div key={title} className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
              <TextBlock size="sm" align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
              <div className={styles.button}>
                <LinkButton href={url} variant="secondary">
                  <Text>Learn more </Text>
                  <Icon>
                    <Icons.ArrowRight />
                  </Icon>
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
