'use client';
import { Icon, Icons } from 'react-basics';
import styles from './AnnouncementBanner.module.css';
import { useEffect, useState } from 'react';

export default function AnnouncementBanner({ name = 'accouncement', children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const value = window.localStorage.getItem('announcement_disabled');
    setShow(value !== name);
  }, [name]);

  const handleClick = () => {
    window.localStorage.setItem('announcement_disabled', name);
    setShow(false);
  };

  return show ? (
    <div className={styles.banner}>
      {children}
      <Icon className={styles.close} onClick={handleClick}>
        <Icons.Close />
      </Icon>
    </div>
  ) : null;
}
