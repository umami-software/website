'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import styles from './page.module.css';
import ScrollBlock from 'components/layout/ScrollBlock';
import { Blocks } from 'lib/content';

const items = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.realtimeData,
  Blocks.unlimitedWebsites,
  Blocks.bypassAdBlockers,
];

export default function CreatorsPage() {
  return (
    <article className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Get quick, easy insights that <span className={styles.highlight}>creators</span> need.
            </h1>
            <p>
              Umami lets you measure the engagement and stickyness of your website. Discover what
              works and what doesn't.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup?ref=creators`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/creators.jpg" alt="" className={styles.image} />
        </ImageBlock>
      </section>
      <ScrollBlock items={items} />
      <GetStartedBanner />
    </article>
  );
}
