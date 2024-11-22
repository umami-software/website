'use client';
import Link from 'next/link';
import { Column, Row, Button } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader>
        <h1>Contact</h1>
        <p>We would love to hear from you!</p>
      </PageHeader>
      <Row wrap="wrap">
        <ContactForm />
        <Row alignItems="center" justifyContent="center">
          <Column alignItems="center" gap="12" style={{ marginTop: '3rem' }}>
            <Column alignItems="center" gap="6">
              <h3>Interested in learning more?</h3>
              <Button variant="primary" asChild>
                <Link href="https://calendly.com/mikecao/umami-demo" target="_blank">
                  Book a demo meeting
                </Link>
              </Button>
            </Column>
            <Column alignItems="center" gap="6">
              <h3>Connect with us</h3>
              <SocialMedia size="lg" />
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
}
