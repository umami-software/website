import Link from 'next/link';
import { Button } from 'react-basics';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1>Own your website analytics</h1>
      <h2>
        <span>Umami is an </span>
        <b>
          <Link href="https://github.com/umami-software/umami">
            <a target="_blank">open source</a>
          </Link>
        </b>
        , <b>privacy-focused</b>
        <div>alternative to Google Analytics</div>
      </h2>
      <div className={styles.buttons}>
        <a href="/docs" className="button umami--click--get-started-button">
          <Button size="large" variant="primary">
            Get Started
          </Button>
        </a>
        <a
          href="https://app.umami.is/share/8rmHaheU/umami.is"
          className="button-alt umami--click--live-demo-button"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="large">Live Demo</Button>
        </a>
      </div>
    </div>
  );
}
