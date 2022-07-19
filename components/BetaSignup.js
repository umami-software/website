import EmailSignup from './EmailSignup';

export default function BetaSignup() {
  return (
    <EmailSignup
      type="beta"
      title="Umami Cloud Beta"
      buttonText="Signup"
      successText="You're all set!"
    >
      Join our beta program to test out Umami Cloud for <b>free</b> before launch.
    </EmailSignup>
  );
}
