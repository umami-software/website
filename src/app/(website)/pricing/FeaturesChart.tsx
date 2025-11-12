'use client';
import { Fragment } from 'react';
import {
  Icon,
  Column,
  Text,
  Table,
  TableRow,
  TableColumn,
  TableCell,
  TableHeader,
  Icons,
  TableBody,
} from '@umami/react-zen';

const featuresChart = [
  {
    label: 'Data',
    items: [
      ['Events (included)', '100K', '1 million', 'Custom'],
      ['Additional events', false, '$0.00002 per event', 'Custom'],
      ['Data export', true, true, true],
      ['Data import', false, true, true],
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
      ['Breakdown', true, true, true],
      ['Funnel Analysis', true, true, true],
      ['User Retention', true, true, true],
      ['UTM parameters', true, true, true],
      ['Goals', true, true, true],
      ['User Journey', true, true, true],
      ['Revenue', true, true, true],
      ['Attribution', true, true, true],
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
      ['Onboarding assistance', false, false, true],
      ['Designated support engineer', false, false, true],
    ],
  },
];

export default function Features() {
  return (
    <Column>
      <Table>
        <TableHeader>
          <TableColumn align="center"></TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Hobby
            </Text>
          </TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Pro
            </Text>
          </TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Enterprise
            </Text>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {featuresChart.map(({ label, items }) => {
            return (
              <Fragment key={label}>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Text weight="bold" size="5">
                      {label}
                    </Text>
                  </TableCell>
                </TableRow>
                {items.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      {item.map((data, i) => {
                        return (
                          <TableCell key={i} align={i > 0 ? 'center' : 'start'}>
                            {data === true ? (
                              <Icon>
                                <Icons.Check />
                              </Icon>
                            ) : (
                              data
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </Column>
  );
}
