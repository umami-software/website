'use client';
import Plans from 'app/(website)/pricing/Plans';
import Calculator from 'app/(website)/pricing/Calculator';
import Features from 'app/(website)/pricing/Features';
import Questions from 'app/(website)/pricing/Questions';

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
