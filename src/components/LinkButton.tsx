import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { Button, Icon, Text } from '@umami/react-zen';

export interface LinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: ReactElement;
  target?: string;
  rel?: string;
  variant?: string;
  size?: string;
  className?: string;
  children: ReactNode;
}

export function LinkButton({
  href,
  icon,
  target,
  rel,
  variant = 'none',
  size = 'none',
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Button variant={variant as any} size={size as any} asChild>
      <Link {...props} className={className} href={href} target={target} rel={rel}>
        {icon && <Icon>{icon as any}</Icon>}
        <Text>{children as any}</Text>
      </Link>
    </Button>
  );
}

export default LinkButton;
