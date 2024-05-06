import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from 'mdx-components';

export default function Markdown({ children }) {
  const mdxComponents = useMDXComponents({});
  // @ts-expect-error Server Component
  return <MDXRemote source={children as any} components={{ ...mdxComponents }} />;
}
