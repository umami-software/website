import { Metadata } from 'next';
import { getFile } from '@/lib/content';
import Markdown from '@/components/Markdown';
import PageLinks from '../components/PageLinks';
import styles from './page.module.css';

const FOLDER = 'src/content/docs';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string[] };
}): Promise<Metadata> {
  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  return {
    title: {
      absolute: `${doc?.title} – Umami`,
      default: 'Umami',
    },
  };
}

export default async function ({ params: { id = [] } }: { params: { id: string[] } }) {
  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  if (!doc) {
    return <h1>Page not found</h1>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Markdown>{doc?.body}</Markdown>
      </div>
      <PageLinks items={doc?.anchors} offset={150} />
    </div>
  );
}
