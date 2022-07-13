import { useState } from 'react';
import { Button, TextField } from 'react-basics';
import styles from './NewsletterSignup.module.css';
import classNames from 'classnames';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  return (
    <div className={classNames('row', styles.newsletter)}>
      <div className={classNames('col-12 col-md-7', styles.text)}>
        <h1>Don't miss out</h1>
        <p>
          Join the Umami newsletter to stay up to date on the latest news, features and updates.
        </p>
      </div>
      <div className={classNames('col-12 col-md-5', styles.form)}>
        <TextField
          className={styles.input}
          name="email"
          value={email}
          onChange={setEmail}
          placeholder="your@email.com"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
