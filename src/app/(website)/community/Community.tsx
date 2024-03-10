'use client';
import LinkButton from 'components/common/LinkButton';
import PageHeader from 'components/layout/PageHeader';
import { REPO_URL, DISCORD_URL, X_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';
import Discord from 'assets/discord.svg';
import X from 'assets/x.svg';
import styles from './Community.module.css';

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
    name: 'X',
    description: 'Follow us on X for the latest news and updates.',
    url: X_URL,
    icon: <X />,
  },
];

export default function Community() {
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
