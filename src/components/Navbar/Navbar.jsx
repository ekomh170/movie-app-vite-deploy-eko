import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div
            className={styles.container}
            style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                borderRadius: '0 0 12px 12px',
                marginBottom: '1.5rem',
            }}>
            <div className={styles.navbar}>
                {/* Brand logo */}
                <div
                    className={styles.navbar__brand}
                    style={{
                        letterSpacing: '2px',
                        color: '#fff',
                        textShadow: '0 2px 8px #4cbb17',
                    }}>
                    Movie App
                </div>

                {/* Navigation links */}
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link className={styles.navbar__link} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link className={styles.navbar__link} to="/add-movie">
                            Add Movie
                        </Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link className={styles.navbar__link} to="/popular">
                            Popular
                        </Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link className={styles.navbar__link} to="/now-playing">
                            Now Playing
                        </Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link className={styles.navbar__link} to="/top-rated">
                            Top Rated
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
