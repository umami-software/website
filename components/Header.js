import Link from 'next/link';
import classNames from 'classnames';
import { REPO_URL } from 'lib/constants';
import CompanyLogo from './CompanyLogo';
import GitHub from 'assets/github.svg';

import styles from './Header.module.css';
import HamburgerButton from './HamburgerButton';

export default function Header() {
  return (
    <header>
      <div className={classNames('container', styles.header)}>
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
        <HamburgerButton />
      </div>
    </header>
  );
}
