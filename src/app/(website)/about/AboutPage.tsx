'use client';
import PageHeader from '@/components/PageHeader';
import { Box } from '@umami/react-zen';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Company" />
      <Box style={{ margin: 'auto', width: 500 }}>
        <p>
          Oravo was founded with the belief that users should be empowered by the software they use.
        </p>
        <p>
          Our mission is to bring high quality, privacy-focused analytics solutions to as many people as possible.
        </p>
      </Box>
    </>
  );
}
