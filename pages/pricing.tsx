import { NextPage } from 'next';
import Pricing from 'components/Pricing';

const PricingPage: NextPage = () => {
  return (
    <article>
      <header>
        <h1>Pricing</h1>
        <p>
          <b>Umami Cloud</b> is a reliable, high-performance hosted solution.
        </p>
      </header>
      <Pricing />
    </article>
  );
};

export default PricingPage;
