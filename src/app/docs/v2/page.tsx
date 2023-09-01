'use client';
import Plans from '../../pricing/Plans';
import Calculator from '../../pricing/Calculator';
import Features from '../../pricing/Features';
import Faq from '../../pricing/Faq';

export default function PricingPage() {
  return (
    <>
      <Plans />
      <Calculator />
      <Features />
      <Faq />
    </>
  );
}
