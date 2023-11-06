'use client';
import classNames from 'classnames';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import styles from './Sidebar.module.css';

import { Dropdown } from 'react-basics';

const versions = { v1, v2 };

export default function Sidebar() {
  const pathname = usePathname();
  const query = useParams();
  const menu = versions[pathname.includes('/v1') ? 'v1' : 'v2'];

  return (
    <div className={styles.sidebar}>
      <Dropdown
        items={[
          {
            label: 'Using Umami v1',
            value: 'v1',
          },
          {
            label: 'Using Umami v2',
            value: 'v2',
          },
        ]}
        name="dropdown"
        className={styles.dropdown}
      />
      <div className={styles.menuWrapper}>
        <nav className={styles.menu}>
          {menu.map(({ label, items }) => {
            return (
              <section key={label} className={styles.items}>
                <header>{label}</header>
                {items.map(({ label: text, url }) => {
                  const id = (query?.id as string)?.split('.')?.[0];
                  return (
                    <div
                      key={url}
                      className={classNames(styles.item, {
                        [styles.selected]:
                          url.split('/').splice(-1)[0] === id ||
                          (url === '/docs' && id === 'index'),
                      })}
                    >
                      <Link href={url}>{text}</Link>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
