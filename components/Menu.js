import React from 'react';
import Link from 'next/link';

const menu = {
  Basics: [
    ['Getting started', '/docs/getting-started'],
    ['Install', '/docs/install'],
    ['Login', '/docs/login'],
    ['Add a website', '/docs/add-a-website'],
    ['Collect data', '/docs/collect-data'],
    ['Add an account', '/docs/add-an-account'],
    ['Enable share URL', '/docs/enable-share-url'],
    ['Track events', '/docs/track-events'],
    ['Updates', '/docs/updates'],
    ['Languages', '/docs/languages'],
    ['FAQ', '/docs/faq'],
    ['Useful links', '/docs/useful-links'],
  ],
  Advanced: [
    ['Tracker configuration', '/docs/tracker-config'],
    ['Tracker functions', '/docs/tracker-functions'],
    ['Environment variables', '/docs/environment-variables'],
    ['API', '/docs/api'],
  ],
  Guides: [
    ['Hosting', '/docs/hosting'],
    ['Running on DigitalOcean', '/docs/running-on-digitalocean'],
    ['Running on Vercel', '/docs/running-on-vercel'],
    ['Running on Netlify', '/docs/running-on-netlify'],
    ['Running on Heroku', '/docs/running-on-heroku'],
    ['Running on Railway', '/docs/running-on-railway'],
    ['Running on Qovery', '/docs/running-on-qovery'],
    ['Running on CapRover', '/docs/running-on-caprover'],
    ['Running on Koyeb', '/docs/running-on-koyeb'],
    ['Running on PlanetScale', '/docs/running-on-planetscale'],
    ['Running on Supabase', '/docs/running-on-supabase'],
  ],
};

export default function Menu() {
  return (
    <div className="menu">
      {Object.keys(menu).map(key => (
        <React.Fragment key={key}>
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
        </React.Fragment>
      ))}
    </div>
  );
}
