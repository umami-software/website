import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Markdown({ children }) {
  // @ts-expect-error Server Component
  return <MDXRemote source={children as any} />;
}
