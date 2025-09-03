'use client';
import PageHeader from '@/components/PageHeader';
import { Box } from '@umami/react-zen';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Company" />
      <Box style={{ margin: 'auto', width: 500 }}>
        <p>
          Oravo Analytics was founded on the belief that software should be effortless, 
          empowering users without the hassle of signups complexity.
        </p>
        <p>
          Our mission is to bring high-quality, free solutions to as many people as possible.
        </p>
      </Box>
    </>
  );
}
