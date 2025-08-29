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
      <Heading size="4.7" align="center">
        The modern analytics platform
        <br /> for effortless insights.
      </Heading>
      <Text color="muted" size="4" as="p">
        Oravo makes it easy to collect, analyze, and understand your website data &mdash; completely free. Focus on <strong>growth</strong>, not costs.
      </Text>
      <Row justifyContent="center" gap="3" style={{ zIndex: 1 }} className={styles.buttonRow}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`${CLOUD_URL}/signup${query}`} data-oravo-event="get-started-button">
            Get started
          </Link>
        </Button>
        <Button size="lg" asChild>
          <a
            href="https://analytics.imoogleai.xyz/share/QAJ0QBCu6mQkMuQ1/quizstack.qzz.io"
            data-oravo-event="live-demo-button"
            target="_blank"
            rel="noreferrer"
          >
            View demo
          </a>
        </Button>
      </Row>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
