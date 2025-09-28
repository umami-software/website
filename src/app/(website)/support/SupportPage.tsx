'use client';
import { Column, Heading } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';

export default function SupportPage() {
  return (
    <>
      {/* Modern Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          animation: 'float 60s ease-in-out infinite'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Support
          </h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Support services available for Oravo Analytics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Contact Card */}
        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '4rem 3rem',
          boxShadow: 'var(--shadow-soft)',
          transition: 'all 0.15s ease',
          marginBottom: '3rem'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '2rem'
          }}>
            📧
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#000'
          }}>
            Get in Touch
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#555',
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}>
            Have questions or need help with Oravo Analytics? We're here to assist you.
          </p>
          
          <a
            href="mailto:oravo@imoogleai.xyz"
            style={{
              display: 'inline-block',
              background: '#000',
              color: 'white',
              padding: '1.25rem 2.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.25rem',
              transition: 'all 0.15s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            oravo@imoogleai.xyz
          </a>
        </div>

        {/* Quick Help Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: 'var(--shadow-soft)',
            transition: 'all 0.15s ease',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#000' }}>
              Quick Start
            </h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Get up and running with Oravo in minutes
            </p>
          </div>

          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: 'var(--shadow-soft)',
            transition: 'all 0.15s ease',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#000' }}>
              Documentation
            </h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Comprehensive guides and API reference
            </p>
          </div>

          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: 'var(--shadow-soft)',
            transition: 'all 0.15s ease',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#000' }}>
              Community
            </h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Join our community for tips and discussions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}