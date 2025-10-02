import { Row, Icon, Text } from '@umami/react-zen';
import Link from 'next/link';
import { Logo } from 'src/components/svg';

export default function CompanyLogo() {
  return (
    <Row alignItems="center" gap="2">
      <Icon size="sm">
        <Logo />
      </Icon>
      <Text size="4" weight="bold">
        <Link href="/">oravo</Link>
      </Text>
    </Row>
  );
}
