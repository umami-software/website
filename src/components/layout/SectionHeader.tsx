import { HTMLAttributes, ReactNode } from 'react';
import styles from './SectionHeader.module.css';
import TextBlock from 'components/layout/TextBlock';
import classNames from 'classnames';

export default function SectionHeader({
  children,
  className,
  size = 'md',
  align = 'center',
  ...props
}: {
  children: ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
  align?: 'start' | 'center' | 'end';
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <TextBlock
      {...props}
      className={classNames(styles.header, className)}
      size={size}
      align={align}
    >
      {children}
    </TextBlock>
  );
}
