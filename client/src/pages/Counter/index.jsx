import styles from "./CounterPage.module.scss";
import Counter from "../../components/Counter";

const CounterPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Counter Page</h2>
      <Counter />
    </div>
  );
}

export default CounterPage;
