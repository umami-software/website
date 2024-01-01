import { Metadata } from 'next';
import PageHeader from 'components/layout/PageHeader';
import GetStartedBanner from 'components/common/GetStartedBanner';
import Plans from './Plans';
import Calculator from './Calculator';
import Features from './Features';
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
      <Calculator />
      <Features />
      <Questions />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Pricing',
};
