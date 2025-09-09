import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className={styles.userMenu}>
            <p className={styles.welcome}>Welcome, {name}!</p>
            <button
                onClick={handleLogout}
                className={styles.logoutBtn}
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu;