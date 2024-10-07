'use client';
import LinkButton from '@/components/LinkButton';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import styles from '@/app/(website)/Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <div className={styles.hero}>
      <TextBlock size="xl" align="center">
        <h1>Effortlessly Understand The Impact Marketing is Having</h1>
        <p className={styles.subtitle}>
          Empower your marketing decisions with easy-to-understand data insights
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
        <div>No cookie banners needed</div>
        <div>Intuitive dashboard for quick insights</div>
        <div>5-minute setup, instant data visibility</div>
      </div>
      <div className={styles.image}>
        <ContentImage src="https://static.umami.dev/website/images/app.jpg" />
      </div>
    </div>
  );
}
