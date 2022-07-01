import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import classNames from 'classnames';
import Button from './common/Button';
import CompanyLogo from './CompanyLogo';

export default function Header() {
  return (
    <header className={classNames(styles.header, 'container')}>
      <div className={styles.title}>
        <CompanyLogo />
      </div>
      <div className={styles.links}>
        <Link href="#">Product</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/community">Community</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className={styles.buttons}>
        <Button variant="action">Get Started</Button>
      </div>
    </header>
  );
}
