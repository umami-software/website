'use client';
import { Container } from 'react-basics';
import Link from 'next/link';
import classNames from 'classnames';
import CompanyLogo from 'components/common/CompanyLogo';
import SocialMedia from 'components/common/SocialMedia';
import styles from './Footer.module.css';
import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, X_URL } from 'lib/constants';

const data = [
  {
    title: 'Product',
    items: [
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Cloud', href: 'https://cloud.umami.is/?ref=umami-nav-footer' },
    ],
  },
  {
    title: 'Learn',
    items: [
      { text: 'Docs', href: '/docs' },
      { text: 'Guides', href: '/docs/guides' },
      { text: 'API Reference', href: '/docs/api' },
      { text: 'Release Notes', href: 'https://github.com/umami-software/umami/releases' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { text: 'Developers', href: '/developers' },
      { text: 'Community', href: '/community' },
      { text: 'GitHub', href: GITHUB_URL },
      { text: 'Discord', href: DISCORD_URL },
      { text: 'X', href: X_URL },
    ],
  },
  {
    title: 'About',
    items: [
      { text: 'Company', href: '/about' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact us', href: '/contact' },
      { text: 'LinkedIn', href: LINKEDIN_URL },
      { text: 'Privacy', href: '/privacy' },
      { text: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div className={classNames(styles.col, styles.logo)}>
            <CompanyLogo />
          </div>
          {data.map(({ title, items }) => (
            <div key={title} className={classNames(styles.col, styles.links)}>
              <header>{title}</header>
              {items.map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                >
                  {text}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <SocialMedia />
          <div className={styles.copy}>
            <div>&copy; {new Date().getFullYear()} Umami Software, Inc.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
