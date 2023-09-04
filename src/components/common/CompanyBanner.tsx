import styles from './CloudBanner.module.css';
import { CLOUD_URL } from 'lib/constants';

export default function CloudBanner() {
  return (
    <div className={styles.banner}>
      <h1>Umami Cloud</h1>
      <p>
        Get up and running right away by using the <strong>Umami Cloud</strong> platform!
      </p>
      <p>
        You can sign up for free at{' '}
        <a href={`${CLOUD_URL}/signup?ref=docs`}>
          <strong>cloud.umami.is</strong>
        </a>
        .
      </p>
    </div>
  );
}
