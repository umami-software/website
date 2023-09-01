'use client';
import { Column, Row } from 'react-basics';
import PageHeader from 'components/layout/PageHeader';

export default function AboutPage() {
  return (
    <article>
      <PageHeader>
        <h1>Company</h1>
      </PageHeader>
      <Row justifyContent="center">
        <Column defaultSize={8}>
          <p>
            Umami was founded with the belief that users should be empowered by the software they
            use and should not have to give up fundamental rights like privacy and data ownership in
            exchange.
          </p>
          <p>
            Our mission is to bring quality, privacy-focused open source solutions to as many people
            as possible.
          </p>
        </Column>
      </Row>
    </article>
  );
}
