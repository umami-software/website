export default function ContentImage({ src, alt, ...props }: any) {
  return <img {...props} src={src} alt={alt} />;
}
