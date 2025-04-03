'use client';
import { Box, Heading, Button, Icon, Icons } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import { GITHUB_URL, DISCORD_URL, X_URL, LINKEDIN_URL } from '@/lib/constants';
import { Github, Discord, X, Linkedin } from '@/components/icons';
import styles from './CommunityPage.module.css';

const items = [
  {
    name: 'GitHub',
    description:
      'Check out the Umami source code, report issues, request features and join discussions.',
    url: GITHUB_URL,
    icon: <Github aria-hidden="true" />,
  },
  {
    name: 'Discord',
    description: "Chat directly with developers and other users in Umami's Discord channel.",
    url: DISCORD_URL,
    icon: <Discord aria-hidden="true" />,
  },
  {
    name: 'Twitter',
    description: 'Follow us on Twitter for the latest news and updates.',
    url: X_URL,
    icon: <X aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    description: 'Learn about our company.',
    url: LINKEDIN_URL,
    icon: <Linkedin aria-hidden="true" />,
  },
];

export default function CommunityPage() {
  return (
    <section>
      <PageHeader
        title="Community"
        description="Get help with issues, discuss ideas and share your feedback."
      />
      <div className={styles.items}>
        {items.map(({ name, description, url, icon }) => (
          <Box as="article" key={name} className={styles.item}>
            <Heading as="h2">
              {name} {icon}
            </Heading>
            <Box as="p">
              {description}
            </Box>
            <Box as="div">
              <Button asChild>
                <a href={url} target="_blank" data-umami-event={`community-${name}`}>
                  Explore 
                  <Icon>
                    {
                      // see https://github.com/react-icons/react-icons/issues/1029
                      //@ts-ignore
                      <Icons.Arrow/>
                    }
                  </Icon>
                </a>
              </Button>
            </Box>
          </Box>
        ))}
      </div>
    </section>
  );
}
