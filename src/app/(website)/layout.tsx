import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container, Grid } from '@umami/react-zen';
import Script from 'next/script';
import { AxiomWebVitals } from 'next-axiom';
import Header from './Header';
import Footer from './Footer';
import IntercomChat from '@/components/IntercomChat';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@umami/react-zen/styles.css';
import '@umami/shiso/styles.css';
import 'highlight.js/styles/github-dark.css';
import '@/styles/variables.css';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll="0">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            data-domains="oravo.imoogleai.xyz"
            src="/a/script.js"
          />
        )}
      </head>
      <body>
        <Suspense>
          <Grid rows="1fr auto" height="100vh">
            <Header />
            <Container as="main" style={{ marginTop: '70px', marginBottom: '70px' }}>
              {children}
            </Container>
            <Footer />
          </Grid>
        </Suspense>
        {process.env.NODE_ENV === 'production' && (
          <Script id="koala">
            {`!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_c271ea7cda36bf4824350411f24fad0e76b7/sdk.js"),(document.body || document.head).appendChild(n)}();`}
          </Script>
        )}
        <IntercomChat />
      </body>
      <AxiomWebVitals />
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s – Oravo',
    default: 'Oravo',
  },
  openGraph: {
    description: 'Oravo is a simple, fast, privacy-friendly alternative to Google Analytics.',
  },
};
