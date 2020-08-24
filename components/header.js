import React from 'react';
import Link from 'next/link';
import Github from 'assets/github.svg';

export default function Header() {
  return (
    <header className="container">
      <h1>
        <Link href="/">
          <a className="header-link">umami</a>
        </Link>
      </h1>
      <div className="umami--click--github-button">
        <a href="https://github.com/mikecao/umami">
          <Github className="icon" />
        </a>
      </div>
    </header>
  );
}
