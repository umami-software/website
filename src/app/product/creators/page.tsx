'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import styles from './page.module.css';

export default function AgenciesPage() {
  return (
    <article className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Get quick, easy insights that <span className={styles.highlight}>creators</span> need.
            </h1>
            <p>
              Umami is a simple to use, privacy-focused alternative to Google Analytics that lets
              you know measure the engagement and stickyness of your website.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup?ref=creators`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/creators.jpg" alt="" className={styles.image} />
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
            <TextBlock>
              <h1>Intuitive reporting</h1>
              <p>
                Easy out-of-the-box reporting delivers insights quickly in a couple clicks.
                Understand website performance and visitor behavior at a glance.
              </p>
            </TextBlock>
          </div>
          <img src="/images/v2/screenshot.png" />
        </ImageBlock>
      </section>
      <GetStartedBanner />
    </article>
  );
}
