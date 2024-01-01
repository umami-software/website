import { Metadata } from 'next';
import Creators from './Creators';

export default function () {
  return (
    <article>
      <Creators />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'For Creators',
};
