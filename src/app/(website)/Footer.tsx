'use client';
import Link from 'next/link';
import classNames from 'classnames';
import Container from '@/components/Container';
import CompanyLogo from '@/components/CompanyLogo';
import SocialMedia from '@/components/SocialMedia';
import styles from './Footer.module.css';

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
    title: 'Resources',
    items: [
      { text: 'Documentation', href: '/docs' },
      { text: 'Guides', href: '/docs/guides' },
      { text: 'API Reference', href: '/docs/api' },
      { text: 'Release Notes', href: 'https://github.com/umami-software/umami/releases' },
      { text: 'Community', href: '/community' },
      { text: 'Developers', href: '/developers' },
      { text: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', href: '/about' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact', href: '/contact' },
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
