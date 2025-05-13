import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.navbar__brand}>Movie App</div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Home</li>
                    <li className={styles.navbar__item}>Add Movie</li>
                    <li className={styles.navbar__item}>Popular</li>
                    <li className={styles.navbar__item}>Now Playing</li>
                    <li className={styles.navbar__item}>Top Rated</li>
                </ul>
            </div>
        </div>
    );
}
