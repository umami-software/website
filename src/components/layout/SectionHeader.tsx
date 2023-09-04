import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './SectionHeader.module.css';

export default function SectionHeader({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(styles.header, className)}>
      {children}
    </div>
  );
}
