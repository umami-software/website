'use client';
import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Row } from '@umami/react-zen';
import Privacy from './privacy-policy.mdx';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        description="How we protect your privacy and handle your data"
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
            At Oravo, privacy isn't just a feature—it's our foundation. 
            Learn how we protect your data and respect your users' privacy.
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
            <Privacy />
          </article>
        </div>

        {/* Quick Summary */}
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
            Privacy at a Glance
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚫</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>No Cookies</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Cookie-free tracking
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>GDPR Compliant</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Fully compliant by design
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👤</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Anonymous Data</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                No personal information
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏠</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Data Ownership</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Your data, your control
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


