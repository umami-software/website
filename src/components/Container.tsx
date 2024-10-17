import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Container.module.css';

export default function Container({
  children,
  className,
  isFluid = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  isFluid?: boolean;
}) {
  return (
    <div {...props} className={classNames(styles.container, className, isFluid && styles.fluid)}>
      {children}
    </div>
  );
}
