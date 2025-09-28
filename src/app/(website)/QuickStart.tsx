'use client';
import { Button, Row } from '@umami/react-zen';
import Link from 'next/link';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './QuickStart.module.css';

export default function QuickStart() {
  const query = useQueryString({ ref: 'oravo-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <div className={styles.container}>
      <TextBlock align="center" size="lg">
        <header>Simple setup</header>
        <h2>Get up and running in minutes</h2>
      </TextBlock>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.num}>1</div>
          <div className={styles.action}>Sign up</div>
          <div className={styles.description}>
            Create a <Link href={url}>free</Link> account on Oravo Cloud.
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>2</div>
          <div className={styles.action}>Install tracking code</div>
          <div className={styles.description}>
            Add our privacy-friendly tracking code to your website.
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.num}>3</div>
          <div className={styles.action}>View your data</div>
          <div className={styles.description}>
            Data will start appearing on your dashboard immediately. It&apos;s that easy.
          </div>
        </div>
      </div>
      <Row justifyContent="center">
        <Button variant="primary" size="lg" asChild>
          <a href={url}>Get started</a>
        </Button>
      </Row>
    </div>
  );
}
