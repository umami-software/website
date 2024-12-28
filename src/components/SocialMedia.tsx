'use client';
import { Icon } from '@umami/react-zen';
import Link from 'next/link';
import { Github, X, Discord, Linkedin } from '@/components/icons';
import styles from './SocialMedia.module.css';
import { GITHUB_URL, DISCORD_URL, X_URL, LINKEDIN_URL } from '@/lib/constants';

const links = [
  { name: 'GitHub', url: GITHUB_URL, icon: <Github /> },
  { name: 'Discord', url: DISCORD_URL, icon: <Discord /> },
  { name: 'X', url: X_URL, icon: <X /> },
  { name: 'LinkedIn', url: LINKEDIN_URL, icon: <Linkedin /> },
];

export default function SocialMedia({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  return (
    <div className={styles.links}>
      {links.map(({ name, url, icon }) => (
        <Link key={url} href={url} target="_blank" title={name} data-umami-event={`social-${name}`}>
          <Icon size={size}>{icon}</Icon>
        </Link>
      ))}
    </div>
  );
}
