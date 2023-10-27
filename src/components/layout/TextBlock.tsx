import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import styles from './TextBlock.module.css';

export interface TextBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  align?: 'start' | 'center' | 'end';
}

export default function TextBlock({
  children,
  className,
  size = 'md',
  align = 'start',
  ...props
}: TextBlockProps) {
  return (
    <div
      {...props}
      className={classNames(styles.text, className, {
        [styles[size]]: true,
        [styles[align]]: true,
      })}
    >
      {children}
    </div>
  );
}
