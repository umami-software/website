'use client';
import Plans from 'app/pricing/Plans';
import Calculator from 'app/pricing/Calculator';
import Features from 'app/pricing/Features';
import Questions from 'app/pricing/Questions';

export default function PricingPage() {
  return (
    <>
      <Plans />
      <Calculator />
      <Features />
      <Questions />
    </>
  );
}
