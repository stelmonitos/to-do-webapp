import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className={styles.navwrapper}>
                <div class={styles.icon}><a href="/" class="fa fa-tasks"></a></div>
                <div className={styles.list}>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;