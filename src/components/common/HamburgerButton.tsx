'use client';
import { useState } from 'react';
import { Button } from 'react-basics';
import MobileMenu from './MobileMenu';
import XMark from 'assets/xmark.svg';
import Bars from 'assets/bars.svg';
import styles from './HamburgerButton.module.css';

const menuItems = [
  {
    label: 'Product',
    value: '/product/features',
  },
  {
    label: 'Docs',
    value: '/docs',
  },
  {
    label: 'Developers',
    value: '/developers',
  },
  {
    label: 'Pricing',
    value: '/pricing',
  },
];

export default function HamburgerButton() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(state => !state);
  }

  function handleClose() {
    setActive(false);
  }

  return (
    <>
      <Button variant="quiet" className={styles.button} onClick={handleClick}>
        {active ? <XMark /> : <Bars />}
      </Button>
      {active && <MobileMenu items={menuItems} onClose={handleClose} />}
    </>
  );
}