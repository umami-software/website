import { Button, Row, Column } from "react-basics";
import GitHub from "assets/github.svg";
import Discord from "assets/discord.svg";
import Twitter from "assets/twitter.svg";
import styles from "./Community.module.scss";
import { REPO_URL, DISCORD_URL, TWITTER_URL } from "../lib/constants";
import Link from "next/link";

const items = [
  {
    name: "GitHub",
    description:
      "Check out the Umami source code, report issues, request features and join discussions.",
    url: REPO_URL,
    icon: <GitHub />,
  },
  {
    name: "Discord",
    description:
      "Chat directly with developers and other users in Umami's Discord channel.",
    url: DISCORD_URL,
    icon: <Discord />,
  },
  {
    name: "Twitter",
    description: "Follow us on Twitter for the latest news and updates.",
    url: TWITTER_URL,
    icon: <Twitter />,
  },
];

export default function Community() {
  return (
    <Row className={styles.community}>
      {items.map(({ name, description, url, icon }) => (
        <Column key={name} xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className={styles.block}>
            <h2>
              {icon} {name}
            </h2>
            <p>{description}</p>
            <Link href={url} target="_blank">
              <Button variant="primary" data-umami-event={`community-${name}`}>
                Explore
              </Button>
            </Link>
          </div>
        </Column>
      ))}
    </Row>
  );
}
