import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `umami - ${title}` : 'umami'}</title>
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="d0059975-b79a-4f83-8926-ed731475fded"
            src="https://app.umami.is/script.js"
          />
        )}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
