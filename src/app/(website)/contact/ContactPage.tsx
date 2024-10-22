'use client';
import Link from 'next/link';
import { Column, Row, Text, Button } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import ContactForm from './ContactForm';
import SocialMedia from 'components/SocialMedia';

export default function ContactPage() {
  return (
    <Row alignItems="center">
      <Column alignItems="center" grow={1}>
        <PageHeader>
          <h1>Contact</h1>
          <p>We would love to hear from you!</p>
        </PageHeader>
        <ContactForm />
      </Column>
      <Column alignItems="center" grow={1} gap="xl">
        <Column alignItems="center" gap="lg">
          <Text size="lg" weight="bold" type="muted">
            Interested in learning more?
          </Text>
          <Button variant="primary" asChild>
            <Link href="https://calendly.com/mikecao/umami-demo" target="_blank">
              Book a demo meeting
            </Link>
          </Button>
        </Column>
        <Column alignItems="center" gap="lg">
          <Text size="lg" weight="bold" type="muted">
            Connect with us
          </Text>
          <SocialMedia size="lg" />
        </Column>
      </Column>
    </Row>
  );
}
