'use client';
import CompanyLogo from 'components/common/CompanyLogo';
import styles from './Header.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';

export default function Header() {
  return (
    <header className={styles.header}>
      <CompanyLogo />
      <div className={styles.button}>
        <LinkButton href={`${CLOUD_URL}/signup?ref=campaign-ga`} variant="primary">
          Get started
        </LinkButton>
      </div>
    </header>
  );
}
