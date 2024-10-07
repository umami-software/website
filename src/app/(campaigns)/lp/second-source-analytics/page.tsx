import { Metadata } from 'next';
import GetStartedBanner from '@/components/GetStartedBanner';
import Hero from './Hero';
import Personas from './Personas';
import QuickStart from '@/app/(website)/QuickStart';
import Quotes from '@/app/(website)/Quotes';
import Features from '@/app/(website)/Features';
import Companies from '@/app/(website)/Companies';
import styles from '@/app/(website)/page.module.css';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Companies />
      <Features />
      <QuickStart />
      <Personas />
      <Quotes />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {};
