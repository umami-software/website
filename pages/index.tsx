import React from 'react';
import { NextPage } from 'next';
import Intro from 'components/Intro';
import Statements from 'components/Statements';
import Stats from 'components/Stats';
import NewsletterSignup from 'components/NewsletterSignup';
import GetStarted from 'components/GetStarted';
import Splash from 'components/Splash';
import { Column, Row } from 'react-basics';

const IndexPage: NextPage = () => {
  return (
    <>
      <Row>
        <Column>
          <Intro />
        </Column>
      </Row>
      <Splash />
      <Row>
        <Column>
          <Statements />
          <Stats />
        </Column>
      </Row>
      <Splash />

      <Row>
        <Column>
          <GetStarted />
          <NewsletterSignup />
        </Column>
      </Row>
    </>
  );
};

export default IndexPage;
