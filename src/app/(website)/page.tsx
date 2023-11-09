import { Metadata } from 'next';
import GetStartedBanner from 'components/common/GetStartedBanner';
import NewsletterSignup from 'components/common/NewsletterSignup';
import Hero from './Hero';
import Statements from './Statements';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import Features from './Features';
import Personas from './Personas';
import styles from './page.module.css';

export default function () {
  return (
    <article className={styles.container}>
      <Hero />
      <Statements />
      <Features />
      <Personas />
      <QuickStart />
      <Quotes />
      <GetStartedBanner />
      <NewsletterSignup />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'umami',
};
