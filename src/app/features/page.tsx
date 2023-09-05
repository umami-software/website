'use client';
import PageHeader from 'components/layout/PageHeader';
import ScrollBlock from 'components/layout/ScrollBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';

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
  {
    title: 'Multi-language',
    description:
      'Umami has been translated into many different languages by the very active open source community.',
    image: '/images/v1/feature-languages.png',
  },
  {
    title: 'Unlimited websites',
    description: `Umami is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: '/images/v1/feature-websites.png',
  },
  {
    title: 'Multiple accounts',
    description:
      'Umami can be used to host data for friends or clients. Just create a separate account and they can start tracking their own websites on their own dashboard.',
    image: '/images/v1/feature-accounts.png',
  },
  {
    title: 'Mobile-friendly',
    description:
      'The Umami interface has been optimized for mobile so you can view your stats from anywhere.',
    image: '/images/v1/feature-mobile.png',
  },
  {
    title: 'Bypass ad-blockers',
    description:
      'Umami is hosted by you under your own domain so you can reliably avoid ad-blockers unlike Google Analytics.',
  },
  {
    title: 'Light-weight',
    description:
      'The tracking script is tiny (only 2KB) and loads lightning fast. It will never slow down your site.',
  },
  {
    title: 'Easily share data',
    description:
      'You can easily share your stats with others through a secure, uniquely generated URL.',
  },
  {
    title: 'Dark mode',
    description: 'Dark mode included. Choose your favorite theme.',
    image: '/images/v1/feature-dark-mode.png',
  },
];

export default function FeaturesPage() {
  return (
    <article>
      <PageHeader>
        <h1>Features</h1>
        <p>
          Umami is packed with amazing features that enable you to better
          <br /> understand your website traffic.
        </p>
      </PageHeader>
      <ScrollBlock items={items} />
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
