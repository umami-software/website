import { Select, Form, FormField, FormSubmitButton, TextArea, TextField } from '@umami/react-zen';
import { useState } from 'react';

const items = ['Less than 20', '20-49', '50-499', '500+'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = async (data: any) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem 1rem',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-soft)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
          Message Sent Successfully!
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', margin: 0 }}>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FormField label="Full name" name="name" rules={{ required: 'Required' }}>
        <TextField placeholder="John Smith" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Work email" name="email" rules={{ required: 'Required' }}>
        <TextField placeholder="john@company.com" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Title" name="title">
        <TextField placeholder="Software Engineer" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Company" name="company">
        <TextField placeholder="Company, Inc." style={{ width: '100%' }} />
      </FormField>
      <FormField label="Company size" name="size">
        <Select placeholder="Select a value" items={items} style={{ width: '100%' }} />
      </FormField>
      <FormField
        label="Tell us about your use case"
        name="comment"
        rules={{ required: 'Required' }}
      >
        <TextArea style={{ height: 300, width: '100%', maxWidth: 400 }} />
      </FormField>
      <FormSubmitButton 
        variant="primary" 
        style={{
          background: '#000',
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#333';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#000';
        }}
      >
        Submit
      </FormSubmitButton>
    </Form>
  );
}
