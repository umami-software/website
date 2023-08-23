import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface Props {
  items: {
    label: string;
    value: string;
  }[];
  onClose: () => void;
}

export default function MobileMenu({ items = [], onClose }: Props) {
  return createPortal(
    <div className={classNames(styles.menu)}>
      <div className={styles.items}>
        {items.map(({ label, value }) => (
          <Link key={value} href={value} className={styles.item} onClick={onClose}>
            {label}
          </Link>
        ))}
      </div>
    </div>,
    document.body,
  );
}
