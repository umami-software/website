'use client';
import { Column, Heading } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';

export default function SupportPage() {
  return (
    <section>
      <PageHeader title="Support" description="Support services available for Oravo Cloud" />
      <Column justifyContent="center">
        <Heading align="center">
          <a href="mailto:oravo@imoogleai.xyz">oravo@imoogleai.xyz</a>
        </Heading>
      </Column>
    </section>
  );
}
