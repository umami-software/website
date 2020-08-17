import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function DocsIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/docs/about');
  }, []);

  return null;
}