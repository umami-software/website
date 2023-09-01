import { Button } from 'react-basics';
import styles from './GetStartedBanner.module.css';

export default function GetStartedBanner() {
  return (
    <div className={styles.banner}>
      <h1>Are you ready for better analytics?</h1>
      <div className={styles.buttons}>
        <a
          href="http://cloud.umami.is/signup?ref=get-started"
          className="button"
          data-umami-event="get-started-button"
        >
          <Button size="lg" variant="primary">
            Get started
          </Button>
        </a>
      </div>
    </div>
  );
}
