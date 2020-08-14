import React from 'react';
import Github from 'assets/github.svg';

export default function Header() {
  return (
    <header className="container">
      <h1>umami</h1>
      <a href="https://github.com/mikecao/umami"><Github className="icon" /></a>
    </header>
  );
}
