import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import '@/styles/variables.css';
import '@/styles/global.css';
import Header from '@/app/(campaigns)/Header';
import Footer from '@/app/(campaigns)/Footer';
import styles from './layout.module.css';

export default function CampaignLayout({ children }) {
  return (
    <html lang="en" data-scroll="0">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-website-id="86d4095c-a2a8-4fc8-9521-103e858e2b41"
            data-domains="oravo.is"
            src="/a/script.js"
          />
        )}
      </head>
      <body className={styles.body}>
        <Suspense>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Oravo vs. Google Analytics',
};
