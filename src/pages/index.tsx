import React from 'react';
import { NextPage } from 'next';
import Intro from 'components/pages/home/Intro';
import Statements from 'components/pages/home/Statements';
import Stats from 'components/pages/home/Stats';
import NewsletterSignup from 'components/common/NewsletterSignup';
import GetStarted from 'components/pages/home/GetStarted';
import Splash from 'components/common/Splash';
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
