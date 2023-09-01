import { Metadata } from 'next';
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Footer from 'components/layout/Footer';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import 'react-basics/dist/styles.css';
import 'styles/variables.css';
import 'styles/index.css';

export default function RootLayout({ children }) {
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
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'umami',
};
