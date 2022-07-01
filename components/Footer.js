import Link from 'next/link';
import classNames from 'classnames';
import Logo from 'assets/logo.svg';
import styles from './Footer.module.css';

const data = [
  { title: 'Product', items: [{ text: 'Umami', href: '/' }] },
  {
    title: 'Resources',
    items: [
      { text: 'Docs', href: '/docs' },
      { text: 'Guides', href: '/guides' },
      { text: 'Release Notes', href: 'https://github.com/umami-software/umami/releases' },
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
    ],
  },
];

export default function Footer() {
  return (
    <footer className={classNames('container', styles.footer)}>
      <div className={classNames('col', styles.col)}>
        <div className={styles.logo}>
          <Logo />
          umami
        </div>
        <div className={styles.copy}>&copy; 2022 Umami Software, Inc.</div>
      </div>
      {data.map(({ title, items }) => (
        <div key={title} className={classNames('col', styles.col)}>
          <h1>{title}</h1>
          {items.map(({ text, href }) => (
            <Link key={text} href={href}>
              {text}
            </Link>
          ))}
        </div>
      ))}
    </footer>
  );
}
