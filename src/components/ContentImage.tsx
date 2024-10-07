import { CONTENT_URL } from '@/lib/constants';

export default function ContentImage({ src, alt, ...props }: any) {
  return <img {...props} src={`${CONTENT_URL}${src}`} alt={alt} />;
}
