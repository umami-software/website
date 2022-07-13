import React from 'react';
import Intro from 'components/Intro';
import Features from 'components/Features';
import Stats from 'components/Stats';
import NewsletterSignup from 'components/NewsletterSignup';
import GetStarted from 'components/GetStarted';

export default function IndexPage() {
  return (
    <>
      <Intro />
      <Features />
      <Stats />
      <GetStarted />
      <NewsletterSignup />
    </>
  );
}
