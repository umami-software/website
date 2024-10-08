'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import config from '../config.json';
import styles from './Tabs.module.css';

export default function Tabs() {
  const pathname = usePathname();
  const tab = config.tabs.find(({ url, name }) =>
    name !== 'docs' ? pathname.startsWith(url) : false,
  );
  const selected = tab?.name || 'docs';

  return (
    <div className={styles.header}>
      {config.tabs.map(({ url, label, name }) => {
        const isSelected = name === selected;

        return (
          <Link key={url} href={url} className={classNames(isSelected && styles.selected)}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
