import React from 'react';
import Intro from 'components/Intro';
import Features from 'components/Features';
import Stats from 'components/Stats';
import NewsletterSignup from '../components/NewsletterSignup';

export default function IndexPage() {
  return (
    <>
      <Intro />
      <Features />
      <Stats />
      <NewsletterSignup />
    </>
  );
}
