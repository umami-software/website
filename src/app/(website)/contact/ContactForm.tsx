import { Form, FormField, FormSubmitButton, Select, TextArea, TextField } from '@umami/react-zen';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const items = ['Less than 20', '20-49', '50-499', '500+'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (data: any) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSent(true);
  };

  if (sent) {
    return (
      <h2 style={{ width: '100%', maxWidth: 400, margin: 'auto', padding: '0 1rem' }}>
        Thank you! We will get in touch shortly.
      </h2>
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        margin: 'auto',
      }}
    >
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
        className={styles.formField}
      >
        <TextArea style={{ height: 300 }} className={styles.textArea} />
      </FormField>

      <FormSubmitButton variant="primary">Submit</FormSubmitButton>
    </Form>
  );
}
