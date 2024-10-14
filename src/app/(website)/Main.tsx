'use client';
import Container from '@/components/Container';
import styles from './Main.module.css';

export default function Main({ children }) {
  return (
    <main className={styles.container}>
      <Container>{children}</Container>
    </main>
  );
}
