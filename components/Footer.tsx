import React from 'react';
import { Row, Column, Container } from 'react-basics';
import Link from 'next/link';
import classNames from 'classnames';
import CompanyLogo from './CompanyLogo';
import SocialMedia from './SocialMedia';
import styles from './Footer.module.css';

const data = [
  {
    title: 'Product',
    items: [
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { text: 'Docs', href: '/docs' },
      { text: 'Guides', href: '/docs/guides' },
      { text: 'API Reference', href: '/docs/api' },
      { text: 'Release Notes', href: 'https://github.com/umami-software/umami/releases' },
    ],
  },
  {
    title: 'Community',
    items: [
      { text: 'Get Involved', href: '/community' },
      { text: 'GitHub', href: 'https://github.com/umami-software/umami' },
      { text: 'Discord', href: 'https://discord.gg/4dz4zcXYrQ' },
      { text: 'Twitter', href: 'https://twitter.com/umami_software' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', href: '/about' },
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
        <Row>
          <Column className={styles.logo} xs={12} sm={12} md={12}>
            <CompanyLogo />
          </Column>
          {data.map(({ title, items }) => (
            <Column
              key={title}
              xs={6}
              sm={6}
              md={3}
              className={classNames(styles.col, styles.links)}
            >
              <h1>{title}</h1>
              {items.map(({ text, href }) => (
                <Link key={text} href={href}>
                  <a target={href.startsWith('http') ? '_blank' : null}>{text}</a>
                </Link>
              ))}
            </Column>
          ))}
        </Row>
        <Row>
          <Column>
            <SocialMedia />
            <div className={styles.copy}>
              <div>&copy; 2022 Umami Software, Inc.</div>
            </div>
          </Column>
        </Row>
      </Container>
    </footer>
  );
}
