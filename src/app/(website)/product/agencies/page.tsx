import { Metadata } from 'next';
import Agencies from './Agencies';

export default function () {
  return (
    <article>
      <Agencies />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'For Agencies – umami',
};
