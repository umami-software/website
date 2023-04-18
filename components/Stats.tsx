import { Row, Column } from "react-basics";
import styles from "./Stats.module.scss";

const stats = [
  { name: "Downloads", value: "4M+" },
  { name: "GitHub stars", value: "12K+" },
  { name: "Contributors", value: "150+" },
];

export default function Stats() {
  return (
    <Row className={styles.stats}>
      {stats.map(({ name, value }) => (
        <Column
          key={name}
          defaultSize={4}
          xs={12}
          sm={12}
          md={12}
          className={styles.stat}
        >
          <div className={styles.value}>{value}</div>
          <div className={styles.name}>{name}</div>
        </Column>
      ))}
    </Row>
  );
}
