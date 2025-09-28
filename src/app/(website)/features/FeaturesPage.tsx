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
          `Data is always in your control with Umami. You can self-host on your own infrastructure or export your data from Oravo Cloud.`,
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
    <>
      <PageHeader
        title="Powerful Features"
        description="Everything you need for privacy-first analytics that drives results."
      />
      
      {/* Hero Section */}
      <Row justifyContent="center" style={{ padding: '0 20px', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0'
          }}>
            Discover how Oravo combines powerful analytics capabilities with uncompromising privacy protection. 
            Built for modern teams who value both insights and user trust.
          </p>
        </div>
      </Row>

      <Column gap="8" style={{ padding: '0 20px' }}>
        {items.map(({ title, description, items }, sectionIndex) => {
          return (
            <div key={title} style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 1rem' }}>
              
              {/* Section Header */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '3rem',
                padding: '3rem 2rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                boxShadow: 'var(--shadow-medium)'
              }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {title}
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--color-text-muted)', 
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  {description}
                </p>
              </div>

              {/* Features Grid */}
              <Grid 
                columns={{ xs: '1fr', md: 'repeat(2, 1fr)' }} 
                gap="3"
                style={{ marginBottom: sectionIndex < items.length - 1 ? '4rem' : '2rem' }}
              >
                {items.map((item, index) => (
                  <div 
                    key={index} 
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '16px',
                      padding: '2rem',
                      backdropFilter: 'blur(10px)',
                      boxShadow: 'var(--shadow-soft)',
                      transition: 'all 0.15s ease',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <Row gap="4" alignItems="center" style={{ marginBottom: '1.5rem' }}>
                      <div style={{
                        padding: '1rem',
                        background: 'var(--color-accent)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '56px',
                        minHeight: '56px'
                      }}>
                        <Icon size="lg" style={{ color: 'white' }}>{item.icon}</Icon>
                      </div>
                      <h3 style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        margin: 0,
                        color: 'var(--color-text)',
                        flex: 1
                      }}>
                        {item.title}
                      </h3>
                    </Row>
                    <div style={{ flex: 1 }}>
                      {item.description.map((text, textIndex) => (
                        <p key={textIndex} style={{ 
                          color: 'var(--color-text-muted)', 
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          margin: textIndex === 0 ? '0' : '0.75rem 0 0 0'
                        }}>
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </Grid>
            </div>
          );
        })}
        
        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          maxWidth: '800px',
          margin: '2rem auto 0'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--color-text)'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--color-text-muted)', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Join thousands of websites already using Oravo for privacy-first analytics.
          </p>
          <Row justifyContent="center" gap="3">
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'var(--color-accent)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.15s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started Today
            </a>
            <a 
              href="https://analytics.imoogleai.xyz/share/QAJ0QBCu6mQkMuQ1/quizstack.qzz.io" 
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'transparent',
                color: 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--hover-bg)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Live Demo
            </a>
          </Row>
        </div>
      </Column>
    </>
  );
}
