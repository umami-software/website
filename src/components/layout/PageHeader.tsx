import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './PageHeader.module.css';

export default function PageHeader({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <header {...props} className={classNames(styles.header, className)}>
      {children}
    </header>
  );
}
