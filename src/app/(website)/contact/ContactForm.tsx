import {
  Dropdown,
  Form,
  FormInput,
  FormRow,
  Item,
  SubmitButton,
  TextArea,
  TextField,
} from 'react-basics';
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
      <FormRow label="Full name">
        <FormInput name="name" rules={{ required: 'Required' }}>
          <TextField name="name" placeholder="John Smith" />
        </FormInput>
      </FormRow>
      <FormRow label="Work email">
        <FormInput name="email" rules={{ required: 'Required' }}>
          <TextField name="email" placeholder="john@company.com" />
        </FormInput>
      </FormRow>
      <FormRow label="Title">
        <FormInput name="title">
          <TextField name="title" placeholder="Software Engineer" />
        </FormInput>
      </FormRow>
      <FormRow label="Company">
        <FormInput name="company">
          <TextField name="company" placeholder="Company, Inc." />
        </FormInput>
      </FormRow>
      <FormRow label="Company size">
        <FormInput name="size">
          <Dropdown placeholder="Select a value" items={items}>
            {item => <Item key={item}>{item}</Item>}
          </Dropdown>
        </FormInput>
      </FormRow>
      <FormRow label="Tell us about your use case">
        <FormInput name="comment" rules={{ required: 'Required' }}>
          <TextArea name="comment" rows={8} />
        </FormInput>
      </FormRow>
      <SubmitButton variant="primary">Submit</SubmitButton>
    </Form>
  );
}
