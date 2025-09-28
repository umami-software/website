'use client';
import Link from 'next/link';
import { Button, Row, Column, Heading, Text } from '@umami/react-zen';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import Companies from './Companies';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'oravo-hero' });

  return (
    <Column gap="6" className={styles.hero} alignItems="center">
      <Heading size="6" align="center">
        The modern analytics platform
        <br /> for effortless insights.
      </Heading>
      <Text color="muted" size="4" as="p">
        Oravo makes it easy to collect, analyze, and understand your website data &mdash; so you can
        focus on <strong>growth</strong>
      </Text>
      <Row justifyContent="center" gap="3" style={{ zIndex: 1 }}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`${CLOUD_URL}/signup${query}`} data-oravo-event="get-started-button">
            Get started for free
          </Link>
        </Button>
      </Row>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
