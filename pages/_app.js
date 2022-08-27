import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from 'components/Layout';
import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import 'react-basics/dist/esm/index.css';

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
