import { NextPage } from 'next';
import Features from 'components/Features';

const FeaturesPage: NextPage = () => {
  return (
    <article className="container">
      <header>
        <h1>Features</h1>
        <p>
          Umami is packed with amazing features that enable you to better understand your website
          visitors.
        </p>
      </header>
      <Features />
    </article>
  );
};

export default FeaturesPage;
