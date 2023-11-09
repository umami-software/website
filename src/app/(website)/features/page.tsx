import { Metadata } from 'next';
import Features from './Features';

export default function () {
  return (
    <article>
      <Features />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Features – umami',
};
