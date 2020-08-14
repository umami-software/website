import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Logo from 'assets/logo.svg';

const words = [
  { text: 'simple', color: '#2680eb' },
  { text: 'fast', color: '#44b556' },
  { text: 'beautiful', color: '#6767ec' },
  { text: 'free', color: '#d83790' },
  { text: 'open-source', color: '#9256d9' },
];

export default function Intro() {
  const [word, setWord] = useState(words[0]);
  const transitions = useTransition([word], item => item.text, {
    from: item => ({ color: item.color, opacity: 0, transform: 'translate3d(0,-40px,0)' }),
    enter: item => ({ color: item.color, opacity: 1, transform: 'translate3d(0,0px,0)' }),
    leave: item => ({ color: item.color, opacity: 0, transform: 'translate3d(0,40px,0)' }),
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      const index = words.indexOf(word);
      setWord(index < words.length - 1 ? words[index + 1] : words[0]);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [word]);

  return (
    <div className="intro">
      <div className="row justify-content-center">
        <Logo className="logo" />
      </div>
      <h1 className="row title">
        <div className="col-12 col-md-6">
          <div className="row justify-content-center justify-content-md-end">
            umami<span>is</span>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {transitions.map(({ item, props, key }) => (
            <animated.div className="animated-word pl-5 pl-md-0" key={key} style={props}>
              {item.text}
            </animated.div>
          ))}
        </div>
      </h1>
      <h2 className="row justify-content-center">website analytics made easy</h2>
      <div className="row">
        <div className="col">
          <img src="/intro.png" />
        </div>
      </div>
    </div>
  );
}
