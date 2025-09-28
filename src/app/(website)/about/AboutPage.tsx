'use client';
import PageHeader from '@/components/PageHeader';
import { Column, Grid, Row } from '@umami/react-zen';

const values = [
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'We believe privacy is a fundamental right. Our analytics never compromise user privacy or collect personal data.'
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Lightning-fast analytics that don\'t slow down your website. Real-time insights delivered instantly.'
  },
  {
    icon: '🌍',
    title: 'Open Source',
    description: 'Transparency through open source. Our code is available for everyone to inspect, contribute to, and trust.'
  },
  {
    icon: '🎯',
    title: 'Simplicity',
    description: 'Complex analytics made simple. Get the insights you need without the complexity you don\'t want.'
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Built by developers, for developers. We listen to our community and evolve based on real needs.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Constantly pushing the boundaries of what\'s possible in privacy-first analytics and user experience.'
  }
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    description: 'Former Google Analytics engineer with 10+ years in data analytics and privacy technology.',
    image: '👨‍💻'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    description: 'Full-stack developer and privacy advocate. Previously led engineering teams at privacy-focused startups.',
    image: '👩‍💻'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Product',
    description: 'Product strategist with expertise in user experience and analytics tools. Former PM at major SaaS companies.',
    image: '👨‍🎨'
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Growth',
    description: 'Marketing and growth expert focused on ethical, privacy-respecting user acquisition strategies.',
    image: '👩‍💼'
  }
];

const milestones = [
  {
    year: '2021',
    title: 'Founded',
    description: 'Oravo Analytics was born from the need for privacy-first analytics solutions.'
  },
  {
    year: '2022',
    title: 'Open Source',
    description: 'Released our core analytics engine as open source, gaining community trust and contributions.'
  },
  {
    year: '2023',
    title: '10K+ Websites',
    description: 'Reached 10,000+ websites using Oravo for their analytics needs.'
  },
  {
    year: '2024',
    title: 'Enterprise Ready',
    description: 'Launched enterprise features and achieved SOC 2 compliance for large organizations.'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Oravo" 
        description="Building the future of privacy-first analytics" 
      />
      
      {/* Hero Section */}
      <Row justifyContent="center" style={{ padding: '0 20px', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--color-text)', 
            lineHeight: '1.6',
            margin: '0 0 2rem 0',
            fontWeight: '500'
          }}>
            We're on a mission to democratize web analytics while protecting user privacy. 
            Founded on the belief that powerful insights shouldn't come at the cost of user trust.
          </p>
        </div>
      </Row>

      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Mission Statement */}
        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-medium)',
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '2rem',
            color: 'var(--color-text)'
          }}>
            Our Mission
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontStyle: 'italic'
          }}>
            "To provide world-class analytics tools that respect user privacy, 
            empower website owners with actionable insights, and prove that 
            you don't need to sacrifice privacy for powerful analytics."
          </p>
          <div style={{ 
            width: '60px', 
            height: '2px', 
            background: 'var(--color-accent)', 
            margin: '0 auto' 
          }} />
        </div>

        {/* Values */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Our Values
          </h2>
          
          <Grid columns={{ xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="4">
            {values.map((value, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'center',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-text-muted)', 
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </Grid>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Our Journey
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Column gap="4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-soft)',
                    position: 'relative'
                  }}
                >
                  <Row gap="4" alignItems="center">
                    <div style={{
                      background: 'var(--color-accent)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      minWidth: '60px',
                      textAlign: 'center'
                    }}>
                      {milestone.year}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem',
                        color: 'var(--color-text)'
                      }}>
                        {milestone.title}
                      </h3>
                      <p style={{ 
                        color: 'var(--color-text-muted)', 
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        {milestone.description}
                      </p>
                    </div>
                  </Row>
                </div>
              ))}
            </Column>
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            Meet Our Team
          </h2>
          
          <Grid columns={{ xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap="4">
            {team.map((member, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'center',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1rem',
                  filter: 'grayscale(0.2)'
                }}>
                  {member.image}
                </div>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)'
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  color: 'var(--color-accent)', 
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  color: 'var(--color-text-muted)', 
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {member.description}
                </p>
              </div>
            ))}
          </Grid>
        </div>

        {/* Call to Action */}
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
            Join Our Mission
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--color-text-muted)', 
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Ready to experience analytics that respects privacy? Join thousands of websites 
            already using Oravo to understand their users without compromising trust.
          </p>
          <Row justifyContent="center" gap="3" style={{ flexWrap: 'wrap' }}>
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
              Get Started Today
            </a>
            <a 
              href="/features"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
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
              Explore Features
            </a>
          </Row>
        </div>
      </div>
    </>
  );
}
