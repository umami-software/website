'use client';
import { useState } from 'react';
import { Icons, Icon, Text } from 'react-basics';
import classNames from 'classnames';
import Menu from './Menu';
import styles from './Nav.module.css';

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.button} onClick={() => setShow(!show)}>
        <Text>Menu</Text>
        <Icon>
          <Icons.ChevronDown />
        </Icon>
      </div>
      <div className={classNames(styles.menu, { [styles.show]: show })}>
        <Menu onClick={() => setShow(false)} />
      </div>
    </div>
  );
}
