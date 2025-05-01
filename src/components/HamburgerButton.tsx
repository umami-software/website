'use client';
import { Button, Icon, Icons, DialogTrigger, Modal, Dialog, Column, Text } from '@umami/react-zen';
import styles from './HamburgerButton.module.css';
import Link from 'next/link';

export default function HamburgerButton({ items }) {
  return (
    <DialogTrigger>
      <Button variant="quiet" className={styles.button}>
        <Icon>
          <Icons.Menu />
        </Icon>
      </Button>
      <Modal position="bottom" offset="70px">
        <Dialog variant="sheet">
          {({ close }) => {
            return (
              <Column gap="6" padding="6" onClick={close}>
                {items.map(({ label, value }) => (
                  <Link key={value} href={value} className={styles.item}>
                    <Text size="8">{label}</Text>
                  </Link>
                ))}
              </Column>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
