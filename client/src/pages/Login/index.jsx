import LoginForm from "../../components/LoginForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login Page</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
