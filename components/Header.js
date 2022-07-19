import React from 'react';
import { Button } from 'react-basics';
import Link from 'next/link';
import styles from './Header.module.css';
import classNames from 'classnames';
import CompanyLogo from './CompanyLogo';

export default function Header() {
  return (
    <header className={classNames('container', styles.header)}>
      <div className={styles.title}>
        <CompanyLogo />
      </div>
      <div className={styles.links}>
        <Link href="/features">Features</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/community">Community</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className={styles.buttons}>
        <Button variant="primary">Get Started</Button>
      </div>
    </header>
  );
}
