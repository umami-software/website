import Community from 'components/Community';

export default function CommunityPage() {
  return (
    <article className="container">
      <header className="row">
        <h1>Community</h1>
        <p className="col-12 offset-sm-2 col-sm-8">
          Come join the Umami community of fellow developers, website owners, marketers and data
          explorers. Get help with issues, discuss ideas and share your feedback.
        </p>
      </header>
      <Community />
    </article>
  );
}
