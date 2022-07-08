import { useState } from 'react';
import { Button, TextField } from 'react-basics';
import styles from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div>
          <b>Newsletter</b>
        </div>
        <div>Stay up to date with the latest features and updates to Umami</div>
        <form className={styles.form}>
          <TextField
            className={styles.input}
            name="email"
            value={email}
            onChange={setEmail}
            placeholder="your@email.com"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
}
