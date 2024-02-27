'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icons, Icon, Text } from 'react-basics';
import classNames from 'classnames';
import Menu from './Menu';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  const isCloud = pathname.includes('/docs/cloud');
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
        <div className={styles.toggle}>
          <a href="/docs" className={classNames({ [styles.active]: !isCloud })}>
            Self-host
          </a>
          <a href="/docs/cloud" className={classNames({ [styles.active]: isCloud })}>
            Cloud
          </a>
        </div>
        <Menu onClick={() => setShow(false)} />
      </div>
    </div>
  );
}
