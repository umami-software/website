'use client';
import PageHeader from '@/components/PageHeader';

export default function SupportPage() {
  return (
    <section>
      <PageHeader title="Support" description="Support services available for Umami Cloud" />
      <div style={{ textAlign: 'center' }}>
        <h2>
          <a href="mailto:support@umami.is">support@umami.is</a>
        </h2>
      </div>
    </section>
  );
}
