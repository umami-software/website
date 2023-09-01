'use client';
import { useState } from 'react';
import { Button, Column, Row, TextField } from 'react-basics';
import TextBlock from 'components/layout/TextBlock';
import CheckCircle from 'assets/check-circle.svg';
import styles from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClick = async () => {
    if (email) {
      await fetch('https://api.umami.is/v1/emails/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email,
        }),
      });

      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Row className={styles.container}>
      <Column defaultSize={8} xs={12} sm={12} md={12}>
        <TextBlock>
          <h1>Don't miss out!</h1>
          <p>
            Join the Umami newsletter to stay up to date on the latest news, features and updates.
          </p>
        </TextBlock>
      </Column>
      <Column defaultSize={4} xs={12} sm={12} md={12} className={styles.form}>
        {!submitted && (
          <div className={styles.input}>
            <TextField
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            <Button variant="primary" data-umami-event="newsletter-signup" onClick={handleClick}>
              Subscribe
            </Button>
          </div>
        )}
        {submitted && (
          <div className={styles.confirm}>
            <CheckCircle />
            <span>Thank you!</span>
          </div>
        )}
      </Column>
    </Row>
  );
}
