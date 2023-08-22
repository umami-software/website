import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import styles from './Menu.module.css';

const versions = { v1, v2 };

export default function Menu() {
  const { pathname, query } = useRouter();
  const menu = versions[pathname.includes('v2') ? 'v2' : 'v1'];

  return (
    <menu className={styles.menu}>
      <h2>Documentation</h2>
      {menu.map(({ label, items }) => (
        <React.Fragment key={label}>
          <h3>{label}</h3>
          <div className={styles.items}>
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
          </div>
        </React.Fragment>
      ))}
    </menu>
  );
}
