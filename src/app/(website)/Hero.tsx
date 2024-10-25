'use client';
import Link from 'next/link';
import { Button, Row, Column, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import Companies from './Companies';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="lg" className={styles.hero}>
      <TextBlock size="lg" align="center" style={{ zIndex: 1 }}>
        <h1>
          The modern analytics platform
          <br /> for effortless insights.
        </h1>
        <p>
          Umami makes it easy to collect, analyze, and understand your website data &mdash; so you
          can focus on <strong>growth</strong>
        </p>
      </TextBlock>
      <Row justifyContent="center" gap="md" style={{ zIndex: 1 }}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-button">
            <Text weight="bold">Get started</Text>
          </Link>
        </Button>
        <Button size="lg" asChild>
          <a
            href="https://eu.umami.is/share/LGazGOecbDtaIwDr/umami.is"
            data-umami-event="live-demo-button"
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
