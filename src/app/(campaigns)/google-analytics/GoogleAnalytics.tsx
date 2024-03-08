'use client';
import PageHeader from 'components/layout/PageHeader';
import TextBlock from 'components/layout/TextBlock';
import { Blocks } from 'lib/content';
import ImageBlock from 'components/layout/ImageBlock';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import SectionHeader from 'components/layout/SectionHeader';
import useQueryString from 'components/hooks/useQueryString';
import styles from './GoogleAnalytics.module.css';

const items = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.customEvents,
  Blocks.filters,
  Blocks.realtimeData,
];

export default function GoogleAnalytics() {
  const query = useQueryString({ ref: 'umami-campaign-ga' });

  return (
    <div className={styles.container}>
      <PageHeader className={styles.header}>
        <h1>
          The Google Analytics Alternative
          <br />
          with 5 million+ downloads
        </h1>
      </PageHeader>
      <ImageBlock>
        <TextBlock>
          <h1>Frustrated by the forced GA4 conversion?</h1>
          <p>
            Umami Analytics is a website analytics platform that allows you to collect, analyze, and
            understand your website data in a clean and simple interface. Installation and setting
            up event tracking are a breeze. Try it free today!
          </p>
          <p>
            Don’t worry, you can test Umami Analytics alongside Google Analytics so you won’t lose
            any data.
          </p>
          <p>
            Plus, Umami Analytics anonymizes all data and never collects personal data, which means
            no cookie banners are required!
          </p>
        </TextBlock>
        <div className={styles.button}>
          <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
            Start free trial
          </LinkButton>
        </div>
      </ImageBlock>
      <div className={styles.features}>
        <div>
          <header>Umami</header>
          <ul>
            <li>✔ Direct data export</li>
            <li>✔ Protected visitor privacy</li>
            <li>✔ Intuitive reports</li>
            <li>✔ Simple setup and migration</li>
            <li>✔ Data ownership</li>
          </ul>
        </div>
        <div>
          <header>Google Analytics</header>
          <ul>
            <li>✘ Direct data export</li>
            <li>✘ Protected visitor privacy</li>
            <li>✘ Intuitive reports</li>
            <li>✘ Simple setup and migration</li>
            <li>✘ Data ownership</li>
          </ul>
        </div>
      </div>
      <SectionHeader>
        <h1>A faster, friendlier way to understand your website</h1>
      </SectionHeader>
      <ScrollBlock items={items} />
      <GetStartedBanner />
    </div>
  );
}
