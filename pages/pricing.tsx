import { NextPage } from 'next';
import Pricing from 'components/Pricing';

const PricingPage: NextPage = () => {
  return (
    <article>
      <header>
        <h1>Pricing</h1>
      </header>
      <Pricing />
    </article>
  );
};

export default PricingPage;
