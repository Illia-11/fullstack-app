import styles from "./style.module.scss";

function Footer() {
  return <footer className={styles.footer}>
    <h1 className={styles.heading}>This is a footer</h1>
    <p className={styles.licensePar}>Our company has a license</p>
  </footer>
}

export default Footer;