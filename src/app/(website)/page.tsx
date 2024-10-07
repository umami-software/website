import { Metadata } from 'next';
import GetStartedBanner from '@/components/GetStartedBanner';
import Hero from './Hero';
import Statements from './Statements';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import Features from './Features';
import OpenSource from '@/app/(website)/OpenSource';
import Companies from '@/app/(website)/Companies';
import styles from './page.module.css';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Companies />
      <Statements />
      <Features />
      <QuickStart />
      <OpenSource />
      <Quotes />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {};
