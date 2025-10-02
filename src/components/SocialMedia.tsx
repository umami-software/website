'use client';
import { Icon, Row } from '@umami/react-zen';
import Link from 'next/link';
import { X, Discord, Linkedin } from 'src/components/svg';
import { DISCORD_URL, X_URL, LINKEDIN_URL } from '@/lib/constants';

const links = [
  { name: 'Discord', url: DISCORD_URL, icon: <Discord /> },
  { name: 'X', url: X_URL, icon: <X /> },
  { name: 'LinkedIn', url: LINKEDIN_URL, icon: <Linkedin /> },
];

export default function SocialMedia({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  return (
    <Row gap>
      {links.map(({ name, url, icon }) => (
        <Link key={url} href={url} target="_blank" title={name} data-oravo-event={`social-${name}`}>
          <Icon size={size}>{icon}</Icon>
        </Link>
      ))}
    </Row>
  );
}
