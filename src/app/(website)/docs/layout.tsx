'use client';
import Sidenav from './Sidenav';
import styles from './layout.module.css';

export default function DocsLayout({ children }) {
  return (
    <section className={styles.docs}>
      <div className={styles.nav}>
        <Sidenav />
      </div>
      <article className={styles.content}>{children}</article>
    </section>
  );
}
