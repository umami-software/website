'use client';
import ImageBlock from 'components/layout/ImageBlock';
import TextBlock from 'components/layout/TextBlock';
import GetStartedBanner from 'components/common/GetStartedBanner';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';
import styles from './Agencies.module.css';

export default function Agencies() {
  const query = useQueryString({ ref: 'umami-agencies' });

  return (
    <div className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="xl" align="center">
            <h1>
              Analytics for results-driven <span className={styles.highlight}>agencies</span>.
            </h1>
            <p>
              Manage your clients&apos; website analytics from a secure and easy-to-use central
              dashboard.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <img src="https://static.umami.dev/website/images/agencies.jpg" alt="" />
        </ImageBlock>
      </section>
      <section className={styles.blocks}>
        <TextBlock>
          <h2>Manage client access</h2>
          <p>
            Ensure transparency and simplicity by inviting your clients to view their analytics from
            inside the Umami dashboard. Or, provide them with a straightforward share link for a
            hassle-free experience so they can view their analytics in a browser without needing to
            log in. There are no complicated user-access controls.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Understand what is producing outcomes for your clients</h2>
          <p>
            Stay on top of how your marketing efforts are driving outcomes for your clients. Using
            Umami as your central dashboard, log in to each of your client&apos;s websites to view
            the data and events that matter, or build a custom report to view the exact combination
            of data you want - which will make monthly reporting a breeze.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Seriously simple installation and custom events</h2>
          <p>
            Installing Umami for your clients is as easy as placing a single line of code in the
            &lt;head&gt; section of your HTML. No complicated, lengthy setups or data streams to
            configure. Just install, and you’re collecting data. Also, add a single code snippet to
            elements on the page you want to track as events for the easiest conversion tracking
            setup you’ve ever experienced.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>No annoying cookie banners</h2>
          <p>
            Your clients will love you when you tell them, “With Umami, we can get rid of the opt-in
            cookie banner” because Umami does not use cookies.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Unlimited websites</h2>
          <p>
            Umami is able to track an unlimited number of websites and sub-domains so it can scale
            with your agency regardless of how many clients you have.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Supporting all your marketing services</h2>
          <p>
            SEO / SEM
            <br />
            Site performance
            <br />
            Paid media
            <br />
            Content marketing
            <br />
            Conversion rate optimization
            <br />
            Cross-channel marketing
            <br />
          </p>
        </TextBlock>
      </section>
      <GetStartedBanner />
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://static.scarf.sh/a.png?x-pxid=fd4f6eea-aab8-4d0a-9768-dd8ea93e5c4b"
      />
    </div>
  );
}
