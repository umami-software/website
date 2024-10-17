'use client';
import { Button, Flexbox, Icon, Icons, Text } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import { Blocks } from '@/lib/constants';
import styles from './Features.module.css';
import ScrollBlock from '@/components/ScrollBlock';

const items: any = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.customEvents,
  Blocks.filters,
  Blocks.realtimeData,
  Blocks.reports,
];

export default function Features() {
  return (
    <section className={styles.features}>
      <PageHeader>
        <h1>All the features you need</h1>
        <p>
          Umami is packed with amazing features that enable you to better
          <br /> understand your website traffic.
        </p>
      </PageHeader>
      <ScrollBlock items={items} />
      <Flexbox justifyContent="center" alignItems="center">
        <Button variant="secondary" asChild>
          <a href="/features">
            <Text>Explore more features </Text>
            <Icon size="sm">
              <Icons.Arrow />
            </Icon>
          </a>
        </Button>
      </Flexbox>
    </section>
  );
}
