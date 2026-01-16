import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

export interface TextBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end';
}

const sizeClasses = {
  xl: 'text-2xl',
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
};

const alignClasses = {
  start: 'text-start ml-0',
  center: 'text-center',
  end: 'text-end mr-0',
};

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
      className={classNames(
        '[&_p]:text-font-muted [&_header]:text-primary [&_header]:font-bold [&_strong]:text-font',
        size && sizeClasses[size],
        align && alignClasses[align],
        className,
      )}
    >
      {children}
    </div>
  );
}
