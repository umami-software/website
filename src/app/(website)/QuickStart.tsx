'use client';
import TextBlock from 'components/layout/TextBlock';
import Link from 'next/link';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from './QuickStart.module.css';
import LinkButton from 'components/common/LinkButton';

export default function QuickStart() {
  const query = useQueryString({ ref: 'umami-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <TextBlock align="center" className={styles.container}>
      <h1>Get up and running in minutes</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>1</div>
          <h3>Sign up</h3>
          <p>
            Create a <Link href={url}>free</Link> account on Umami Cloud.
          </p>
        </div>
        <div className={styles.step}>
          <div>2</div>
          <h3>Install tracking code</h3>
          <p>Add our privacy-friendly tracking code to your website.</p>
        </div>
        <div className={styles.step}>
          <div>3</div>
          <h3>View your data</h3>
          <p>Data will start appearing on your dashboard immediately. It&apos;s that easy.</p>
        </div>
      </div>
      <div className={styles.action}>
        <LinkButton href={url} variant="primary">
          Get started
        </LinkButton>
      </div>
    </TextBlock>
  );
}
