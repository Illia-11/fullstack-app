import styles from "./CounterPage.module.scss";
import ReduxCounter from "../../components/ReduxCounter";

const CounterPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Counter Page</h2>
      <ReduxCounter />
    </div>
  );
}

export default CounterPage;
