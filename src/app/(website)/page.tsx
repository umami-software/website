import { Metadata } from 'next';
import GetStartedBanner from '@/components/GetStartedBanner';
import Hero from './Hero';
import Statements from './Statements';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import Features from './Features';
import OpenSource from '@/app/(website)/OpenSource';
import styles from './page.module.css';

export default function () {
  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <QuickStart />
      <OpenSource />
      <Quotes />
      <GetStartedBanner />
    </div>
  );
}

export const metadata: Metadata = {};
