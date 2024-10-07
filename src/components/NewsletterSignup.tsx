'use client';
import { useState } from 'react';
import { Button, TextField } from 'react-basics';
import TextBlock from '@/components/TextBlock';
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
    <div className={styles.container}>
      <div>
        <TextBlock>
          <h1>Don&apos;t miss out!</h1>
          <p>
            Join the Umami newsletter to stay up to date on the latest news, features and updates.
          </p>
        </TextBlock>
      </div>
      <div className={styles.form}>
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
      </div>
    </div>
  );
}
