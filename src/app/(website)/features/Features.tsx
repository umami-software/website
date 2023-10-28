'use client';
import PageHeader from 'components/layout/PageHeader';
import GetStartedBanner from 'components/common/GetStartedBanner';
import styles from './Features.module.css';
import TextBlock from 'components/layout/TextBlock';
import classNames from 'classnames';

const items = [
  {
    title: 'Analytics',
    description: `Umami a fast, easy to use, and privacy-focused analytics alternative to Google Analytics.`,
    items: [
      {
        title: 'Visitor info',
        description: [
          'Get detailed information about your visitors like their device, browser, OS and location.',
        ],
      },
      {
        title: 'Page views',
        description: [
          'Knowing which of your pages gets the most traffic is essential to improving your website content.',
        ],
      },
      {
        title: 'Bounce rate',
        description: [
          'See which pages keep your visitors enaged versus those they are abandoning.',
        ],
      },
      {
        title: 'Traffic sources',
        description: [
          'See where your traffic is coming from to better understand where you should be spending your effort.',
        ],
      },
      {
        title: 'Sharing',
        description: [
          'Easily share your stats with others through a secure, uniquely generated URL.',
        ],
      },
      {
        title: 'Filtering',
        description: [
          'Gain further insight into your data by applying filters like country, browser, and URL.',
        ],
      },
      {
        title: 'Location',
        description: [
          'Find out where your visitors are coming from including the city, region and country.',
        ],
      },
      {
        title: 'Languages',
        description: [
          'Know which languages are the most popular among your visitors to help you tailor your content.',
        ],
      },
      {
        title: 'Realtime data',
        description: [
          `Data available in seconds, not days. The data that Umami collects is immediately available on your dashboard`,
        ],
      },
      {
        title: 'Custom events',
        description: [
          'Track everything that happens on your website like signups and cart checkouts using custom events.',
        ],
      },
      {
        title: 'Custom data',
        description: ['Use custom data properties to help you further analyze your data.'],
      },
      {
        title: 'UTM tracking',
        description: [
          'Measure the effectiveness of your campaign by analyzing UTM query parameters that are automatically collected.',
        ],
      },

      {
        title: 'Teams',
        description: [
          'The teams feature allows you to securely share websites access with different team members.',
        ],
      },
      {
        title: 'Reports',
        description: [
          'Umami comes with out of the box reporting that enables you to gain insights from all your website data.',
        ],
      },
      {
        title: 'Retention',
        description: [
          'Measure your website stickiness by tracking how often users return with the Retention report.',
        ],
      },
      {
        title: 'Funnels',
        description: [
          'Understand the conversion and drop-off rate of users with the Funnel report.',
        ],
      },
    ],
  },
  {
    title: 'Privacy',
    description: `Umami is a privacy-focused analytics solution helps you stay compliant with data privacy laws.`,
    items: [
      {
        title: 'GDPR & CCPA compliant',
        description: [
          'Umami never collects any personal information from your visitors so it is fully compliant with GDPR and CCPA.',
        ],
      },
      {
        title: 'Anonymization ',
        description: [
          `Umami is private by default. All user data is anonymized to protect your visitors' privacy.`,
        ],
      },
      {
        title: 'No cookies ',
        description: [`Umami does not use any cookies so no annoying cookie banner is required.`],
      },
      {
        title: 'Data ownership ',
        description: [
          `Data is always in your control with Umami. You can self-host on your own infrastructure or export your data at any time from Umami Cloud.`,
        ],
      },
    ],
  },
  {
    title: 'Cloud',
    description: `Umami Cloud is a reliable, high-performance hosted solution.`,
    cloud: true,
    items: [
      {
        title: 'Fully managed',
        description: [
          `Leave the upgrades, database tuning, and management of backups to us while you focus on your website.`,
        ],
      },
      {
        title: 'High performance',
        description: [
          `Whether you have millions or billions of records, our platform is designed for speed and will deliver fast results.`,
        ],
      },
      {
        title: 'Data import',
        description: [
          `Want to migrate your existing data to Umami? Just use our built-in import tool.`,
        ],
      },
      {
        title: 'Data export ',
        description: [`Don't settle for summarized data. Get a full data export of all your data.`],
      },
    ],
  },
];

export default function Features() {
  return (
    <article>
      <PageHeader>
        <h1>Features</h1>
        <p>An overview of all the core features Umami provides.</p>
      </PageHeader>
      <div className={styles.features}>
        {items.map(({ title, description, items, cloud }) => {
          return (
            <TextBlock key={title} className={classNames({ [styles.cloud]: cloud })}>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className={styles.items}>
                {items.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <h2>{item.title}</h2>
                    {item.description.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </TextBlock>
          );
        })}
      </div>
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
