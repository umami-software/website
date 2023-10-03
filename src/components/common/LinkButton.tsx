import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Icon, Text } from 'react-basics';
import styles from './LinkButton.module.css';

export interface LinkButtonProps {
  href: string;
  icon?: ReactElement;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'none';
  size?: 'lg' | 'none';
  children: ReactNode;
}

export function LinkButton({
  href,
  icon,
  target,
  rel,
  variant = 'none',
  size = 'none',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={classNames(styles.button, { [styles[variant]]: true, [styles[size]]: true })}
      href={href}
      target={target}
      rel={rel}
    >
      {icon && <Icon>{icon}</Icon>}
      <Text>{children}</Text>
    </Link>
  );
}

export default LinkButton;
