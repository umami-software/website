'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './PageLinks.module.css';

export default function PageLinks({ items, offset = 0 }) {
  const [hash, setHash] = useState(items[0]?.id);

  useEffect(() => {
    const callback = () => {
      const x = [...items].reverse().find(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= offset;
      });

      x && setHash(x.id);
    };

    window.addEventListener('scroll', callback, false);

    return () => {
      window.removeEventListener('scroll', callback, false);
    };
  }, []);

  if (!items?.length) {
    return null;
  }

  return (
    <div className={styles.sidenav}>
      <div className={styles.nav}>
        <div className={styles.title}>On this page</div>
        <div className={styles.links}>
          {items.map(({ name, id, size }) => {
            return (
              <div
                key={id}
                className={classNames(styles[`indent-${size}`], { [styles.selected]: hash === id })}
              >
                <a href={`#${id}`}>{name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
