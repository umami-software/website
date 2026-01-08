'use client';
import { Button, Container, Icon, Row, Text } from '@umami/react-zen';
import Link from 'next/link';
import { Github } from 'src/components/svg';
import CompanyLogo from '@/components/CompanyLogo';
import useQueryString from '@/components/hooks/useQueryString';
import useScroll from '@/components/hooks/useScroll';
import MobileMenu from '@/components/MobileMenu';
import { GITHUB_STARS, GITHUB_URL } from '@/lib/constants';
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
    <Row className={styles.links} alignItems="center" gap="6">
      <Link href="/features">Features</Link>
      <Link href="/blog">Blog</Link>
      <a href="/docs">Docs</a>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <Row className={styles.actions} alignItems="center" gap="2">
      <Button variant="quiet" asChild>
        <Link className={styles.github} href={GITHUB_URL} target="_blank">
          <Row alignItems="center" gap="2">
            <Icon size="sm">
              <Github />
            </Icon>
            <Text weight="bold">{GITHUB_STARS}</Text>
          </Row>
        </Link>
      </Button>
      <Button className={styles.login} variant="quiet" asChild>
        <Link href={`https://cloud.umami.is/{query}`} data-umami-event="login-button-header">
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
        <MobileMenu items={mobileMenuItems} />
      </div>
    </Row>
  );
};
