'use client';
import classNames from 'classnames';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import styles from './Menu.module.css';

const versions = { v1, v2 };

export default function Menu() {
  const pathname = usePathname();
  const query = useParams();
  const menu = versions[pathname.includes('v1') ? 'v1' : 'v2'];

  return (
    <menu className={styles.menu}>
      {menu.map(({ label, items }) => (
        <section key={label} className={styles.items}>
          <header>{label}</header>
          {items.map(({ label: text, url }) => (
            <div
              key={url}
              className={classNames(styles.item, {
                [styles.selected]: url.split('/').splice(-1)[0] === query.id,
              })}
            >
              <Link href={url}>{text}</Link>
            </div>
          ))}
        </section>
      ))}
    </menu>
  );
}
