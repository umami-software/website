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
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            data-website-id="86d4095c-a2a8-4fc8-9521-103e858e2b41"
            src="https://analytics.umami.is/script.js"
          />
        )}
      </Head>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
