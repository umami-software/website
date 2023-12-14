import { Metadata } from 'next';
import Marketers from './Marketers';

export default function () {
  return (
    <article>
      <Marketers />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'For Marketers',
};
