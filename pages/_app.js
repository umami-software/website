import React from 'react';
import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import 'react-basics/dist/react-basics.css';
import Layout from 'components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
