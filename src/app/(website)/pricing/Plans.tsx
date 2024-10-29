'use client';
import { Button } from '@umami/react-zen';
import Checkmark from '@/assets/checkmark.svg';
import Link from 'next/link';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import styles from './Plans.module.css';

export default function Plans() {
  const query = useQueryString({ ref: 'umami-pricing' });

  const plans = [
    {
      name: 'Hobby',
      price: '$0',
      interval: '/ month',
      description: 'Get started:',
      features: [
        '100K events per month',
        'Up to 3 websites',
        '6 month data retention',
        'Community support',
      ],
      url: `${CLOUD_URL}/signup${query}&plan=hobby`,
      button: 'Get started',
    },
    {
      name: 'Pro',
      price: '$20',
      interval: '/ month',
      description: 'Everything in Hobby, plus:',
      features: [
        '1 million events per month',
        '$0.00002 per additional event',
        'Unlimited websites',
        'Unlimited team members',
        '5 year data retention',
        'Email support',
      ],
      url: `${CLOUD_URL}/signup${query}&plan=pro`,
      button: 'Try 14-day free trial',
      variant: 'primary',
    },
    {
      name: 'Enterprise',
      price: 'Contact us',
      description: 'Everything in Pro, plus:',
      features: [
        'Custom pricing',
        'Custom data retention',
        'Uptime SLA',
        'Invoice billing',
        'Enterprise support',
      ],
      url: 'mailto:sales@umami.is?subject=Umami Cloud enterprise pricing',
      button: 'Contact us',
    },
  ];

  return (
    <div className={styles.plans}>
      {plans.map(
        ({ name, price, interval, description, features, url, button, variant = 'outline' }) => {
          return (
            <div key={name} className={styles.plan}>
              <div>
                <div className={styles.title}>{name}</div>
                <div className={styles.price}>
                  {price}
                  <span className={styles.interval}>{interval}</span>
                </div>
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
                <Button variant={variant as any} asChild>
                  <Link href={url}>{button}</Link>
                </Button>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}
