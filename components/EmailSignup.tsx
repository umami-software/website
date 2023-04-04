import React, { useState } from 'react';
import { Button, Row, Column, TextField } from 'react-basics';
import CheckCircle from 'assets/check-circle.svg';
import styles from './EmailSignup.module.css';

interface Props {
  type: string;
  title: string;
  buttonText?: string;
  successText?: string;
  children: React.ReactNode;
}

export default function EmailSignup({
  title,
  children,
  type,
  buttonText = 'Subscribe',
  successText = 'Thanks!',
}: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClick = async () => {
    if (email) {
      await fetch('https://telemetry.umami.is/api/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
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
        <h1>{title}</h1>
        <p>{children}</p>
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
            <Button
              variant="primary"
              data-umami-event={`signup-email-${type}`}
              onClick={handleClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
        {submitted && (
          <div className={styles.confirm}>
            <CheckCircle />
            <span>{successText}</span>
          </div>
        )}
      </Column>
    </Row>
  );
}
