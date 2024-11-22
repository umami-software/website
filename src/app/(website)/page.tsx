import { Metadata } from 'next';
import { Column } from '@umami/react-zen';
import GetStartedBanner from '@/components/GetStartedBanner';
import Hero from './Hero';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import WebAnalytics from './WebAnalytics';
import OpenSource from './OpenSource';
import ProductAnalytics from './ProductAnalytics';

export default function () {
  return (
    <Column gap="12">
      <Hero />
      <WebAnalytics />
      <ProductAnalytics />
      <QuickStart />
      <OpenSource />
      <Quotes />
      <GetStartedBanner />
    </Column>
  );
}

export const metadata: Metadata = {};
