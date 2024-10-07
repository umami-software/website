'use client';
import PageHeader from '@/components/PageHeader';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader>
        <h1>Contact</h1>
        <p>We would love to hear from you!</p>
      </PageHeader>
      <ContactForm />
    </>
  );
}
