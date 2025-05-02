'use client';
import { Button, Icon, Icons, DialogTrigger, Modal, Dialog, Column, Text } from '@umami/react-zen';
import Link from 'next/link';

export default function MobileMenu({ items }) {
  return (
    <DialogTrigger>
      <Button variant="quiet">
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
                  <Link key={value} href={value}>
                    <Text size="4">{label}</Text>
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
