import Features from './Features';
import PageHeader from 'components/layout/PageHeader';

export default function FeaturesPage() {
  return (
    <article>
      <PageHeader>
        <h1>Features</h1>
        <p>
          Umami is packed with amazing features that enable you to better
          <br /> understand your website traffic.
        </p>
      </PageHeader>
      <Features />
    </article>
  );
}
