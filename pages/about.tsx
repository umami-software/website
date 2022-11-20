import { NextPage } from 'next';
import { Column, Container } from 'react-basics';

const About: NextPage = () => {
  return (
    <Container center>
      <Column size={8}>
        <article>
          <header>
            <h1>Company</h1>
          </header>
          <h1>Values</h1>
          <p>
            Umami was founded with the belief that users should be empowered by the software they
            use and should not have to give up fundamental rights like privacy and data ownership in
            exchange.
          </p>
          <p>
            Our mission is to bring quality, privacy-focused open source solutions to as many people
            as possible.
          </p>
          <h1>Team</h1>
          <p>
            Umami was founded by three brothers, Mike, Brian and Francis Cao. Together they have
            extensive experience building and delivering large-scale applications and contributing
            to open source.
          </p>
          <p>They get along most of the time.</p>
        </article>
      </Column>
    </Container>
  );
};

export default About;
