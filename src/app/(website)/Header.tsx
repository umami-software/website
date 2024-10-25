'use client';
import { Button, Text, Icon, Row } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import HamburgerButton from '@/components/HamburgerButton';
import useQueryString from '@/components/hooks/useQueryString';
import { GITHUB_STARS, GITHUB_URL } from '@/lib/constants';
import useScroll from '@/components/hooks/useScroll';
import Container from '@/components/Container';
import GitHub from '@/assets/github.svg';
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
    label: 'Docs',
    value: '/docs',
  },
  {
    label: 'Blog',
    value: '/blog',
  },
  {
    label: 'Community',
    value: '/community',
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
    <Row className={styles.links} alignItems="center" gap="lg">
      <Link href="/features">Features</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/docs" prefetch={false}>
        Docs
      </Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <Row className={styles.actions} alignItems="center" gap="sm">
      <Button variant="quiet" asChild>
        <Link className={styles.github} href={GITHUB_URL} target="_blank">
          <Row alignItems="center" gap="sm">
            <Icon size="sm">
              <GitHub />
            </Icon>
            <Text weight="bold">{GITHUB_STARS}</Text>
          </Row>
        </Link>
      </Button>
      <Button className={styles.login} variant="quiet" asChild>
        <Link href={`https://cloud.umami.is/login${query}`} data-umami-event="login-button-header">
          Log in
        </Link>
      </Button>
      <Button className={styles.signup} variant="primary" asChild>
        <Link
          href={`https://cloud.umami.is/signup${query}`}
          data-umami-event="signup-button-header"
        >
          Sign up
        </Link>
      </Button>
      <div className={styles.hamburger}>
        <HamburgerButton items={mobileMenuItems} />
      </div>
    </Row>
  );
};
