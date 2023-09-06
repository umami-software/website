'use client';
import PageHeader from 'components/layout/PageHeader';
import ScrollBlock from 'components/layout/ScrollBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import { Blocks } from 'lib/content';

const items = Object.keys(Blocks).map(key => Blocks[key]);

export default function FeaturesPage() {
  return (
    <article>
      <PageHeader>
        <h1>Features</h1>
        <p>
          Umami is packed with amazing features that enable you to better
          <br /> understand your website traffic.
        </p>
      </PageHeader>
      <ScrollBlock items={items} />
      <section>
        <GetStartedBanner />
      </section>
    </article>
  );
}
