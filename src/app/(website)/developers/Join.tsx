'use client';
import { GITHUB_URL } from 'lib/constants';
import SectionHeader from 'components/layout/SectionHeader';
import LinkButton from 'components/common/LinkButton';
import GitHubStats from 'app/(website)/GitHubStats';
import styles from './Join.module.css';

export default function Join() {
  return (
    <section>
      <SectionHeader className={styles.header}>
        <h1>Join the Umami developer community</h1>
      </SectionHeader>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <LinkButton href="/docs/getting-started" variant="secondary">
            Read the docs
          </LinkButton>
          <LinkButton href={GITHUB_URL} variant="secondary">
            View the source
          </LinkButton>
        </div>
      </div>
      <GitHubStats />
    </section>
  );
}
