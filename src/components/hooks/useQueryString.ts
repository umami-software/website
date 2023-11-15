import { useSearchParams } from 'next/navigation';

export default function useQueryString(params: object = {}) {
  const searchParams = new URLSearchParams();
  const existingParams = useSearchParams();

  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, value);
  }

  for (const [key, value] of existingParams.entries()) {
    searchParams.append(key, value);
  }

  return searchParams.size ? `?${searchParams}` : '';
}
