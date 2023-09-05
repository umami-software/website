'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';

const items = [
  {
    title: 'Simple analytics',
    description:
      'Umami measures just the important metrics that you care about and everything is displayed on a single, easy to browse page.',
    image: '/images/v1/feature-website-stats.png',
  },
  {
    title: 'Visitor insights',
    description: `Get detailed breakdowns about your visitors including what browser, OS and device they used.`,
    image: '/images/v1/feature-session-stats.png',
  },
  {
    title: 'Custom events',
    description:
      'Track more than just pageviews. Capture any event on your website like button clicks and form entries.',
    image: '/images/v1/feature-events.png',
  },
  {
    title: 'Powerful filters',
    description:
      'Dive deeper into your data using easy to apply filters. Segment your users by any metric such as browser, OS, and country.',
    image: '/images/v1/feature-filters.png',
  },
  {
    title: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.',
    image: '/images/v1/feature-realtime.png',
  },
];

export default function MarketersPage() {
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
              Umami lets you delivers your key website metrics and insights in an easy-to-understand
              interface without distraction.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup?ref=marketers`} size="lg" variant="primary">
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
