import Link from 'next/link';
import { DISCORD_URL, REPO_URL, TWITTER_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import Discord from 'assets/discord.svg';
import Twitter from 'assets/twitter.svg';

const items = [
  {
    name: 'GitHub',
    description:
      'Check out the Umami source code, report issues, request features and join discussions.',
    url: REPO_URL,
    icon: <GitHub />,
  },
  {
    name: 'Discord',
    description: "Chat directly with developers and other users in Umami's Discord channel.",
    url: DISCORD_URL,
    icon: <Discord />,
  },
  {
    name: 'Twitter',
    description: 'Follow us on Twitter for the latest news and updates.',
    url: TWITTER_URL,
    icon: <Twitter />,
  },
];

export default function Docs() {
  return (
    <>
      <h1>Introduction</h1>
      <h2>What is Umami?</h2>
      <p>
        Umami is a simple, fast, privacy-focused, open-source analytics solution. It is a great
        alternative to Google Analytics because it gives you total control of your data and does not
        violate the privacy of your users.
      </p>
      <p>
        Check out the <Link href="/docs/getting-started">Getting started</Link> section to get up
        and running in minutes!
      </p>
      <h2>Community</h2>
      <p>
        Need help getting started? Come join our community!
        <ul>
          {items.map(({ name, url }) => {
            return (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
      </p>
    </>
  );
}
