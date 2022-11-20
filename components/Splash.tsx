import { Row, Column } from 'react-basics';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from './Splash.module.css';

export default function Splash() {
  return (
    <Row className={styles.row}>
      <Column className={styles.column} xs={0} sm={0}>
        <ParallaxBanner
          layers={[
            {
              image: '/images/intro.jpg',
              speed: -20,
            },
          ]}
          style={{ aspectRatio: '4 / 1' }}
        />
      </Column>
    </Row>
  );
}
