'use client';
import TextBlock from '@/components/TextBlock';
import styles from './Teams.module.css';

export default function Teams() {
  return (
    <section>
      <TextBlock size="md" align="center">
        <h1>Umami works for companies and teams of all sizes</h1>
      </TextBlock>
      <div className={styles.row}>
        <TextBlock size="md">
          <h2>Startup to Enterprise</h2>
          <p>
            From small startups to large enterprises, thousands of companies use Umami every day
            because it can be adapted to any website analytics use case.
          </p>
        </TextBlock>
        <TextBlock size="md">
          <h2>Run Umami Alongside Your Existing Website Analytics</h2>
          <p>
            Umami works perfectly alongside any existing website analytics platform. Use Umami as a
            second source of website analytics data to double-check key website data from your
            current website analytics solution to increase confidence in your numbers.
          </p>
        </TextBlock>
        <TextBlock size="md">
          <h2>Team Friendly</h2>
          <p>
            From marketing to sales to development and every team in between, invite your teammates
            and executives to Umami using customizable access controls. Grant admin access to your
            Umami dashboard or generate a shareable link for execs who need view-only access to
            specific dashboards.
          </p>
        </TextBlock>
      </div>
    </section>
  );
}
