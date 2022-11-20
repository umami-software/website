import styles from './Statements.module.css';
import classNames from 'classnames';
import Lock from 'assets/lock.svg';
import Shield from 'assets/shield.svg';
import Analytics from 'assets/analytics.svg';
import OpenSource from 'assets/open-source.svg';
import { Container, Column } from 'react-basics';

const Block = ({ title, icon, children }) => {
  return (
    <Container className={styles.block}>
      {breakpoint => {
        return (
          <>
            <Column size={6} xs={12} sm={12} className={styles.content}>
              <h1>{title}</h1>
              {children}
            </Column>
            <Column
              size={6}
              xs={12}
              sm={12}
              order={{ xs: -1, sm: -1, md: 0, lg: 0, xl: 0 }}
              className={styles.icon}
            >
              {icon}
              {icon}
            </Column>
          </>
        );
      }}
    </Container>
  );
};

export default function Statements() {
  return (
    <section className={styles.statements}>
      <Block title="Respect data privacy" icon={<Lock />}>
        <p>
          Umami lets you to gather the data you need while respecting the privacy of your users.
          Umami does not collect any personal information, does not use cookies, does not track
          users across websites, and is GDPR compliant.
        </p>
        <p>Best of all, you don't need to display an annoying cookie notice.</p>
      </Block>
      <Block title="Own your data" icon={<Shield />}>
        <p>
          Umami helps you stay compliant with ever changing data privacy laws. All data collected is
          anonymized, making it impossible to identify any individual user. Rest assured knowing
          that your data is securely in your hands.
        </p>
      </Block>
      <Block title="Simple analytics" icon={<Analytics />}>
        <p>
          Umami is easy to use and understand without needing to run complicated reports. Umami
          collects only the metrics you care about and everything fits on a single page.
        </p>
      </Block>
      <Block title="Open source" icon={<OpenSource />}>
        <p>
          Umami is dedicated to open source development. Place your confidence in a product that is
          fully transparent, battle-tested and community supported.
        </p>
      </Block>
    </section>
  );
}
