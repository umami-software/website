import Community from 'components/Community';

export default function CommunityPage() {
  return (
    <article className="container">
      <header>
        <h1>Community</h1>
        <p>
          Come join the Umami community of fellow developers, users and website owners.
          <br />
          Get help with issues, discuss ideas and share your feedback.
        </p>
      </header>
      <Community />
    </article>
  );
}
