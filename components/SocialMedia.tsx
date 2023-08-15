import Link from 'next/link';
import GitHub from 'assets/github.svg';
import X from 'assets/x.svg';
import Discord from 'assets/discord.svg';
import styles from './SocialMedia.module.css';
import { REPO_URL, DISCORD_URL, X_URL } from '../lib/constants';

const links = [
  { name: 'GitHub', url: REPO_URL, icon: <GitHub /> },
  { name: 'Discord', url: DISCORD_URL, icon: <Discord /> },
  { name: 'X', url: X_URL, icon: <X /> },
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
