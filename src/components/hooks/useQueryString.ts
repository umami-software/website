import { useSearchParams } from 'next/navigation';

export default function useQueryString(params: object = {}, prefix = '?') {
  const searchParams = new URLSearchParams();
  const existingParams = useSearchParams();

  const entries = Object.entries(params);

  if (entries.length > 0) {
    for (const [key, value] of entries) {
      searchParams.append(key, value);
    }
  }

  for (const [key, value] of existingParams.entries()) {
    searchParams.append(key, value);
  }

  return `${searchParams.size ? prefix : ''}${searchParams}`;
}
