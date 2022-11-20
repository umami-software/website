import { Container, Column } from 'react-basics';
import Link from 'next/link';
import { REPO_URL } from 'lib/constants';
import CompanyLogo from './CompanyLogo';
import HamburgerButton from './HamburgerButton';
import GitHub from 'assets/github.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <Container className={styles.header}>
        <Column size={4} xs={10} sm={10} md={6} className={styles.title}>
          <CompanyLogo />
        </Column>
        <Column size={4} xs={0} sm={0} md={0} className={styles.links}>
          <Link href="/features">Features</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/community">Community</Link>
          <Link href="/pricing">Pricing</Link>
        </Column>
        <Column size={4} xs={0} sm={0} md={0} className={styles.buttons}>
          <Link href={REPO_URL}>
            <a target="_blank">
              <GitHub />
            </a>
          </Link>
        </Column>
        <Column size={0} xs={2} sm={2} md={6} className={styles.menu}>
          <HamburgerButton />
        </Column>
      </Container>
    </header>
  );
}
