'use client';
import { Box, Column, Grid, Heading, Icon, Text, Row } from '@umami/react-zen';
import GetStartedBanner from '@/components/GetStartedBanner';
import PageHeader from '@/components/PageHeader';
import {
  Anonymous,
  Bolt,
  Bounce,
  Compare,
  Cookie,
  Data,
  Device,
  Export,
  Filter,
  Funnel,
  Gauge,
  Gear,
  Graph,
  Import,
  Key,
  Language,
  Lightbulb,
  Location,
  Magnet,
  Money,
  Network,
  Path,
  Privacy,
  Realtime,
  Reports,
  Share,
  Tag,
  Target,
  Team,
  Traffic,
  User,
  View,
} from 'src/components/svg';

const items = [
  {
    title: 'Analytics',
    description: `Oravo collects all the metrics you care about to help you make better decisions.`,
    items: [
      {
        title: 'Page views',
        description: [
          'Knowing which of your pages gets the most traffic is essential to improving your website content.',
        ],
        icon: <View />,
      },
      {
        title: 'Visitors',
        description: [
          'Get detailed information about your visitors like their device, browser, OS and location.',
        ],
        icon: <User />,
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
        title: 'Devices',
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
          `Data available in seconds, not days. The data that Oravo collects is immediately available on your dashboard`,
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
      'Oravo comes with out of the box reporting that enables you to gain deep insights from all your website data.',
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
        description: ['Look into your revenue data and how users are spending.'],
        icon: <Path />,
      },
      {
        title: 'Revenue',
        description: ['Understand how users navigate through your website.'],
        icon: <Money />,
      },
      {
        title: 'Attribution',
        description: ['See how users engage with your marketing and what drives conversions.'],
        icon: <Network />,
      },
    ],
  },
  {
    title: 'Privacy',
    description: `Oravo is private by default and helps you stay compliant with data privacy laws.`,
    items: [
      {
        title: 'GDPR & CCPA',
        description: [
          'Oravo never collects any personal information from your visitors so it is fully compliant with GDPR and CCPA.',
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
        description: [`Oravo does not use any cookies so no annoying cookie banner is required.`],
        icon: <Cookie />,
      },
      {
        title: 'Data ownership ',
        description: [
          `Data is always in your control with Oravo. You can self-host on your own infrastructure or export your data from Oravo Cloud.`,
        ],
        icon: <Key />,
      },
    ],
  },
  {
    title: 'Cloud',
    description: `Oravo Cloud is a reliable, high-performance hosted solution.`,
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
          `Want to migrate your existing data to Oravo? Just use our built-in import tool.`,
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
    <>
      <PageHeader
        title="Features"
        description="An overview of all the core features Oravo provides."
      />
      <Column gap="6">
        {items.map(({ title, description, items }) => {
          return (
            <Box key={title}>
              <Heading size="4">{title}</Heading>
              <Box paddingY="6" maxWidth="600px">
                <Text color="muted" size="3">
                  {description}
                </Text>
              </Box>
              <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4">
                {items.map((item, index) => (
                  <Box key={index} borderRadius="2" padding="4" backgroundColor="2">
                    <Row gap="3" alignItems="center">
                      <Icon size="md">{item.icon}</Icon>
                      <Text weight="bold">{item.title}</Text>
                    </Row>
                    {item.description.map((text, index) => (
                      <Text key={index} as="p" color="muted">
                        {text}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Grid>
            </Box>
          );
        })}
        <section>
          <GetStartedBanner />
        </section>
      </Column>
    </>
  );
}
