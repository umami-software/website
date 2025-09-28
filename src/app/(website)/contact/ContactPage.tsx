'use client';
import Link from 'next/link';
import { Grid, Column, Row, Button } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="We would love to hear from you!" />
      <Row justifyContent="center">
        <Grid columns={{ xs: '1fr', md: '1fr 1fr' }} maxWidth="800px">
          <ContactForm />
          <Column alignItems="center" gap="12" style={{ marginTop: '3rem' }}>
            <Column alignItems="center" gap="6">
              <h3>Interested in learning more?</h3>
              <Button variant="primary" asChild>
                <Link href="https://calendly.com/mikecao/oravo-demo" target="_blank">
                  Book a demo meeting
                </Link>
              </Button>
            </Column>
            <Column alignItems="center" gap="6">
              <h3>Connect with us</h3>
              <SocialMedia size="lg" />
            </Column>
          </Column>
        </Grid>
      </Row>
    </>
  );
}
