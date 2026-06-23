import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold tracking-tight">{children}</h1>
    ),
    p: ({ children }) => (
      <p className="leading-8 text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a className="font-medium underline underline-offset-4" href={href}>
        {children}
      </a>
    ),
    ...components,
  };
}
