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
    return <h2 style={{ maxWidth: 400, width: '100%', margin: 'auto', padding: '0 20px', textAlign: 'center' }}>Thank you! We will get in touch shortly.</h2>;
  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 400, width: '100%', margin: 'auto', padding: '0 20px' }}>
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
      <FormSubmitButton variant="primary">Submit</FormSubmitButton>
    </Form>
  );
}
