'use client';
import TextBlock from '@/components/TextBlock';
import styles from '@/app/(website)/Personas.module.css';

const items = [
  {
    title: 'Content Marketing',
    description:
      'Measure content performance, track engagement metrics, and optimize your content strategy.',
    image: '/images/creators.jpg',
  },
  {
    title: 'Performance Marketing',
    description:
      'Analyze campaign effectiveness, track conversions, and optimize marketing ROI across various channels.',
    image: '/images/marketers.jpg',
  },
  {
    title: 'Product Marketing',
    description:
      'Gain insights into feature adoption, user behavior, and customer journey to inform your product positioning and go-to-market strategies.',
    image: '/images/agencies.jpg',
  },
];

export default function Personas() {
  return (
    <section className={styles.container}>
      <TextBlock align="center" size="lg">
        <h1>All marketers can make use of Umami</h1>
      </TextBlock>
      <div className={styles.items}>
        {items.map(({ title, description, image }) => {
          return (
            <div key={title} className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt="" />
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
