import Link from 'next/link';
import GitHub from 'assets/github.svg';
import Twitter from 'assets/twitter.svg';
import Discord from 'assets/discord.svg';
import styles from './SocialMedia.module.css';

const links = [
  { name: 'GitHub', url: 'https://github.com/umami-software', icon: <GitHub /> },
  { name: 'Discord', url: 'https://discord.gg/4dz4zcXYrQ', icon: <Discord /> },
  { name: 'Twitter', url: 'https://twitter.com/umami_software', icon: <Twitter /> },
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
