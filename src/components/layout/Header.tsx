'use client';
import { Container, Text, useScroll } from 'react-basics';
import Link from 'next/link';
import CompanyLogo from 'components/common/CompanyLogo';
import HamburgerButton from 'components/common/HamburgerButton';
import LinkButton from 'components/common/LinkButton';
import { GITHUB_STARS, REPO_URL } from 'lib/constants';
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
          <nav className={styles.links}>
            <Link href="/product/features">Features</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
          <div className={styles.buttons}>
            <Link href={REPO_URL} target="_blank" className={styles.github}>
              <GitHub />
              <Text>{GITHUB_STARS}</Text>
            </Link>
            <Link
              href="https://cloud.umami.is/login?ref=header"
              className={styles.login}
              data-umami-event="login-button-header"
            >
              Log in
            </Link>
            <LinkButton
              href="https://cloud.umami.is/signup?ref=header"
              variant="primary"
              data-umami-event="signup-button-header"
            >
              Sign up
            </LinkButton>
          </div>
          <div className={styles.hamburger}>
            <HamburgerButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
