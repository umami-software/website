import { CONTENT_URL } from '@/lib/constants';

export default function ContentImage({ src, alt, ...props }: any) {
  return <img {...props} src={src.startsWith('/') ? `${CONTENT_URL}${src}` : src} alt={alt} />;
}
