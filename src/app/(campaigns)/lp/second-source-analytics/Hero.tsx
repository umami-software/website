'use client';
import LinkButton from '@/components/LinkButton';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from '@/app/(website)/Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>Increase confidence in your website analytics data with a second data source</h1>
        <p className={styles.subtitle}>
          Umami is an unobtrusive website analytics platform that seamlessly runs alongside your
          existing website analytics to provide a second data source. Compare and confirm important
          website analytics data with Umami data and increase confidence in your numbers.
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
        <div>Does Not Interfere w/ Existing Analytics</div>
        <div>Simple Installation, Simple to Use</div>
      </div>
      <div className={styles.image}>
        <img src="https://static.umami.dev/website/images/app.jpg" />
      </div>
    </div>
  );
}
