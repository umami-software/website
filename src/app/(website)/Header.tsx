'use client';
import { Container, Popup, PopupTrigger, Text, useScroll, Icon, Icons } from 'react-basics';
import Link from 'next/link';
import CompanyLogo from 'components/common/CompanyLogo';
import HamburgerButton from 'components/common/HamburgerButton';
import LinkButton from 'components/common/LinkButton';
import useQueryString from 'components/hooks/useQueryString';
import { GITHUB_STARS, REPO_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import styles from './Header.module.css';

const menuItems = [
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
  const query = useQueryString({ ref: 'umami-nav-header' });
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <div className={styles.title}>
            <CompanyLogo />
          </div>
          <nav className={styles.links}>
            <PopupTrigger action="hover">
              <div className={styles.dropdown}>
                <Text>Product</Text>
                <Icon>
                  <Icons.ChevronDown />
                </Icon>
              </div>
              <Popup>{close => <ProductMenu onClose={close} />}</Popup>
            </PopupTrigger>
            <PopupTrigger action="hover">
              <div className={styles.dropdown}>
                <Text>Resources</Text>
                <Icon>
                  <Icons.ChevronDown />
                </Icon>
              </div>
              <Popup>{close => <ResourcesMenu onClose={close} />}</Popup>
            </PopupTrigger>
            <Link href="/docs" prefetch={false}>
              Docs
            </Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
          <div className={styles.buttons}>
            <Link href={REPO_URL} target="_blank" className={styles.github}>
              <Icon size="lg">
                <GitHub />
              </Icon>
              <Text>{GITHUB_STARS}</Text>
            </Link>
            <Link
              href={`https://cloud.umami.is/login${query}`}
              className={styles.login}
              data-umami-event="login-button-header"
            >
              Log in
            </Link>
            <LinkButton
              href={`https://cloud.umami.is/signup${query}`}
              variant="primary"
              data-umami-event="signup-button-header"
            >
              Sign up
            </LinkButton>
          </div>
          <div className={styles.hamburger}>
            <HamburgerButton items={menuItems} />
          </div>
        </div>
      </Container>
    </header>
  );
}

const ProductMenu = ({ onClose }) => {
  const query = useQueryString({ ref: 'umami-nav-header' });

  return (
    <nav className={styles.menu} onClick={onClose}>
      <div className={styles.column}>
        <header>Analytics</header>
        <Link href="/features">Features</Link>
        <Link href="/docs" prefetch={false}>
          Self-hosting
        </Link>
        <Link href={`https://cloud.umami.is/${query}`}>Cloud</Link>
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

const ResourcesMenu = ({ onClose }) => {
  return (
    <nav className={styles.menu} onClick={onClose}>
      <div className={styles.column}>
        <header>Learn</header>
        <Link href="/developers">Developers</Link>
        <Link href="/community">Community</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className={styles.column}>
        <header>Support</header>
        <Link href="/contact">Contact us</Link>
      </div>
    </nav>
  );
};
