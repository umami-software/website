'use client';
import { Grid, Row, Icon, Column, Heading, Text } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import { DISCORD_URL, X_URL, LINKEDIN_URL } from '@/lib/constants';
import { Discord, X, Linkedin } from 'src/components/svg';
import LinkButton from '@/components/LinkButton';

const items = [

  {
    name: 'Discord',
    description: "Chat directly with developers and other users in Oravo's Discord channel.",
    url: DISCORD_URL,
    icon: <Discord />,
  },
  {
    name: 'Twitter',
    description: 'Follow us on Twitter for the latest news and updates.',
    url: X_URL,
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    description: 'Learn about our company.',
    url: LINKEDIN_URL,
    icon: <Linkedin />,
  },
];

export default function CommunityPage() {
  return (
    <section>
      <PageHeader
        title="Community"
        description="Get help with issues, discuss ideas and share your feedback."
      />
      <Grid columns={{ xs: '1fr', md: '1fr 1fr' }} gap="3">
        {items.map(({ name, description, url, icon }) => (
          <Column
            key={name}
            alignItems="center"
            justifyContent="center"
            gap="6"
            padding="6"
            border
            borderRadius
          >
            <Row alignItems="center" gap="3" justifyContent="center">
              <Icon size="lg">{icon}</Icon>
              <Heading>{name}</Heading>
            </Row>
            <Text>{description}</Text>
            <LinkButton href={url} target="_blank" data-oravo-event={`community-${name}`}>
              Explore
            </LinkButton>
          </Column>
        ))}
      </Grid>
    </section>
  );
}
