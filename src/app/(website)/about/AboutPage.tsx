'use client';
import PageHeader from '@/components/PageHeader';
import { Box } from '@umami/react-zen';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Company" />
      <Box style={{ margin: 'auto', maxWidth: '600px', padding: '2rem', lineHeight: '1.8' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000' }}>About Oravo</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            Founded in Ibadan, Nigeria in 2025
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#000' }}>Our Mission</h3>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
            Oravo was founded with the belief that users should be empowered by the software they use. 
            We believe that powerful analytics should be accessible to everyone, regardless of budget or technical expertise.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#000' }}>Our Vision</h3>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
            Our mission is to bring high quality, privacy-focused analytics solutions to as many people as possible. 
            We're committed to providing a completely free platform that respects user privacy while delivering 
            powerful insights that help businesses grow.
          </p>
        </div>

        <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#000' }}>Always Free, Always Private</h3>
          <p style={{ fontSize: '1rem', color: '#555', margin: '0' }}>
            At Oravo, we believe that great analytics shouldn't come with a price tag. That's why our platform 
            is completely free, with no hidden costs, no subscription fees, and no usage limits.
          </p>
        </div>
      </Box>
    </>
  );
}
