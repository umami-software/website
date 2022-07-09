import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `umami - ${title}` : 'umami'}</title>
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
