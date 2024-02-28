'use client';
import classNames from 'classnames';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import v1 from './menu.v1.json';
import v2 from './menu.v2.json';
import cloud from './menu.cloud.json';
import styles from './Menu.module.css';

const versions = { v1, v2, cloud };

export default function Menu({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const query = useParams();
  const isCloud = pathname.includes('/docs/cloud');
  const version = isCloud ? 'cloud' : pathname.includes('/v1') ? 'v1' : 'v2';
  const menu = versions[version];

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
