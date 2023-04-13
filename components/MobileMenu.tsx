import classNames from 'classnames';
import Link from 'next/link';
import { Portal } from 'react-basics';
import styles from './MobileMenu.module.css';

interface Props {
  items: {
    label: string;
    value: string;
  }[];
  onClose: () => void;
}

export default function MobileMenu({ items = [], onClose }: Props) {
  return (
    <Portal portalId="__portal-mobile-menu">
      <div className={classNames(styles.menu)}>
        <div className={styles.items}>
          {items.map(({ label, value }) => (
            <Link key={value} href={value}>
              <a className={styles.item} onClick={onClose}>
                {label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Portal>
  );
}
