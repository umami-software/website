'use client';
import CompanyLogo from 'components/common/CompanyLogo';
import LinkButton from 'components/common/LinkButton';
import useQueryString from 'components/hooks/useQueryString';
import { CLOUD_URL } from 'lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const query = useQueryString({ ref: 'umami-campaign-ga' });

  return (
    <header className={styles.header}>
      <CompanyLogo />
      <div className={styles.button}>
        <LinkButton href={`${CLOUD_URL}/signup${query}`} variant="primary">
          Get started
        </LinkButton>
      </div>
    </header>
  );
}
