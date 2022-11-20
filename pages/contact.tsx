import { NextPage } from 'next';
import Link from 'next/link';

const ContactPage: NextPage = () => {
  return (
    <article>
      <header>
        <h1>Contact</h1>
        <p>We would love to hear from you!</p>
        <h2>
          <Link href="mailto:hello@umami.is">hello@umami.is</Link>
        </h2>
      </header>
    </article>
  );
};

export default ContactPage;
