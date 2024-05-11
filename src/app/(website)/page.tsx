import { Metadata } from 'next';
import GetStartedBanner from 'components/common/GetStartedBanner';
import Hero from './Hero';
import Statements from './Statements';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import Features from './Features';
import Personas from './Personas';
import OpenSource from 'app/(website)/OpenSource';
import Companies from 'app/(website)/Companies';
import styles from './page.module.css';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Statements />
      <Companies />
      <Features />
      <QuickStart />
      <Personas />
      <OpenSource />
      <Quotes />
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {};
