'use client';
import ImageBlock from '@/components/ImageBlock';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import styles from './ScrollBlock.module.css';

export default function ScrollBlock({ items }) {
  return (
    <section className={styles.section}>
      {items.map(({ title, description, image, icon: Icon }) => (
        <ImageBlock key={title} className={styles.block}>
          <TextBlock>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextBlock>
          <div className={styles.image}>
            {image && <ContentImage src={image} alt={title} />}
            {!image && <Icon />}
          </div>
        </ImageBlock>
      ))}
    </section>
  );
}
