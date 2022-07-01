import Link from 'next/link';
import classNames from 'classnames';
import styles from './Footer.module.css';
import React from 'react';
import CompanyLogo from './CompanyLogo';

const data = [
  { title: 'Product', items: [{ text: 'Umami', href: '/' }] },
  {
    title: 'Resources',
    items: [
      { text: 'Docs', href: '/docs' },
      { text: 'Guides', href: '/guides' },
      { text: 'Release Notes', href: 'https://github.com/umami-software/umami/releases' },
      { text: 'API Reference', href: '/docs/api' },
    ],
  },
  {
    title: 'Community',
    items: [
      { text: 'Get Involved', href: '/community' },
      { text: 'GitHub', href: 'https://github.com/umami-software/umami' },
      { text: 'Discord', href: 'https://discord.gg/4dz4zcXYrQ' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', href: '/about' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={classNames('container', styles.footer)}>
      <div className="row">
        <div className={classNames('col', styles.col)}>
          <CompanyLogo />
        </div>
        {data.map(({ title, items }) => (
          <div key={title} className={classNames('col', styles.col, styles.links)}>
            <h1>{title}</h1>
            {items.map(({ text, href }) => (
              <Link key={text} href={href}>
                <a target={href.startsWith('http') ? '_blank' : null}>{text}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="row">
        <div className={styles.copy}>&copy; 2022 Umami Software, Inc.</div>
      </div>
    </footer>
  );
}
