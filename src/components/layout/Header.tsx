'use client';
import { Container, Text, useScroll } from 'react-basics';
import Link from 'next/link';
import CompanyLogo from 'components/common/CompanyLogo';
import HamburgerButton from 'components/common/HamburgerButton';
import LinkButton from 'components/common/LinkButton';
import { REPO_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import styles from './Header.module.css';

export default function Header() {
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
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
            <div className={styles.github}>
              <Link href={REPO_URL} target="_blank">
                <GitHub />
                <Text>16.8k</Text>
              </Link>
            </div>
            <Link href="https://cloud.umami.is/login" className={styles.signin}>
              Sign in
            </Link>
            <LinkButton href="https://cloud.umami.is/signup" variant="primary">
              Get started
            </LinkButton>
          </div>
          <div className={styles.menu}>
            <HamburgerButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
