'use client';
import { Column, Row } from 'react-basics';
import Hero from './Hero';
import Statements from './Statements';
import Stats from 'components/common/Stats';
import GetStartedBanner from 'components/common/GetStartedBanner';
import NewsletterSignup from 'components/common/NewsletterSignup';
import React from 'react';

export default function Page() {
  return (
    <>
      <Row>
        <Column>
          <Hero />
        </Column>
      </Row>
      <Row>
        <Column>
          <Statements />
          <Stats />
        </Column>
      </Row>
      <Row>
        <Column>
          <GetStartedBanner />
          <NewsletterSignup />
        </Column>
      </Row>
    </>
  );
}
