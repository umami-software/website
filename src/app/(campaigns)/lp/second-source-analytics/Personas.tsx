'use client';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import styles from '@/app/(website)/Personas.module.css';

const items = [
  {
    title: 'Startups',
    description:
      'Measure everything you need to help improve your website when you’re just getting your business started.',
    image: '/images/creators.jpg',
  },
  {
    title: 'Established',
    description: 'Easily measure the effectiveness of your sales and marketing campaigns.',
    image: '/images/marketers.jpg',
  },
  {
    title: 'Enterprise',
    description:
      'Large corporations and teams of all sizes can run Umami alongside any existing website analytics solution.',
    image: '/images/agencies.jpg',
  },
];

export default function Personas() {
  return (
    <section className={styles.container}>
      <TextBlock align="center" size="lg">
        <h1>Second-source website data to help teams of all sizes increase confidence</h1>
      </TextBlock>
      <div className={styles.items}>
        {items.map(({ title, description, image }) => {
          return (
            <div key={title} className={styles.card}>
              <div className={styles.image}>
                <ContentImage src={image} alt="" />
              </div>
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
