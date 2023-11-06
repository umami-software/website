'use client';
import Sidebar from './Sidebar';
import styles from './layout.module.css';

export default function DocsLayout({ children }) {
  return (
    <section className={styles.docs}>
      <Sidebar />
      <article>{children}</article>
    </section>
  );
}
