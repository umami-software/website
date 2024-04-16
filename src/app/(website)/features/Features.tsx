'use client';
import classNames from 'classnames';
import { Text, Icon } from 'react-basics';
import PageHeader from 'components/layout/PageHeader';
import GetStartedBanner from 'components/common/GetStartedBanner';
import TextBlock from 'components/layout/TextBlock';
import User from 'assets/user.svg';
import View from 'assets/view.svg';
import Bounce from 'assets/bounce.svg';
import Traffic from 'assets/traffic.svg';
import Share from 'assets/share.svg';
import Filter from 'assets/filter.svg';
import Location from 'assets/location.svg';
import Language from 'assets/language.svg';
import Realtime from 'assets/realtime.svg';
import Bolt from 'assets/bolt.svg';
import Data from 'assets/data.svg';
import Target from 'assets/target.svg';
import Team from 'assets/team.svg';
import Graph from 'assets/graph.svg';
import Magnet from 'assets/magnet.svg';
import Funnel from 'assets/funnel.svg';
import Privacy from 'assets/privacy.svg';
import Anonymous from 'assets/anonymous.svg';
import Cookie from 'assets/cookie.svg';
import Property from 'assets/property.svg';
import Gear from 'assets/gear.svg';
import Gauge from 'assets/gauge.svg';
import Import from 'assets/import.svg';
import Export from 'assets/export.svg';
import styles from './Features.module.css';

const items = [
  {
    title: 'Analytics',
    description: `Umami collects all the metrics you care about to help you make better decisions.`,
    items: [
      {
        title: 'Visitor info',
        description: [
          'Get detailed information about your visitors like their device, browser, OS and location.',
        ],
        icon: <User />,
      },
      {
        title: 'Page views',
        description: [
          'Knowing which of your pages gets the most traffic is essential to improving your website content.',
        ],
        icon: <View />,
      },
      {
        title: 'Bounce rate',
        description: [
          'See which pages keep your visitors engaged versus those they are abandoning.',
        ],
        icon: <Bounce />,
      },
      {
        title: 'Traffic sources',
        description: [
          'See where your traffic is coming from to better understand where you should be spending your effort.',
        ],
        icon: <Traffic />,
      },
      {
        title: 'Sharing',
        description: [
          'Easily share your stats with others through a secure, uniquely generated URL.',
        ],
        icon: <Share />,
      },
      {
        title: 'Filtering',
        description: [
          'Gain further insight into your data by applying filters like country, browser, and URL.',
        ],
        icon: <Filter />,
      },
      {
        title: 'Location',
        description: [
          'Find out where your visitors are coming from including the city, region and country.',
        ],
        icon: <Location />,
      },
      {
        title: 'Languages',
        description: [
          'Know which languages are the most popular among your visitors to help you tailor your content.',
        ],
        icon: <Language />,
      },
      {
        title: 'Realtime data',
        description: [
          `Data available in seconds, not days. The data that Umami collects is immediately available on your dashboard`,
        ],
        icon: <Realtime />,
      },
      {
        title: 'Custom events',
        description: [
          'Track everything that happens on your website like signups and cart checkouts using custom events.',
        ],
        icon: <Bolt />,
      },
      {
        title: 'Custom data',
        description: ['Use custom data properties to help you further analyze your data.'],
        icon: <Data />,
      },
      {
        title: 'UTM tracking',
        description: [
          'Measure the effectiveness of your campaign by analyzing UTM query parameters that are automatically collected.',
        ],
        icon: <Target />,
      },

      {
        title: 'Teams',
        description: [
          'The teams feature allows you to securely share websites access with different team members.',
        ],
        icon: <Team />,
      },
      {
        title: 'Reports',
        description: [
          'Umami comes with out of the box reporting that enables you to gain insights from all your website data.',
        ],
        icon: <Graph />,
      },
      {
        title: 'Retention',
        description: [
          'Measure your website stickiness by tracking how often visitors return with the Retention report.',
        ],
        icon: <Magnet />,
      },
      {
        title: 'Funnels',
        description: [
          'Understand the conversion and drop-off rate of visitors with the Funnel report.',
        ],
        icon: <Funnel />,
      },
    ],
  },
  {
    title: 'Privacy',
    description: `Umami is private by default and helps you stay compliant with data privacy laws.`,
    items: [
      {
        title: 'GDPR & CCPA',
        description: [
          'Umami never collects any personal information from your visitors so it is fully compliant with GDPR and CCPA.',
        ],
        icon: <Privacy />,
      },
      {
        title: 'Data anonymization ',
        description: [`All visitor data is anonymized to protect your visitors' privacy.`],
        icon: <Anonymous />,
      },
      {
        title: 'No cookies ',
        description: [`Umami does not use any cookies so no annoying cookie banner is required.`],
        icon: <Cookie />,
      },
      {
        title: 'Data ownership ',
        description: [
          `Data is always in your control with Umami. You can self-host on your own infrastructure or export your data from Umami Cloud.`,
        ],
        icon: <Property />,
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
        icon: <Gear />,
      },
      {
        title: 'High performance',
        description: [
          `Whether you have millions or billions of records, our platform is designed for speed and will deliver fast results.`,
        ],
        icon: <Gauge />,
      },
      {
        title: 'Data import',
        description: [
          `Want to migrate your existing data to Umami? Just use our built-in import tool.`,
        ],
        icon: <Import />,
      },
      {
        title: 'Data export ',
        description: [`Don't settle for summarized data. Get a full data export of all your data.`],
        icon: <Export />,
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
                    <header className={styles.header}>
                      <Icon size="lg">{item.icon}</Icon>
                      <Text>{item.title}</Text>
                    </header>
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
