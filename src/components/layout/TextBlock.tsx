import classNames from 'classnames';
import styles from './TextBlock.module.css';

export default function TextBlock({ children, className = '' }) {
  return <div className={classNames(styles.text, className)}>{children}</div>;
}
