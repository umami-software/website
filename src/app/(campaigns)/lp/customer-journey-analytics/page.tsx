import { Metadata } from 'next';
import GetStartedBanner from '@/components/GetStartedBanner';
import Hero from './Hero';
import QuickStart from '@/app/(website)/QuickStart';
import Quotes from '@/app/(website)/Quotes';
import Features from '@/app/(website)/Features';
import Companies from '@/app/(website)/Companies';
import styles from '@/app/(website)/page.module.css';
import Statements from './Statements';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Statements />
      <Companies />
      <Features />
      <QuickStart />
      <Quotes />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {};
