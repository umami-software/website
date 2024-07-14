'use client';
import LinkButton from 'components/common/LinkButton';
import PageHeader from 'components/layout/PageHeader';
import { GITHUB_URL, DISCORD_URL, X_URL, LINKEDIN_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import Discord from 'assets/discord.svg';
import X from 'assets/x.svg';
import LinkedIn from 'assets/linkedin.svg';
import styles from './CommunityPage.module.css';

const items = [
  {
    name: 'GitHub',
    description:
      'Check out the Umami source code, report issues, request features and join discussions.',
    url: GITHUB_URL,
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
    url: X_URL,
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    description: 'Learn about our company.',
    url: LINKEDIN_URL,
    icon: <LinkedIn />,
  },
];

export default function CommunityPage() {
  return (
    <section>
      <PageHeader>
        <h1>Community</h1>
        <p>Get help with issues, discuss ideas and share your feedback.</p>
      </PageHeader>
      <div className={styles.items}>
        {items.map(({ name, description, url, icon }) => (
          <div key={name} className={styles.item}>
            <header>
              {icon} {name}
            </header>
            <p>{description}</p>
            <LinkButton
              href={url}
              target="_blank"
              variant="secondary"
              data-umami-event={`community-${name}`}
            >
              Explore
            </LinkButton>
          </div>
        ))}
      </div>
    </section>
  );
}
