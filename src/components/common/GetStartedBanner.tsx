'use client';
import styles from './GetStartedBanner.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function GetStartedBanner() {
  const query = useQueryString({ ref: 'get-started-banner' });

  return (
    <div className={styles.banner}>
      <div className={styles.text}>Are you ready for better analytics?</div>
      <div className={styles.buttons}>
        <LinkButton
          href={`${CLOUD_URL}/signup${query}`}
          data-umami-event="get-started-banner-button"
          variant="primary"
          size="lg"
        >
          Get started
        </LinkButton>
      </div>
    </div>
  );
}
