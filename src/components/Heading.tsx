import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  align?: 'start' | 'center' | 'end';
}

const sizeClasses = {
  xl: 'text-[max(48px,min(5vw,76px))]',
  lg: 'text-[max(48px,min(5vw,64px))]',
  md: 'text-[max(32px,min(5vw,48px))]',
  sm: 'text-[max(24px,min(2vw,32px))]',
  xs: 'text-[max(18px,min(2vw,24px))]',
};

const alignClasses = {
  start: 'text-start',
  center: 'text-center',
  end: 'text-end',
};

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
      className={classNames(
        'font-extrabold tracking-[-0.05em] leading-[1.2] m-4',
        sizeClasses[size],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </div>
  );
}
