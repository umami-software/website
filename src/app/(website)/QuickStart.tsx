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
          <h2>Sign up</h2>
          <p>
            Create a <Link href={url}>free</Link> account on Umami Cloud.
          </p>
        </div>
        <div className={styles.step}>
          <div>2</div>
          <h2>Install tracking code</h2>
          <p>Add our privacy-friendly tracking code to your website.</p>
        </div>
        <div className={styles.step}>
          <div>3</div>
          <h2>View your data</h2>
          <p>Data will start appearing on your dashboard immediately. It's that easy.</p>
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
