'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const links = [
  { url: '/docs', label: 'Self-host' },
  { url: '/docs/cloud', label: 'Cloud' },
  { url: '/docs/guides', label: 'Guides' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <div className={styles.title}>Documentation</div>
      {links.map(({ url, label }) => {
        const isSelected = pathname.match(/^\/docs\/(cloud|guides)/)
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
