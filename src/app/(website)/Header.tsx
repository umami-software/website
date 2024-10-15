'use client';
import { Button, Text, Icon, Row } from '@umami/react-zen';
import Link from 'next/link';
import AnnouncementBanner from './AnnouncementBanner';
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
    label: 'Home',
    value: '/',
  },
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
    label: 'Developers',
    value: '/developers',
  },
];

export default function Header() {
  useScroll();

  return (
    <header className={styles.header}>
      <AnnouncementBanner name="webinar_signup_oct_2024">
        <a
          href="https://us06web.zoom.us/webinar/register/7317266823230/WN_gqPPuXNvScexi8-Dwg0fSw"
          target="_blank"
          data-umami-event="webinar-signup"
        >
          What&apos;s new with Umami? Join our webinar on Oct. 16th!
        </a>
      </AnnouncementBanner>
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
    </Row>
  );
};

const ActionLinks = () => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <Row alignItems="center" gap="md">
      <Link className={styles.github} href={GITHUB_URL} target="_blank">
        <Row alignItems="center" gap="md">
          <Icon size="md">
            <GitHub />
          </Icon>
          <Text>{GITHUB_STARS}</Text>
        </Row>
      </Link>
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
