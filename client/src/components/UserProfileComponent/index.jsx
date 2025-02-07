import styles from "./style.module.scss";

function UserProfile(props) {
  const {
    userData: { id, firstName, lastName, imgSrc, isMale, email, password },
  } = props;

  return (
    <div className={styles.userContainer}>
      <img src={imgSrc} alt="user image" className={styles.userImg} />
      <h3 className={styles.userInfo}>
        Full name: {`${firstName} ${lastName}`}
      </h3>
      <h3 className={styles.userInfo}>Id: {id}</h3>
      <p className={styles.userInfo}>Gender: {isMale ? "Male" : "Female"}</p>
      <p className={styles.userInfo}>Email: {email}</p>
      <p className={styles.userInfo}>Password: {password}</p>
    </div>
  );
}

export default UserProfile;
