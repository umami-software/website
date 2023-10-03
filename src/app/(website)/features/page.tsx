'use client';
import PageHeader from 'components/layout/PageHeader';
import ScrollBlock from 'components/layout/ScrollBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import { Headlines } from 'lib/content';

const items = [
  Headlines.simpleAnalytics,
  Headlines.visitorInsights,
  Headlines.customEvents,
  Headlines.filters,
  Headlines.realtimeData,
  Headlines.multiLanguage,
  Headlines.mobileFriendly,
  Headlines.unlimitedWebsites,
  Headlines.multipleAccounts,
  Headlines.bypassAdBlockers,
  Headlines.lightWeight,
  Headlines.shareData,
  Headlines.darkMode,
];

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
