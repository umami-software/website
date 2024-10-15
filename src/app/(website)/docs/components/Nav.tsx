'use client';
import { useState } from 'react';
import { Button, Icons, Icon, Text } from '@umami/react-zen';
import classNames from 'classnames';
import Menu from './Menu';
import styles from './Nav.module.css';

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.nav}>
      <Button className={styles.button} onPress={() => setShow(!show)}>
        <Text>Menu</Text>
        <Icon rotate={90} size="xs">
          <Icons.Chevron />
        </Icon>
      </Button>
      <div className={classNames(styles.menu, { [styles.show]: show })}>
        <Menu onClick={() => setShow(false)} />
      </div>
    </div>
  );
}
