'use client';
import PageHeader from 'components/layout/PageHeader';

export default function BlogPage() {
  return (
    <article>
      <PageHeader>
        <h1>Stop using Google Analytics</h1>
      </PageHeader>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11312352810"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11312352810');`}
      </script>
    </article>
  );
}
