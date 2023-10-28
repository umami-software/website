'use client';
import SectionHeader from 'components/layout/SectionHeader';
import LinkButton from 'components/common/LinkButton';
import Code from 'assets/code.svg';
import Cloud from 'assets/cloud.svg';
import styles from './Deploy.module.css';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function Deploy() {
  const query = useQueryString({ ref: 'umami-developers' });

  return (
    <section>
      <SectionHeader>
        <h1>Deploy in minutes</h1>
        <p>Choose the solution that is right for you.</p>
      </SectionHeader>
      <div className={styles.items}>
        <div className={styles.item}>
          <Code />
          <header>Open-source Umami</header>
          <p>Self-host Umami on your own servers. Free forever.</p>
          <LinkButton href="/docs/getting-started" variant="secondary">
            Download Umami
          </LinkButton>
        </div>
        <div className={styles.item}>
          <Cloud />
          <header>Umami Cloud</header>
          <p>High performance, fully managed Umami service.</p>
          <LinkButton href={`${CLOUD_URL}/signup${query}`} variant="primary">
            Start free trial
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
