import styles from './Heading.module.css';
import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  align?: 'start' | 'center' | 'end';
}

export default function Heading({
  children,
  className,
  size = 'lg',
  align = 'start',
  ...props
}: HeadingProps) {
  return (
    <div
      {...props}
      className={classNames(styles.heading, className, {
        [styles[size]]: true,
        [styles[align]]: true,
      })}
    >
      {children}
    </div>
  );
}
