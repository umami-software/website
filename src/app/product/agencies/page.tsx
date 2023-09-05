'use client';
import ImageBlock from 'components/layout/ImageBlock';
import SectionHeader from 'components/layout/SectionHeader';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';

const items = [
  {
    title: 'Maximize value, minimize time',
    description: `Umami helps you onboard clients quickly and reduces time-tovalue,
      protecting agency margins. Implement Umami in just a
      few clicks and get key metrics and insights in a single page.
      Shareable links and reports save costly time configuring, leaving
      you more time for clients.`,
    image: '/images/v1/feature-website-stats.png',
  },
  {
    title: 'Focus on results, not fluff',
    description: `Umami strikes the right balance between sophistication and
      simplicity. Straightforward analytics with easy customized
      event tracking and realtime visitor insights helps you clearly
      communicate what matters to your clients without getting
      distracted by overly complex feature sets.`,
    image: '/images/v1/feature-session-stats.png',
  },
  {
    title: 'Protect client compliance',
    description: `Umami lets you to gather the data you need while respecting
      the privacy of your clients and their users. Umami does not
      collect any personal information, does not use cookies, does
      not track users across websites, and is GDPR compliant.`,
    image: '/images/v1/feature-realtime.png',
  },
];

export default function AgenciesPage() {
  return (
    <article className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Web analytics that let <span className={styles.highlight}>agencies</span> skip to the
              good stuff.
            </h1>
            <p>
              Umami leaves tedious tinkering, compliance crises, and management migraines behind.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup?ref=marketers`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/agencies.jpg" alt="" />
        </ImageBlock>
      </section>
      <ScrollBlock items={items} />
      <section>
        <SectionHeader>
          <h1>Supporting your value-driven services</h1>
        </SectionHeader>
        <div className={styles.services}>
          <div>SEO / SEM</div>
          <div>Site performance</div>
          <div>Paid media</div>
          <div>Content marketing</div>
          <div>Conversion rate optimization</div>
          <div>Cross-channel marketing</div>
        </div>
      </section>
      <GetStartedBanner />
    </article>
  );
}
