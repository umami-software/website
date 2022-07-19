import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { REPO_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import CompanyLogo from './CompanyLogo';
import styles from './Header.module.css';

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
        <Link href={REPO_URL}>
          <a target="_blank">
            <GitHub />
          </a>
        </Link>
      </div>
    </header>
  );
}
