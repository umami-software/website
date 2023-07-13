import { Fragment, useState } from 'react';
import { Button, Row, Column, Icon, Icons, RadioGroup, Radio } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import Link from 'next/link';
import styles from './Pricing.module.css';
import classNames from 'classnames';

const plans = [
  {
    name: 'Hobby',
    price: <strong>Free</strong>,
    description: 'Up to 10K monthly events',
    features: ['Up to 3 websites', '1 year data retention', 'Community support'],
    url: '',
    button: 'Get started',
  },
  {
    name: 'Pro',
    price: (
      <>
        From <strong>$9</strong> / month
      </>
    ),
    description: 'Up to 100M monthly events',
    features: [
      'Unlimited websites',
      'Unlimited team members',
      '7 year data retention',
      'Community support',
    ],
    url: 'https://cloud.umami.is/signup',
    button: 'Try 14-day free trial',
  },
  {
    name: 'Enterprise',
    price: <strong>Custom</strong>,
    description: 'Tailored for your business',
    features: [
      'Unlimited websites',
      'Unlimited team members',
      'Custom data retention',
      'Onboarding support',
      'Desginated support engineer',
    ],
    url: 'mailto:sales@umami.is?subject=Umami Cloud enterprise pricing',
    button: 'Contact us',
  },
];

const tiers = [
  { price: 9, events: '100K' },
  { price: 19, events: '250K' },
  { price: 29, events: '500K' },
  { price: 49, events: '1M' },
  { price: 99, events: '2.5M' },
  { price: 199, events: '5M' },
  { price: 399, events: '10M' },
  { price: 899, events: '25M' },
  { price: 1699, events: '50M' },
  { price: 2999, events: '100M' },
  { price: 0, events: '100M+' },
];

const features = [
  {
    label: 'Data',
    items: [['Ingest (included)', '10K', '100K to 100M', 'Custom']],
  },
  {
    label: 'Analytics',
    items: [
      ['Websites', 'Up to 3', 'Unlimited', 'Unlimited'],
      ['Teams', false, true, true],
      ['Custom events', true, true, true],
      ['Custom data', true, true, true],
      ['API access', false, true, true],
    ],
  },
  {
    label: 'Monitoring',
    items: [
      ['Realtime events', true, true, true],
      ['Custom dashboards', true, true, true],
      ['Email alerts', false, false, true],
    ],
  },
  {
    label: 'Support',
    items: [
      ['Email support', false, true, true],
      ['Uptime SLA', false, false, true],
      ['Onboarding support', false, false, true],
      ['Designated support engineer', false, false, true],
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
    answer: `Billing occurs on either a monthly or annual basis. 
    If you upgraded to a paid plan via a trial, your first invoice will arrive after your trial period ends.`,
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
  // @ts-ignore
  return (
    <>
      <Plans />+
      <PricingCalculator />
      <Features />
      <Faq />
    </>
  );
}

const Plans = () => {
  return (
    <Row className={styles.pricing}>
      {plans.map(({ name, price, description, features, url, button }) => {
        return (
          <Column key={name} className={styles.tier}>
            <div>
              <div className={styles.title}>{name}</div>
              <div className={styles.price}>{price}</div>
              <div className={styles.description}>{description}</div>
              <ul>
                {features.map((feat, index) => {
                  return (
                    <li key={index}>
                      <Checkmark /> {feat}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.button}>
              <Link href={url}>
                <Button variant="secondary">{button}</Button>
              </Link>
            </div>
          </Column>
        );
      })}
    </Row>
  );
};

const PricingCalculator = () => {
  const [tier, setTier] = useState(0);
  const [billing, setBilling] = useState('Monthly');
  const selected = tiers[tier];

  const handleBillingSelect = value => {
    setBilling(value);
  };

  const handleTierSelect = value => {
    setTier(value);
  };

  return (
    <Row>
      <Column>
        <div className={styles.calculator}>
          <h1>Pro plan pricing</h1>
          <div className={styles.toggle}>
            <RadioGroup
              name="billing"
              items={['Monthly', 'Annual']}
              selectedKey={billing}
              onSelect={handleBillingSelect}
              layout="horizontal"
            >
              {item => <Radio key={item}>{item}</Radio>}
            </RadioGroup>
          </div>
          <div className={styles.slider}>
            <input
              className={styles.range}
              type="range"
              min="0"
              max={tiers.length - 1}
              value={tier}
              onChange={e => handleTierSelect(e.target.value)}
            />
            <div className={styles.ticks}>
              {tiers.map(({ events }, index) => (
                <div
                  key={index}
                  className={classNames(styles.tick, { [styles.selected]: +tier === index })}
                  onClick={() => handleTierSelect(index)}
                >
                  {events}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.result}>
            <div className={styles.events}>
              <strong>{selected.events}</strong> events / month
            </div>
            <div className={styles.price}>
              <strong>
                {selected.price > 0
                  ? `$${(selected.price * (billing === 'Annual' ? 10 : 1)).toLocaleString()}`
                  : 'Contact us'}
              </strong>
              {selected.price > 0 && <span> / month</span>}
            </div>
          </div>
        </div>
      </Column>
    </Row>
  );
};

const Features = () => {
  return (
    <Row className={styles.features}>
      <Column>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Hobby</th>
              <th>Pro</th>
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
  );
};

const Faq = () => {
  return (
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
  );
};

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
