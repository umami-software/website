import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DocsIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/about');
  }, []);

  return null;
}
