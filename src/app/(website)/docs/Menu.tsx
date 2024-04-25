'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import cloud from './menu.cloud.json';
import api from './menu.api.json';
import reports from './menu.reports.json';
import guides from './menu.guides.json';
import styles from './Menu.module.css';

const menus = { v1, v2, cloud, api, guides, reports };

export default function Menu({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  let menu = v2;
  const match = pathname.match(/^\/docs\/(\w+)/);

  if (match) {
    if (Object.keys(menus).includes(match[1])) {
      menu = menus[match[1]];
    }
  }

  return (
    <div className={styles.menu} onClick={onClick}>
      {menu.map(({ label, items }) => {
        return (
          <section key={label} className={styles.items}>
            <header>{label}</header>
            {items.map(({ label: text, url }) => {
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
