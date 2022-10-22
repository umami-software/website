import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from 'components/Layout';
import 'react-basics/dist/esm/index.css';
import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
