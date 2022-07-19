import styles from './Features.module.css';
import classNames from 'classnames';

const features = [
  {
    name: 'Simple analytics',
    description:
      'Umami measures just the important metrics that you care about: pageviews, devices used, and where your visitors are coming from. Everything is displayed on a single, easy to browse page.',
    image: '/feature-website-stats.png',
  },
  {
    name: 'Visitor insights',
    description: `Get detailed breakdowns about your visitors including what browser, OS and device they used.`,
    image: '/feature-session-stats.png',
  },
  {
    name: 'Powerful filters',
    description: 'Dive deeper into your data using easy to apply filters.',
    image: '/feature-filters.png',
  },
  {
    name: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. Actively see the exact pages your visitors are hitting.',
    image: '/feature-realtime.png',
  },
  {
    name: 'Multi-language',
    description:
      'Umami has been translated into many different languages by the very active community.',
    image: '/feature-languages.png',
  },
  {
    name: 'Unlimited websites',
    description: `Umami is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: '/feature-websites.png',
  },
  {
    name: 'Multiple accounts',
    description:
      'Umami can be used to host data for friends or clients. Just create a separate account and they can start tracking their own websites on their own dashboard.',
    image: '/feature-accounts.png',
  },
  {
    name: 'Dark mode',
    description: 'Dark mode included. Choose your favorite theme for Umami.',
    image: '/feature-dark-mode.png',
  },
  {
    name: 'Mobile-friendly',
    description:
      'The Umami interface has been optimized for mobile so you can view your stats from anywhere.',
    image: '/feature-mobile.png',
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
    name: 'Share data',
    description:
      'If you want to share your stats publicly, you can do so with a uniquely generated URL.',
  },
];

export default function Features() {
  return (
    <div className={classNames('row', styles.features)}>
      {features.map(({ name, description, image }) => (
        <div key={name} className={styles.feature}>
          <div className={classNames('col-12 col-md-8 col-lg-6', styles.text)}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className={classNames('col-12 col-md-8 col-lg-6', styles.image)}>
            {image && <img src={image} alt={name} />}
          </div>
        </div>
      ))}
    </div>
  );
}
