'use client';
import { useState, useRef } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import { Copy } from 'src/components/svg';
import styles from './Pre.module.css';

const Pre = (props: any) => {
  const textInput = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);

    navigator?.clipboard?.writeText(textInput?.current?.textContent);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <pre ref={textInput} className={styles.container}>
      {props.children}
      <button aria-label="Copy code" className={styles.button} onClick={handleCopy}>
        <Icon>
          {copied ? <Icons.Check className={styles.check} /> : <Copy className={styles.copy} />}
        </Icon>
      </button>
    </pre>
  );
};

export default Pre;
