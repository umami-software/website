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
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://static.scarf.sh/a.png?x-pxid=4b6ec9d8-17ee-478e-a61a-e29fc6d67a50"
      />
    </article>
  );
}

export const metadata: Metadata = {};
