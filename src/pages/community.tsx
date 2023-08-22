import { NextPage } from 'next';
import Community from 'components/pages/community/Community';

const CommunityPage: NextPage = () => {
  return (
    <article>
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
};

export default CommunityPage;
