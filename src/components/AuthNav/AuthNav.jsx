import { NavLink } from 'react-router-dom';
import styles from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                Register
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                Login
            </NavLink>
        </nav>
    );
};

export default AuthNav;