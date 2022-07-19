import Link from 'next/link';
import classNames from 'classnames';
import styles from './Footer.module.css';
import React from 'react';
import CompanyLogo from './CompanyLogo';
import SocialMedia from './SocialMedia';

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
    ],
  },
];

export default function Footer() {
  return (
    <footer className={classNames('container', styles.footer)}>
      <div className="row">
        <div className={classNames('col-12 col-sm-12 col-lg-3', styles.logo)}>
          <CompanyLogo />
        </div>
        <div className="col-12 col-sm-12 col-lg-9">
          <div className="row">
            {data.map(({ title, items }) => (
              <div key={title} className={classNames('col-6 col-lg-3', styles.col, styles.links)}>
                <h1>{title}</h1>
                {items.map(({ text, href }) => (
                  <Link key={text} href={href}>
                    <a target={href.startsWith('http') ? '_blank' : null}>{text}</a>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className={classNames('col-6', styles.copy)}>&copy; 2022 Umami Software, Inc.</div>
        <div className={classNames('col-6', styles.social)}>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
