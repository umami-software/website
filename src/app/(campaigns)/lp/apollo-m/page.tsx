import { Metadata } from 'next';
import GetStartedBanner from 'components/common/GetStartedBanner';
import Hero from './Hero';
import Personas from './Personas';
import Statements from './Statements';
import QuickStart from 'app/(website)/QuickStart';
import Quotes from 'app/(website)/Quotes';
import Companies from 'app/(website)/Companies';
import styles from 'app/(website)/page.module.css';
import OpenSource from 'app/(website)/OpenSource';
import TextBlock from 'components/layout/TextBlock';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Statements />
      <Companies />
      <QuickStart />
      <Personas />
      <OpenSource />
      <Quotes />
      <TextBlock align="center" size="lg">
        <h1>Umami as a Second Data Source</h1>
        <p>
          We know it can be hard to rip out your existing analytics infrastructure for something
          new. That’s why many of our customers use Umami as a second data source. Umami can run
          alongside your existing analytics stack and be a data validation and backup tool. You can
          cross-reference your primary analytics data with Umami to ensure accuracy and catch any
          discrepancies, and when your primary tool goes down, you have a backup data source. Using
          Umami alongside your current analytics platform can build greater confidence in your
          marketing decisions and create a more robust data strategy.
        </p>
      </TextBlock>
      <GetStartedBanner />
    </article>
  );
}

export const metadata: Metadata = {};
