'use client';
import Hero from './Hero';
import Statements from './Statements';
import GitHubStats from 'components/common/GitHubStats';
import GetStartedBanner from 'components/common/GetStartedBanner';
import NewsletterSignup from 'components/common/NewsletterSignup';
import React from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <Statements />
      <GitHubStats />
      <GetStartedBanner />
      <NewsletterSignup />
    </>
  );
}
