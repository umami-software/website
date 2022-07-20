import Community from 'components/Community';

export default function CommunityPage() {
  return (
    <article className="container">
      <header className="row justify-content-center">
        <h1>Community</h1>
        <p className="col-12 col-sm-8">
          Come join the Umami community of fellow developers, website owners, marketers and data
          explorers. Get help with issues, discuss ideas and share your feedback.
        </p>
      </header>
      <Community />
    </article>
  );
}
