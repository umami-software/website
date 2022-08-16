import { useState } from 'react';
import { Button, TextField } from 'react-basics';
import classNames from 'classnames';
import CheckCircle from 'assets/check-circle.svg';
import styles from './EmailSignup.module.css';

export default function EmailSignup({
  title,
  children,
  type,
  buttonText = 'Subscribe',
  successText = 'Thanks!',
}) {
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

  return (
    <div className="container">
      <div className={classNames('row align-items-center', styles.form)}>
        <div className="col-sm-12 col-lg-7">
          <h1>{title}</h1>
          <p>{children}</p>
        </div>
        <div className="col-sm-12 col-lg-5">
          {!submitted && (
            <div className={styles.input}>
              <TextField
                name="email"
                value={email}
                onChange={setEmail}
                placeholder="your@email.com"
              />
              <Button
                variant="primary"
                className={`umami--signup--email-${type}`}
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
        </div>
      </div>
    </div>
  );
}
