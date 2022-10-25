import { NextPage } from 'next';
import BetaSignup from '../components/BetaSignup';

const BetaPage: NextPage = () => {
  return (
    <article className="container">
      <header>
        <h1>
          Cloud <sub style={{ fontSize: 24 }}>BETA</sub>
        </h1>
      </header>
      <BetaSignup />
    </article>
  );
};

export default BetaPage;
