'use client';
import TextBlock, { TextBlockProps } from 'components/layout/TextBlock';
import classNames from 'classnames';
import styles from './PageHeader.module.css';

export default function PageHeader({
  children,
  className,
  size = 'lg',
  align = 'center',
  ...props
}: TextBlockProps) {
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
