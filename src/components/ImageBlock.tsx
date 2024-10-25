import classNames from 'classnames';
import styles from './ImageBlock.module.css';

export default function ImageBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={classNames(styles.image, className)}>{children}</div>;
}
