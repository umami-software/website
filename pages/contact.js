import Link from 'next/link';

export default function ContactPage() {
  return (
    <article>
      <header>
        <h1>Contact</h1>
        <p>We would love to hear from you!</p>
        <h5>
          <Link href="mailto:hello@umami.is">hello@umami.is</Link>
        </h5>
      </header>
    </article>
  );
}
