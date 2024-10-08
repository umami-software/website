import { Metadata } from 'next';
import Nav from './components/Nav';
import Tabs from './components/Tabs';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Docs',
};

export default function DocsLayout({ children }) {
  return (
    <>
      <Tabs />
      <section className={styles.docs}>
        <Nav />
        <article className={styles.content}>{children}</article>
      </section>
    </>
  );
}
