import styles from "./NavBar.module.scss";
const NavBar = () => {
    return (
        <nav>
            <div className={styles.navwrapper}>
                <div class={styles.icon}><a href="/" class="fa fa-tasks"></a></div>
                <div className={styles.list}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;