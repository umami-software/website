import React from 'react';
import Link from 'next/link';
import Logo from 'assets/logo.svg';
import styles from './Header.module.css';
import classNames from 'classnames';
import Button from './common/Button';

export default function Header() {
  return (
    <header className={classNames(styles.header, 'container')}>
      <div className={styles.title}>
        <Link href="/">
          <a>
            <Logo />
            <div>umami</div>
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="#">Product</Link>
        <Link href="#">Community</Link>
        <Link href="#">Pricing</Link>
      </div>
      <div className={styles.buttons}>
        <Button variant="action">Get Started</Button>
      </div>
    </header>
  );
}
