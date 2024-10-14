'use client';
import Link from 'next/link';
import { Button, Row, Column, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import styles from './Hero.module.css';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="lg">
      <TextBlock size="xl" align="center">
        <div>
          Effortless analytics and
          <br /> real-time insights.
        </div>
        <div className={styles.subtitle}>
          Umami makes it easy to collect, analyze, and understand your website data
        </div>
      </TextBlock>
      <Row justifyContent="center" gap="md">
        <Button variant="primary" size="xl" asChild>
          <Link href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-button">
            <Text weight="bold">Get started</Text>
          </Link>
        </Button>
        <Button size="xl" asChild>
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
      <div className={styles.features}>
        <div>No cookie banners</div>
        <div>Streamlined dashboard</div>
        <div>Effortless setup and use</div>
      </div>
      <div className={styles.image}>
        <ContentImage src="/images/app.jpg" />
      </div>
    </Column>
  );
}
