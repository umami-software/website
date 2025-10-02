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
    <Column gap="8" className={styles.hero} alignItems="center" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Column gap="4" alignItems="center" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <Heading size="5" align="center" style={{ lineHeight: '1.1', marginBottom: '1rem' }}>
          The modern analytics platform
          <br /> for effortless insights.
        </Heading>
        <Text color="muted" size="3" as="p" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
          Oravo makes it easy to collect, analyze, and understand your website data &mdash; so you can
          focus on <strong>growth</strong>. Get started in minutes with our completely free platform.
        </Text>
      </Column>
      <Row justifyContent="center" gap="3" style={{ zIndex: 1, marginTop: '1rem' }}>
        <Button variant="primary" size="lg" asChild style={{ padding: '12px 32px', fontSize: '16px' }}>
          <Link href={`${CLOUD_URL}/signup${query}`} data-oravo-event="get-started-button">
            Get started for free
          </Link>
        </Button>
      </Row>
      <div className={styles.image} style={{ marginTop: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
