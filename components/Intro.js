import Link from 'next/link';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1>Own your website analytics</h1>
      <h2>
        <span>Umami is an </span>
        <b>
          <Link href="https://github.com/umami-software/umami">open-source</Link>
        </b>
        ,<b>privacy-focused</b> alternative to Google Analytics
      </h2>
      <div className={styles.buttons}>
        <Link href="/docs">
          <a className="button umami--click--get-started-button">Get started</a>
        </Link>
        <Link href="https://app.umami.is/share/8rmHaheU/umami.is">
          <a className="button-alt umami--click--live-demo-button" target="_blank">
            Live demo
          </a>
        </Link>
      </div>
    </div>
  );
}
