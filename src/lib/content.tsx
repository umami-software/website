import Infinity from 'assets/infinity.svg';
import Teams from 'assets/teams.svg';
import Block from 'assets/block.svg';
import Feather from 'assets/feather.svg';
import Share from 'assets/share.svg';
import Lock from 'assets/lock.svg';

export const Headlines = {
  simpleAnalytics: {
    title: 'Simple analytics',
    description:
      'Umami measures just the important metrics that you care about and everything is displayed on a single, easy to browse page.',
    image: '/images/preview-website-stats.png',
  },
  visitorInsights: {
    title: 'Visitor insights',
    description: `Get detailed breakdowns about your visitors including what browser, OS and device they used.`,
    image: '/images/preview-session-stats.png',
  },
  customEvents: {
    title: 'Custom events',
    description:
      'Track more than just pageviews. Capture any event on your website like button clicks and form entries.',
    image: '/images/preview-events.png',
  },
  filters: {
    title: 'Powerful filters',
    description:
      'Dive deeper into your data using easy to apply filters. Segment your users by any metric such as browser, OS, and country.',
    image: '/images/preview-filters.png',
  },
  realtimeData: {
    title: 'Realtime data',
    description:
      'Get a realtime view of your current website traffic. See the exact pages where your visitors are landing.',
    image: '/images/preview-realtime.png',
  },
  multiLanguage: {
    title: 'Multi-language',
    description:
      'Umami has been translated into many different languages by the passionate open source community.',
    image: '/images/preview-languages.png',
  },
  mobileFriendly: {
    title: 'Mobile-friendly',
    description:
      'The Umami interface has been optimized for mobile so you can view your stats from anywhere.',
    image: '/images/preview-mobile.png',
  },
  unlimitedWebsites: {
    title: 'Unlimited websites',
    description: `Umami is able to track an unlimited number of websites from a single installation. You can even track subdomains and individual URLs.`,
    image: <Infinity />,
  },
  multipleAccounts: {
    title: 'Multiple accounts',
    description:
      'Umami can be used to host data for friends or clients. Just create a separate account and they can start tracking their own websites on their own dashboard.',
    image: <Teams />,
  },
  bypassAdBlockers: {
    title: 'Bypass ad-blockers',
    description:
      'Umami is hosted by you under your own domain so you can reliably avoid ad-blockers unlike Google Analytics.',
    image: <Block />,
  },
  lightWeight: {
    title: 'Light-weight',
    description:
      'The tracking script is tiny (only 2KB) and loads lightning fast. It will never slow down your site.',
    image: <Feather />,
  },
  shareData: {
    title: 'Easily share data',
    description:
      'You can easily share your stats with others through a secure, uniquely generated URL.',
    image: <Share />,
  },
  darkMode: {
    title: 'Dark mode',
    description: 'Dark mode included. Choose your favorite theme.',
    image: '/images/preview-darkmode.png',
  },
  maximizeValue: {
    title: 'Maximize value, minimize time',
    description: `Umami helps you onboard clients quickly and reduces time-tovalue, protecting agency margins. Implement Umami in just a few clicks and get key metrics and insights in a single page. Shareable links and reports save costly time configuring, leaving you more time for clients.`,
    image: '/images/preview-website-stats.png',
  },
  focusOnResults: {
    title: 'Focus on results, not fluff',
    description: `Umami strikes the right balance between sophistication and simplicity. Straightforward analytics with easy customized event tracking and realtime visitor insights helps you clearly communicate what matters to your clients without getting distracted by overly complex feature sets.`,
    image: '/images/preview-events.png',
  },
  protectClientCompliance: {
    title: 'Protect client compliance',
    description: `Umami's privacy-focused model ensures that you are respecting the privacy of your clients and their users. Umami does not collect any personal information, does not use cookies, does not track users across websites, and is GDPR compliant.`,
    image: <Lock />,
  },
};

export const Features = {
  visitors: {
    title: 'Visitors',
    description: '',
    image: Headlines,
  },
};
