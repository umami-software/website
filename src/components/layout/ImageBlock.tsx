import classNames from 'classnames';
import styles from './ImageBlock.module.css';

export default function ImageBlock({ children, className = '' }) {
  return <div className={classNames(styles.block, className)}>{children}</div>;
}
