'use client';
import { format } from 'date-fns';
import LinkButton from '@/components/LinkButton';
import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({
  id,
  title,
  description,
  date,
}: {
  id: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.date}>{date && format(new Date(date), 'PP')}</div>
      <div className={styles.title}>
        <Link href={`/blog/${id}`}> {title}</Link>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.button}>
        <LinkButton href={`/blog/${id}`} variant="secondary">
          Read more
        </LinkButton>
      </div>
    </div>
  );
}
