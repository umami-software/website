'use client';
import PageHeader from 'components/layout/PageHeader';
import { Blocks } from 'lib/constants';
import LinkButton from 'components/common/LinkButton';
import { Flexbox, Icon, Icons, Text } from 'react-basics';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import styles from './Features.module.css';

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
      {items.map(({ title, description, image, icon: Icon }) => (
        <ImageBlock key={title} className={styles.block}>
          <TextBlock>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextBlock>
          <div className={styles.image}>
            {image && <img src={image} alt={title} />}
            {!image && <Icon />}
          </div>
        </ImageBlock>
      ))}
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
