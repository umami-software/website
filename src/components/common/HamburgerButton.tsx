'use client';
import { useState } from 'react';
import { Button, Icon } from 'react-basics';
import MobileMenu from './MobileMenu';
import XMark from 'assets/xmark.svg';
import Bars from 'assets/bars.svg';
import styles from './HamburgerButton.module.css';

export default function HamburgerButton({ items }) {
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
        <Icon>{active ? <XMark /> : <Bars />}</Icon>
      </Button>
      {active && <MobileMenu items={items} onClose={handleClose} />}
    </>
  );
}
