'use client';
import TextBlock from '@/components/TextBlock';
import ContentImage from '@/components/ContentImage';
import X from 'assets/x.svg';
import styles from './Quotes.module.css';

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
    <div className={styles.container}>
      <TextBlock size="lg" align="center">
        <div>People love Umami</div>
      </TextBlock>
      <div className={styles.list}>
        {items.map(({ name, username, quote }) => {
          return (
            <div key={name} className={styles.card}>
              <div className={styles.pic}>
                <ContentImage src={`/images/${username}.jpg`} alt="" />
              </div>
              <div className={styles.header}>
                <div className={styles.user}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.username}>{username}</div>
                </div>
                <div className={styles.logo}>
                  <X />
                </div>
              </div>
              <div className={styles.body}>
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
