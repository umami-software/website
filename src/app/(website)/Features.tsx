'use client';
import PageHeader from '@/components/PageHeader';
import { Blocks } from '@/lib/constants';
import LinkButton from '@/components/LinkButton';
import { Flexbox, Icon, Icons, Text } from 'react-basics';
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
        <LinkButton href="/features" variant="secondary">
          <Text>Explore more features </Text>
          <Icon>
            <Icons.ArrowRight />
          </Icon>
        </LinkButton>
      </Flexbox>
    </section>
  );
}
