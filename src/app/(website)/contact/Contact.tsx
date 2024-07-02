'use client';
import PageHeader from 'components/layout/PageHeader';
import ContactForm from './ContactForm';

export default function Contact() {
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
