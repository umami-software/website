'use client';
import PageHeader from 'components/layout/PageHeader';
import TextBlock from 'components/layout/TextBlock';
import { Blocks } from 'lib/content';
import ImageBlock from 'components/layout/ImageBlock';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import SectionHeader from 'components/layout/SectionHeader';

const items = [Blocks.simpleAnalytics, Blocks.visitorInsights, Blocks.customEvents, Blocks.filters];

export default function GoogleAnalyticsPage() {
  return (
    <article className={styles.container}>
      <PageHeader>
        <h1>Tired of Google Analytics headaches?</h1>
      </PageHeader>
      <div className={styles.features}>
        <ul>
          <li>✔ Direct data export</li>
          <li>✔ Protected visitor privacy</li>
          <li>✔ Intuitive reports</li>
          <li>✔ Simple setup and migration</li>
          <li>✔ Data ownership</li>
        </ul>
        <ul>
          <li>✘ Direct data export</li>
          <li>✘ Protected visitor privacy</li>
          <li>✘ Intuitive reports</li>
          <li>✘ Simple setup and migration</li>
          <li>✘ Data ownership</li>
        </ul>
      </div>
      <ImageBlock>
        <TextBlock style={{ width: 800 }}>
          <h1>If you’re dreading the GA4 migration, consider a better alternative.</h1>
          <p>
            Unlike Universal Analytics and GA4, Umami offers fast and flexible implementation,
            getting you up and running in no time without digging through endless screens, submenus,
            and support docs.
          </p>
          <p>
            Plus, Umami keeps web data between you and your customers—protecting the privacy of
            visitors and ensuring compliance.
          </p>
        </TextBlock>
        <div className={styles.button}>
          <LinkButton href={`${CLOUD_URL}/signup?ref=campaign-ga`} size="lg" variant="primary">
            Start free trial
          </LinkButton>
        </div>
      </ImageBlock>
      <SectionHeader>
        <h1>A faster, friendlier way to understand your website</h1>
      </SectionHeader>
      <ScrollBlock items={items} />
      <GetStartedBanner />
    </article>
  );
}
