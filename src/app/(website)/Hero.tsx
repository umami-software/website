'use client';
import LinkButton from 'components/common/LinkButton';
import TextBlock from 'components/layout/TextBlock';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>
          Effortless analytics and
          <br /> real-time insights.
        </h1>
        <p className={styles.subtitle}>
          Umami makes it easy to collect, analyze, and understand your data &mdash; so you can focus
          on <strong>growth</strong>.
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
          href="https://eu.umami.is/share/LGazGOecbDtaIwDr/umami.is"
          data-umami-event="live-demo-button"
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          View demo
        </LinkButton>
      </div>
      <div className={styles.features}>
        <div>No cookie banners</div>
        <div>Streamlined dashboard</div>
        <div>Effortless setup and use</div>
      </div>
      <div className={styles.image}>
        <img src="/images/app.jpg" />
      </div>
    </div>
  );
}
