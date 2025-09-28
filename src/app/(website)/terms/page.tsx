'use client';
import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Row } from '@umami/react-zen';
import Terms from './terms-of-service.mdx';

export default function TermsPage() {
  return (
    <>
      <PageHeader 
        title="Terms of Service" 
        description="Our commitment to fair and transparent service"
      />
      
      {/* Hero Section */}
      <Row justifyContent="center" style={{ padding: '0 20px', marginBottom: '3rem' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0'
          }}>
            Clear, fair terms that protect both you and us. 
            We believe in transparency and building trust through honest communication.
          </p>
        </div>
      </Row>

      {/* Content Container */}
      <div style={{ 
        padding: '0 20px', 
        maxWidth: '900px', 
        margin: '0 auto',
        marginBottom: '4rem'
      }}>
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '3rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)'
        }}>
          <article className="mdx" style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: 'var(--color-text)'
          }}>
            <Terms />
          </article>
        </div>

        {/* Key Points Summary */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.3rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--color-text)'
          }}>
            Key Points
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚖️</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Fair Usage</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Reasonable limits and fair play
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔄</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Easy Cancellation</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Cancel anytime, no questions asked
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Service Reliability</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                99.9% uptime commitment
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📞</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Support Access</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Always here to help
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--color-text)'
          }}>
            Questions About Our Terms?
          </h3>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            marginBottom: '1.5rem',
            fontSize: '1rem'
          }}>
            We're happy to clarify any part of our terms of service.
          </p>
          <a 
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'var(--color-accent)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}


