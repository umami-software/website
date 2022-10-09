import { NextPage } from 'next';
import Pricing from 'components/Pricing';

const PricingPage: NextPage = () => {
  return (
    <article className="container">
      <header>
        <h1>Pricing</h1>
      </header>
      <Pricing />
    </article>
  );
};

export default PricingPage;
