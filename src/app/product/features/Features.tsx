'use client';
import ImageBlock from 'components/layout/ImageBlock';
import styles from './Features.module.css';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';

const features = [
  {
    name: 'Simple analytics',
    description:
      'Umami measures just the important metrics that you care about and everything is displayed on a single, easy to browse page.',
    image: '/images/v1/feature-website-stats.png',
  },
  {
    name: 'Visitor insights',
    description: `Get detailed breakdowns about your visitors including what browser, OS and device they used.`,
    image: '/images/v1/feature-session-stats.png',
  },
  {
    name: 'Custom events',
    description:
      'Track more than just pageviews. Capture any event on your website like button clicks and form entries.',
    image: '/images/v1/feature-events.png',
  },
  {
    name: 'Powerful filters',
    description:
      'Dive deeper into your data using easy to apply filters. Segment your users by any metric such as browser, OS, and country.',
    image: '/images/v1/feature-filters.png',
  },
  {
    name: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.',
    image: '/images/v1/feature-realtime.png',
  },
  {
    name: 'Multi-language',
    description:
      'Umami has been translated into many different languages by the very active open source community.',
    image: '/images/v1/feature-languages.png',
  },
  {
    name: 'Unlimited websites',
    description: `Umami is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: '/images/v1/feature-websites.png',
  },
  {
    name: 'Multiple accounts',
    description:
      'Umami can be used to host data for friends or clients. Just create a separate account and they can start tracking their own websites on their own dashboard.',
    image: '/images/v1/feature-accounts.png',
  },
  {
    name: 'Mobile-friendly',
    description:
      'The Umami interface has been optimized for mobile so you can view your stats from anywhere.',
    image: '/images/v1/feature-mobile.png',
  },
  {
    name: 'Bypass ad-blockers',
    description:
      'Umami is hosted by you under your own domain so you can reliably avoid ad-blockers unlike Google Analytics.',
  },
  {
    name: 'Light-weight',
    description:
      'The tracking script is tiny (only 2KB) and loads lightning fast. It will never slow down your site.',
  },
  {
    name: 'Easily share data',
    description:
      'You can easily share your stats with others through a secure, uniquely generated URL.',
  },
  {
    name: 'Dark mode',
    description: 'Dark mode included. Choose your favorite theme.',
    image: '/images/v1/feature-dark-mode.png',
  },
];

export default function Features() {
  return (
    <article>
      <section className={styles.features}>
        {features.map(({ name, description, image }) => (
          <ImageBlock key={name} className={styles.feature}>
            <TextBlock>
              <h1>{name}</h1>
              <p>{description}</p>
            </TextBlock>
            <div className={styles.image}>{image && <img src={image} alt={name} />}</div>
          </ImageBlock>
        ))}
      </section>
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
