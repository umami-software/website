import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GetStartedBanner from '@/components/GetStartedBanner';
import Plans from './Plans';
import Features from './FeaturesChart';
import Questions from './Questions';

export default function PricingPage() {
  return (
    <article>
      <PageHeader>
        <h1>Pricing</h1>
        <p>
          <strong>Umami Cloud</strong> is a reliable, high-performance hosted solution
        </p>
      </PageHeader>
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
