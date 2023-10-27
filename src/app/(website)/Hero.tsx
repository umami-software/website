import styles from './Hero.module.css';
import LinkButton from 'components/common/LinkButton';
import TextBlock from 'components/layout/TextBlock';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function Hero() {
  const query = useQueryString({ ref: 'hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>Web analytics shouldn't be complicated.</h1>
        <p className={styles.subtitle}>
          Umami makes it easy to collect, analyze, and understand your web data &mdash; while
          maintaining <strong>visitor privacy</strong> and <strong>data ownership</strong>.
        </p>
      </TextBlock>
      <div className={styles.buttons}>
        <LinkButton
          href={`${CLOUD_URL}/signup${query}`}
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
  );
}
