'use client';
import { Icon, Icons } from '@umami/react-zen';
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
    <div className="text-[var(--light50)] bg-primary flex items-center justify-center gap-[60px] py-2 text-sm font-bold [&_a]:text-[var(--light50)] [&_a:hover]:text-[var(--light50)] [&_a:active]:text-[var(--light50)] [&_a:visited]:text-[var(--light50)]">
      {children}
      <Icon onClick={handleClick}>
        <Icons.Close />
      </Icon>
    </div>
  ) : null;
}
