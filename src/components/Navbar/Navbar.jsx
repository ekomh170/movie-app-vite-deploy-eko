import { Link } from 'react-router';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                {/* Brand logo */}
                <div className={styles.navbar__brand}>Movie App</div>
                {/* Add your navigation links here */}
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/add-movie">Add Movie</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/popular">Popular</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/now-playing">Now Playing</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/top-rated">Top Rated</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
