import Hero from './Hero';
import Statements from './Statements';
import QuickStart from './QuickStart';
import Quotes from './Quotes';
import Features from './Features';
import GetStartedBanner from 'components/common/GetStartedBanner';
import NewsletterSignup from 'components/common/NewsletterSignup';
import React, { Suspense } from 'react';
import styles from './page.module.css';

export default function () {
  return (
    <article className={styles.container}>
      <Suspense>
        <Hero />
        <Statements />
        <Features />
        <QuickStart />
        <Quotes />
        <GetStartedBanner />
        <NewsletterSignup />
      </Suspense>
    </article>
  );
}
