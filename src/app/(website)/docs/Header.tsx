'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.css';
import config from '@/content/docs/config.json';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      {config.tabs.map(({ url, label }) => {
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
