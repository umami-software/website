import React from 'react';
import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import 'react-basics/dist/react-basics.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
