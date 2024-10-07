import type { MDXComponents } from 'mdx/types';
import Link, { LinkProps } from 'next/link';
import Pre from '@/components/Pre';
import ContentImage from '@/components/ContentImage';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    a: props => <Link {...(props as LinkProps)} />,
    pre: Pre,
    img: ContentImage,
    ...components,
  };
}
