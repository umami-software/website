'use client';
import Link from 'next/link';
import GitHub from 'assets/github.svg';
import Twitter from 'assets/twitter.svg';
import Discord from 'assets/discord.svg';
import LinkedIn from 'assets/linkedin.svg';
import styles from './SocialMedia.module.css';
import { GITHUB_URL, DISCORD_URL, TWITTER_URL, LINKEDIN_URL } from 'lib/constants';

const links = [
  { name: 'GitHub', url: GITHUB_URL, icon: <GitHub /> },
  { name: 'Discord', url: DISCORD_URL, icon: <Discord /> },
  { name: 'Twitter', url: TWITTER_URL, icon: <Twitter /> },
  { name: 'LinkedIn', url: LINKEDIN_URL, icon: <LinkedIn /> },
];

export default function SocialMedia() {
  return (
    <div className={styles.links}>
      {links.map(({ name, url, icon }) => (
        <Link key={url} href={url} target="_blank" title={name} data-umami-event={`social-${name}`}>
          {icon}
        </Link>
      ))}
    </div>
  );
}
