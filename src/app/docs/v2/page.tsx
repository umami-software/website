'use client';
import Plans from '../../pricing/Plans';
import Calculator from '../../pricing/Calculator';
import Features from '../../pricing/Features';
import Questions from '../../pricing/Questions';

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
