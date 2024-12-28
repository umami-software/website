'use client';
import { Fragment } from 'react';
import { Icon } from '@umami/react-zen';
import { Checkmark } from '@/components/icons';
import styles from './FeaturesChart.module.css';

const featuresChart = [
  {
    label: 'Data',
    items: [
      ['Events (included)', '100K', '1 million', 'Custom'],
      ['Additional events', false, '$0.00002 per event', 'Custom'],
      ['Data import', true, true, true],
      ['Data export', true, true, true],
    ],
  },
  {
    label: 'Analytics',
    items: [
      ['Websites', 'Up to 3', 'Unlimited', 'Unlimited'],
      ['Teams', false, true, true],
      ['Team members', false, 'Unlimited', 'Unlimited'],
      ['Custom events', true, true, true],
      ['Event properties', true, true, true],
      ['Session properties', true, true, true],
      ['API access', 'Limited', true, true],
    ],
  },
  {
    label: 'Reports',
    items: [
      ['Insights', true, true, true],
      ['Funnel Analysis', true, true, true],
      ['User Retention', true, true, true],
      ['UTM parameters', true, true, true],
      ['Goals', true, true, true],
      ['User Journey', true, true, true],
    ],
  },
  {
    label: 'Monitoring',
    items: [
      ['Realtime events', true, true, true],
      ['Custom dashboards', true, true, true],
      ['Email reports', false, true, true],
    ],
  },
  {
    label: 'Privacy',
    items: [
      ['GDPR compliant', true, true, true],
      ['CCPR compliant', true, true, true],
      ['No cookie banners required', true, true, true],
    ],
  },
  {
    label: 'Support',
    items: [
      ['Community support', true, true, true],
      ['Email support', false, true, true],
      ['Enterprise support', false, false, true],
      ['Uptime SLA', false, false, true],
      ['Invoice billing', false, false, true],
      ['Onboarding assistance', false, false, true],
      ['Designated support engineer', false, false, true],
    ],
  },
];

export default function Features() {
  return (
    <div className={styles.features}>
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
          {featuresChart.map(({ label, items }) => {
            return (
              <Fragment key={label}>
                <tr>
                  <td className={styles.header}>{label}</td>
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
    </div>
  );
}
