'use client';
import { Button, Icon, Text, Box, Column, Row, Heading, Grid, Icons } from '@umami/react-zen';
import Link from 'next/link';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './Plans.module.css';

export default function Plans() {
  const query = useQueryString({ ref: 'oravo-pricing' });

  const plans = [
    {
      name: 'Always Free',
      price: 'FREE',
      interval: 'forever',
      description: 'Everything you need:',
      features: [
        'Unlimited events',
        'Unlimited websites',
        'Unlimited team members',
        'Unlimited data retention',
        'Full analytics features',
        'Email support',
        'No subscription required',
        'No hidden costs',
      ],
      url: `${CLOUD_URL}/signup${query}`,
      button: 'Get started for free',
      variant: 'primary',
    },
  ];

  return (
    <Grid
      gap="4"
      width="100%"
      columns="repeat(auto-fit, minmax(240px, 1fr))"
      alignItems="center"
      justifyContent="center"
    >
      {plans.map(
        ({ name, price, interval, description, features, url, button, variant = 'outline' }) => {
          return (
            <Column
              key={name}
              gap="3"
              border
              shadow="3"
              padding="6"
              borderRadius="3"
              style={
                name === 'Pro' ? { borderColor: 'var(--primary-color)', borderWidth: 2 } : null
              }
            >
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
                        <Icon size="sm">
                          <Icons.Check />
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
