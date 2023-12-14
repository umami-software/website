import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Menu from './Menu';
import styles from './Sidenav.module.css';

export default function Sidenav() {
  const pathname = usePathname();
  const isCloud = pathname.includes('/docs/cloud');

  return (
    <div className={styles.sidenav}>
      <div className={styles.toggle}>
        <a href="/docs" className={classNames({ [styles.active]: !isCloud })}>
          Open-source
        </a>
        <a href="/docs/cloud" className={classNames({ [styles.active]: isCloud })}>
          Cloud
        </a>
      </div>
      <Menu />
    </div>
  );
}
