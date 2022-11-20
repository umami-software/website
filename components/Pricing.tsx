import classNames from 'classnames';
import { Button, Container, Column } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import Tools from 'assets/tools.svg';
import Cloud from 'assets/cloud.svg';
import styles from './Pricing.module.css';
import Link from 'next/link';

export default function Pricing() {
  return (
    <>
      <Container className={styles.pricing}>
        <Column xs={12} sm={12} size={6} className={classNames(styles.tier)}>
          <div className={styles.title}>
            <Tools /> Umami Open Source
          </div>
          <div className={styles.description}>self-hosted</div>
          <div className={styles.price}>Free</div>
          <ul>
            <li>
              <Checkmark /> Unlimited websites
            </li>
            <li>
              <Checkmark /> Unlimited accounts
            </li>
            <li>
              <Checkmark /> 100% data ownership
            </li>
            <li>
              <Checkmark /> Your own infrastructure
            </li>
            <li>
              <Checkmark /> Community support
            </li>
          </ul>
          <div className={styles.button}>
            <Link href="/docs/getting-started">
              <a>
                <Button variant="secondary">Get Started</Button>
              </a>
            </Link>
          </div>
        </Column>
        <Column xs={12} sm={12} size={6} className={classNames(styles.tier, styles.cloud)}>
          <div className={styles.title}>
            <Cloud /> Umami Cloud
          </div>
          <div className={styles.description}>managed hosting</div>
          <div className={styles.price}>Coming Soon</div>
          <ul>
            <li>
              <Checkmark /> Unlimited websites
            </li>
            <li>
              <Checkmark /> Unlimited accounts
            </li>
            <li>
              <Checkmark /> 100% data ownership
            </li>
            <li>
              <Checkmark /> Fast global insfrastructure
            </li>
            <li>
              <Checkmark /> Dedicated support
            </li>
          </ul>
        </Column>
      </Container>
      <Container center>
        <Column className={styles.signup} size={6} xs={12} sm={12} md={8}>
          <h2>Umami Cloud BETA</h2>
          <p>Umami Cloud is currently running an open BETA program.</p>
          <p>
            You can try out all the features for <b>free</b> before we launch.
          </p>
          <div className={styles.button}>
            <Link href="https://cloud.umami.is/signup">
              <a className="button umami--click--cloud-beta-button" target="_blank">
                <Button variant="primary">Sign up for Umami Cloud</Button>
              </a>
            </Link>
          </div>
        </Column>
      </Container>
    </>
  );
}
