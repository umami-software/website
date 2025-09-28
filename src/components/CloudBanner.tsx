'use client';
import styles from './CloudBanner.module.css';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function CloudBanner() {
  const query = useQueryString({ ref: 'oravo-docs' });

  return (
    <div className={styles.banner}>
      <h1>Oravo Analytics</h1>
      <p>
        Get up and running right away by using the <strong>Oravo Analytics</strong> platform.
      </p>
      <p>
        <span>Sign up for free at </span>
        <a href={`${CLOUD_URL}/signup${query}`}>
          <strong>analytics.imoogleai.xyz</strong>
        </a>
        .
      </p>
    </div>
  );
}
