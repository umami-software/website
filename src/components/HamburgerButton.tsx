'use client';
import { Button, Icon, Icons, DialogTrigger, Modal, Dialog } from '@umami/react-zen';
import MobileMenu from '@/components/MobileMenu';
import styles from './HamburgerButton.module.css';

export default function HamburgerButton({ items }) {
  return (
    <DialogTrigger>
      <Button variant="quiet" className={styles.button}>
        <Icon>
          <Icons.Menu />
        </Icon>
      </Button>
      <Modal>
        <Dialog>
          {({ close }) => {
            return <MobileMenu items={items} onClose={close} />;
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
