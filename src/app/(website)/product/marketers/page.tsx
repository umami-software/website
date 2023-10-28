'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';
import { Blocks } from 'lib/content';
import useQueryString from 'components/hooks/useQueryString';

const items = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.customEvents,
  Blocks.filters,
  Blocks.unlimitedWebsites,
];

export default function MarketersPage() {
  const query = useQueryString({ ref: 'umami-marketers' });

  return (
    <article className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Everything busy <span className={styles.highlight}>marketers</span> need and nothing
              you don’t.
            </h1>
            <p>
              Umami lets you deliver your key website metrics and insights in an easy-to-understand
              interface without distraction.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/marketing.jpg" alt="" className={styles.image} />
        </ImageBlock>
      </section>
      <ScrollBlock items={items} />
      <GetStartedBanner />
    </article>
  );
}
