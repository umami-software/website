import { Button } from 'react-basics';
import Waves from 'assets/waves.svg';
import styles from './GetStarted.module.css';

export default function GetStarted() {
  return (
    <div className={styles.banner}>
      <Waves className={styles.bg} />
      <h1>Are you ready for better analytics?</h1>
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
