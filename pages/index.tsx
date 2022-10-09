import React from 'react';
import Intro from 'components/Intro';
import Statements from 'components/Statements';
import Stats from 'components/Stats';
import NewsletterSignup from 'components/NewsletterSignup';
import GetStarted from 'components/GetStarted';
import Splash from 'components/Splash';

export default function IndexPage() {
  return (
    <>
      <div className="container">
        <Intro />
      </div>
      <Splash />
      <div className="container">
        <Statements />
        <Stats />
      </div>
      <Splash />
      <div className="container">
        <GetStarted />
        <NewsletterSignup />
      </div>
    </>
  );
}
