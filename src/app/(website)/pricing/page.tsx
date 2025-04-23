import { Metadata } from 'next';
import { Column } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import GetStartedBanner from '@/components/GetStartedBanner';
import Plans from './Plans';
import Features from './FeaturesChart';
import Questions from './Questions';

export default function PricingPage() {
  return (
    <article>
      <Column gap="8">
        <PageHeader title="Pricing" description="Simple usage based pricing" />
        <Plans />
        <Features />
        <Questions />
        <GetStartedBanner />
      </Column>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Pricing',
};
