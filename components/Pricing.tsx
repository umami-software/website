import { Fragment } from 'react';
import classNames from 'classnames';
import { Button, Row, Column, Icon } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import styles from './Pricing.module.css';
import Link from 'next/link';

const features = [
  {
    label: 'Data',
    items: [
      ['Ingest (included)', '10K', '100K', '1M', '50M'],
      ['Overage', '', '$0.00005 / event', '$0.00004 / event', '$0.00003 / event'],
    ],
  },
  {
    label: 'Analytics',
    items: [
      ['Websites', 'Limited', true, true, true],
      ['Teams', false, true, true, true],
      ['Events', true, true, true, true],
      ['Custom data', true, true, true, true],
      ['Segments', false, true, true, true],
      ['Goals', false, true, true, true],
    ],
  },
  {
    label: 'Advanced analysis',
    items: [
      ['API access', false, true, true, true],
      ['A/B testing', false, true, true, true],
      ['Heatmaps', false, false, true, true],
      ['Session recording', false, false, true, true],
      ['White label', false, false, true, true],
      ['Forms', false, false, true, true],
    ],
  },
  {
    label: 'Reports',
    items: [
      ['Insights', false, true, true, true],
      ['Flows', false, true, true, true],
      ['Funnels', false, true, true, true],
      ['Retention', false, true, true, true],
      ['Cohorts', false, true, true, true],
    ],
  },
  {
    label: 'Monitoring',
    items: [
      ['Realtime events', true, true, true, true],
      ['Custom dashboards', false, true, true, true],
      ['Email alerts', false, false, true, true],
    ],
  },
  {
    label: 'Security',
    items: [
      ['Two-factor authentication', false, false, true, true],
      ['Access controls', false, false, false, true],
      ['SAML (SSO)', false, false, false, true],
    ],
  },
  {
    label: 'Support',
    items: [
      ['Email support', false, true, true, true],
      ['Dedicated support', false, false, true, true],
      ['Support SLAs', false, false, false, true],
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <Row className={styles.pricing}>
        <Column className={classNames(styles.tier)}>
          <div className={styles.title}>Hobby</div>
          <div className={styles.description}>Up to 10K monthly events</div>
          <div className={styles.price}>
            <b>Free</b>
          </div>
          <ul>
            <li>
              <Checkmark /> Up to 3 websites
            </li>
            <li>
              <Checkmark /> 6 month data retention
            </li>
            <li>
              <Checkmark /> Community support
            </li>
          </ul>
          <div className={styles.button}>
            <Link href="/pricing">
              <a>
                <Button variant="secondary">Get Started</Button>
              </a>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier)}>
          <div className={styles.title}>Basic</div>
          <div className={styles.description}>100K monthly events included</div>
          <div className={styles.price}>
            <b>$9</b> / month
          </div>
          <ul>
            <li>
              <Checkmark /> Unlimited websites
            </li>
            <li>
              <Checkmark /> Unlimited team members
            </li>
            <li>
              <Checkmark /> 2 year data retention
            </li>
            <li>
              <Checkmark /> Email support
            </li>
          </ul>
          <div className={styles.button}>
            <Link href="/pricing">
              <a>
                <Button variant="secondary">Get Started</Button>
              </a>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier)}>
          <div className={styles.title}>Business</div>
          <div className={styles.description}>1M monthly events included</div>
          <div className={styles.price}>
            <b>$49</b> / month
          </div>
          <ul>
            <li>
              <Checkmark /> Unlimited websites
            </li>
            <li>
              <Checkmark /> Unlimited team members
            </li>
            <li>
              <Checkmark /> 7 year data retention
            </li>
            <li>
              <Checkmark /> Dedicated support
            </li>
          </ul>
          <div className={styles.button}>
            <Link href="/pricing">
              <a>
                <Button variant="secondary">Get Started</Button>
              </a>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier, styles.cloud)}>
          <div className={styles.title}>Enterprise</div>
          <div className={styles.description}>50M monthly events included</div>
          <div className={styles.price}>
            <b>$999</b> / month
          </div>
          <ul>
            <li>
              <Checkmark /> Unlimited websites
            </li>
            <li>
              <Checkmark /> Unlimited team members
            </li>
            <li>
              <Checkmark /> Custom data retention
            </li>
            <li>
              <Checkmark /> Dedicated support & SLAs
            </li>
          </ul>
          <div className={styles.button}>
            <Link href="/pricing">
              <a>
                <Button variant="secondary">Contact Us</Button>
              </a>
            </Link>
          </div>
        </Column>
      </Row>
      <Row className={styles.features}>
        <Column>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Hobby</th>
                <th>Basic</th>
                <th>Business</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map(({ label, items }) => {
                return (
                  <Fragment key={label}>
                    <tr>
                      <td className={styles.header}>
                        <h2>{label}</h2>
                      </td>
                    </tr>
                    {items.map((item, index) => {
                      return (
                        <tr key={index}>
                          {item.map((data, x) => {
                            return (
                              <td key={x}>
                                {data === true ? (
                                  <Icon size="xl">
                                    <Checkmark />
                                  </Icon>
                                ) : (
                                  data
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </Column>
      </Row>
    </>
  );
}
