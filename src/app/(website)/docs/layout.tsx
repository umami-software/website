import { Metadata } from 'next';
import Nav from './Nav';
import styles from './layout.module.css';
import Header from './Header';

export const metadata: Metadata = {
  title: 'Docs',
};

export default function DocsLayout({ children }) {
  return (
    <>
      <Header />
      <section className={styles.docs}>
        <Nav />
        <article className={styles.content}>{children}</article>
      </section>
      <img
        className={styles.pixel}
        referrerPolicy="no-referrer-when-downgrade"
        src="https://static.scarf.sh/a.png?x-pxid=25c27d5e-b879-4297-b29f-069d9609ec38"
      />
    </>
  );
}
