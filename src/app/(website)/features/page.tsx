import { Metadata } from 'next';
import FeaturesPage from './FeaturesPage';

export default function () {
  return (
    <article>
      <FeaturesPage />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Features',
};
