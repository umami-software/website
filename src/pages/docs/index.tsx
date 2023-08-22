import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DocsIndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('docs/getting-started');
  }, []);

  return null;
};

export default DocsIndexPage;
