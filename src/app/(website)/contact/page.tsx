import { Metadata } from 'next';
import ContactPage from './ContactPage';

export default function () {
  return (
    <article>
      <ContactPage />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Contact',
};
