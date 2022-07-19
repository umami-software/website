import Link from 'next/link';
import GitHub from 'assets/github.svg';
import Twitter from 'assets/twitter.svg';
import Discord from 'assets/discord.svg';
import styles from './SocialMedia.module.css';
import { REPO_URL, DISCORD_URL, TWITTER_URL } from '../lib/constants';

const links = [
  { name: 'GitHub', url: REPO_URL, icon: <GitHub /> },
  { name: 'Discord', url: DISCORD_URL, icon: <Discord /> },
  { name: 'Twitter', url: TWITTER_URL, icon: <Twitter /> },
];

export default function SocialMedia() {
  return (
    <div className={styles.links}>
      {links.map(({ name, url, icon }) => (
        <Link key={url} href={url}>
          <a target="_blank" title={name}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  );
}
