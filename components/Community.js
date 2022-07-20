import classNames from 'classnames';
import { Button } from 'react-basics';
import GitHub from 'assets/github.svg';
import Discord from 'assets/discord.svg';
import Twitter from 'assets/twitter.svg';
import styles from './Community.module.css';
import { REPO_URL, DISCORD_URL, TWITTER_URL } from '../lib/constants';
import Link from 'next/link';

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

export default function Community() {
  return (
    <div className={classNames('container', styles.community)}>
      <div className="row justify-content-evenly">
        {items.map(({ name, description, url, icon }) => (
          <div key={name} className={classNames('col-10 col-md-5 col-xl-3', styles.block)}>
            <h2>
              {icon} {name}
            </h2>
            <p>{description}</p>
            <Link href={url}>
              <a target="_blank">
                <Button variant="primary" className={`umami--click--community-${name}`}>
                  Explore
                </Button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
