'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from './Creators.module.css';

export default function Creators() {
  const query = useQueryString({ ref: 'umami-creators' });

  return (
    <div className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Get quick, easy insights that <span className={styles.highlight}>creators</span> need.
            </h1>
            <p>
              Discover how your followers engage with your content, track their journey to your
              website, and unlock valuable insights from a single, intuitive dashboard.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="/images/creators.jpg" alt="" className={styles.image} />
        </ImageBlock>
      </section>

      <section className={styles.blocks}>
        <TextBlock>
          <h2>Realtime data ready for live streaming</h2>
          <p>
            When you’re live (or at any other time, for that matter!), you can see your website
            traffic in real time to see exactly how your followers engage with your content when
            they land on your website.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Effortless analytics</h2>
          <p>
            Stop getting lost by clicking through an endless menu drop-down and sub-menus labyrinth.
            By default, your Umami analytics dashboard provides a single view of everything you need
            to know.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Visitor insights</h2>
          <p>
            Know all the things you need to know about your audience when they visit your website,
            including geography, browser, device, and more. Best of all, Umami doesn’t use cookies,
            so your audience will feel good knowing their privacy is respected when you visit your
            website.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>No annoying cookie banners</h2>
          <p>
            Your followers will love not having to opt-in to a Cookie banner. Umami respects your
            followers&apos; privacy when they land on your website. It gathers the data you need
            while respecting the privacy of your users. All data is anonymized, and no personal data
            is ever collected.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Track all your websites</h2>
          <p>
            Quickly and easily add all of your websites to Umami. You can add both main domains and
            sub-domains.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Mobile-friendly</h2>
          <p>
            Your Umami dashboarde is optimized for mobile so that, so you can view your website
            stats from anywhere.
          </p>
        </TextBlock>
      </section>
      <GetStartedBanner />
    </div>
  );
}
