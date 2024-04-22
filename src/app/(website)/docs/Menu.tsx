'use client';
import classNames from 'classnames';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import cloud from './menu.cloud.json';
import api from './menu.api.json';
import guides from './menu.guides.json';
import styles from './Menu.module.css';

export default function Menu({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const query = useParams();

  let menu = pathname.includes('/v1') ? v1 : v2;

  if (pathname.includes('/docs/cloud')) {
    menu = cloud;
  } else if (pathname.includes('/docs/api')) {
    menu = api;
  } else if (pathname.includes('/docs/guides')) {
    menu = guides;
  }

  return (
    <div className={styles.menu} onClick={onClick}>
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
                      (['/docs', '/docs/cloud'].includes(url) && (!id || id === 'intro')),
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
