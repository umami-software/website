'use client';
import Plans from './Plans';
import Calculator from './Calculator';
import Features from './Features';
import Faq from './Faq';
import PageHeader from 'components/layout/PageHeader';

export default function PricingPage() {
  return (
    <>
      <PageHeader>
        <h1>Pricing</h1>
        <p>
          <strong>Umami Cloud</strong> is a reliable, high-performance hosted solution
        </p>
      </PageHeader>
      <Plans />
      <Calculator />
      <Features />
      <Faq />
    </>
  );
}
