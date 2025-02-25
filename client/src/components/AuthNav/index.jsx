import { NavLink, useLocation } from "react-router";
import styles from "./AuthNav.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts";
import { logout } from "../../api";

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;

const AuthNav = () => {
  const [user, setUser] = useContext(UserContext);
  
  const location = useLocation();

  const isAuthPage = location.pathname.includes("auth");
  const isLoginPage = location.pathname.includes("login");

  const authLinks = (
    <NavLink
      to={`/auth/${isLoginPage ? "registration" : "login"}`}
      className={setActive}
    >
      {isLoginPage ? "Registration" : "Login"}
    </NavLink>
  );

  const guestLinks = (
    <>
      <NavLink to="/auth/login" className={setActive}>
        Login
      </NavLink>
      <NavLink to="/auth/registration" className={setActive}>
        Register
      </NavLink>
    </>
  );

  const logoutBtn = <button onClick={() => {
    logout();
    setUser(null);
  }}>Logout</button>

  return (
    <div className={styles.container}>
      {user ? logoutBtn : isAuthPage ? authLinks : guestLinks}
    </div>
  );
};
export default AuthNav;
