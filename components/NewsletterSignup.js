import EmailSignup from './EmailSignup';

export default function NewsletterSignup() {
  return (
    <EmailSignup type="newsletter" title="Don't miss out!" successText="Welcome to the club!">
      Join the Umami newsletter to stay up to date on the latest news, features and updates.
    </EmailSignup>
  );
}
