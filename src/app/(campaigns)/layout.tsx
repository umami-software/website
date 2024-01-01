import { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import 'react-basics/dist/styles.css';
import 'styles/variables.css';
import 'styles/index.css';
import React, { Suspense } from 'react';
import Header from 'app/(campaigns)/Header';
import Footer from 'app/(campaigns)/Footer';
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
          <>
            <script
              async
              data-website-id="86d4095c-a2a8-4fc8-9521-103e858e2b41"
              src="/a/script.js"
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11312352810"></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-11312352810');`}
            </script>
          </>
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
  title: 'Umami vs. Google Analytics',
};
