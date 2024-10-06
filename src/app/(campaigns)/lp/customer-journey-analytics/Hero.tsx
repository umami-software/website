'use client';
import LinkButton from 'components/common/LinkButton';
import TextBlock from 'components/layout/TextBlock';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from 'app/(website)/Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>Customer Journey Analytics</h1>
        <p className={styles.subtitle}>
          {`Understand every step of your user's path with actionable analytics that provide 
          the blueprint for customer journey optimization.`}
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
        <img src="https://static.umami.dev/website/images/blog/user-journey.png" />
      </div>
    </div>
  );
}
