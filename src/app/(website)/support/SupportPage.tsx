'use client';
import { Column, Heading } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';

export default function SupportPage() {
  return (
    <section>
      <PageHeader title="Support" description="Support services available for Umami Cloud" />
      <Column justifyContent="center">
        <Heading align="center">
          <a href="mailto:ai@imoogle.ru">ai@imoogle.ru</a>
        </Heading>
      </Column>
    </section>
  );
}
