import { Column, Heading, Text } from '@umami/react-zen';
import { ReactNode } from 'react';

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: ReactNode;
}) {
  return (
    <Column gap="4" alignItems="center" paddingTop="6" paddingBottom="8">
      <Heading size="1" as="h1">
        {title}
      </Heading>
      {description && (
        <Text size="3" color="muted">
          {description}
        </Text>
      )}
    </Column>
  );
}
