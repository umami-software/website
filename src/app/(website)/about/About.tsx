'use client';
import PageHeader from 'components/layout/PageHeader';
import TextBlock from 'components/layout/TextBlock';

export default function About() {
  return (
    <>
      <PageHeader>
        <h1>Company</h1>
      </PageHeader>
      <TextBlock style={{ margin: 'auto' }}>
        <p>
          Umami was founded with the belief that users should be empowered by the software they use
          and should not have to give up fundamental rights like privacy and data ownership in
          exchange.
        </p>
        <p>
          Our mission is to bring quality, privacy-focused open-source solutions to as many people
          as possible.
        </p>
      </TextBlock>
    </>
  );
}
