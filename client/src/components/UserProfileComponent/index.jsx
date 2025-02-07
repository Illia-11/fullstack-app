import styles from "./style.module.scss";

function UserProfile(props) {
  const {
    userData: { id, firstName, lastName, imgSrc, isMale, email, password },
  } = props;

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className={styles.container}>
      <article className={styles.userContainer}>
        <h2 className={styles.userInfo}>{fullName}</h2>
        <img src={imgSrc} alt={fullName} className={styles.userImg} />
        <ul>
          <li>
            <h3 className={styles.userInfo}>Id: {id}</h3>
          </li>
          <li>
            <p className={styles.userInfo}>
              Gender: {isMale ? "Male" : "Female"}
            </p>
          </li>
          <li>
            <p className={styles.userInfo}>Email: {email}</p>
          </li>
          <li>
            <p className={styles.userInfo}>Password: {password}</p>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default UserProfile;
