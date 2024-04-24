'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './PageLinks.module.css';

export default function PageLinks({ items }) {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const callback = () => {
      const x = [...items].reverse().find(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top - document.body.scrollTop < 0;
      });

      x && setHash(x.id);
    };

    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
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
