import React from 'react';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="menu">
      <h3>Introduction</h3>
      <ul>
        <li>
          <Link href="/docs/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/features">
            <a>Features</a>
          </Link>
        </li>
      </ul>
      <h3>Getting started</h3>
      <ul>
        <li>
          <Link href="/docs/install">
            <a>Installation</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/add-a-website">
            <a>Add a website</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/collect-data">
            <a>Collect data</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/add-an-account">
            <a>Add an account</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/enable-share-url">
            <a>Enable share URL</a>
          </Link>
        </li>
      </ul>
      <h3>Guides</h3>
      <ul>
        <li>
          <Link href="/docs/hosting">
            <a>Hosting</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
