import { Metadata } from 'next';
import Contact from './Contact';

export default function () {
  return (
    <article>
      <Contact />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Contact – umami',
};
