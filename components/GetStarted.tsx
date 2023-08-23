import { Button } from 'react-basics';
import styles from './GetStarted.module.css';

export default function GetStarted() {
  return (
    <div className={styles.banner}>
      <h1>Are you ready for better analytics?</h1>
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
    </div>
  );
}
