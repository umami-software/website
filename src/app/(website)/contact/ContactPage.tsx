'use client';
import { Grid, Column, Row } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Get in Touch" description="Ready to transform your analytics? Let's start the conversation." />
      
      {/* Hero Section */}
      <Row justifyContent="center" style={{ padding: '0 20px', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0'
          }}>
            Whether you're looking to implement privacy-first analytics, need technical support, 
            or want to explore enterprise solutions, we're here to help.
          </p>
        </div>
      </Row>

      {/* Main Content */}
      <Row justifyContent="center" style={{ padding: '0 20px' }}>
        <Grid columns={{ xs: '1fr', lg: '1.2fr 0.8fr' }} maxWidth="1200px" gap="6">
          
          {/* Contact Form */}
          <div style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-medium)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '600' }}>
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <Column gap="6">
            
            {/* Quick Contact */}
            <div style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Quick Contact
              </h3>
              <Column gap="3">
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>
                    EMAIL
                  </h4>
                  <a href="mailto:info@quizstack.qzz.io" style={{ 
                    color: 'var(--color-text)', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}>
                    info@quizstack.qzz.io
                  </a>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>
                    RESPONSE TIME
                  </h4>
                  <p style={{ margin: 0, fontSize: '1rem' }}>
                    Within 24 hours
                  </p>
                </div>
              </Column>
            </div>

            {/* Social Media */}
            <div style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Follow Us
              </h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Stay updated with the latest features and insights
              </p>
              <SocialMedia size="lg" />
            </div>

            {/* Support Options */}
            <div style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Need Help?
              </h3>
              <Column gap="2">
                <a href="/support" style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  background: 'var(--hover-bg)',
                  border: '1px solid var(--hover-border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.15s ease'
                }}>
                  📚 Documentation & Guides
                </a>
                <a href="/features" style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  background: 'var(--hover-bg)',
                  border: '1px solid var(--hover-border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.15s ease'
                }}>
                  ⚡ Feature Overview
                </a>
              </Column>
            </div>

          </Column>
        </Grid>
      </Row>
    </>
  );
}
