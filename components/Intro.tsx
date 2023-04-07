import Link from 'next/link';
import { Button, Row, Column } from 'react-basics';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <Row className={styles.intro}>
      <Column className={styles.content}>
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
          <a href="/docs" className="button" data-umami-event="get-started-button">
            <Button size="lg" variant="primary">
              Get Started
            </Button>
          </a>
          <a
            href="https://analytics.umami.is/share/LGazGOecbDtaIwDr/umami.is"
            className="button-alt"
            data-umami-event="live-demo-button"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg">Live Demo</Button>
          </a>
        </div>
      </Column>
    </Row>
  );
}
