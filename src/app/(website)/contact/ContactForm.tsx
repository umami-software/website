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
    return <h2 style={{ width: 500, margin: 'auto' }}>Thank you! We will get in touch shortly.</h2>;
  }

  return (
    <Form onSubmit={handleSubmit} style={{ width: 500, margin: 'auto' }}>
      <FormField name="name" rules={{ required: 'Required' }}>
        <TextField label="Full name" name="name" placeholder="John Smith" />
      </FormField>
      <FormField name="email" rules={{ required: 'Required' }}>
        <TextField label="Work email" name="email" placeholder="john@company.com" />
      </FormField>
      <FormField name="title">
        <TextField label="Title" name="title" placeholder="Software Engineer" />
      </FormField>
      <FormField name="company">
        <TextField label="Company" name="company" placeholder="Company, Inc." />
      </FormField>
      <FormField name="size">
        <Select label="Company size" placeholder="Select a value" items={items} />
      </FormField>
      <FormField name="comment" rules={{ required: 'Required' }}>
        <TextArea
          label="Tell us about your use case"
          name="comment"
          style={{ resize: 'vertical', height: 200 }}
        />
      </FormField>
      <FormSubmitButton variant="primary">Submit</FormSubmitButton>
    </Form>
  );
}
