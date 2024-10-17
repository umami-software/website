'use client';
import { Button, Text } from '@umami/react-zen';
import Link from 'next/link';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './QuickStart.module.css';

export default function QuickStart() {
  const query = useQueryString({ ref: 'umami-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <div className={styles.container}>
      <TextBlock align="center" className={styles.title}>
        <div>Get up and running in minutes</div>
      </TextBlock>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>1</div>
          <div>Sign up</div>
          <div>
            Create a <Link href={url}>free</Link> account on Umami Cloud.
          </div>
        </div>
        <div className={styles.step}>
          <div>2</div>
          <div>Install tracking code</div>
          <div>Add our privacy-friendly tracking code to your website.</div>
        </div>
        <div className={styles.step}>
          <div>3</div>
          <div>View your data</div>
          <div>Data will start appearing on your dashboard immediately. It&apos;s that easy.</div>
        </div>
      </div>
      <div className={styles.action}>
        <Button variant="primary" size="lg" asChild>
          <a href={url}>Get started</a>
        </Button>
      </div>
    </div>
  );
}
