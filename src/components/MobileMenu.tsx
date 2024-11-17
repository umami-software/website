'use client';
import { Button, Icon, Icons } from '@umami/react-zen';
import classNames from 'classnames';
import Link from 'next/link';
import { createPortal } from 'react-dom';
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
      <Button className={styles.close} onPress={onClose}>
        <Icon>
          <Icons.Close />
        </Icon>
      </Button>
      <div className={styles.items}>
        {items.map(({ label, value }) => (
          <Link key={value} href={value} className={styles.item} onClick={onClose} prefetch>
            {label}
          </Link>
        ))}
      </div>
    </div>,
    document.body,
  );
}
