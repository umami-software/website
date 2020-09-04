import React from 'react';
import Link from 'next/link';

const menu = {
  Introduction: [
    ['About', '/docs/about'],
    ['Features', '/docs/features'],
    ['FAQ', '/docs/faq'],
  ],
  'Getting started': [
    ['Install', '/docs/install'],
    ['Login', '/docs/login'],
    ['Add a website', '/docs/add-a-website'],
    ['Collect data', '/docs/collect-data'],
    ['Add an account', '/docs/add-an-account'],
    ['Enable share URL', '/docs/enable-share-url'],
    ['Track events', '/docs/track-events'],
    ['Updates', '/docs/updates'],
  ],
  Guides: [
    ['Hosting', '/docs/hosting'],
    ['Running on DigitalOcean', '/docs/running-on-digitalocean'],
    ['Running on Vercel', '/docs/running-on-vercel'],
  ],
};

export default function Menu() {
  return (
    <div className="menu">
      {Object.keys(menu).map(key => (
        <>
          <h3>{key}</h3>
          <ul>
            {menu[key].map(([text, url]) => (
              <li key={url}>
                <Link href={url}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
