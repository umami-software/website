'use client';
import { Button, Text, Icon, Row, Container } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import MobileMenu from '@/components/MobileMenu';
import useQueryString from '@/components/hooks/useQueryString';
import useScroll from '@/components/hooks/useScroll';
import styles from './Header.module.css';

const mobileMenuItems = [
  {
    label: 'Features',
    value: '/features',
  },
  {
    label: 'Pricing',
    value: '/pricing',
  },
  {
    label: 'Contact',
    value: '/contact',
  },
];

export default function Header() {
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <Row justifyContent="space-between">
          <CompanyLogo />
          <NavLinks />
          <ActionLinks />
        </Row>
      </Container>
    </header>
  );
}

const NavLinks = () => {
  return (
    <Row className={styles.links} alignItems="center" gap="6">
      <Link href="/features">Features</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'oravo-nav-header' });

  return (
    <Row className={styles.actions} alignItems="center" gap="2">
      <Button className={styles.login} variant="quiet" asChild>
        <Link href={`https://cloud.oravo.is/login${query}`} data-oravo-event="login-button-header">
          Log in
        </Link>
      </Button>
      <Button className={styles.signup} variant="primary" asChild>
        <Link
          href={`https://cloud.oravo.is/signup${query}`}
          data-oravo-event="signup-button-header"
        >
          Sign up for free
        </Link>
      </Button>
      <div className={styles.hamburger}>
        <MobileMenu items={mobileMenuItems} />
      </div>
    </Row>
  );
};
