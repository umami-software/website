'use client';
import { Row } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import { X } from 'src/components/svg';
import SocialMedia from '@/components/SocialMedia';

const items = [
  {
    name: 'khoi',
    username: '@khoiuna',
    quote: [
      'Just set up my umami.is self-hosted analytics page. It took me less than 10 min to set up! Super simple!',
      'Great Google Analytics alternative from @umami_software!',
    ],
  },
  {
    name: 'Sylvain',
    username: '@_maoosi',
    quote: [
      `Umami (@umami_software) is my new go-to platform for analytics!`,
      `Fantastic open source product, privacy-focused, and they just released the most attractive pricing model out there for hosted analytics!`,
    ],
  },
  {
    name: 'Pauline AI',
    username: '@Pauline_Cx',
    quote: [
      `Umami should deserve more visibility`,
      `It's open source, GDPR compliant, and better than Google Analytics`,

      `Install it on @vercel, host database on @supabase and you have a complete analytics solution for your apps, for FREE.`,
    ],
  },
  {
    name: 'Abdullah Bashir',
    username: '@digitaldrreamer',
    quote: [
      `Tried Umami today for a change. The simplicity is addictive 🙃. Good enough for me. Can't wait to integrate into my project.`,
      `Oh, and the API is as simple as the UI.
      Bye bye 46kb Google analytics script 😤🏃🏃
      @umami_software 🤟🤟`,
    ],
  },
  {
    name: 'Filip @ Studio',
    username: '@filipatstudio',
    quote: [
      `Installed @umami_software on my server today for studio.dev and rectangles.dev`,
      `Easy-peasy installation. Love the docs! 💅`,
      `Nice and beautiful software fitting my needs 🤝`,
    ],
  },
  {
    name: 'Stefan Judis',
    username: '@stefanjudis',
    quote: [
      `On the weekend I set up umami.is to enable tracking that is not based on Google Analytics. It took only an hour. 👏`,
      `Thanks @umami_software for building it! 🙇‍♂️`,
    ],
  },
];

export default function Quotes() {
  return (
    <div>
      <TextBlock size="lg" align="center">
        <header>Connect</header>
        <h2>Join our community</h2>
        <p>Come share your Umami experience with our vibrant community of users and developers.</p>
      </TextBlock>
      <Row justifyContent="center" padding="6">
        <SocialMedia size="lg" />
      </Row>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5 rounded-lg auto-rows-fr max-sm:grid-cols-1 max-sm:justify-center max-sm:max-w-[100vw] max-sm:mx-auto">
        {items.map(({ name, username, quote }) => {
          return (
            <div
              key={name}
              className="text-base-1 bg-base-12 p-5 border border-border rounded-[10px] shadow-[5px_5px_0_var(--base-color-3)] flex flex-col max-sm:justify-center max-sm:max-w-[90vw] max-sm:text-xs"
            >
              <div className="flex items-center justify-between text-left gap-[10px] mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden row-[1/2] [&_img]:max-w-full [&_img]:max-h-full">
                  <ContentImage src={`/images/${username}.jpg`} alt="" />
                </div>
                <div className="flex flex-col flex-1 gap-0.5">
                  <div className="font-bold leading-[1.2]">{name}</div>
                  <div className="text-base-6 text-sm leading-[1.2]">{username}</div>
                </div>
                <div className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4">
                  <X />
                </div>
              </div>
              <div className="text-font-muted text-left text-sm flex-1 max-sm:justify-center max-sm:text-left">
                {quote.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
