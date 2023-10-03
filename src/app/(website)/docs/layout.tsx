'use client';
import Menu from './Menu';
import styles from './layout.module.css';

export default function DocsLayout({ children }) {
  return (
    <section className={styles.docs}>
      <nav className={styles.nav}>
        <Menu />
      </nav>
      <article>{children}</article>
    </section>
  );
}
