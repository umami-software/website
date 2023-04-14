import React from 'react';
import Link from 'next/link';

const menu = {
  Basics: [
    ['About', '/docs/about'],
    ['Getting started', '/docs/getting-started'],
    ['Install', '/docs/install'],
    ['Login', '/docs/login'],
    ['Add a website', '/docs/add-a-website'],
    ['Collect data', '/docs/collect-data'],
    ['Add an account', '/docs/add-an-account'],
    ['Enable share URL', '/docs/enable-share-url'],
    ['Track events', '/docs/track-events'],
    ['Teams', '/docs/teams'],
    ['Updates', '/docs/updates'],
    ['Languages', '/docs/languages'],
    ['FAQ', '/docs/faq'],
    ['Useful links', '/docs/useful-links'],
  ],
  Advanced: [
    ['Tracker configuration', '/docs/tracker-configuration'],
    ['Tracker functions', '/docs/tracker-functions'],
    ['Environment variables', '/docs/environment-variables'],
    ['API', '/docs/api'],
    ['Authentication', '/docs/authentication'],
    ['Users', '/docs/users'],
    ['Teams', '/docs/teams'],
    ['Websites', '/docs/websites'],
    ['Website Data', '/docs/website-data'],
    ['Send', '/docs/send'],
  ],
  Guides: [
    ['Migrating V1 to V2', '/docs/migrate-v1-v2'],
    ['Hosting', '/docs/hosting'],
    ['Running on DigitalOcean', '/docs/running-on-digitalocean'],
    ['Running on Vercel', '/docs/running-on-vercel'],
    ['Running on Netlify', '/docs/running-on-netlify'],
    ['Running on Heroku', '/docs/running-on-heroku'],
    ['Running on Railway', '/docs/running-on-railway'],
    ['Running on Supabase', '/docs/running-on-supabase'],
    ['Running on PlanetScale', '/docs/running-on-planetscale'],
    ['Running on Qovery', '/docs/running-on-qovery'],
    ['Running on CapRover', '/docs/running-on-caprover'],
    ['Running on Koyeb', '/docs/running-on-koyeb'],
    ['Running on Forge', '/docs/running-on-forge'],
  ],
};

export default function Menu() {
  return (
    <menu className="menu">
      <h2>Documentation</h2>
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
    </menu>
  );
}
