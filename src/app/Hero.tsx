import styles from './Hero.module.css';
import LinkButton from 'components/common/LinkButton';

export default function Hero() {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <h1 className={styles.title}>Web analytics shouldn't be complicated.</h1>
        <p className={styles.subtitle}>
          Umami makes it easy to collect, analyze, and understand your web data &mdash; while
          maintaining <strong>visitor privacy</strong> and <strong>data ownership</strong>.
        </p>
        <div className={styles.buttons}>
          <LinkButton
            href="https://cloud.umami.is/signup?ref=hero"
            data-umami-event="get-started-button"
            variant="primary"
            size="lg"
          >
            Get started
          </LinkButton>
          <LinkButton
            href="https://analytics.umami.is/share/LGazGOecbDtaIwDr/umami.is"
            data-umami-event="live-demo-button"
            target="_blank"
            rel="noreferrer"
            size="lg"
          >
            View demo
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
