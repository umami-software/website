'use client';
import ImageBlock from 'components/layout/ImageBlock';
import SectionHeader from 'components/layout/SectionHeader';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './page.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import ScrollBlock from 'components/layout/ScrollBlock';
import { Headlines } from 'lib/content';

const items = [
  Headlines.maximizeValue,
  Headlines.focusOnResults,
  Headlines.protectClientCompliance,
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
