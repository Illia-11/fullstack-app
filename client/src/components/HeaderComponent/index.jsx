import { Link } from "react-router";
import styles from "./style.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Fullstack App</h1>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home page
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.navLink}>
            Contact page
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.navLink}>
            Information page
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
