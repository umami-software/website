import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>umami{title && ` - ${title}`}</title>
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
