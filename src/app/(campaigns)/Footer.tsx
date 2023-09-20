'use client';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './Footer.module.css';

export default function Header() {
  return (
    <>
      <GetStartedBanner />
      <footer className={styles.footer}>&copy; Umami Software, Inc.</footer>
    </>
  );
}
