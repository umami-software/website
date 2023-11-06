'use client';
import LinkButton from 'components/common/LinkButton';
import styles from './Card.module.css';
import Link from 'next/link';

export default function Card({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <Link href={`/blog/${id}`}> {title}</Link>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.button}>
        <LinkButton href={`/blog/${id}`} variant="primary">
          Read more
        </LinkButton>
      </div>
    </div>
  );
}
