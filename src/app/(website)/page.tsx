'use client';
import Hero from './Hero';
import Statements from './Statements';
import GetStartedBanner from 'components/common/GetStartedBanner';
import NewsletterSignup from 'components/common/NewsletterSignup';
import React from 'react';
import styles from './page.module.css';

export default function Page() {
  return (
    <article className={styles.container}>
      <Hero />
      <Statements />
      <GetStartedBanner />
      <NewsletterSignup />
    </article>
  );
}
