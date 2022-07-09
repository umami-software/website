import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="d0059975-b79a-4f83-8926-ed731475fded"
            src="https://app.umami.is/script.js"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
