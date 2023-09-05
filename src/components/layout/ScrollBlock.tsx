'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import styles from './ScrollBlock.module.css';

export default function ScrollBlock({ items }) {
  return (
    <section className={styles.section}>
      {items.map(({ name, description, image }) => (
        <ImageBlock key={name} className={styles.block}>
          <TextBlock>
            <h1>{name}</h1>
            <p>{description}</p>
          </TextBlock>
          <div className={styles.image}>{image && <img src={image} alt={name} />}</div>
        </ImageBlock>
      ))}
    </section>
  );
}
