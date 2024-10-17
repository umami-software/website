'use client';
import { Icon, Text } from '@umami/react-zen';
import GetStartedBanner from '@/components/GetStartedBanner';
import PageHeader from '@/components/PageHeader';
import TextBlock from '@/components/TextBlock';
import Anonymous from 'assets/anonymous.svg';
import Bolt from 'assets/bolt.svg';
import Bounce from 'assets/bounce.svg';
import Compare from 'assets/compare.svg';
import Cookie from 'assets/cookie.svg';
import Data from 'assets/data.svg';
import Device from 'assets/device.svg';
import Export from 'assets/export.svg';
import Filter from 'assets/filter.svg';
import Funnel from 'assets/funnel.svg';
import Gauge from 'assets/gauge.svg';
import Gear from 'assets/gear.svg';
import Graph from 'assets/graph.svg';
import Import from 'assets/import.svg';
import Key from 'assets/key.svg';
import Language from 'assets/language.svg';
import Lightbulb from 'assets/lightbulb.svg';
import Location from 'assets/location.svg';
import Magnet from 'assets/magnet.svg';
import Path from 'assets/path.svg';
import Privacy from 'assets/privacy.svg';
import Realtime from 'assets/realtime.svg';
import Reports from 'assets/reports.svg';
import Share from 'assets/share.svg';
import Tag from 'assets/tag.svg';
import Target from 'assets/target.svg';
import Team from 'assets/team.svg';
import Traffic from 'assets/traffic.svg';
import User from 'assets/user.svg';
import View from 'assets/view.svg';
import styles from './FeaturesPage.module.css';

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
        title: 'Location',
        description: [
          'Find out where your visitors are coming from including the city, region and country.',
        ],
        icon: <Location />,
      },
      {
        title: 'Device',
        description: [
          'See the most popular devices used by visitors to help you optimize your pages.',
        ],
        icon: <Device />,
      },
      {
        title: 'Languages',
        description: [
          'Know which languages are the most popular among your visitors to help you tailor your content.',
        ],
        icon: <Language />,
      },
      {
        title: 'Compare',
        description: ['See your metric performance compared against previous date ranges.'],
        icon: <Compare />,
      },
      {
        title: 'Filtering',
        description: [
          'Gain further insight into your data by applying filters like country, browser, and URL.',
        ],
        icon: <Filter />,
      },
      {
        title: 'Realtime data',
        description: [
          `Data available in seconds, not days. The data that Umami collects is immediately available on your dashboard`,
        ],
        icon: <Realtime />,
      },
      {
        title: 'Teams',
        description: [
          'The teams feature allows you to securely share websites access with different team members.',
        ],
        icon: <Team />,
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
        icon: <Tag />,
      },

      {
        title: 'Sharing',
        description: [
          'Easily share your stats with others through a secure, uniquely generated URL.',
        ],
        icon: <Share />,
      },
      {
        title: 'Reports',
        description: [
          'Build reports for specific websites and date ranges to cover all your data needs.',
        ],
        icon: <Graph />,
      },
    ],
  },
  {
    title: 'Reports',
    description:
      'Umami comes with out of the box reporting that enables you to gain deep insights from all your website data.',
    items: [
      {
        title: 'Insights',
        description: ['Dive deeper into your data by using segments and filters.'],
        icon: <Lightbulb />,
      },
      {
        title: 'Funnels',
        description: ['Understand the conversion and drop-off rate of users.'],
        icon: <Funnel />,
      },
      {
        title: 'Retention',
        description: ['Measure your website stickiness by tracking how often users return.'],
        icon: <Magnet />,
      },
      {
        title: 'UTM',
        description: ['Track your campaigns through UTM parameters.'],
        icon: <Tag />,
      },
      {
        title: 'Goals',
        description: ['Track your goals for pageviews and events.'],
        icon: <Target />,
      },
      {
        title: 'Journey',
        description: ['Understand how users navigate through your website.'],
        icon: <Path />,
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
        icon: <Key />,
      },
    ],
  },
  {
    title: 'Cloud',
    description: `Umami Cloud is a reliable, high-performance hosted solution.`,
    items: [
      {
        title: 'Fully managed',
        description: [
          `Leave the upgrades, backups and performance tuning to us while you focus on your results.`,
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
      {
        title: 'Email reports ',
        description: [
          `Send scheduled email reports to anyone. Send out website summaries in a compact and digestable email.`,
        ],
        icon: <Reports />,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <article>
      <PageHeader>
        <div>Features</div>
        <div>An overview of all the core features Umami provides.</div>
      </PageHeader>
      <div className={styles.features}>
        {items.map(({ title, description, items }) => {
          return (
            <div key={title}>
              <TextBlock size="md">
                <div>{title}</div>
                <div>{description}</div>
              </TextBlock>
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
            </div>
          );
        })}
      </div>
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
