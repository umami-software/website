'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import styles from './ScrollBlock.module.css';

export default function ScrollBlock({ items }) {
  return (
    <section className={styles.section}>
      {items.map(({ title, description, image }) => (
        <ImageBlock key={title} className={styles.block}>
          <TextBlock>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextBlock>
          <div className={styles.image}>
            {typeof image === 'string' ? <img src={image} alt={title} /> : image}
          </div>
        </ImageBlock>
      ))}
    </section>
  );
}
