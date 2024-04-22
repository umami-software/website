'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.css';

const links = [
  { url: '/docs', label: 'Umami' },
  { url: '/docs/cloud', label: 'Cloud' },
  { url: '/docs/api', label: 'API' },
  { url: '/docs/guides', label: 'Guides' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <div className={styles.title}>Documentation</div>
      {links.map(({ url, label }) => {
        const isSelected = pathname.match(/^\/docs\/(cloud|guides|api)/)
          ? pathname.startsWith(url) && url !== '/docs'
          : pathname.startsWith(url);

        return (
          <Link key={url} href={url} className={classNames(isSelected && styles.selected)}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
