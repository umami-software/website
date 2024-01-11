import { Metadata } from 'next';
import Sidenav from './Sidenav';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Docs',
};

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
