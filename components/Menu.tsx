import React from 'react';
import Link from 'next/link';
import v1 from 'content/v1/menu.json';
import v2 from 'content/v2/menu.json';
import styles from './Menu.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';

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
              <div key={url} className={styles.item}>
                <Link
                  href={url}
                  className={classNames({ [styles.selected]: url.endsWith(query.id as string) })}
                >
                  <a>{text}</a>
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </menu>
  );
}
