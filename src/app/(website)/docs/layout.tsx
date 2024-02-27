import { Metadata } from 'next';
import Nav from './Nav';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Docs',
};

export default function DocsLayout({ children }) {
  return (
    <section className={styles.docs}>
      <Nav />
      <article className={styles.content}>{children}</article>
    </section>
  );
}
