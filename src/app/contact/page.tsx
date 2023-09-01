'use client';
import Link from 'next/link';
import PageHeader from 'components/layout/PageHeader';

export default function ContactPage() {
  return (
    <article>
      <PageHeader>
        <h1>Contact</h1>
        <p>We would love to hear from you!</p>
        <h2>
          <Link href="mailto:hello@umami.is">hello@umami.is</Link>
        </h2>
      </PageHeader>
    </article>
  );
}
