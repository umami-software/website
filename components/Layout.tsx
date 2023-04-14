import React from 'react';
import { Container } from 'react-basics';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `umami - ${title}` : 'umami'}</title>
      </Head>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
