'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import styles from './page.module.css';
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
    title: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.',
    image: '/images/v1/feature-realtime.png',
  },
  {
    title: 'Unlimited websites',
    description: `Umami is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: '/images/v1/feature-websites.png',
  },
  {
    title: 'Bypass ad-blockers',
    description:
      'Umami is hosted by you under your own domain so you can reliably avoid ad-blockers unlike Google Analytics.',
  },
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
              Umami that lets you measure the engagement and stickyness of your website. Discover
              what works and what doesn't.
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
