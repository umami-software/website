'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.css';

const links = [
  { url: '/docs', label: 'Umami' },
  { url: '/docs/api', label: 'API' },
  { url: '/docs/reports', label: 'Reports' },
  { url: '/docs/guides', label: 'Guides' },
  { url: '/docs/cloud', label: 'Cloud' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <div className={styles.title}>Documentation</div>
      {links.map(({ url, label }) => {
        const isSelected = pathname.match(/^\/docs\/(cloud|guides|api|reports)/)
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
