import { Metadata } from 'next';
import About from './About';

export default function AboutPage() {
  return (
    <article>
      <About />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'About',
};
