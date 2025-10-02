'use client';
import { ReactNode, CSSProperties } from 'react';
import Link from 'next/link';
import { Button, Flexbox, Icon, Icons, Text, Column } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import ImageBlock from '@/components/ImageBlock';
import styles from './WebAnalytics.module.css';

export default function WebAnalytics() {
  return (
    <Column gap="6">
      <TextBlock size="lg">
        <header>Web Analytics</header>
        <h2>A complete analytics solution with all the features you need.</h2>
        <p>
          Oravo is packed with amazing features that enable you to better understand your website
          traffic.
        </p>
      </TextBlock>
      <div className={styles.items}>
        <Feature title="Traffic analysis" image="/images/feature-stats.png">
          Get insights into your traffic so you optimize for growth. Easily see all your metrics at
          a glance.
        </Feature>
        <Feature title="Visitor analysis" image="/images/feature-visitors.png" style={{ top: 30 }}>
          Get detailed breakdowns about your visitors including where they are located and what
          device they used.
        </Feature>
        <Feature title="Custom events" image="/images/feature-events.png" style={{ bottom: 30 }}>
          Track more than just pageviews. Capture any event on your website like button clicks and
          form entries.
        </Feature>
        <Feature
          title="Powerful filters"
          image="/images/feature-filters.png"
          style={{ left: 70, top: 50 }}
        >
          Dive deeper into your data using easy to apply filters. Segment your users by any metric
          such as browser, OS, and country.
        </Feature>
        <Feature title="Realtime data" image="/images/feature-realtime.png" style={{ top: 40 }}>
          Get a realtime view of your current website traffic. See the exact pages where your
          visitors are landing.
        </Feature>
        <Feature title="Trend detection" image="/images/feature-compare.png">
          Compare date periods to discover key trends in your traffic. Easily measure the success of
          your campaigns.
        </Feature>
      </div>
      <Flexbox justifyContent="center" alignItems="center">
        <Button variant="secondary" asChild>
          <Link href="/features">
            <Text>Explore more features </Text>
            <Icon size="sm">
              <Icons.Arrow />
            </Icon>
          </Link>
        </Button>
      </Flexbox>
    </Column>
  );
}

const Feature = ({
  title,
  image,
  style,
  children,
}: {
  title: string;
  image: string;
  style?: CSSProperties;
  children: ReactNode;
}) => {
  return (
    <TextBlock className={styles.item}>
      <ImageBlock className={styles.image}>
        <img src={image} style={style} alt={title} />
      </ImageBlock>
      <h3>{title}</h3>
      <p>{children}</p>
    </TextBlock>
  );
};
