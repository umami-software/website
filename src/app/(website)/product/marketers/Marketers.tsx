'use client';
import ImageBlock from '@/components/ImageBlock';
import TextBlock from '@/components/TextBlock';
import GetStartedBanner from '@/components/GetStartedBanner';
import LinkButton from '@/components/LinkButton';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';
import ContentImage from '@/components/ContentImage';
import styles from './Marketers.module.css';

export default function Marketers() {
  const query = useQueryString({ ref: 'oravo-marketers' });

  return (
    <div className={styles.container}>
      <section>
        <ImageBlock className={styles.header}>
          <TextBlock size="lg" align="center">
            <h1>
              For <span className={styles.highlight}>marketers</span> who don’t have time but still
              need data instantly.
            </h1>
            <p>
              With real-time data instantly loading into your Oravo web analytics dashboard, the
              critical data you need to make decisions is a click away.
            </p>
            <LinkButton href={`${CLOUD_URL}/signup${query}`} size="lg" variant="primary">
              Start free trial
            </LinkButton>
          </TextBlock>
          <ContentImage src="/images/marketers.jpg" alt="" className={styles.image} />
        </ImageBlock>
      </section>
      <section className={styles.blocks}>
        <TextBlock>
          <h2>Effortless analytics</h2>
          <p>
            Instantly understand how your marketing campaigns are performing from a single window.
            No need to endlessly navigate drop-down menus for the report you’re looking for. With
            Oravo, the data you need to understand how your marketing campaigns are performing are
            all right there with no data lag.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>UTM links welcome</h2>
          <p>
            Marketers love links with UTM parameters, and so does Oravo. If you use UTM links in
            your marketing campaigns, Oravo reports on those UTM parameters. You can view which UTMs
            are being clicked in a simple report, or filter other reports using UTM parameters to
            get an even deeper understanding of how your marketing campaigns are performing.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Seriously simple installation and custom events</h2>
          <p>
            Installing Oravo for your clients is as easy as placing a single line of code in the
            &lt;head&gt; section of your HTML. No complicated, lengthy setups or data streams to
            configure. Just install, and you’re collecting data. Also, add a single code snippet to
            elements on the page you want to track as events for the easiest conversion tracking
            setup you’ve ever experienced.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Marketing attribution solved</h2>
          <p>
            Dive deeper into your website data using filters to understand which marketing campaigns
            produce outcomes. Filter and slice into custom events to have a crystal-clear picture of
            your marketing programs.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>No annoying cookie banners</h2>
          <p>
            Marketers rejoice! With Oravo, you can get rid of the opt-in cookie banner because Oravo
            does not use cookies.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Invite the whole team</h2>
          <p>
            Provide managers and executives with a clickable link to view website analytics in their
            browser without logging in. Or, create a Team within your Oravo dashboard and invite
            your fellow marketing practitioners to log into the Oravo admin to set up additional
            websites, create custom reports, and more.No messy access controls.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Supporting all your marketing tactics</h2>
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
    </div>
  );
}
