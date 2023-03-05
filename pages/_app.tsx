import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from 'components/Layout';
import 'react-basics/dist/styles.css';
import 'styles/variables.css';
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
