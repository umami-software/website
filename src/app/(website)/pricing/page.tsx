import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GetStartedBanner from '@/components/GetStartedBanner';
import Plans from './Plans';
import Features from './FeaturesChart';
import Questions from './Questions';

export default function PricingPage() {
  return (
    <article>
      <PageHeader title="Pricing" description="Simple usage based pricing" />
      <Plans />
      <Features />
      <Questions />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Pricing',
};
