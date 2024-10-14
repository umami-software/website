'use client';
import { Dialog, Button, Text, Icon, Icons, Row } from '@umami/react-zen';
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
import { useState } from 'react';

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
  const [show, setShow] = useState(false);

  return (
    <Row alignItems="center" gap="lg">
      <Row
        gap="md"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setTimeout(() => setShow(false), 300)}
      >
        <Text>Product</Text>
        <Icon rotate={90} size="xs">
          <Icons.Chevron />
        </Icon>
        {show && (
          <Dialog className={styles.dialog}>
            <ProductMenu />
          </Dialog>
        )}
      </Row>
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
      <Link href={GITHUB_URL} target="_blank">
        <Row alignItems="center" gap="md">
          <Icon size="md">
            <GitHub />
          </Icon>
          <Text>{GITHUB_STARS}</Text>
        </Row>
      </Link>
      <Button variant="quiet" asChild>
        <Link href={`https://cloud.umami.is/login${query}`} data-umami-event="login-button-header">
          Log in
        </Link>
      </Button>
      <Button variant="primary" asChild>
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

const ProductMenu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.column}>
        <header>Analytics</header>
        <Link href="/features">Features</Link>
        <Link href="/docs" prefetch={false}>
          Self-hosting
        </Link>
        <Link href="/docs/cloud">Cloud</Link>
      </div>
      <div className={styles.column}>
        <header>Learn</header>
        <Link href="/community">Community</Link>
        <Link href="/developers">Developers</Link>
        <Link
          href="https://github.com/umami-software/umami/discussions"
          target="_blank"
          data-umami-event="github-discussions-link"
        >
          Discussions
        </Link>
      </div>
      <div className={styles.column}>
        <header>Used by</header>
        <Link href="/product/creators">Creators</Link>
        <Link href="/product/marketers">Marketers</Link>
        <Link href="/product/agencies">Agencies</Link>
      </div>
    </nav>
  );
};
