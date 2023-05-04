import { Fragment, useState } from 'react';
import classNames from 'classnames';
import { Button, Row, Column, Icon, Icons } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import Link from 'next/link';
import styles from './Pricing.module.css';

const features = [
  {
    label: 'Data',
    items: [
      ['Ingest (included)', '10K', '100K', '1M', '50M'],
      ['Overage', '', '$5 per additional 100K events', '$20 per additional 500K events', 'Custom'],
    ],
  },
  {
    label: 'Analytics',
    items: [
      ['Websites', 'Up to 3', 'Up to 50', 'Unlimited', 'Unlimited'],
      ['Teams', false, true, true, true],
      ['Custom events', true, true, true, true],
      ['Custom data', true, true, true, true],
      ['API access', false, true, true, true],
    ],
  },
  {
    label: 'Monitoring',
    items: [
      ['Realtime events', true, true, true, true],
      ['Custom dashboards', true, true, true, true],
      ['Email alerts', false, false, true, true],
    ],
  },
  {
    label: 'Support',
    items: [
      ['Email support', false, true, true, true],
      ['Dedicated support', false, false, false, true],
    ],
  },
];

const questions = [
  {
    question: 'Does Umami Cloud have a free tier?',
    answer: `Yes! Umami Cloud's Hobby plan is completely free. Great for personal projects and low traffic websites.`,
  },
  {
    question: 'How does the free trial work?',
    answer: `Umami Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan.
      At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period for no cost.`,
  },
  {
    question: 'How will I be billed?',
    answer: `Billing occurs on a monthly basis. If you upgraded to a paid plan via a trial, your first invoice will arrive around 14 days after your trial ends.`,
  },
  {
    question: 'How is usage measured?',
    answer: `Usage is measured by counting hits to a website and any custom events or custom event data stored. Each website hit counts as one event. If you save
    event data, each data property stored counts as one event.`,
  },
  {
    question: 'Where are your servers located?',
    answer: `Umami Cloud servers are located in the EU and adhere to GDPR regulations.`,
  },
  {
    question: 'Can I export my data?',
    answer: `Yes, all of your data can be exported from Umami Cloud.`,
  },
];

export default function Pricing() {
  const signupURL = 'https://cloud.umami.is/signup';

  return (
    <>
      <Row className={styles.pricing}>
        <Column className={classNames(styles.tier)}>
          <div>
            <div className={styles.title}>Hobby</div>
            <div className={styles.price}>
              <b>Free</b>
            </div>
            <div className={styles.description}>Up to 10K monthly events</div>
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
          </div>
          <div className={styles.button}>
            <Link href={signupURL}>
              <Button variant="secondary">Get Started</Button>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier)}>
          <div>
            <div className={styles.title}>Basic</div>
            <div className={styles.price}>
              <b>$9</b> / month
              <div></div>
            </div>
            <div className={styles.description}>
              100K monthly events included
              <br />
              $5 per additional 100K events
            </div>
            <ul>
              <li>
                <Checkmark /> Up to 50 websites
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
          </div>
          <div className={styles.button}>
            <Link href={signupURL}>
              <Button variant="secondary">Try 14-day free trial</Button>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier)}>
          <div>
            <div className={styles.title}>Business</div>
            <div className={styles.price}>
              <b>$49</b> / month
            </div>
            <div className={styles.description}>
              1M monthly events included
              <br />
              $20 per additional 500K events
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
                <Checkmark /> Email support
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <Link href={signupURL}>
              <Button variant="secondary">Try 14-day free trial</Button>
            </Link>
          </div>
        </Column>
        <Column className={classNames(styles.tier, styles.cloud)}>
          <div>
            <div className={styles.title}>Enterprise</div>
            <div className={styles.price}>
              <b>Custom</b>
            </div>
            <div className={styles.description}>Tailored for your business</div>
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
                <Checkmark /> Dedicated support
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <a href="mailto:sales@umami.is?subject=Umami Cloud enterprise pricing">
              <Button variant="secondary">Contact Us</Button>
            </a>
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
      <Row>
        <Column className={styles.faq}>
          <h1>Frequently Asked Questions</h1>
          <div className={styles.questions}>
            {questions.map(({ question, answer }) => {
              return (
                <Question key={question} question={question}>
                  {answer}
                </Question>
              );
            })}
          </div>
        </Column>
      </Row>
    </>
  );
}

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.question} onClick={() => setExpanded(state => !state)}>
      <div>
        <Icon className={styles.icon} rotate={expanded ? 0 : -90}>
          <Icons.ChevronDown />
        </Icon>
        {question}
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
