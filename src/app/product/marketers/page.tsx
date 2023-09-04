'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';

export default function AgenciesPage() {
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
              Umami is a simple to use, privacy-focused alternative to Google Analytics that
              delivers your key website metrics and insights in an easy-to-understand interface
              without distraction.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup?ref=marketers`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/marketing.jpg" alt="" className={styles.image} />
        </ImageBlock>
      </section>
      <section>
        <ImageBlock className={styles.body}>
          <div>
            <TextBlock>
              <h1>Straightforward analytics</h1>
              <p>
                Umami measures the important metrics you care about and everything is displayed ona
                single, easy to browse page.
              </p>
            </TextBlock>
            <TextBlock>
              <h1>Key visitor insights</h1>
              <p>
                Get detailed breakdowns about your visitors including what browser, OS, and device
                they used.
              </p>
            </TextBlock>
            <TextBlock>
              <h1>Powerful filters</h1>
              <p>
                Dive deeper into your data using easy-to-apply filters. Segment your users by any
                metric such as browser, OS, and country.
              </p>
            </TextBlock>
          </div>
          <img src="/images/v2/screenshot.png" width="50" />
        </ImageBlock>
      </section>
      <GetStartedBanner />
    </article>
  );
}
