'use client';
import { Row, Icon, Text } from '@umami/react-zen';
import Link from 'next/link';
import Logo from 'assets/logo.svg';

export default function CompanyLogo() {
  return (
    <Row alignItems="center" gap="sm">
      <Icon size="sm">
        <Logo />
      </Icon>
      <Text size="xl" weight="bold">
        <Link href="/">umami</Link>
      </Text>
    </Row>
  );
}
