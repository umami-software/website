import React from 'react';
import { NextPage } from 'next';
import Intro from 'components/Intro';
import Statements from 'components/Statements';
import Stats from 'components/Stats';
import NewsletterSignup from 'components/NewsletterSignup';
import GetStarted from 'components/GetStarted';
import Splash from 'components/Splash';
import { Column, Container } from 'react-basics';

const IndexPage: NextPage = () => {
  return (
    <>
      <Container>
        <Column>
          <Intro />
        </Column>
      </Container>
      <Splash />
      <Container>
        <Column>
          <Statements />
          <Stats />
        </Column>
      </Container>
      <Splash />

      <Container>
        <Column>
          <GetStarted />
          <NewsletterSignup />
        </Column>
      </Container>
    </>
  );
};

export default IndexPage;
