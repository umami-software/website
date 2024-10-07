'use client';
import styles from './CloudBanner.module.css';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function CloudBanner() {
  const query = useQueryString({ ref: 'umami-docs' });

  return (
    <div className={styles.banner}>
      <h1>Umami Cloud</h1>
      <p>
        Get up and running right away by using the <strong>Umami Cloud</strong> platform.
      </p>
      <p>
        <span>Sign up for free at </span>
        <a href={`${CLOUD_URL}/signup${query}`}>
          <strong>cloud.umami.is</strong>
        </a>
        .
      </p>
    </div>
  );
}
