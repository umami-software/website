'use client';
import { useState, useRef } from 'react';
import Clipboard from 'assets/clipboard.svg';
import styles from './Pre.module.css';

const Pre = (props: any) => {
  const textInput = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput?.current?.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className={styles.container}>
      {hovered && (
        <button aria-label="Copy code" className={styles.button} onClick={onCopy}>
          {copied ? <Clipboard className={styles.clipboard} /> : <Clipboard />}
        </button>
      )}
      <pre>{props.children}</pre>
    </div>
  );
};

export default Pre;
