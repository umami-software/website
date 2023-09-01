import styles from './PageHeader.module.css';

export default function PageHeader({ children }) {
  return <header className={styles.header}>{children}</header>;
}
