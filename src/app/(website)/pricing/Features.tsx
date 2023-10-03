'use client';
import { Fragment } from 'react';
import { Icon } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import styles from './Features.module.css';

const features = [
  {
    label: 'Data',
    items: [['Ingest (included)', '10K', '100K to 50M', 'Custom']],
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
    </div>
  );
}
