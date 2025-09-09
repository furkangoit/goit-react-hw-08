import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar.jsx";
import styles from "./Layout.module.css";

const Layout = () => (
    <div className={styles.layout}>
        <AppBar />
        <main className={styles.main}>
            <Outlet />
        </main>
    </div>
);

export default Layout;