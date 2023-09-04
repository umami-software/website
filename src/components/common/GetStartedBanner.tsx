import styles from './GetStartedBanner.module.css';
import LinkButton from 'components/common/LinkButton';
import { CLOUD_URL } from 'lib/constants';

export default function GetStartedBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>Are you ready for better analytics?</div>
      <div className={styles.buttons}>
        <LinkButton
          href={`${CLOUD_URL}/signup?ref=get-started-banner`}
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
