'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import config from '../config.json';
import styles from './Menu.module.css';

const { tabs, navigation } = config;

export default function Menu({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const tab = tabs.find(({ url, name }) => (name !== 'docs' ? pathname.startsWith(url) : false));
  const menu = navigation[tab?.name || 'docs'];

  return (
    <div className={styles.menu} onClick={onClick}>
      {menu.map(({ group, pages }) => {
        return (
          <section key={group} className={styles.items}>
            <header>{group}</header>
            {pages.map(({ label: text, url }) => {
              return (
                <div
                  key={url}
                  className={classNames(styles.item, {
                    [styles.selected]: url === pathname,
                  })}
                >
                  <Link href={url} prefetch={false}>
                    {text}
                  </Link>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
