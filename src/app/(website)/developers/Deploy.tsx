'use client';
import { Button } from '@umami/react-zen';
import SectionHeader from '@/components/SectionHeader';
import Code from 'assets/code.svg';
import Cloud from 'assets/cloud.svg';
import styles from './Deploy.module.css';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function Deploy() {
  const query = useQueryString({ ref: 'umami-developers' });

  return (
    <section>
      <SectionHeader>
        <h1>Deploy in minutes</h1>
        <p>Choose the solution that is right for you.</p>
      </SectionHeader>
      <div className={styles.items}>
        <div className={styles.item}>
          <Code />
          <header>Open-source Umami</header>
          <p>Self-host Umami on your own servers. Free forever.</p>
          <Button variant="secondary">
            <a href="/docs/getting-started">Download Umami</a>
          </Button>
        </div>
        <div className={styles.item}>
          <Cloud />
          <header>Umami Cloud</header>
          <p>High performance, fully managed Umami service.</p>
          <Button variant="primary">
            <a href={`${CLOUD_URL}/signup${query}`}>Start free trial</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
