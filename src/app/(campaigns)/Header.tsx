'use client';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import LinkButton from '@/components/LinkButton';
import useQueryString from '@/components/hooks/useQueryString';
import { CLOUD_URL } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const query = useQueryString({ ref: 'oravo-landing-page' });

  return (
    <header className={styles.header}>
      <CompanyLogo />
      <nav className={styles.links}>
        <Link href="/pricing">Pricing</Link>
      </nav>
      <div className={styles.button} data-oravo-event="lp-get-started-button">
        <LinkButton href={`${CLOUD_URL}/signup${query}`} variant="primary">
          Get started
        </LinkButton>
      </div>
    </header>
  );
}
