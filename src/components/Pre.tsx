'use client';
import { useState, useRef } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import { Copy } from 'src/components/svg';

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
    <pre
      ref={textInput}
      className="relative bg-black p-4 rounded-md whitespace-pre-wrap break-words [&_code]:p-0 [&_code]:bg-transparent"
    >
      {props.children}
      <button
        aria-label="Copy code"
        className="border-0 absolute right-5 top-4 cursor-pointer bg-transparent"
        onClick={handleCopy}
      >
        <Icon>
          {copied ? (
            <Icons.Check className="text-[var(--success-color)]" />
          ) : (
            <Copy className="text-base-4 hover:text-base-1" />
          )}
        </Icon>
      </button>
    </pre>
  );
};

export default Pre;
