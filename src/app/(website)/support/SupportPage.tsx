'use client';
import { Column, Grid, Row } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';

const supportCategories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      { title: 'Installation Guide', description: 'Step-by-step setup instructions', href: '#installation' },
      { title: 'Quick Start Tutorial', description: 'Get up and running in 5 minutes', href: '#quickstart' },
      { title: 'Configuration Options', description: 'Customize Oravo for your needs', href: '#configuration' },
      { title: 'First Analytics Report', description: 'Understanding your first data', href: '#first-report' }
    ]
  },
  {
    title: 'Features & Usage',
    icon: '⚡',
    items: [
      { title: 'Dashboard Overview', description: 'Navigate your analytics dashboard', href: '#dashboard' },
      { title: 'Custom Events', description: 'Track specific user actions', href: '#events' },
      { title: 'Goal Setting', description: 'Define and measure success metrics', href: '#goals' },
      { title: 'Team Management', description: 'Collaborate with your team', href: '#teams' }
    ]
  },
  {
    title: 'Privacy & Compliance',
    icon: '🔒',
    items: [
      { title: 'GDPR Compliance', description: 'How Oravo ensures GDPR compliance', href: '#gdpr' },
      { title: 'Data Anonymization', description: 'Understanding our privacy approach', href: '#anonymization' },
      { title: 'Cookie-Free Tracking', description: 'Analytics without cookies', href: '#cookies' },
      { title: 'Data Export', description: 'Export your analytics data', href: '#export' }
    ]
  },
  {
    title: 'Technical Support',
    icon: '🛠️',
    items: [
      { title: 'API Documentation', description: 'Integrate with our REST API', href: '#api' },
      { title: 'Troubleshooting', description: 'Common issues and solutions', href: '#troubleshooting' },
      { title: 'Performance Optimization', description: 'Optimize tracking performance', href: '#performance' },
      { title: 'Migration Guide', description: 'Migrate from other analytics tools', href: '#migration' }
    ]
  }
];

const faqItems = [
  {
    question: 'How is Oravo different from Google Analytics?',
    answer: 'Oravo is privacy-first, cookie-free, and GDPR compliant by default. We don\'t collect personal data and provide real-time insights without compromising user privacy.'
  },
  {
    question: 'Can I migrate my existing analytics data?',
    answer: 'Yes! We provide migration tools and guides to help you import data from Google Analytics, Adobe Analytics, and other major platforms.'
  },
  {
    question: 'Is there a free plan available?',
    answer: 'We offer a generous free tier for small websites. For larger sites and advanced features, we have affordable paid plans starting at $9/month.'
  },
  {
    question: 'How quickly can I see my analytics data?',
    answer: 'Oravo provides real-time analytics. You\'ll see visitor data and events within seconds of them happening on your website.'
  },
  {
    question: 'Do you offer custom integrations?',
    answer: 'Yes! We provide a comprehensive API and can work with you on custom integrations for enterprise customers.'
  }
];

export default function SupportPage() {
  return (
    <>
      <PageHeader 
        title="Support Center" 
        description="Everything you need to succeed with Oravo Analytics" 
      />
      
      {/* Hero Section */}
      <Row justifyContent="center" style={{ padding: '0 20px', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0'
          }}>
            Find answers, learn best practices, and get the most out of your analytics. 
            Our comprehensive support resources are here to help you every step of the way.
          </p>
        </div>
      </Row>

      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Quick Contact */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            Need Direct Help?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Row justifyContent="center" gap="4" style={{ flexWrap: 'wrap' }}>
            <a 
              href="mailto:oravo@imoogleai.xyz"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
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
              📧 Email Support
            </a>
            <a 
              href="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--hover-bg)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💬 Contact Form
            </a>
          </Row>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '0.9rem', 
            marginTop: '1rem',
            margin: '1rem 0 0 0'
          }}>
            Average response time: 24 hours
          </p>
        </div>

        {/* Documentation Categories */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Documentation
          </h2>
          
          <Grid columns={{ xs: '1fr', md: 'repeat(2, 1fr)' }} gap="4">
            {supportCategories.map((category, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  marginBottom: '1.5rem' 
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    margin: 0,
                    color: 'var(--color-text)'
                  }}>
                    {category.title}
                  </h3>
                </div>
                
                <Column gap="2">
                  {category.items.map((item, itemIndex) => (
                    <a 
                      key={itemIndex}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '0.75rem',
                        background: 'var(--hover-bg)',
                        border: '1px solid var(--hover-border)',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: 'var(--color-text)',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--glass-bg)';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--hover-bg)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ fontWeight: '600', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                        {item.title}
                      </div>
                      <div style={{ 
                        color: 'var(--color-text-muted)', 
                        fontSize: '0.85rem',
                        lineHeight: '1.4'
                      }}>
                        {item.description}
                      </div>
                    </a>
                  ))}
                </Column>
              </div>
            ))}
          </Grid>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Column gap="3">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-soft)'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: 'var(--color-text)'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ 
                    color: 'var(--color-text-muted)', 
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </Column>
          </div>
        </div>

        {/* Community Section */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--color-text)'
          }}>
            Join Our Community
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--color-text-muted)', 
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Connect with other Oravo users, share insights, and get help from our community of analytics experts.
          </p>
          <Row justifyContent="center" gap="3" style={{ flexWrap: 'wrap' }}>
            <a 
              href="#discord"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--hover-bg)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💬 Discord Community
            </a>
            <a 
              href="#github"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--hover-bg)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🐙 GitHub Discussions
            </a>
          </Row>
        </div>
      </div>
    </>
  );
}
