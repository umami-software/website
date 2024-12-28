'use client';
import { Button, Icon, Text, Box, Column, Row, Heading, Grid } from '@umami/react-zen';
import { Checkmark } from '@/components/icons';
import Link from 'next/link';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './Plans.module.css';

export default function Plans() {
  const query = useQueryString({ ref: 'umami-pricing' });

  const plans = [
    {
      name: 'Hobby',
      price: '$0',
      interval: '/ month',
      description: 'Get started:',
      features: [
        '100K events per month',
        'Up to 3 websites',
        '6 month data retention',
        'Community support',
      ],
      url: `${CLOUD_URL}/signup${query}&plan=hobby`,
      button: 'Get started',
    },
    {
      name: 'Pro',
      price: '$20',
      interval: '/ month',
      description: 'Everything in Hobby, plus:',
      features: [
        '1 million events per month',
        '$0.00002 per additional event',
        'Unlimited websites',
        'Unlimited team members',
        '5 year data retention',
        'Email support',
      ],
      url: `${CLOUD_URL}/signup${query}&plan=pro`,
      button: 'Try 14-day free trial',
      variant: 'primary',
    },
    {
      name: 'Enterprise',
      price: 'Contact us',
      description: 'Everything in Pro, plus:',
      features: [
        'Custom pricing',
        'Custom data retention',
        'Uptime SLA',
        'Invoice billing',
        'Enterprise support',
      ],
      url: 'mailto:sales@umami.is?subject=Umami Cloud enterprise pricing',
      button: 'Contact us',
    },
  ];

  return (
    <Grid
      gap="4"
      width="100%"
      columns="repeat(auto-fill, minmax(320px, 1fr))"
      alignItems="center"
      justifyContent="center"
    >
      {plans.map(
        ({ name, price, interval, description, features, url, button, variant = 'outline' }) => {
          return (
            <Column key={name} gap="3" borderSize="1" shadow="3" padding="6" borderRadius="2">
              <Heading size="4">{name}</Heading>
              <Row alignItems="center" gap="2">
                <Text weight="bold" size="8">
                  {price}
                </Text>
                <Text color="muted">{interval}</Text>
              </Row>
              <Text>{description}</Text>
              <Box as="ul">
                {features.map((feat, index) => {
                  return (
                    <Row key={index} as="li" alignItems="center" gap="2">
                      <Row color="primary" alignItems="center">
                        <Icon size="lg">
                          <Checkmark />
                        </Icon>
                      </Row>
                      <Text size="2">{feat}</Text>
                    </Row>
                  );
                })}
              </Box>
              <div className={styles.button}>
                <Button variant={variant as any} asChild>
                  <Link href={url}>{button}</Link>
                </Button>
              </div>
            </Column>
          );
        },
      )}
    </Grid>
  );
}
